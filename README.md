# Abdulmajeed’s Room Monitoring Dashboard — لوحة تحكم لمراقبة الغرفة

## 📌 Overview | نظرة عامة
Abdulmajeed’s Room Monitoring Dashboard is a **real-time web interface** for monitoring a room’s sensors (temperature, humidity, light, and door status).  
The system uses **Firebase Realtime Database** to fetch sensor data from an ESP32-based IoT setup, and provides **interactive charts, multi-language support (Arabic/English), light/dark mode**, and **Telegram bot alerts** in security mode.  

لوحة تحكم تفاعلية **لمراقبة الغرفة لحظياً**، تعرض بيانات الحساسات (درجة الحرارة، الرطوبة، الإضاءة، وحالة الباب).  
يعتمد النظام على **Firebase Realtime Database** لاستقبال بيانات الحساسات المرسلة من ESP32، مع توفير **رسوم بيانية تفاعلية، دعم تعدد اللغات (عربي/إنجليزي)، الوضع الليلي/النهاري**، بالإضافة إلى **تنبيهات Telegram** في وضع الأمان.

---

## ✨ Features | المميزات
- 🌡️ **Temperature Monitoring** — عرض درجة الحرارة بشكل لحظي.  
- 💧 **Humidity Monitoring** — عرض الرطوبة بالنسبة المئوية.  
- 💡 **Light Levels** — تحليل شدة الإضاءة (Dim, Normal, Bright).  
- 🚪 **Door Status** — كشف حالة الباب (مفتوح، مغلق، خطأ في المستشعر).  
- 📊 **Charts** — رسومات بيانية مباشرة باستخدام `<canvas>`.  
- 🌙 **Light/Dark Mode** — التبديل بين الوضعين بضغطة زر.  
- 🌍 **Multi-language (AR/EN)** — واجهة كاملة باللغتين.  
- 🔔 **Security Mode** — تنبيهات تلقائية عند تغيير حالة الباب أو الإضاءة.  
- 🤖 **Telegram Bot Integration** — استقبال إشعارات لحظية عبر Telegram.  
- 📱 **Responsive Design** — واجهة متكيفة مع الجوال، التابلت، والكمبيوتر.  

---

## 🛠️ Technologies Used | التقنيات المستخدمة
- **ESP32** — لقراءة بيانات المستشعرات (DHT11, LDR, Ultrasonic).  
- **Firebase Realtime Database** — لتخزين ومزامنة البيانات.  
- **HTML, CSS, JavaScript** — لبناء واجهة المستخدم والرسوم البيانية.  
- **Telegram Bot API** — لإرسال التنبيهات.  

---

## 📂 Project Structure | هيكلية المشروع



├── index.html # الهيكل الأساسي للواجهة

├── styles.css # التنسيقات (Light/Dark mode + Responsive design)


├── script.js # المنطق الرئيسي (Firebase + Charts + UI)


└── telegram.js # إرسال التنبيهات إلى Telegram


---

## ⚙️ Setup & Usage | الإعداد والاستخدام

### 1️⃣ Requirements | المتطلبات
- حساب **Firebase** + Realtime Database مفعل.  
- جهاز **ESP32** متصل بحساسات: DHT11 (حرارة/رطوبة)، LDR (إضاءة)، Ultrasonic (باب).  
- **Telegram Bot Token** + **Chat ID** (اختياري للتنبيهات).  

### 2️⃣ Firebase Setup | إعداد Firebase
- أنشئ مشروع Firebase جديد.  
- فعّل **Realtime Database** (وضع Test مؤقتاً للتجربة).  
- انسخ **Firebase Config** وضعه داخل `script.js` في مكان:  
  ```js
  const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  };


3️⃣ ESP32 Code | برمجة ESP32
ارفع كود ESP32 بحيث يرسل البيانات إلى:
/Users/<UID>/readings/{timestamp}

مع الحقول:

temperature

humidity

ldr

distance_cm

timestamp

4️⃣ Telegram Alerts | تنبيهات Telegram (اختياري)

أنشئ بوت عبر @BotFather
.

انسخ BOT_TOKEN وضعه في telegram.js:

BOT_TOKEN: "YOUR_BOT_TOKEN"
CHAT_ID: "YOUR_CHAT_ID"

5️⃣ Run the Dashboard | تشغيل اللوحة

افتح الملف index.html مباشرة في متصفح حديث.

اختر اللغة (عربي/إنجليزي) و الوضع (نهاري/ليلي).

تابع بيانات الحساسات لحظياً عبر الرسوم البيانية.

ستصل إشعارات Telegram (إن تم تفعيلها).

Author | المطور

Developed by Abdulmajeed Alshammari .
