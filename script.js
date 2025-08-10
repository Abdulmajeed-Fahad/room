// ===== FIREBASE CONFIGURATION =====
const firebaseConfig = {
    apiKey: "AIzaSyCNBU0x6NQn9vhUbJa78nHAPXOzZh85p80",
    authDomain: "my-room-8f328.firebaseapp.com",
    databaseURL: "https://my-room-8f328-default-rtdb.firebaseio.com",
    projectId: "my-room-8f328",
    storageBucket: "my-room-8f328.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ===== DASHBOARD CONFIGURATION =====
const CONFIG = {
    CLOCK_UPDATE_INTERVAL: 1000,
    CHART_UPDATE_INTERVAL: 2000,
    CHART_MAX_POINTS: 20,
    CHART_PADDING: 40,
    CHART_GRID_LINES: 5,
    USER_UID: "XjMYPsQpMVXEiCQYecoBBR8Sxto1",
    TEMPERATURE: { HIGH: 30, LOW: 18 },
    HUMIDITY: { HIGH: 70, LOW: 30 },
    LIGHT: { 
        NONE: 500, 
        DIM: 1500, 
        MEDIUM: 2500, 
        BRIGHT: 3500 
    },
    DOOR: {
        BASE_DISTANCE: 120,
        ERROR_MARGIN: 10,
        MIN_CLOSED: 110,
        MAX_CLOSED: 130
    },
    ALERT_AUTO_HIDE_DELAY: 5000,
    MAX_EVENTS: 50,
    CONNECTION_TIMEOUT: 10000,
    STORAGE_KEYS: {
        LANGUAGE: 'dashboard-language',
        THEME: 'dashboard-theme',
        MODE: 'dashboard-mode',
        SENSOR_DATA: 'dashboard-sensor-data',
        CHART_DATA: 'dashboard-chart-data',
        EVENTS: 'dashboard-events',
        ALERTS: 'dashboard-alerts'
    },
    DEFAULTS: {
        LANGUAGE: 'ar',
        THEME: 'light',
        MODE: 'normal'
    }
};

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
    ar: {
        welcome: 'أهلاً',
        dashboard_title: 'لوحة مراقبة غرفة عبدالمجيد',
        normal_mode: 'الوضع العادي',
        security_mode: 'وضع الأمان',
        normal_status: 'الوضع العادي نشط',
        security_status: 'وضع الأمان نشط - جاري المراقبة',
        temperature: 'درجة الحرارة',
        humidity: 'الرطوبة',
        light: 'الإضاءة',
        door: 'حالة الباب',
        celsius: '°م',
        percent: '%',
        live: 'مباشر',
        offline: 'غير متصل',
        connected: 'متصل',
        connecting: 'جاري الاتصال',
        disconnected: 'منقطع',
        // Light levels
        light_none: 'لا يوجد ضوء',
        light_dim: 'ضوء خفيف',
        light_medium: 'ضوء متوسط',
        light_bright: 'ضوء قوي',
        light_very_bright: 'ضوء ساطع جداً',
        // Door status
        door_closed: 'الباب مغلق',
        door_open: 'الباب مفتوح',
        door_sensor_error: 'حساس المسافة لا يستجيب',
        // Events
        temp_high: 'درجة حرارة مرتفعة',
        temp_low: 'درجة حرارة منخفضة',
        humidity_high: 'رطوبة مرتفعة',
        humidity_low: 'رطوبة منخفضة',
        light_changed: 'تغيير في الإضاءة',
        door_opened: 'تم فتح الباب',
        door_closed_event: 'تم إغلاق الباب',
        sensor_error: 'خطأ في الحساس',
        events_log: 'سجل الأحداث',
        security_alert: 'تنبيه أمني',
        clear_alerts: 'مسح الكل',
        no_events: 'لا توجد أحداث مسجلة',
        no_alerts: 'لا توجد تنبيهات نشطة',
        charts_title: 'الرسوم البيانية',
        temperature_chart: 'درجة الحرارة',
        humidity_chart: 'الرطوبة',
        light_chart: 'الإضاءة',
        door_chart: 'حالة الباب',
        high: 'عالي',
        medium: 'متوسط',
        low: 'منخفض',
        connection_lost: 'انقطع الاتصال مع Firebase',
        data_updated: 'تم تحديث البيانات',
        data_restored: 'تم استعادة البيانات المحفوظة',
        data_saved: 'تم حفظ البيانات محلياً'
    },
    en: {
        welcome: 'Welcome',
        dashboard_title: 'Abdulmajeed\'s Room Monitoring Dashboard',
        normal_mode: 'Normal Mode',
        security_mode: 'Security Mode',
        normal_status: 'Normal mode active',
        security_status: 'Security mode active - Monitoring',
        temperature: 'Temperature',
        humidity: 'Humidity',
        light: 'Light',
        door: 'Door Status',
        celsius: '°C',
        percent: '%',
        live: 'Live',
        offline: 'Offline',
        connected: 'Connected',
        connecting: 'Connecting',
        disconnected: 'Disconnected',
        // Light levels
        light_none: 'No Light',
        light_dim: 'Dim Light',
        light_medium: 'Medium Light',
        light_bright: 'Bright Light',
        light_very_bright: 'Very Bright Light',
        // Door status
        door_closed: 'Door Closed',
        door_open: 'Door Open',
        door_sensor_error: 'Distance Sensor Not Responding',
        // Events
        temp_high: 'High temperature detected',
        temp_low: 'Low temperature detected',
        humidity_high: 'High humidity detected',
        humidity_low: 'Low humidity detected',
        light_changed: 'Light level changed',
        door_opened: 'Door opened',
        door_closed_event: 'Door closed',
        sensor_error: 'Sensor Error',
        events_log: 'Events Log',
        security_alert: 'Security Alert',
        clear_alerts: 'Clear All',
        no_events: 'No events recorded',
        no_alerts: 'No active alerts',
        charts_title: 'Charts',
        temperature_chart: 'Temperature',
        humidity_chart: 'Humidity',
        light_chart: 'Light',
        door_chart: 'Door Status',
        high: 'High',
        medium: 'Medium',
        low: 'Low',
        connection_lost: 'Connection lost to Firebase',
        data_updated: 'Data updated',
        data_restored: 'Saved data restored',
        data_saved: 'Data saved locally'
    }
};

// ===== DASHBOARD STATE =====
const DASHBOARD_STATE = {
    currentLanguage: localStorage.getItem(CONFIG.STORAGE_KEYS.LANGUAGE) || CONFIG.DEFAULTS.LANGUAGE,
    currentTheme: localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || CONFIG.DEFAULTS.THEME,
    currentMode: localStorage.getItem(CONFIG.STORAGE_KEYS.MODE) || CONFIG.DEFAULTS.MODE,
    isConnected: false,
    connectionStatus: 'connecting',
    lastDataUpdate: null,
    sensorData: {
        temperature: null,
        humidity: null,
        ldr: null,
        distance_cm: null,
        timestamp: null
    },
    previousSensorData: {
        temperature: null,
        humidity: null,
        ldr: null,
        distance_cm: null
    },
    events: [],
    alerts: [],
    chartData: {
        temperature: [],
        humidity: [],
        light: [],
        door: []
    },
    historicalData: {
        temperature: [],
        humidity: [],
        light: [],
        door: []
    },
    intervals: {
        clock: null,
        charts: null,
        dataSave: null
    },
    firebaseRefs: {
        temperature: null,
        humidity: null,
        ldr: null,
        distance: null,
        readings: null
    }
};

// ===== UTILITY FUNCTIONS =====
function t(key) {
    return TRANSLATIONS[DASHBOARD_STATE.currentLanguage][key] || key;
}

function formatTime(date) {
    return date.toLocaleTimeString(
        DASHBOARD_STATE.currentLanguage === 'ar' ? 'ar-SA' : 'en-US',
        {
            hour: '2-digit',
            minute: '2-digit',
            hour12: DASHBOARD_STATE.currentLanguage === 'en'
        }
    );
}

function updateElement(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

function logMessage(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
}

// ===== DATA PERSISTENCE FUNCTIONS =====
function saveDataToStorage() {
    try {
        // Save sensor data
        localStorage.setItem(CONFIG.STORAGE_KEYS.SENSOR_DATA, JSON.stringify(DASHBOARD_STATE.sensorData));
        
        // Save chart data
        localStorage.setItem(CONFIG.STORAGE_KEYS.CHART_DATA, JSON.stringify(DASHBOARD_STATE.historicalData));
        
        // Save events (limit to last 20)
        const eventsToSave = DASHBOARD_STATE.events.slice(0, 20);
        localStorage.setItem(CONFIG.STORAGE_KEYS.EVENTS, JSON.stringify(eventsToSave));
        
        // Save alerts
        localStorage.setItem(CONFIG.STORAGE_KEYS.ALERTS, JSON.stringify(DASHBOARD_STATE.alerts));
        
        logMessage(t('data_saved'), 'success');
    } catch (error) {
        logMessage(`Storage save error: ${error.message}`, 'error');
    }
}

function loadDataFromStorage() {
    try {
        // Load sensor data
        const savedSensorData = localStorage.getItem(CONFIG.STORAGE_KEYS.SENSOR_DATA);
        if (savedSensorData) {
            DASHBOARD_STATE.sensorData = JSON.parse(savedSensorData);
        }
        
        // Load chart data
        const savedChartData = localStorage.getItem(CONFIG.STORAGE_KEYS.CHART_DATA);
        if (savedChartData) {
            const parsedData = JSON.parse(savedChartData);
            // Convert timestamp strings back to Date objects
            Object.keys(parsedData).forEach(key => {
                if (parsedData[key] && Array.isArray(parsedData[key])) {
                    parsedData[key] = parsedData[key].map(item => ({
                        ...item,
                        timestamp: new Date(item.timestamp)
                    }));
                }
            });
            DASHBOARD_STATE.historicalData = parsedData;
        }
        
        // Load events
        const savedEvents = localStorage.getItem(CONFIG.STORAGE_KEYS.EVENTS);
        if (savedEvents) {
            DASHBOARD_STATE.events = JSON.parse(savedEvents).map(event => ({
                ...event,
                timestamp: new Date(event.timestamp)
            }));
        }
        
        // Load alerts
        const savedAlerts = localStorage.getItem(CONFIG.STORAGE_KEYS.ALERTS);
        if (savedAlerts) {
            DASHBOARD_STATE.alerts = JSON.parse(savedAlerts).map(alert => ({
                ...alert,
                timestamp: new Date(alert.timestamp)
            }));
        }
        
        // Update UI with restored data
        updateAllSensorCards();
        renderCharts();
        updateEventsDisplay();
        updateAlertsDisplay();
        
        logMessage(t('data_restored'), 'success');
        return true;
    } catch (error) {
        logMessage(`Storage load error: ${error.message}`, 'error');
        return false;
    }
}

// ===== LIGHT LEVEL FUNCTIONS =====
function getLightLevel(ldrValue) {
    if (ldrValue <= CONFIG.LIGHT.NONE) {
        return {
            text: t('light_none'),
            class: 'none',
            color: '#1e40af'
        };
    } else if (ldrValue <= CONFIG.LIGHT.DIM) {
        return {
            text: t('light_dim'),
            class: 'dim',
            color: '#3b82f6'
        };
    } else if (ldrValue <= CONFIG.LIGHT.MEDIUM) {
        return {
            text: t('light_medium'),
            class: 'medium',
            color: '#10b981'
        };
    } else if (ldrValue <= CONFIG.LIGHT.BRIGHT) {
        return {
            text: t('light_bright'),
            class: 'bright',
            color: '#f59e0b'
        };
    } else {
        return {
            text: t('light_very_bright'),
            class: 'very_bright',
            color: '#ea580c'
        };
    }
}

// ===== DOOR STATUS FUNCTIONS =====
function getDoorStatus(distance) {
    if (distance === null || distance === -1) {
        return {
            text: t('door_sensor_error'),
            class: 'error',
            color: '#64748b',
            icon: '⚠️'
        };
    }
    
    if (distance >= CONFIG.DOOR.MIN_CLOSED && distance <= CONFIG.DOOR.MAX_CLOSED) {
        return {
            text: t('door_closed'),
            class: 'closed',
            color: '#10b981',
            icon: '🚪'
        };
    } else {
        return {
            text: t('door_open'),
            class: 'open',
            color: '#ef4444',
            icon: '🔓'
        };
    }
}

// ===== FIREBASE CONNECTION MANAGEMENT =====
function initializeFirebaseListeners() {
    logMessage('🔥 Initializing Firebase listeners...', 'info');
    
    const basePath = `/Users/${CONFIG.USER_UID}`;
    
    // Live data listeners for real-time display
    DASHBOARD_STATE.firebaseRefs.temperature = database.ref(`${basePath}/temperature`);
    DASHBOARD_STATE.firebaseRefs.temperature.on('value', (snapshot) => {
        const value = snapshot.val();
        if (value !== null) {
            DASHBOARD_STATE.sensorData.temperature = parseFloat(value);
            updateConnectionStatus('connected');
            logMessage(`🌡️ Temperature updated: ${value}°C`, 'success');
            processSensorData();
            saveDataToStorage();
        }
    }, (error) => {
        logMessage(`Temperature listener error: ${error.message}`, 'error');
        updateConnectionStatus('disconnected');
    });

    DASHBOARD_STATE.firebaseRefs.humidity = database.ref(`${basePath}/humidity`);
    DASHBOARD_STATE.firebaseRefs.humidity.on('value', (snapshot) => {
        const value = snapshot.val();
        if (value !== null) {
            DASHBOARD_STATE.sensorData.humidity = parseFloat(value);
            updateConnectionStatus('connected');
            logMessage(`💧 Humidity updated: ${value}%`, 'success');
            processSensorData();
            saveDataToStorage();
        }
    }, (error) => {
        logMessage(`Humidity listener error: ${error.message}`, 'error');
        updateConnectionStatus('disconnected');
    });

    DASHBOARD_STATE.firebaseRefs.ldr = database.ref(`${basePath}/ldr`);
    DASHBOARD_STATE.firebaseRefs.ldr.on('value', (snapshot) => {
        const value = snapshot.val();
        if (value !== null) {
            DASHBOARD_STATE.sensorData.ldr = parseInt(value);
            updateConnectionStatus('connected');
            logMessage(`💡 Light updated: ${value}`, 'success');
            processSensorData();
            saveDataToStorage();
        }
    }, (error) => {
        logMessage(`LDR listener error: ${error.message}`, 'error');
        updateConnectionStatus('disconnected');
    });

    DASHBOARD_STATE.firebaseRefs.distance = database.ref(`${basePath}/distance_cm`);
    DASHBOARD_STATE.firebaseRefs.distance.on('value', (snapshot) => {
        const value = snapshot.val();
        if (value !== null) {
            DASHBOARD_STATE.sensorData.distance_cm = parseInt(value);
            updateConnectionStatus('connected');
            logMessage(`📏 Distance updated: ${value}cm`, 'success');
            processSensorData();
            saveDataToStorage();
        }
    }, (error) => {
        logMessage(`Distance listener error: ${error.message}`, 'error');
        updateConnectionStatus('disconnected');
    });

    // Historical data listener for charts
    DASHBOARD_STATE.firebaseRefs.readings = database.ref(`${basePath}/readings`);
    DASHBOARD_STATE.firebaseRefs.readings.limitToLast(CONFIG.CHART_MAX_POINTS).on('value', (snapshot) => {
        const readings = snapshot.val();
        if (readings) {
            updateHistoricalData(readings);
            renderCharts();
            saveDataToStorage();
            logMessage('📊 Historical data updated for charts', 'success');
        }
    }, (error) => {
        logMessage(`Historical data listener error: ${error.message}`, 'error');
    });

    // Connection state listener
    const connectedRef = database.ref('.info/connected');
    connectedRef.on('value', (snapshot) => {
        if (snapshot.val() === true) {
            updateConnectionStatus('connected');
            logMessage('🔗 Firebase connected', 'success');
        } else {
            updateConnectionStatus('disconnected');
            logMessage('🔗 Firebase disconnected', 'error');
        }
    });
}

function updateHistoricalData(readings) {
    const tempData = [];
    const humidityData = [];
    const lightData = [];
    const doorData = [];
    
    Object.keys(readings).sort().forEach(timestamp => {
        const reading = readings[timestamp];
        const time = new Date(parseInt(timestamp) * 1000);
        
        if (reading.temperature !== undefined) {
            tempData.push({ value: reading.temperature, timestamp: time });
        }
        if (reading.humidity !== undefined) {
            humidityData.push({ value: reading.humidity, timestamp: time });
        }
        if (reading.ldr !== undefined) {
            lightData.push({ value: reading.ldr, timestamp: time });
        }
        if (reading.distance_cm !== undefined) {
            const doorStatus = getDoorStatus(reading.distance_cm);
            // Simplified door chart: only show open (1) or closed (0)
            const doorValue = doorStatus.class === 'open' ? 1 : doorStatus.class === 'closed' ? 0 : 0.5;
            doorData.push({ value: doorValue, timestamp: time });
        }
    });
    
    DASHBOARD_STATE.historicalData = {
        temperature: tempData,
        humidity: humidityData,
        light: lightData,
        door: doorData
    };
}

function updateConnectionStatus(status) {
    DASHBOARD_STATE.connectionStatus = status;
    DASHBOARD_STATE.isConnected = status === 'connected';
    DASHBOARD_STATE.lastDataUpdate = new Date();
    
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    
    if (statusIndicator && statusText) {
        statusIndicator.className = `status-indicator ${status}`;
        statusText.textContent = t(status);
    }
    
    // Update all live indicators across all sensor cards
    updateLiveIndicators();
    updateAllSensorCards();
}

// ===== SENSOR DATA PROCESSING =====
function processSensorData() {
    const currentData = DASHBOARD_STATE.sensorData;
    const previousData = DASHBOARD_STATE.previousSensorData;
    
    // Check for significant changes and create events
    checkForSensorEvents(currentData, previousData);
    
    // Update previous data
    DASHBOARD_STATE.previousSensorData = { ...currentData };
    
    // Update UI
    updateAllSensorCards();
}

function checkForSensorEvents(current, previous) {
    const now = new Date();
    
    // Temperature events
    if (previous.temperature !== null && current.temperature !== null) {
        const tempDiff = Math.abs(current.temperature - previous.temperature);
        if (tempDiff > 3) {
            createEvent({
                type: 'temperature',
                message: current.temperature > CONFIG.TEMPERATURE.HIGH ? t('temp_high') : 
                         current.temperature < CONFIG.TEMPERATURE.LOW ? t('temp_low') : 
                         `${t('temperature')}: ${current.temperature.toFixed(1)}${t('celsius')}`,
                timestamp: now,
                severity: current.temperature > CONFIG.TEMPERATURE.HIGH || current.temperature < CONFIG.TEMPERATURE.LOW ? 'high' : 'medium',
                icon: '🌡️'
            });
        }
    }
    
    // Humidity events
    if (previous.humidity !== null && current.humidity !== null) {
        const humidityDiff = Math.abs(current.humidity - previous.humidity);
        if (humidityDiff > 15) {
            createEvent({
                type: 'humidity',
                message: current.humidity > CONFIG.HUMIDITY.HIGH ? t('humidity_high') : 
                         current.humidity < CONFIG.HUMIDITY.LOW ? t('humidity_low') : 
                         `${t('humidity')}: ${current.humidity.toFixed(1)}${t('percent')}`,
                timestamp: now,
                severity: current.humidity > CONFIG.HUMIDITY.HIGH ? 'high' : 'medium',
                icon: '💧'
            });
        }
    }
    
    // Light events
    if (previous.ldr !== null && current.ldr !== null) {
        const lightDiff = Math.abs(current.ldr - previous.ldr);
        if (lightDiff > 200) {
            const lightLevel = getLightLevel(current.ldr);
            createEvent({
                type: 'light',
                message: `${t('light_changed')}: ${lightLevel.text}`,
                timestamp: now,
                severity: 'low',
                icon: '💡'
            });
        }
    }
    
    // Door events
    if (previous.distance_cm !== null && current.distance_cm !== null) {
        const prevDoorStatus = getDoorStatus(previous.distance_cm);
        const currentDoorStatus = getDoorStatus(current.distance_cm);
        
        if (prevDoorStatus.class !== currentDoorStatus.class) {
            const severity = currentDoorStatus.class === 'open' && DASHBOARD_STATE.currentMode === 'security' ? 'high' : 'medium';
            
            createEvent({
                type: 'door',
                message: currentDoorStatus.class === 'open' ? t('door_opened') : 
                         currentDoorStatus.class === 'closed' ? t('door_closed_event') : 
                         t('door_sensor_error'),
                timestamp: now,
                severity: severity,
                icon: currentDoorStatus.icon
            });
        }
    }
}

// ===== SENSOR CARD UPDATES =====
function updateAllSensorCards() {
    updateTemperatureCard();
    updateHumidityCard();
    updateLightCard();
    updateDoorCard();
}

function updateLiveIndicators() {
    const liveTexts = ['tempLiveText', 'humidityLiveText', 'lightLiveText', 'doorLiveText'];
    const pulseDots = ['tempPulseDot', 'humidityPulseDot', 'lightPulseDot', 'doorPulseDot'];
    
    liveTexts.forEach(id => {
        updateElement(id, DASHBOARD_STATE.isConnected ? t('live') : t('offline'));
    });
    
    pulseDots.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.className = DASHBOARD_STATE.isConnected ? 'pulse-dot' : 'pulse-dot offline';
        }
    });
}

function updateTemperatureCard() {
    const card = document.getElementById('temperatureCard');
    const value = document.getElementById('temperatureValue');
    const temp = DASHBOARD_STATE.sensorData.temperature;
    
    if (temp === null || !DASHBOARD_STATE.isConnected) {
        value.textContent = `-- ${t('celsius')}`;
        card.className = 'sensor-card offline';
        value.className = 'sensor-value offline';
        return;
    }
    
    value.textContent = `${temp.toFixed(1)}${t('celsius')}`;
    
    card.className = 'sensor-card';
    value.className = 'sensor-value';
    
    if (temp > CONFIG.TEMPERATURE.HIGH) {
        card.classList.add('danger');
        value.classList.add('danger');
    } else if (temp < CONFIG.TEMPERATURE.LOW) {
        card.classList.add('warning');
        value.classList.add('warning');
    } else {
        card.classList.add('normal');
        value.classList.add('normal');
    }
}

function updateHumidityCard() {
    const card = document.getElementById('humidityCard');
    const value = document.getElementById('humidityValue');
    const humidity = DASHBOARD_STATE.sensorData.humidity;
    
    if (humidity === null || !DASHBOARD_STATE.isConnected) {
        value.textContent = `-- ${t('percent')}`;
        card.className = 'sensor-card offline';
        value.className = 'sensor-value offline';
        return;
    }
    
    value.textContent = `${humidity.toFixed(1)}${t('percent')}`;
    
    card.className = 'sensor-card';
    value.className = 'sensor-value';
    
    if (humidity > CONFIG.HUMIDITY.HIGH) {
        card.classList.add('danger');
        value.classList.add('danger');
    } else if (humidity < CONFIG.HUMIDITY.LOW) {
        card.classList.add('warning');
        value.classList.add('warning');
    } else {
        card.classList.add('normal');
        value.classList.add('normal');
    }
}

function updateLightCard() {
    const card = document.getElementById('lightCard');
    const value = document.getElementById('lightValue');
    const light = DASHBOARD_STATE.sensorData.ldr;
    
    if (light === null || !DASHBOARD_STATE.isConnected) {
        value.textContent = `-- ${t('light')}`;
        card.className = 'sensor-card offline';
        value.className = 'sensor-value offline';
        return;
    }
    
    const lightLevel = getLightLevel(light);
    value.textContent = `${lightLevel.text} (${light})`;
    
    card.className = `sensor-card light-${lightLevel.class}`;
    value.className = `sensor-value light-${lightLevel.class}`;
    value.style.color = lightLevel.color;
}

function updateDoorCard() {
    const card = document.getElementById('doorCard');
    const value = document.getElementById('doorValue');
    const icon = document.getElementById('doorIcon');
    const distance = DASHBOARD_STATE.sensorData.distance_cm;
    
    if (!DASHBOARD_STATE.isConnected) {
        value.textContent = `-- ${t('door')}`;
        card.className = 'sensor-card offline';
        value.className = 'sensor-value offline';
        return;
    }
    
    const doorStatus = getDoorStatus(distance);
    value.textContent = doorStatus.text;
    
    card.className = `sensor-card door-${doorStatus.class}`;
    value.className = `sensor-value door-${doorStatus.class}`;
    value.style.color = doorStatus.color;
    
    // Update icon based on door status
    if (doorStatus.class === 'closed') {
        icon.innerHTML = '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><circle cx="8" cy="14" r="1"/>';
    } else if (doorStatus.class === 'open') {
        icon.innerHTML = '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>';
    } else {
        icon.innerHTML = '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>';
    }
}

// ===== CHART MANAGEMENT =====
function renderCharts() {
    drawChart('temperatureChart', DASHBOARD_STATE.historicalData.temperature, '#ef4444', t('celsius'));
    drawChart('humidityChart', DASHBOARD_STATE.historicalData.humidity, '#3b82f6', t('percent'));
    drawChart('lightChart', DASHBOARD_STATE.historicalData.light, '#f59e0b', '');
    drawChart('doorChart', DASHBOARD_STATE.historicalData.door, '#10b981', '');
}

function drawChart(canvasId, data, color, unit) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || data.length === 0) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const width = rect.width;
    const height = rect.height;
    
    ctx.clearRect(0, 0, width, height);
    
    const padding = CONFIG.CHART_PADDING;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    const values = data.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue || 1;
    
    const isDark = DASHBOARD_STATE.currentTheme === 'dark';
    
    // Draw background
    ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = isDark ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    
    for (let i = 0; i <= CONFIG.CHART_GRID_LINES; i++) {
        const y = padding + (chartHeight * i) / CONFIG.CHART_GRID_LINES;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    const verticalLines = Math.min(10, Math.max(5, Math.floor(chartWidth / 50)));
    for (let i = 0; i <= verticalLines; i++) {
        const x = padding + (chartWidth * i) / verticalLines;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
    }
    
    ctx.setLineDash([]);
    
    // Draw data line
    if (data.length >= 2) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + (chartWidth * index) / (data.length - 1);
            const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
    }
    
    // Draw data points
    ctx.fillStyle = color;
    ctx.strokeStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.lineWidth = 2;
    
    data.forEach((point, index) => {
        const x = padding + (chartWidth * index) / (data.length - 1);
        const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    });
    
    // Draw labels
    ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
    ctx.font = '12px Cairo, system-ui, sans-serif';
    
    for (let i = 0; i <= CONFIG.CHART_GRID_LINES; i++) {
        const value = minValue + (valueRange * (CONFIG.CHART_GRID_LINES - i)) / CONFIG.CHART_GRID_LINES;
        const y = padding + (chartHeight * i) / CONFIG.CHART_GRID_LINES;
        
        ctx.textAlign = DASHBOARD_STATE.currentLanguage === 'ar' ? 'left' : 'right';
        const labelX = DASHBOARD_STATE.currentLanguage === 'ar' ? width - padding + 10 : padding - 10;
        
        if (canvasId === 'doorChart') {
            // Enhanced door chart labels - only show open/closed
            if (value >= 0.75) {
                ctx.fillText(t('door_open'), labelX, y + 4);
            } else if (value <= 0.25) {
                ctx.fillText(t('door_closed'), labelX, y + 4);
            }
        } else if (canvasId === 'lightChart') {
            ctx.fillText(`${Math.round(value)}`, labelX, y + 4);
        } else {
            ctx.fillText(`${value.toFixed(1)}${unit}`, labelX, y + 4);
        }
    }
}

// ===== EVENT MANAGEMENT =====
function createEvent(eventData) {
    const event = {
        id: Date.now().toString() + '_' + Math.random().toString(36).substr(2, 9),
        ...eventData
    };
    
    DASHBOARD_STATE.events.unshift(event);
    DASHBOARD_STATE.events = DASHBOARD_STATE.events.slice(0, CONFIG.MAX_EVENTS);
    
    if (DASHBOARD_STATE.currentMode === 'security' && event.severity === 'high') {
        DASHBOARD_STATE.alerts.unshift(event);
        showAlertBanner(event.message);
    }
    
    updateEventsDisplay();
    updateAlertsDisplay();
    saveDataToStorage();
    
    logMessage(`📝 Event created: ${event.message}`, 'info');
}

function showAlertBanner(message) {
    const banner = document.getElementById('alertBanner');
    const messageEl = document.getElementById('alertMessage');
    
    messageEl.textContent = `${t('security_alert')}: ${message}`;
    banner.classList.remove('hidden');
    
    setTimeout(() => {
        banner.classList.add('hidden');
    }, CONFIG.ALERT_AUTO_HIDE_DELAY);
}

function updateEventsDisplay() {
    const eventsList = document.getElementById('eventsList');
    
    if (DASHBOARD_STATE.events.length === 0) {
        eventsList.innerHTML = `<div class="no-events">${t('no_events')}</div>`;
        return;
    }
    
    eventsList.innerHTML = DASHBOARD_STATE.events.map(event => `
        <div class="event-item">
            <span class="event-icon">${event.icon}</span>
            <div class="event-content">
                <div class="event-message">${event.message}</div>
                <div class="event-time">${formatTime(event.timestamp)}</div>
            </div>
            <span class="severity-badge severity-${event.severity}">${t(event.severity)}</span>
        </div>
    `).join('');
}

function updateAlertsDisplay() {
    const alertsList = document.getElementById('alertsList');
    const clearBtn = document.getElementById('clearAllAlerts');
    
    if (DASHBOARD_STATE.alerts.length === 0) {
        alertsList.innerHTML = `<div class="no-alerts">${t('no_alerts')}</div>`;
        clearBtn.classList.add('hidden');
        return;
    }
    
    clearBtn.classList.remove('hidden');
    
    alertsList.innerHTML = DASHBOARD_STATE.alerts.map(alert => `
        <div class="alert-item">
            <span class="event-icon">${alert.icon}</span>
            <div class="event-content">
                <div class="event-message">${alert.message}</div>
                <div class="event-time">${formatTime(alert.timestamp)}</div>
            </div>
            <button onclick="clearAlert('${alert.id}')" class="close-alert" title="إزالة التنبيه">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    `).join('');
}

function clearAlert(alertId) {
    DASHBOARD_STATE.alerts = DASHBOARD_STATE.alerts.filter(alert => alert.id !== alertId);
    updateAlertsDisplay();
    saveDataToStorage();
    logMessage(`🗑️ Alert cleared: ${alertId}`, 'info');
}

function clearAllAlerts() {
    DASHBOARD_STATE.alerts = [];
    updateAlertsDisplay();
    saveDataToStorage();
    logMessage('🗑️ All alerts cleared', 'info');
}

// ===== MAIN APPLICATION =====
function initDashboard() {
    logMessage('🚀 Initializing Smart Room Dashboard with Firebase...', 'info');
    
    // Load saved data first
    loadDataFromStorage();
    
    applyLanguage();
    applyTheme();
    applyMode();
    
    updateClock();
    updateAllSensorCards();
    renderCharts();
    
    initializeFirebaseListeners();
    startIntervals();
    setupEventListeners();
    
    logMessage('✅ Dashboard initialized successfully!', 'success');
}

function startIntervals() {
    clearIntervals();
    
    DASHBOARD_STATE.intervals.clock = setInterval(updateClock, CONFIG.CLOCK_UPDATE_INTERVAL);
    DASHBOARD_STATE.intervals.charts = setInterval(renderCharts, CONFIG.CHART_UPDATE_INTERVAL);
    DASHBOARD_STATE.intervals.dataSave = setInterval(saveDataToStorage, 30000); // Save every 30 seconds
}

function clearIntervals() {
    Object.values(DASHBOARD_STATE.intervals).forEach(interval => {
        if (interval) clearInterval(interval);
    });
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(
        DASHBOARD_STATE.currentLanguage === 'ar' ? 'ar-SA' : 'en-US',
        {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: DASHBOARD_STATE.currentLanguage === 'en'
        }
    );
    
    updateElement('digitalClock', timeString);
}

function applyLanguage() {
    document.documentElement.lang = DASHBOARD_STATE.currentLanguage;
    document.documentElement.dir = DASHBOARD_STATE.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    updateTranslatableElements();
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.LANGUAGE, DASHBOARD_STATE.currentLanguage);
}

function updateTranslatableElements() {
    updateElement('welcomeText', t('welcome'));
    updateElement('dashboardTitle', t('dashboard_title'));
    updateElement('langText', DASHBOARD_STATE.currentLanguage === 'ar' ? 'EN' : 'عر');
    
    updateElement('normalModeText', t('normal_mode'));
    updateElement('securityModeText', t('security_mode'));
    
    updateElement('tempTitle', t('temperature'));
    updateElement('humidityTitle', t('humidity'));
    updateElement('lightTitle', t('light'));
    updateElement('doorTitle', t('door'));
    
    updateElement('eventsLogTitle', t('events_log'));
    updateElement('alertsTitle', t('security_alert'));
    updateElement('clearAllAlerts', t('clear_alerts'));
    
    updateElement('chartsTitle', t('charts_title'));
    updateElement('tempChartTitle', t('temperature_chart'));
    updateElement('humidityChartTitle', t('humidity_chart'));
    updateElement('lightChartTitle', t('light_chart'));
    updateElement('doorChartTitle', t('door_chart'));
    
    updateModeStatus();
    updateLiveIndicators();
    updateAllSensorCards();
    updateEventsDisplay();
    updateAlertsDisplay();
}

function applyTheme() {
    document.body.setAttribute('data-theme', DASHBOARD_STATE.currentTheme);
    
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (DASHBOARD_STATE.currentTheme === 'light') {
            themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
        } else {
            themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
        }
    }
    
    setTimeout(renderCharts, 100);
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, DASHBOARD_STATE.currentTheme);
}

function applyMode() {
    const normalBtn = document.getElementById('normalMode');
    const securityBtn = document.getElementById('securityMode');
    const modeCard = document.getElementById('modeToggleCard');
    const roomStatusSection = document.getElementById('roomStatusSection');
    const modeStatus = document.querySelector('.mode-status');
    
    if (DASHBOARD_STATE.currentMode === 'normal') {
        normalBtn?.classList.add('active');
        securityBtn?.classList.remove('security-active');
        modeCard?.classList.remove('security-mode');
        roomStatusSection?.classList.add('hidden');
        modeStatus?.classList.remove('security-status');
    } else {
        normalBtn?.classList.remove('active');
        securityBtn?.classList.add('security-active');
        modeCard?.classList.add('security-mode');
        roomStatusSection?.classList.remove('hidden');
        modeStatus?.classList.add('security-status');
    }
    
    updateModeStatus();
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.MODE, DASHBOARD_STATE.currentMode);
}

function updateModeStatus() {
    const statusText = DASHBOARD_STATE.currentMode === 'security' ? 
        t('security_status') : t('normal_status');
    
    updateElement('modeStatusText', statusText);
}

function setupEventListeners() {
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            DASHBOARD_STATE.currentLanguage = DASHBOARD_STATE.currentLanguage === 'ar' ? 'en' : 'ar';
            applyLanguage();
            logMessage(`🌐 Language changed to: ${DASHBOARD_STATE.currentLanguage}`, 'info');
        });
    }
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            DASHBOARD_STATE.currentTheme = DASHBOARD_STATE.currentTheme === 'light' ? 'dark' : 'light';
            applyTheme();
            logMessage(`🎨 Theme changed to: ${DASHBOARD_STATE.currentTheme}`, 'info');
        });
    }
    
    const normalMode = document.getElementById('normalMode');
    if (normalMode) {
        normalMode.addEventListener('click', () => {
            DASHBOARD_STATE.currentMode = 'normal';
            applyMode();
            logMessage('🏠 Switched to normal mode', 'info');
        });
    }
    
    const securityMode = document.getElementById('securityMode');
    if (securityMode) {
        securityMode.addEventListener('click', () => {
            DASHBOARD_STATE.currentMode = 'security';
            applyMode();
            logMessage('🛡️ Switched to security mode', 'info');
        });
    }
    
    const closeAlert = document.getElementById('closeAlert');
    if (closeAlert) {
        closeAlert.addEventListener('click', () => {
            document.getElementById('alertBanner')?.classList.add('hidden');
        });
    }
    
    const clearAllAlertsBtn = document.getElementById('clearAllAlerts');
    if (clearAllAlertsBtn) {
        clearAllAlertsBtn.addEventListener('click', clearAllAlerts);
    }
    
    document.addEventListener('keydown', handleKeyboardShortcuts);
    window.addEventListener('beforeunload', cleanup);
    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', () => {
        setTimeout(renderCharts, 100);
    });
}

function handleKeyboardShortcuts(event) {
    if (event.altKey && event.key === 'l') {
        event.preventDefault();
        document.getElementById('languageToggle')?.click();
    }
    
    if (event.altKey && event.key === 't') {
        event.preventDefault();
        document.getElementById('themeToggle')?.click();
    }
    
    if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const currentBtn = DASHBOARD_STATE.currentMode === 'normal' ? 
            document.getElementById('securityMode') : 
            document.getElementById('normalMode');
        currentBtn?.click();
    }
    
    if (event.key === 'Escape') {
        document.getElementById('alertBanner')?.classList.add('hidden');
    }
}

function handleVisibilityChange() {
    if (document.hidden) {
        clearIntervals();
        logMessage('📱 Dashboard hidden - pausing updates', 'info');
    } else {
        startIntervals();
        logMessage('📱 Dashboard visible - resuming updates', 'info');
    }
}

function cleanup() {
    clearIntervals();
    saveDataToStorage();
    
    Object.values(DASHBOARD_STATE.firebaseRefs).forEach(ref => {
        if (ref) ref.off();
    });
    
    logMessage('🧹 Dashboard cleanup completed', 'info');
}

// ===== GLOBAL FUNCTIONS =====
window.clearAlert = clearAlert;
window.clearAllAlerts = clearAllAlerts;

// ===== ERROR HANDLING =====
window.addEventListener('error', (event) => {
    logMessage(`Dashboard Error: ${event.error.message}`, 'error');
    
    setTimeout(() => {
        try {
            initDashboard();
        } catch (e) {
            logMessage(`Failed to recover: ${e.message}`, 'error');
        }
    }, 1000);
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    try {
        initDashboard();
    } catch (error) {
        logMessage(`Failed to initialize dashboard: ${error.message}`, 'error');
        
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Cairo, Arial, sans-serif;">
                <div style="text-align: center; padding: 2rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; max-width: 400px;">
                    <h2 style="color: #ef4444; margin-bottom: 1rem;">خطأ في تحميل لوحة التحكم</h2>
                    <p style="color: #64748b; margin-bottom: 1rem;">حدث خطأ أثناء تحميل لوحة التحكم. يرجى التأكد من اتصال الإنترنت وإعادة تحميل الصفحة.</p>
                    <button onclick="location.reload()" style="padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 600;">
                        إعادة تحميل
                    </button>
                </div>
            </div>
        `;
    }
});
