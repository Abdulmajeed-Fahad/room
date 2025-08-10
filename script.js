// Firebase Configuration
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

// Configuration Constants
const CONFIG = {
    USER_UID: "XjMYPsQpMVXEiCQYecoBBR8Sxto1",
    TEMPERATURE: { HIGH: 30, LOW: 18 },
    HUMIDITY: { HIGH: 70, LOW: 5 },
    LIGHT: { NONE: 500, DIM: 1500, MEDIUM: 2500, BRIGHT: 3500 },
    DOOR: { MIN_CLOSED: 110, MAX_CLOSED: 130 },
    CHART_MAX_POINTS: 50,
    UPDATE_INTERVAL: 1000,
    CHART_UPDATE_INTERVAL: 2000,
    SAVE_INTERVAL: 30000,
    CONNECTION_TIMEOUT: 10000,
    HIGHLIGHT_INTERVAL: 5
};

// Translation System
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
        last_reading_before_disconnect: 'آخر قراءة قبل انقطاع الاتصال',
        light_none: 'لا يوجد ضوء',
        light_dim: 'ضوء خفيف',
        light_medium: 'ضوء متوسط',
        light_bright: 'ضوء قوي',
        light_very_bright: 'ضوء ساطع جداً',
        door_closed: 'مغلق',
        door_open: 'مفتوح',
        door_sensor_error: 'خطأ في الحساس',
        events_log: 'سجل الأحداث',
        security_alert: 'تنبيه أمني',
        clear_alerts: 'مسح الكل',
        no_events: 'لا توجد أحداث مسجلة',
        no_alerts: 'لا توجد تنبيهات نشطة',
        charts_title: 'الرسوم البيانية اليومية',
        temperature_chart: 'درجة الحرارة',
        humidity_chart: 'الرطوبة',
        light_chart: 'الإضاءة',
        door_chart: 'حالة الباب',
        at_time: 'في',
        max_label: 'أعلى:',
        min_label: 'أدنى:',
        open_count: 'فتح:',
        close_count: 'إغلاق:',
        times: 'مرة',
        changed_to: 'تغير إلى',
        door_opened: 'تم فتح الباب',
        door_closed_event: 'تم إغلاق الباب',
        door_error: 'خطأ في حساس الباب',
        temp_high: 'درجة حرارة مرتفعة',
        temp_low: 'درجة حرارة منخفضة',
        humidity_high: 'رطوبة مرتفعة',
        humidity_low: 'رطوبة منخفضة جداً'
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
        last_reading_before_disconnect: 'Last reading before disconnect',
        light_none: 'No Light',
        light_dim: 'Dim Light',
        light_medium: 'Medium Light',
        light_bright: 'Bright Light',
        light_very_bright: 'Very Bright Light',
        door_closed: 'Closed',
        door_open: 'Open',
        door_sensor_error: 'Sensor Error',
        events_log: 'Events Log',
        security_alert: 'Security Alert',
        clear_alerts: 'Clear All',
        no_events: 'No events recorded',
        no_alerts: 'No active alerts',
        charts_title: 'Daily Charts',
        temperature_chart: 'Temperature',
        humidity_chart: 'Humidity',
        light_chart: 'Light',
        door_chart: 'Door Status',
        at_time: 'at',
        max_label: 'Max:',
        min_label: 'Min:',
        open_count: 'Open:',
        close_count: 'Close:',
        times: 'times',
        changed_to: 'Changed to',
        door_opened: 'Door opened',
        door_closed_event: 'Door closed',
        door_error: 'Door sensor error',
        temp_high: 'High temperature',
        temp_low: 'Low temperature',
        humidity_high: 'High humidity',
        humidity_low: 'Very low humidity'
    }
};

// Global State Management
const DASHBOARD_STATE = {
    currentLanguage: localStorage.getItem('dashboard-language') || 'ar',
    currentTheme: localStorage.getItem('dashboard-theme') || 'light',
    currentMode: localStorage.getItem('dashboard-mode') || 'normal',
    isConnected: false,
    lastDataUpdate: null,
    sensorData: {
        temperature: null,
        humidity: null,
        ldr: null,
        distance_cm: null
    },
    lastConnectedData: {
        temperature: null,
        humidity: null,
        ldr: null,
        distance_cm: null
    },
    dailyStats: JSON.parse(localStorage.getItem('daily-stats') || JSON.stringify({
        temperature: { max: null, min: null },
        humidity: { max: null, min: null },
        light: { max: null, min: null },
        door: { openCount: 0, closeCount: 0 }
    })),
    events: JSON.parse(localStorage.getItem('dashboard-events') || '[]'),
    alerts: JSON.parse(localStorage.getItem('dashboard-alerts') || '[]'),
    chartData: {
        temperature: JSON.parse(localStorage.getItem('chart-temperature') || '[]'),
        humidity: JSON.parse(localStorage.getItem('chart-humidity') || '[]'),
        light: JSON.parse(localStorage.getItem('chart-light') || '[]'),
        door: JSON.parse(localStorage.getItem('chart-door') || '[]')
    },
    intervals: {
        clock: null,
        charts: null,
        save: null,
        connectionCheck: null
    },
    lastDoorState: null,
    lastAlertTime: {
        temperature: null,
        humidity: null,
        light: null,
        door: null
    },
    lastResetDate: localStorage.getItem('last-reset-date') || new Date().toDateString(),
    chartNeedsUpdate: {
        temperature: true,
        humidity: true,
        light: true,
        door: true
    }
};

// Utility Functions
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

function formatDateTime(date) {
    const dateStr = date.toLocaleDateString(
        DASHBOARD_STATE.currentLanguage === 'ar' ? 'ar-SA' : 'en-US',
        {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }
    );
    const timeStr = formatTime(date);
    return `${dateStr} ${timeStr}`;
}

function formatNumber(number, decimals = 1) {
    if (DASHBOARD_STATE.currentLanguage === 'ar') {
        return number.toFixed(decimals).replace('.', '٫').replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }
    return number.toFixed(decimals);
}

function formatInteger(number) {
    if (DASHBOARD_STATE.currentLanguage === 'ar') {
        return number.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }
    return number.toString();
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

// Connection Management
function checkConnectionTimeout() {
    if (DASHBOARD_STATE.lastDataUpdate) {
        const now = Date.now();
        const timeSinceLastUpdate = now - DASHBOARD_STATE.lastDataUpdate;
        
        if (timeSinceLastUpdate > CONFIG.CONNECTION_TIMEOUT) {
            if (DASHBOARD_STATE.isConnected) {
                logMessage('⚠️ Connection timeout - switching to offline mode', 'error');
                
                // Store last connected data
                DASHBOARD_STATE.lastConnectedData = { ...DASHBOARD_STATE.sensorData };
                
                updateConnectionStatus('disconnected');
                showLastReadingInfo();
            }
        }
    }
}

function resetConnectionTimeout() {
    DASHBOARD_STATE.lastDataUpdate = Date.now();
    if (!DASHBOARD_STATE.isConnected) {
        updateConnectionStatus('connected');
        hideLastReadingInfo();
    }
}

function showLastReadingInfo() {
    const sensors = ['temp', 'humidity', 'light', 'door'];
    sensors.forEach(sensor => {
        const lastReadingElement = document.getElementById(`${sensor}LastReading`);
        const labelElement = document.getElementById(`${sensor}LastReadingLabel`);
        
        if (lastReadingElement && labelElement) {
            lastReadingElement.classList.remove('hidden');
            labelElement.textContent = t('last_reading_before_disconnect');
        }
    });
}

function hideLastReadingInfo() {
    const sensors = ['temp', 'humidity', 'light', 'door'];
    sensors.forEach(sensor => {
        const lastReadingElement = document.getElementById(`${sensor}LastReading`);
        if (lastReadingElement) {
            lastReadingElement.classList.add('hidden');
        }
    });
}

function updateConnectionStatus(status) {
    DASHBOARD_STATE.isConnected = status === 'connected';
    
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    
    if (statusIndicator && statusText) {
        statusIndicator.className = `status-indicator ${status}`;
        statusText.textContent = t(status);
    }
    
    updateLiveIndicators();
}

// Daily Stats Management
function checkDailyReset() {
    const today = new Date().toDateString();
    if (DASHBOARD_STATE.lastResetDate !== today) {
        resetDailyStats();
        DASHBOARD_STATE.lastResetDate = today;
        localStorage.setItem('last-reset-date', today);
        logMessage('🔄 Daily stats reset completed', 'info');
    }
}

function resetDailyStats() {
    DASHBOARD_STATE.dailyStats = {
        temperature: { max: null, min: null },
        humidity: { max: null, min: null },
        light: { max: null, min: null },
        door: { openCount: 0, closeCount: 0 }
    };
    
    DASHBOARD_STATE.chartData = {
        temperature: [],
        humidity: [],
        light: [],
        door: []
    };
    
    saveDailyStats();
    Object.keys(DASHBOARD_STATE.chartData).forEach(key => {
        localStorage.setItem(`chart-${key}`, JSON.stringify(DASHBOARD_STATE.chartData[key]));
    });
    
    updateDailyStatsDisplay();
}

function saveDailyStats() {
    localStorage.setItem('daily-stats', JSON.stringify(DASHBOARD_STATE.dailyStats));
}

function updateDailyStats(type, value) {
    const numValue = parseFloat(value);
    
    if (type === 'temperature' || type === 'humidity' || type === 'light') {
        if (DASHBOARD_STATE.dailyStats[type].max === null || numValue > DASHBOARD_STATE.dailyStats[type].max) {
            DASHBOARD_STATE.dailyStats[type].max = numValue;
        }
        if (DASHBOARD_STATE.dailyStats[type].min === null || numValue < DASHBOARD_STATE.dailyStats[type].min) {
            DASHBOARD_STATE.dailyStats[type].min = numValue;
        }
    }
    
    updateDailyStatsDisplay();
    saveDailyStats();
}

function updateDailyStatsDisplay() {
    const tempMax = DASHBOARD_STATE.dailyStats.temperature.max;
    const tempMin = DASHBOARD_STATE.dailyStats.temperature.min;
    updateElement('tempMaxValue', tempMax !== null ? `${formatNumber(tempMax)}${t('celsius')}` : '--');
    updateElement('tempMinValue', tempMin !== null ? `${formatNumber(tempMin)}${t('celsius')}` : '--');
    
    const humidityMax = DASHBOARD_STATE.dailyStats.humidity.max;
    const humidityMin = DASHBOARD_STATE.dailyStats.humidity.min;
    updateElement('humidityMaxValue', humidityMax !== null ? `${formatNumber(humidityMax)}${t('percent')}` : '--');
    updateElement('humidityMinValue', humidityMin !== null ? `${formatNumber(humidityMin)}${t('percent')}` : '--');
    
    const lightMax = DASHBOARD_STATE.dailyStats.light.max;
    const lightMin = DASHBOARD_STATE.dailyStats.light.min;
    updateElement('lightMaxValue', lightMax !== null ? formatInteger(Math.round(lightMax)) : '--');
    updateElement('lightMinValue', lightMin !== null ? formatInteger(Math.round(lightMin)) : '--');
    
    updateElement('doorOpenCount', `${formatInteger(DASHBOARD_STATE.dailyStats.door.openCount)} ${t('times')}`);
    updateElement('doorCloseCount', `${formatInteger(DASHBOARD_STATE.dailyStats.door.closeCount)} ${t('times')}`);
}

// Sensor Value Processing
function getLightLevel(ldrValue) {
    if (ldrValue <= CONFIG.LIGHT.NONE) {
        return { text: t('light_none'), class: 'none' };
    } else if (ldrValue <= CONFIG.LIGHT.DIM) {
        return { text: t('light_dim'), class: 'dim' };
    } else if (ldrValue <= CONFIG.LIGHT.MEDIUM) {
        return { text: t('light_medium'), class: 'medium' };
    } else if (ldrValue <= CONFIG.LIGHT.BRIGHT) {
        return { text: t('light_bright'), class: 'bright' };
    } else {
        return { text: t('light_very_bright'), class: 'very_bright' };
    }
}

function getDoorStatus(distance) {
    if (distance === null || distance === -1) {
        return { text: t('door_sensor_error'), class: 'error' };
    }
    
    if (distance >= CONFIG.DOOR.MIN_CLOSED && distance <= CONFIG.DOOR.MAX_CLOSED) {
        return { text: t('door_closed'), class: 'closed' };
    } else {
        return { text: t('door_open'), class: 'open' };
    }
}

// Firebase Listeners
function initializeFirebaseListeners() {
    logMessage('🔥 Initializing Firebase listeners...', 'info');
    
    const basePath = `/Users/${CONFIG.USER_UID}`;
    
    // Temperature listener
    database.ref(`${basePath}/temperature`).on('value', (snapshot) => {
        const value = snapshot.val();
        if (value !== null) {
            const newTemp = parseFloat(value);
            DASHBOARD_STATE.sensorData.temperature = newTemp;
            resetConnectionTimeout();
            logMessage(`🌡️ Temperature: ${value}°C`, 'success');
            updateTemperatureCard();
            updateDailyStats('temperature', newTemp);
            
            if (shouldAddToChart('temperature', newTemp)) {
                addToChart('temperature', newTemp);
                DASHBOARD_STATE.chartNeedsUpdate.temperature = true;
            }
            
            checkForSecurityEvents('temperature', newTemp);
        }
    }, (error) => {
        logMessage(`Temperature error: ${error.message}`, 'error');
        updateConnectionStatus('disconnected');
    });

    // Humidity listener
    database.ref(`${basePath}/humidity`).on('value', (snapshot) => {
        const value = snapshot.val();
        if (value !== null) {
            const newHumidity = parseFloat(value);
            DASHBOARD_STATE.sensorData.humidity = newHumidity;
            resetConnectionTimeout();
            logMessage(`💧 Humidity: ${value}%`, 'success');
            updateHumidityCard();
            updateDailyStats('humidity', newHumidity);
            
            if (shouldAddToChart('humidity', newHumidity)) {
                addToChart('humidity', newHumidity);
                DASHBOARD_STATE.chartNeedsUpdate.humidity = true;
            }
            
            checkForSecurityEvents('humidity', newHumidity);
        }
    }, (error) => {
        logMessage(`Humidity error: ${error.message}`, 'error');
        updateConnectionStatus('disconnected');
    });

    // Light listener
    database.ref(`${basePath}/ldr`).on('value', (snapshot) => {
        const value = snapshot.val();
        if (value !== null) {
            const newLight = parseInt(value);
            DASHBOARD_STATE.sensorData.ldr = newLight;
            resetConnectionTimeout();
            logMessage(`💡 Light: ${value}`, 'success');
            updateLightCard();
            updateDailyStats('light', newLight);
            
            if (shouldAddToChart('light', newLight)) {
                addToChart('light', newLight);
                DASHBOARD_STATE.chartNeedsUpdate.light = true;
            }
        }
    }, (error) => {
        logMessage(`Light error: ${error.message}`, 'error');
        updateConnectionStatus('disconnected');
    });

    // Door listener
    database.ref(`${basePath}/distance_cm`).on('value', (snapshot) => {
        const value = snapshot.val();
        if (value !== null) {
            const newDistance = parseInt(value);
            DASHBOARD_STATE.sensorData.distance_cm = newDistance;
            resetConnectionTimeout();
            logMessage(`📏 Distance: ${value}cm`, 'success');
            updateDoorCard();
            
            const doorStatus = getDoorStatus(newDistance);
            
            if (DASHBOARD_STATE.lastDoorState !== doorStatus.class) {
                const doorValue = doorStatus.class === 'open' ? 1 : doorStatus.class === 'closed' ? 0 : 0.5;
                addToChart('door', doorValue);
                DASHBOARD_STATE.chartNeedsUpdate.door = true;
                
                if (doorStatus.class === 'open' && DASHBOARD_STATE.lastDoorState === 'closed') {
                    DASHBOARD_STATE.dailyStats.door.openCount++;
                    checkForEvent('door', DASHBOARD_STATE.currentMode === 'security' ? 'high' : 'medium', t('door_opened'));
                } else if (doorStatus.class === 'closed' && DASHBOARD_STATE.lastDoorState === 'open') {
                    DASHBOARD_STATE.dailyStats.door.closeCount++;
                    checkForEvent('door', 'medium', t('door_closed_event'));
                } else if (doorStatus.class === 'error') {
                    checkForEvent('door', 'warning', t('door_error'));
                }
                
                DASHBOARD_STATE.lastDoorState = doorStatus.class;
                updateDailyStatsDisplay();
                saveDailyStats();
            }
        }
    }, (error) => {
        logMessage(`Distance error: ${error.message}`, 'error');
        updateConnectionStatus('disconnected');
    });

    // Connection status listener
    database.ref('.info/connected').on('value', (snapshot) => {
        if (snapshot.val() === true) {
            resetConnectionTimeout();
            logMessage('🔗 Firebase connected', 'success');
        } else {
            updateConnectionStatus('disconnected');
            logMessage('🔗 Firebase disconnected', 'error');
        }
    });
}

// Chart Management
function shouldAddToChart(type, value) {
    const chartData = DASHBOARD_STATE.chartData[type];
    const lastPoint = chartData[chartData.length - 1];
    
    if (!lastPoint) return true;
    
    if (type === 'door') {
        return lastPoint.value !== value;
    }
    
    return Math.abs(lastPoint.value - value) > 0.1;
}

function addToChart(type, value, timestamp = null) {
    const now = timestamp || new Date();
    
    DASHBOARD_STATE.chartData[type].push({ value, timestamp: now });
    
    if (DASHBOARD_STATE.chartData[type].length > CONFIG.CHART_MAX_POINTS) {
        DASHBOARD_STATE.chartData[type].shift();
    }
    
    localStorage.setItem(`chart-${type}`, JSON.stringify(DASHBOARD_STATE.chartData[type]));
}

function renderCharts() {
    Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(type => {
        if (DASHBOARD_STATE.chartNeedsUpdate[type]) {
            if (type === 'door') {
                drawDoorChart(`${type}Chart`, DASHBOARD_STATE.chartData[type], '#10b981', t('door'));
            } else {
                const colors = {
                    temperature: '#ef4444',
                    humidity: '#3b82f6',
                    light: '#f59e0b'
                };
                const units = {
                    temperature: t('celsius'),
                    humidity: t('percent'),
                    light: ''
                };
                drawChart(`${type}Chart`, DASHBOARD_STATE.chartData[type], colors[type], units[type], t(`${type}_chart`));
            }
            DASHBOARD_STATE.chartNeedsUpdate[type] = false;
        }
    });
}

function drawChart(canvasId, data, color, unit, title) {
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
    const padding = 80;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    ctx.clearRect(0, 0, width, height);
    
    const values = data.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue || 1;
    
    const isDark = DASHBOARD_STATE.currentTheme === 'dark';
    
    // Background
    ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Grid lines
    ctx.strokeStyle = isDark ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight * i) / 5;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    ctx.setLineDash([]);
    
    // Area fill
    if (data.length >= 2) {
        const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
        gradient.addColorStop(0, color + '30');
        gradient.addColorStop(1, color + '05');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        
        data.forEach((point, index) => {
            const x = padding + (chartWidth * index) / (data.length - 1);
            const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
            ctx.lineTo(x, y);
        });
        
        ctx.lineTo(padding + chartWidth, height - padding);
        ctx.closePath();
        ctx.fill();
    }
    
    // Line
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
    
    // Points with highlights every 5th point
    ctx.fillStyle = color;
    ctx.strokeStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.lineWidth = 2;
    
    data.forEach((point, index) => {
        const x = padding + (chartWidth * index) / (data.length - 1);
        const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
        
        const isHighlightPoint = (index + 1) % CONFIG.HIGHLIGHT_INTERVAL === 0;
        const pointSize = isHighlightPoint ? 8 : 5;
        
        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        if (isHighlightPoint) {
            ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
            ctx.font = '10px Cairo, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(formatInteger(index + 1), x, y - 15);
            ctx.fillStyle = color;
        }
    });
    
    // Y-axis labels
    ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
    ctx.font = '12px Cairo, system-ui, sans-serif';
    
    for (let i = 0; i <= 5; i++) {
        const value = minValue + (valueRange * (5 - i)) / 5;
        const y = padding + (chartHeight * i) / 5;
        
        ctx.textAlign = DASHBOARD_STATE.currentLanguage === 'ar' ? 'left' : 'right';
        const labelX = DASHBOARD_STATE.currentLanguage === 'ar' ? width - padding + 15 : padding - 15;
        
        let labelText = '';
        if (canvasId === 'lightChart') {
            const lightLevel = getLightLevel(value);
            labelText = lightLevel.text;
        } else {
            const formattedValue = formatNumber(value);
            labelText = `${formattedValue}${unit}`;
        }
        
        if (labelText) {
            ctx.fillText(labelText, labelX, y + 4);
        }
    }
    
    // Mouse interaction
    canvas.onmousemove = (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        
        let foundPoint = null;
        data.forEach((point, index) => {
            const x = padding + (chartWidth * index) / (data.length - 1);
            const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
            
            const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
            if (distance <= 15) {
                foundPoint = { point, x: event.clientX, y: event.clientY };
            }
        });
        
        if (foundPoint) {
            canvas.style.cursor = 'pointer';
            let displayValue;
            
            if (canvasId === 'lightChart') {
                const lightLevel = getLightLevel(foundPoint.point.value);
                displayValue = `${lightLevel.text} (${formatInteger(Math.round(foundPoint.point.value))})`;
            } else {
                displayValue = `${formatNumber(foundPoint.point.value)}${unit}`;
            }
            
            showTooltip(foundPoint.x, foundPoint.y, title, displayValue, foundPoint.point.timestamp);
        } else {
            canvas.style.cursor = 'default';
            hideTooltip();
        }
    };
    
    canvas.onmouseleave = () => {
        hideTooltip();
        canvas.style.cursor = 'default';
    };
}

function drawDoorChart(canvasId, data, color, title) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const width = rect.width;
    const height = rect.height;
    const padding = 80;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    ctx.clearRect(0, 0, width, height);
    
    const isDark = DASHBOARD_STATE.currentTheme === 'dark';
    
    // Background
    ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Grid lines
    ctx.strokeStyle = isDark ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    
    for (let i = 0; i <= 2; i++) {
        const y = padding + (chartHeight * i) / 2;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    ctx.setLineDash([]);
    
    if (data.length === 0) {
        ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
        ctx.font = '16px Cairo, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('لا توجد تغييرات', width / 2, height / 2);
        return;
    }
    
    // Draw lines and points
    data.forEach((point, index) => {
        const x = padding + (chartWidth * index) / Math.max(data.length - 1, 1);
        const y = point.value === 1 ? padding + 30 :
                  point.value === 0 ? padding + chartHeight - 30 :
                  padding + chartHeight / 2;
        
        // Draw line to previous point
        if (index > 0) {
            const prevX = padding + (chartWidth * (index - 1)) / Math.max(data.length - 1, 1);
            const prevPoint = data[index - 1];
            const prevY = prevPoint.value === 1 ? padding + 30 :
                          prevPoint.value === 0 ? padding + chartHeight - 30 :
                          padding + chartHeight / 2;
            
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        
        // Draw point with highlight every 5th
        const isHighlightPoint = (index + 1) % CONFIG.HIGHLIGHT_INTERVAL === 0;
        const pointSize = isHighlightPoint ? 10 : 6;
        
        ctx.fillStyle = point.value === 1 ? '#ef4444' :
                        point.value === 0 ? '#10b981' : '#f59e0b';
        ctx.strokeStyle = isDark ? '#1e293b' : '#ffffff';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        if (isHighlightPoint) {
            ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
            ctx.font = '10px Cairo, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(formatInteger(index + 1), x, y - 15);
        }
    });
    
    // Y-axis labels
    ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
    ctx.font = '12px Cairo, system-ui, sans-serif';
    ctx.textAlign = DASHBOARD_STATE.currentLanguage === 'ar' ? 'left' : 'right';
    const labelX = DASHBOARD_STATE.currentLanguage === 'ar' ? width - padding + 15 : padding - 15;
    
    ctx.fillText(t('door_open'), labelX, padding + 34);
    ctx.fillText(t('door_closed'), labelX, padding + chartHeight - 26);
    ctx.fillText(t('door_sensor_error'), labelX, padding + chartHeight / 2 + 4);
    
    // Mouse interaction
    canvas.onmousemove = (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        
        let foundPoint = null;
        data.forEach((point, index) => {
            const x = padding + (chartWidth * index) / Math.max(data.length - 1, 1);
            const y = point.value === 1 ? padding + 30 :
                      point.value === 0 ? padding + chartHeight - 30 :
                      padding + chartHeight / 2;
            
            const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
            if (distance <= 15) {
                foundPoint = { point, x: event.clientX, y: event.clientY, index: index + 1 };
            }
        });
        
        if (foundPoint) {
            canvas.style.cursor = 'pointer';
            
            let statusText;
            if (foundPoint.point.value === 1) {
                statusText = t('door_opened');
            } else if (foundPoint.point.value === 0) {
                statusText = t('door_closed_event');
            } else {
                statusText = t('door_error');
            }
            
            const changeNumber = formatInteger(foundPoint.index);
            const displayValue = `${t('changed_to')} ${statusText} (#${changeNumber})`;
            
            showTooltip(foundPoint.x, foundPoint.y, title, displayValue, foundPoint.point.timestamp);
        } else {
            canvas.style.cursor = 'default';
            hideTooltip();
        }
    };
    
    canvas.onmouseleave = () => {
        hideTooltip();
        canvas.style.cursor = 'default';
    };
}

// Tooltip Functions
function showTooltip(x, y, title, value, time) {
    const tooltip = document.getElementById('chartTooltip');
    const titleEl = document.getElementById('tooltipTitle');
    const valueEl = document.getElementById('tooltipValue');
    const timeEl = document.getElementById('tooltipTime');
    
    titleEl.textContent = title;
    valueEl.textContent = value;
    timeEl.textContent = `${t('at_time')} ${formatDateTime(time)}`;
    
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    let tooltipX = x + 10;
    let tooltipY = y - 10;
    
    if (tooltipX + 250 > viewportWidth) {
        tooltipX = x - 260;
    }
    
    if (tooltipY - 100 < 0) {
        tooltipY = y + 20;
    }
    
    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;
    tooltip.classList.remove('hidden');
}

function hideTooltip() {
    const tooltip = document.getElementById('chartTooltip');
    tooltip.classList.add('hidden');
}

// Zoom Chart Functions
function zoomChart(canvasId) {
    const modal = document.getElementById('chartZoomModal');
    const zoomCanvas = document.getElementById('zoomCanvas');
    const modalTitle = document.getElementById('zoomModalTitle');
    
    const titles = {
        'temperatureChart': t('temperature_chart'),
        'humidityChart': t('humidity_chart'),
        'lightChart': t('light_chart'),
        'doorChart': t('door_chart')
    };
    modalTitle.textContent = titles[canvasId] || 'الرسم البياني';
    
    modal.classList.remove('hidden');
    
    setTimeout(() => {
        const modalBody = document.querySelector('.zoom-modal-body');
        const bodyRect = modalBody.getBoundingClientRect();
        
        const maxWidth = bodyRect.width - 40;
        const maxHeight = bodyRect.height - 40;
        
        zoomCanvas.width = maxWidth;
        zoomCanvas.height = maxHeight;
        zoomCanvas.style.width = maxWidth + 'px';
        zoomCanvas.style.height = maxHeight + 'px';
        
        if (canvasId === 'doorChart') {
            drawZoomedDoorChart(zoomCanvas, DASHBOARD_STATE.chartData.door, '#10b981', titles[canvasId]);
        } else {
            const dataMap = {
                'temperatureChart': { data: DASHBOARD_STATE.chartData.temperature, color: '#ef4444', unit: t('celsius') },
                'humidityChart': { data: DASHBOARD_STATE.chartData.humidity, color: '#3b82f6', unit: t('percent') },
                'lightChart': { data: DASHBOARD_STATE.chartData.light, color: '#f59e0b', unit: '' }
            };
            
            const chartInfo = dataMap[canvasId];
            if (chartInfo) {
                drawZoomedChart(zoomCanvas, chartInfo.data, chartInfo.color, chartInfo.unit, titles[canvasId]);
            }
        }
    }, 100);
}

function drawZoomedChart(canvas, data, color, unit, title) {
    if (!canvas || data.length === 0) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const width = rect.width;
    const height = rect.height;
    const padding = Math.min(width, height) * 0.15;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    ctx.clearRect(0, 0, width, height);
    
    const values = data.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue || 1;
    
    const isDark = DASHBOARD_STATE.currentTheme === 'dark';
    
    // Background
    ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Grid
    ctx.strokeStyle = isDark ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    
    for (let i = 0; i <= 10; i++) {
        const y = padding + (chartHeight * i) / 10;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
        
        const x = padding + (chartWidth * i) / 10;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
    }
    
    ctx.setLineDash([]);
    
    // Area fill
    if (data.length >= 2) {
        const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(1, color + '10');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        
        data.forEach((point, index) => {
            const x = padding + (chartWidth * index) / (data.length - 1);
            const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
            ctx.lineTo(x, y);
        });
        
        ctx.lineTo(padding + chartWidth, height - padding);
        ctx.closePath();
        ctx.fill();
    }
    
    // Line
    if (data.length >= 2) {
        ctx.strokeStyle = color;
        ctx.lineWidth = Math.max(2, width / 200);
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
    
    // Points with highlights
    ctx.fillStyle = color;
    ctx.strokeStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.lineWidth = Math.max(2, width / 400);
    
    const pointSize = Math.max(4, width / 100);
    data.forEach((point, index) => {
        const x = padding + (chartWidth * index) / (data.length - 1);
        const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
        
        const isHighlightPoint = (index + 1) % CONFIG.HIGHLIGHT_INTERVAL === 0;
        const currentPointSize = isHighlightPoint ? pointSize * 1.5 : pointSize;
        
        ctx.beginPath();
        ctx.arc(x, y, currentPointSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        if (isHighlightPoint) {
            ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
            ctx.font = `${Math.max(10, width / 60)}px Cairo, system-ui, sans-serif`;
            ctx.textAlign = 'center';
            ctx.fillText(formatInteger(index + 1), x, y - 25);
            ctx.fillStyle = color;
        }
    });
    
    // Y-axis labels
    ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
    ctx.font = `${Math.max(10, width / 60)}px Cairo, system-ui, sans-serif`;
    
    for (let i = 0; i <= 10; i++) {
        const value = minValue + (valueRange * (10 - i)) / 10;
        const y = padding + (chartHeight * i) / 10;
        
        ctx.textAlign = DASHBOARD_STATE.currentLanguage === 'ar' ? 'left' : 'right';
        const labelX = DASHBOARD_STATE.currentLanguage === 'ar' ? width - padding + 20 : padding - 20;
        
        const formattedValue = formatNumber(value);
        const labelText = `${formattedValue}${unit}`;
        
        ctx.fillText(labelText, labelX, y + 4);
    }
    
    // X-axis time labels
    ctx.textAlign = 'center';
    for (let i = 0; i <= 5; i++) {
        const dataIndex = Math.floor((data.length - 1) * i / 5);
        if (dataIndex < data.length) {
            const x = padding + (chartWidth * dataIndex) / (data.length - 1);
            const timeLabel = formatDateTime(data[dataIndex].timestamp);
            ctx.fillText(timeLabel, x, height - padding + 25);
        }
    }
}

function drawZoomedDoorChart(canvas, data, color, title) {
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const width = rect.width;
    const height = rect.height;
    const padding = Math.min(width, height) * 0.15;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    ctx.clearRect(0, 0, width, height);
    
    const isDark = DASHBOARD_STATE.currentTheme === 'dark';
    
    // Background
    ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Grid
    ctx.strokeStyle = isDark ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    
    for (let i = 0; i <= 2; i++) {
        const y = padding + (chartHeight * i) / 2;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    for (let i = 0; i <= 10; i++) {
        const x = padding + (chartWidth * i) / 10;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
    }
    
    ctx.setLineDash([]);
    
    if (data.length === 0) {
        ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
        ctx.font = `${Math.max(14, width / 40)}px Cairo, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('لا توجد تغييرات', width / 2, height / 2);
        return;
    }
    
    // Draw lines and points
    data.forEach((point, index) => {
        const x = padding + (chartWidth * index) / Math.max(data.length - 1, 1);
        const y = point.value === 1 ? padding + 40 :
                  point.value === 0 ? padding + chartHeight - 40 :
                  padding + chartHeight / 2;
        
        if (index > 0) {
            const prevX = padding + (chartWidth * (index - 1)) / Math.max(data.length - 1, 1);
            const prevPoint = data[index - 1];
            const prevY = prevPoint.value === 1 ? padding + 40 :
                          prevPoint.value === 0 ? padding + chartHeight - 40 :
                          padding + chartHeight / 2;
            
            ctx.strokeStyle = color;
            ctx.lineWidth = Math.max(3, width / 200);
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        
        const isHighlightPoint = (index + 1) % CONFIG.HIGHLIGHT_INTERVAL === 0;
        const pointSize = isHighlightPoint ? Math.max(12, width / 60) : Math.max(8, width / 100);
        
        ctx.fillStyle = point.value === 1 ? '#ef4444' :
                        point.value === 0 ? '#10b981' : '#f59e0b';
        ctx.strokeStyle = isDark ? '#1e293b' : '#ffffff';
        ctx.lineWidth = Math.max(2, width / 400);
        
        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        if (isHighlightPoint) {
            ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
            ctx.font = `${Math.max(10, width / 60)}px Cairo, system-ui, sans-serif`;
            ctx.textAlign = 'center';
            ctx.fillText(formatInteger(index + 1), x, y - 25);
        }
    });
    
    // Y-axis labels
    ctx.fillStyle = isDark ? '#cbd5e1' : '#64748b';
    ctx.font = `${Math.max(12, width / 50)}px Cairo, system-ui, sans-serif`;
    ctx.textAlign = DASHBOARD_STATE.currentLanguage === 'ar' ? 'left' : 'right';
    const labelX = DASHBOARD_STATE.currentLanguage === 'ar' ? width - padding + 20 : padding - 20;
    
    ctx.fillText(t('door_open'), labelX, padding + 44);
    ctx.fillText(t('door_closed'), labelX, padding + chartHeight - 36);
    ctx.fillText(t('door_sensor_error'), labelX, padding + chartHeight / 2 + 4);
    
    // X-axis time labels
    ctx.textAlign = 'center';
    ctx.font = `${Math.max(10, width / 60)}px Cairo, system-ui, sans-serif`;
    for (let i = 0; i <= 5; i++) {
        const dataIndex = Math.floor((data.length - 1) * i / 5);
        if (dataIndex < data.length) {
            const x = padding + (chartWidth * dataIndex) / Math.max(data.length - 1, 1);
            const timeLabel = formatDateTime(data[dataIndex].timestamp);
            ctx.fillText(timeLabel, x, height - padding + 25);
        }
    }
}

// Security Events
function checkForSecurityEvents(type, value) {
    if (DASHBOARD_STATE.currentMode !== 'security') return;
    
    const now = Date.now();
    const lastAlertTime = DASHBOARD_STATE.lastAlertTime[type];
    
    if (lastAlertTime && now - lastAlertTime < 300000) return; // 5 minutes cooldown
    
    let shouldAlert = false;
    let message = '';
    
    if (type === 'temperature') {
        if (value > CONFIG.TEMPERATURE.HIGH) {
            shouldAlert = true;
            message = `${t('temp_high')}: ${formatNumber(value)}${t('celsius')}`;
        } else if (value < CONFIG.TEMPERATURE.LOW) {
            shouldAlert = true;
            message = `${t('temp_low')}: ${formatNumber(value)}${t('celsius')}`;
        }
    } else if (type === 'humidity') {
        if (value > CONFIG.HUMIDITY.HIGH) {
            shouldAlert = true;
            message = `${t('humidity_high')}: ${formatNumber(value)}${t('percent')}`;
        } else if (value < CONFIG.HUMIDITY.LOW) {
            shouldAlert = true;
            message = `${t('humidity_low')}: ${formatNumber(value)}${t('percent')}`;
        }
    }
    
    if (shouldAlert) {
        checkForEvent(type, 'high', message);
        DASHBOARD_STATE.lastAlertTime[type] = now;
    }
}

function checkForEvent(type, severity, message) {
    const now = new Date();
    const lastEvent = DASHBOARD_STATE.events[0];
    
    // Prevent duplicate events within 30 seconds
    if (lastEvent && lastEvent.type === type && lastEvent.severity === severity && 
        now - new Date(lastEvent.timestamp) < 30000) {
        return;
    }
    
    const event = {
        id: Date.now().toString(),
        type,
        message,
        timestamp: now,
        severity,
        icon: getEventIcon(type)
    };
    
    DASHBOARD_STATE.events.unshift(event);
    DASHBOARD_STATE.events = DASHBOARD_STATE.events.slice(0, 50);
    
    // Add to alerts only in security mode and for high severity
    if (DASHBOARD_STATE.currentMode === 'security' && severity === 'high') {
        DASHBOARD_STATE.alerts.unshift(event);
        showAlertBanner(message);
    }
    
    updateEventsDisplay();
    updateAlertsDisplay();
    
    localStorage.setItem('dashboard-events', JSON.stringify(DASHBOARD_STATE.events));
    localStorage.setItem('dashboard-alerts', JSON.stringify(DASHBOARD_STATE.alerts));
    
    logMessage(`📝 Event: ${message}`, 'info');
}

function getEventIcon(type) {
    const icons = {
        temperature: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
                      </svg>`,
        humidity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                     <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                   </svg>`,
        light: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>`,
        door: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                 <circle cx="15" cy="12" r="1"/>
               </svg>`
    };
    return icons[type] || icons.door;
}

function showAlertBanner(message) {
    const banner = document.getElementById('alertBanner');
    const messageEl = document.getElementById('alertMessage');
    
    messageEl.textContent = `${t('security_alert')}: ${message}`;
    banner.classList.remove('hidden');
    
    setTimeout(() => {
        banner.classList.add('hidden');
    }, 5000);
}

function updateEventsDisplay() {
    const eventsList = document.getElementById('eventsList');
    
    if (DASHBOARD_STATE.events.length === 0) {
        eventsList.innerHTML = `<div class="no-events">${t('no_events')}</div>`;
        return;
    }
    
    eventsList.innerHTML = DASHBOARD_STATE.events.slice(0, 10).map(event => `
        <div class="event-item">
            <div class="event-icon">${event.icon}</div>
            <div class="event-content">
                <div class="event-message">${event.message}</div>
                <div class="event-time">${formatDateTime(new Date(event.timestamp))}</div>
            </div>
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
            <div class="event-icon">${alert.icon}</div>
            <div class="event-content">
                <div class="event-message">${alert.message}</div>
                <div class="event-time">${formatDateTime(new Date(alert.timestamp))}</div>
            </div>
        </div>
    `).join('');
}

function clearAllAlerts() {
    DASHBOARD_STATE.alerts = [];
    updateAlertsDisplay();
    localStorage.setItem('dashboard-alerts', JSON.stringify(DASHBOARD_STATE.alerts));
    logMessage('🗑️ All alerts cleared', 'info');
}

// Sensor Card Updates
function updateTemperatureCard() {
    const card = document.getElementById('temperatureCard');
    const value = document.getElementById('temperatureValue');
    const temp = DASHBOARD_STATE.isConnected ? DASHBOARD_STATE.sensorData.temperature : DASHBOARD_STATE.lastConnectedData.temperature;
    
    if (temp === null) {
        value.textContent = `-- ${t('celsius')}`;
        card.className = 'sensor-card offline';
        value.className = 'sensor-value offline';
        return;
    }
    
    value.textContent = `${formatNumber(temp)}${t('celsius')}`;
    
    card.className = 'sensor-card';
    value.className = 'sensor-value';
    
    if (!DASHBOARD_STATE.isConnected) {
        card.classList.add('offline');
        value.classList.add('offline');
    } else if (temp > CONFIG.TEMPERATURE.HIGH) {
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
    const humidity = DASHBOARD_STATE.isConnected ? DASHBOARD_STATE.sensorData.humidity : DASHBOARD_STATE.lastConnectedData.humidity;
    
    if (humidity === null) {
        value.textContent = `-- ${t('percent')}`;
        card.className = 'sensor-card offline';
        value.className = 'sensor-value offline';
        return;
    }
    
    value.textContent = `${formatNumber(humidity)}${t('percent')}`;
    
    card.className = 'sensor-card';
    value.className = 'sensor-value';
    
    if (!DASHBOARD_STATE.isConnected) {
        card.classList.add('offline');
        value.classList.add('offline');
    } else if (humidity > CONFIG.HUMIDITY.HIGH) {
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
    const light = DASHBOARD_STATE.isConnected ? DASHBOARD_STATE.sensorData.ldr : DASHBOARD_STATE.lastConnectedData.ldr;
    
    if (light === null) {
        value.textContent = `-- ${t('light')}`;
        card.className = 'sensor-card offline';
        value.className = 'sensor-value offline';
        return;
    }
    
    const lightLevel = getLightLevel(light);
    const lightNumber = formatInteger(light);
    value.textContent = `${lightLevel.text} (${lightNumber})`;
    
    card.className = `sensor-card`;
    value.className = `sensor-value`;
    
    if (!DASHBOARD_STATE.isConnected) {
        card.classList.add('offline');
        value.classList.add('offline');
    } else {
        card.classList.add('normal');
        value.classList.add('normal');
    }
}

function updateDoorCard() {
    const card = document.getElementById('doorCard');
    const value = document.getElementById('doorValue');
    const icon = document.getElementById('doorIconSvg');
    const distance = DASHBOARD_STATE.isConnected ? DASHBOARD_STATE.sensorData.distance_cm : DASHBOARD_STATE.lastConnectedData.distance_cm;
    
    if (distance === null) {
        value.textContent = `-- ${t('door')}`;
        card.className = 'sensor-card offline';
        value.className = 'sensor-value offline';
        return;
    }
    
    const doorStatus = getDoorStatus(distance);
    value.textContent = doorStatus.text;
    
    // Update door icon
    if (doorStatus.class === 'open') {
        icon.innerHTML = `
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8"/>
            <path d="M22 12h-4"/>
            <circle cx="18" cy="12" r="1"/>
        `;
    } else if (doorStatus.class === 'closed') {
        icon.innerHTML = `
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
            <circle cx="15" cy="12" r="1"/>
        `;
    } else {
        icon.innerHTML = `
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
            <path d="M12 8v8"/>
            <path d="M8 12h8"/>
        `;
    }
    
    card.className = `sensor-card`;
    value.className = `sensor-value`;
    
    if (!DASHBOARD_STATE.isConnected) {
        card.classList.add('offline');
        value.classList.add('offline');
    } else if (doorStatus.class === 'open') {
        card.classList.add('danger');
        value.classList.add('danger');
    } else if (doorStatus.class === 'closed') {
        card.classList.add('normal');
        value.classList.add('normal');
    } else {
        card.classList.add('warning');
        value.classList.add('warning');
    }
}

function updateLiveIndicators() {
    const sensors = ['temp', 'humidity', 'light', 'door'];
    
    sensors.forEach(sensor => {
        const liveText = document.getElementById(`${sensor}LiveText`);
        const pulseDot = document.getElementById(`${sensor}PulseDot`);
        
        if (liveText) {
            liveText.textContent = DASHBOARD_STATE.isConnected ? t('live') : t('offline');
        }
        
        if (pulseDot) {
            pulseDot.className = DASHBOARD_STATE.isConnected ? 'pulse-dot' : 'pulse-dot offline';
        }
    });
}

// Clock and Time Functions
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

// Language and Theme Functions
function applyLanguage() {
    document.documentElement.lang = DASHBOARD_STATE.currentLanguage;
    document.documentElement.dir = DASHBOARD_STATE.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    updateTranslatableElements();
    
    localStorage.setItem('dashboard-language', DASHBOARD_STATE.currentLanguage);
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
    
    updateElement('tempMaxLabel', t('max_label'));
    updateElement('tempMinLabel', t('min_label'));
    updateElement('humidityMaxLabel', t('max_label'));
    updateElement('humidityMinLabel', t('min_label'));
    updateElement('lightMaxLabel', t('max_label'));
    updateElement('lightMinLabel', t('min_label'));
    updateElement('doorOpenLabel', t('open_count'));
    updateElement('doorCloseLabel', t('close_count'));
    
    updateElement('tempLastReadingLabel', t('last_reading_before_disconnect'));
    updateElement('humidityLastReadingLabel', t('last_reading_before_disconnect'));
    updateElement('lightLastReadingLabel', t('last_reading_before_disconnect'));
    updateElement('doorLastReadingLabel', t('last_reading_before_disconnect'));
    
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
    updateDailyStatsDisplay();
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
    
    // Force chart redraw
    Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(key => {
        DASHBOARD_STATE.chartNeedsUpdate[key] = true;
    });
    setTimeout(renderCharts, 100);
    
    localStorage.setItem('dashboard-theme', DASHBOARD_STATE.currentTheme);
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
    
    localStorage.setItem('dashboard-mode', DASHBOARD_STATE.currentMode);
}

function updateModeStatus() {
    const statusText = DASHBOARD_STATE.currentMode === 'security' ? t('security_status') : t('normal_status');
    updateElement('modeStatusText', statusText);
}

function updateAllSensorCards() {
    updateTemperatureCard();
    updateHumidityCard();
    updateLightCard();
    updateDoorCard();
}

// Event Listeners Setup
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
    
    const closeZoomModal = document.getElementById('closeZoomModal');
    if (closeZoomModal) {
        closeZoomModal.addEventListener('click', () => {
            document.getElementById('chartZoomModal')?.classList.add('hidden');
        });
    }
    
    const chartZoomModal = document.getElementById('chartZoomModal');
    if (chartZoomModal) {
        chartZoomModal.addEventListener('click', (e) => {
            if (e.target === chartZoomModal) {
                chartZoomModal.classList.add('hidden');
            }
        });
    }
    
    window.addEventListener('beforeunload', () => {
        clearIntervals();
        saveDataToStorage();
    });
    
    window.addEventListener('resize', () => {
        Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(key => {
            DASHBOARD_STATE.chartNeedsUpdate[key] = true;
        });
        setTimeout(renderCharts, 100);
    });
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('chartZoomModal')?.classList.add('hidden');
        }
    });
}

// Interval Management
function startIntervals() {
    clearIntervals();
    
    DASHBOARD_STATE.intervals.clock = setInterval(updateClock, CONFIG.UPDATE_INTERVAL);
    DASHBOARD_STATE.intervals.charts = setInterval(renderCharts, CONFIG.CHART_UPDATE_INTERVAL);
    DASHBOARD_STATE.intervals.save = setInterval(saveDataToStorage, CONFIG.SAVE_INTERVAL);
    DASHBOARD_STATE.intervals.connectionCheck = setInterval(checkConnectionTimeout, CONFIG.UPDATE_INTERVAL);
}

function clearIntervals() {
    Object.values(DASHBOARD_STATE.intervals).forEach(interval => {
        if (interval) clearInterval(interval);
    });
}

function saveDataToStorage() {
    try {
        localStorage.setItem('dashboard-events', JSON.stringify(DASHBOARD_STATE.events));
        localStorage.setItem('dashboard-alerts', JSON.stringify(DASHBOARD_STATE.alerts));
        saveDailyStats();
        Object.keys(DASHBOARD_STATE.chartData).forEach(key => {
            localStorage.setItem(`chart-${key}`, JSON.stringify(DASHBOARD_STATE.chartData[key]));
        });
    } catch (error) {
        logMessage(`Storage error: ${error.message}`, 'error');
    }
}

// Main Initialization
function initDashboard() {
    logMessage('🚀 Initializing Dashboard...', 'info');
    
    checkDailyReset();
    
    // Load saved chart data
    Object.keys(DASHBOARD_STATE.chartData).forEach(key => {
        const saved = localStorage.getItem(`chart-${key}`);
        if (saved) {
            try {
                DASHBOARD_STATE.chartData[key] = JSON.parse(saved).map(item => ({
                    ...item,
                    timestamp: new Date(item.timestamp)
                }));
            } catch (error) {
                logMessage(`Error loading chart data for ${key}: ${error.message}`, 'error');
                DASHBOARD_STATE.chartData[key] = [];
            }
        }
    });
    
    // Load saved events and alerts
    try {
        const savedEvents = localStorage.getItem('dashboard-events');
        if (savedEvents) {
            DASHBOARD_STATE.events = JSON.parse(savedEvents).map(event => ({
                ...event,
                timestamp: new Date(event.timestamp)
            }));
        }
        
        const savedAlerts = localStorage.getItem('dashboard-alerts');
        if (savedAlerts) {
            DASHBOARD_STATE.alerts = JSON.parse(savedAlerts).map(alert => ({
                ...alert,
                timestamp: new Date(alert.timestamp)
            }));
        }
    } catch (error) {
        logMessage(`Error loading events/alerts: ${error.message}`, 'error');
        DASHBOARD_STATE.events = [];
        DASHBOARD_STATE.alerts = [];
    }
    
    // Apply settings
    applyLanguage();
    applyTheme();
    applyMode();
    
    // Initialize UI
    updateClock();
    updateAllSensorCards();
    updateDailyStatsDisplay();
    
    // Mark all charts for update
    Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(key => {
        DASHBOARD_STATE.chartNeedsUpdate[key] = true;
    });
    renderCharts();
    
    updateEventsDisplay();
    updateAlertsDisplay();
    
    // Start Firebase and intervals
    initializeFirebaseListeners();
    startIntervals();
    setupEventListeners();
    
    logMessage('✅ Dashboard initialized successfully!', 'success');
}

// Global function exports for HTML onclick handlers
window.clearAllAlerts = clearAllAlerts;
window.zoomChart = zoomChart;

// Error handling
window.addEventListener('error', (event) => {
    logMessage(`Dashboard Error: ${event.error.message}`, 'error');
});

window.addEventListener('unhandledrejection', (event) => {
    logMessage(`Unhandled Promise Rejection: ${event.reason}`, 'error');
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        initDashboard();
    } catch (error) {
        logMessage(`Failed to initialize dashboard: ${error.message}`, 'error');
        
        // Show error message to user
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
