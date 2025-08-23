#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "DHT.h"

// --- إعدادات WiFi ---
#define WIFI_SSID "Mj"
#define WIFI_PASSWORD "Majeed77"

// --- إعدادات Firebase ---
#define API_KEY "AIzaSyCNBU0x6NQn9vhUbJa78nHAPXOzZh85p80"
#define DATABASE_URL "https://my-room-8f328-default-rtdb.firebaseio.com/"

// --- بيانات المستخدم ---
#define USER_EMAIL "test@gmail.com"
#define USER_PASSWORD "123456"
String userUID = "XjMYPsQpMVXEiCQYecoBBR8Sxto1";

// --- إعدادات الحساسات ---
#define DHTPIN 15
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

#define LDR_PIN 34

#define TRIG_PIN 5
#define ECHO_PIN 18

// --- Firebase objects ---
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long previousMillis = 0;
const long interval = 100; 

long readUltrasonicDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH, 30000); // timeout 30ms
  long distanceCm = duration / 29 / 2;

  if (duration == 0) return -1; // لا استجابة من الحساس
  else return distanceCm;
}

void setup() {
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("\nWiFi connected");

  dht.begin();

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  // إعداد Firebase
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  unsigned long currentMillis = millis();
  if ((currentMillis - previousMillis >= interval) && Firebase.ready()) {
    previousMillis = currentMillis;

    float temperature = dht.readTemperature();
    float humidity = dht.readHumidity();
    int ldrValue = analogRead(LDR_PIN);
    long distance = readUltrasonicDistance();

    if (isnan(temperature) || isnan(humidity)) {
      Serial.println("Failed to read from DHT sensor!");
      return;
    }

    Serial.printf("Temp: %.1f °C, Humidity: %.1f %%, LDR: %d, Distance: %ld cm\n", temperature, humidity, ldrValue, distance);

    String basePath = "/Users/" + userUID;

    if (Firebase.RTDB.setFloat(&fbdo, basePath + "/temperature", temperature)) {
      Serial.println("Temperature sent");
    } else {
      Serial.print("Failed to send temperature: ");
      Serial.println(fbdo.errorReason());
    }

    if (Firebase.RTDB.setFloat(&fbdo, basePath + "/humidity", humidity)) {
      Serial.println("Humidity sent");
    } else {
      Serial.print("Failed to send humidity: ");
      Serial.println(fbdo.errorReason());
    }

    if (Firebase.RTDB.setInt(&fbdo, basePath + "/ldr", ldrValue)) {
      Serial.println("LDR sent");
    } else {
      Serial.print("Failed to send LDR: ");
      Serial.println(fbdo.errorReason());
    }

    if (distance != -1) {
      if (Firebase.RTDB.setInt(&fbdo, basePath + "/distance_cm", distance)) {
        Serial.println("Distance sent");
      } else {
        Serial.print("Failed to send distance: ");
        Serial.println(fbdo.errorReason());
      }
    } else {
      Serial.println("Ultrasonic sensor no response");
    }
  }
}
