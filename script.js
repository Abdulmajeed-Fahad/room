/* ===========================
   Firebase Configuration
=========================== */
const firebaseConfig = {
  apiKey: "AIzaSyCNBU0x6NQn9vhUbJa78nHAPXOzZh85p80",
  authDomain: "my-room-8f328.firebaseapp.com",
  databaseURL: "https://my-room-8f328-default-rtdb.firebaseio.com",
  projectId: "my-room-8f328",
  storageBucket: "my-room-8f328.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
};
const firebaseApp = window.firebase;
firebaseApp.initializeApp(firebaseConfig);
const database = firebaseApp.database();

/* ===========================
   Configuration Constants
=========================== */
const CONFIG = {
  USER_UID: "XjMYPsQpMVXEiCQYecoBBR8Sxto1",
  TEMPERATURE: { HIGH: 30, LOW: 18 },
  HUMIDITY: { HIGH: 70, LOW: 5 },
  LIGHT: { NONE: 500, DIM: 1500, MEDIUM: 2500, BRIGHT: 3500 },
  DOOR: { MIN_CLOSED: 110, MAX_CLOSED: 130 },
  CHART_MAX_POINTS: 15,
  UPDATE_INTERVAL: 1000,
  CHART_UPDATE_INTERVAL: 2000,
  SAVE_INTERVAL: 30000,
  CONNECTION_TIMEOUT: 10000,
};

/* ===========================
   Translations
=========================== */
const TRANSLATIONS = {
  ar: {
    welcome: "أهلاً",
    dashboard_title: "لوحة مراقبة غرفة عبدالمجيد",
    normal_mode: "الوضع العادي",
    security_mode: "وضع الأمان",
    normal_status: "الوضع العادي نشط",
    security_status: "وضع الأمان نشط - جاري المراقبة",
    temperature: "درجة الحرارة",
    humidity: "الرطوبة",
    light: "الإضاءة",
    door: "حالة الباب",
    celsius: "°م",
    percent: "%",
    live: "مباشر",
    offline: "غير متصل",
    connected: "متصل",
    connecting: "جاري الاتصال",
    disconnected: "منقطع",
    last_reading_before_disconnect: "آخر قراءة قبل انقطاع الاتصال",
    light_none: "لا يوجد ضوء",
    light_dim: "ضوء خفيف",
    light_medium: "ضوء متوسط",
    light_bright: "ضوء قوي",
    light_very_bright: "ضوء ساطع جداً",
    door_closed: "مغلق",
    door_open: "مفتوح",
    door_sensor_error: "خطأ بالحساس",
    events_log: "سجل الأحداث",
    security_alert: "تنبيه أمني",
    clear_alerts: "مسح الكل",
    no_events: "لا توجد أحداث مسجلة",
    no_alerts: "لا توجد تنبيهات نشطة",
    charts_title: "الرسوم البيانية ",
    temperature_chart: "درجة الحرارة",
    humidity_chart: "الرطوبة",
    light_chart: "الإضاءة",
    door_chart: "حالة الباب",
    at_time: "في",
    max_label: "أعلى:",
    min_label: "أدنى:",
    open_count: "فتح:",
    close_count: "إغلاق:",
    times: "مرة",
    changed_to: "تغير إلى",
    door_opened: "تم فتح الباب",
    door_closed_event: "تم إغلاق الباب",
    door_error: " حساس الباب",
    temp_high: "درجة حرارة مرتفعة",
    temp_low: "درجة حرارة منخفضة",
    humidity_high: "رطوبة مرتفعة",
    humidity_low: "رطوبة منخفضة جداً",
    light_changed: "تغير في الإضاءة",
    footer_html: `صنع بواسطة <a href="https://www.linkedin.com/in/abdulmajeed-al-shammari-2625a3287/" target="_blank" rel="noopener">عبدالمجيد الشمري</a>`
  },
  en: {
    welcome: "Welcome",
    dashboard_title: "Abdulmajeed's Room Monitoring Dashboard",
    normal_mode: "Normal Mode",
    security_mode: "Security Mode",
    normal_status: "Normal mode active",
    security_status: "Security mode active - Monitoring",
    temperature: "Temperature",
    humidity: "Humidity",
    light: "Light",
    door: "Door Status",
    celsius: "°C",
    percent: "%",
    live: "Live",
    offline: "Offline",
    connected: "Connected",
    connecting: "Connecting",
    disconnected: "Disconnected",
    last_reading_before_disconnect: "Last reading before disconnect",
    light_none: "No Light",
    light_dim: "Dim Light",
    light_medium: "Medium Light",
    light_bright: "Bright Light",
    light_very_bright: "Very Bright Light",
    door_closed: "Closed",
    door_open: "Open",
    door_sensor_error: "Sensor Error",
    events_log: "Events Log",
    security_alert: "Security Alert",
    clear_alerts: "Clear All",
    no_events: "No active events",
    no_alerts: "No active alerts",
    charts_title: "Charts",
    temperature_chart: "Temperature",
    humidity_chart: "Humidity",
    light_chart: "Light",
    door_chart: "Door Status",
    at_time: "at",
    max_label: "Max:",
    min_label: "Min:",
    open_count: "Open:",
    close_count: "Close:",
    times: "times",
    changed_to: "Changed to",
    door_opened: "Door opened",
    door_closed_event: "Door closed",
    door_error: "Door sensor error",
    temp_high: "High temperature",
    temp_low: "Low temperature",
    humidity_high: "High humidity",
    humidity_low: "Very low humidity",
    light_changed: "Light changed",
    footer_html: `Built by <a href="https://www.linkedin.com/in/abdulmajeed-al-shammari-2625a3287/" target="_blank" rel="noopener">Abdulmajeed Al-Shammari</a>`
  },
};

/* ===========================
   Global State
=========================== */
const DASHBOARD_STATE = {
  currentLanguage: localStorage.getItem("dashboard-language") || "ar",
  currentTheme: localStorage.getItem("dashboard-theme") || "light",
  currentMode: localStorage.getItem("dashboard-mode") || "normal",
  isConnected: false,
  lastDataUpdate: null,
  sensorData: { temperature: null, humidity: null, ldr: null, distance_cm: null },
  lastConnectedData: { temperature: null, humidity: null, ldr: null, distance_cm: null },
  dailyStats: JSON.parse(
    localStorage.getItem("daily-stats") ||
      JSON.stringify({
        temperature: { max: null, min: null },
        humidity: { max: null, min: null },
        light: { max: null, min: null },
        door: { openCount: 0, closeCount: 0 },
      })
  ),
  events: JSON.parse(localStorage.getItem("dashboard-events") || "[]"),
  alerts: JSON.parse(localStorage.getItem("dashboard-alerts") || "[]"),
  chartData: {
    temperature: JSON.parse(localStorage.getItem("chart-temperature") || "[]"),
    humidity: JSON.parse(localStorage.getItem("chart-humidity") || "[]"),
    light: JSON.parse(localStorage.getItem("chart-light") || "[]"),
    door: JSON.parse(localStorage.getItem("chart-door") || "[]"),
  },
  intervals: { clock: null, charts: null, save: null, connectionCheck: null },
  lastDoorState: null,
  lastLightLevel: null,
  lastAlertTime: { temperature: null, humidity: null, light: null, door: null },
  lastResetDate: localStorage.getItem("last-reset-date") || new Date().toDateString(),
  chartNeedsUpdate: { temperature: true, humidity: true, light: true, door: true },
};

/* ===========================
   Utils
=========================== */
function t(key) { return TRANSLATIONS[DASHBOARD_STATE.currentLanguage][key] || key; }
function updateFooterByLanguage(){
  const el=document.getElementById("footerText");
  if (el) el.innerHTML = TRANSLATIONS[DASHBOARD_STATE.currentLanguage].footer_html;
}
function formatTime(date){
  return date.toLocaleTimeString(DASHBOARD_STATE.currentLanguage==="ar"?"ar-SA":"en-US",{hour:"2-digit",minute:"2-digit",hour12:DASHBOARD_STATE.currentLanguage==="en"});
}
function formatDateTime(date){
  const d=date.toLocaleDateString(DASHBOARD_STATE.currentLanguage==="ar"?"ar-SA":"en-US",{year:"numeric",month:"2-digit",day:"2-digit"});
  return `${d} ${formatTime(date)}`;
}
function formatNumber(n,dec=1){
  if (DASHBOARD_STATE.currentLanguage==="ar") return n.toFixed(dec).replace(".", "٫").replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]);
  return n.toFixed(dec);
}
function formatInteger(n){
  if (DASHBOARD_STATE.currentLanguage==="ar") return String(n).replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]);
  return String(n);
}
function logMessage(msg,type="info"){
  const ts=new Date().toLocaleTimeString();
  const p= type==="error"?"❌":type==="success"?"✅":"ℹ️";
  console.log(`${p} [${ts}] ${msg}`);
}
const crisp=(v)=>Math.round(v)+.5;
function withAlpha(hex, a=0.5){
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if(!m) return hex;
  const r=parseInt(m[1],16), g=parseInt(m[2],16), b=parseInt(m[3],16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ===========================
   Connection Management
=========================== */
function checkConnectionTimeout(){
  if (!DASHBOARD_STATE.lastDataUpdate) return;
  const since = Date.now()-DASHBOARD_STATE.lastDataUpdate;
  if (since>CONFIG.CONNECTION_TIMEOUT && DASHBOARD_STATE.isConnected){
    DASHBOARD_STATE.lastConnectedData = { ...DASHBOARD_STATE.sensorData };
    updateConnectionStatus("disconnected");
    showLastReadingInfo();
  }
}
function resetConnectionTimeout(){
  DASHBOARD_STATE.lastDataUpdate=Date.now();
  if (!DASHBOARD_STATE.isConnected){ updateConnectionStatus("connected"); hideLastReadingInfo(); }
}
function updateConnectionStatus(status){
  DASHBOARD_STATE.isConnected = status==="connected";
  const ind=document.getElementById("statusIndicator");
  const txt=document.getElementById("statusText");
  if (ind && txt){ ind.className=`status-indicator ${status}`; txt.textContent=t(status); }
  updateLiveIndicators();
}

/* ===========================
   Daily Stats
=========================== */
function showLastReadingInfo(){
  ["temp","humidity","light","door"].forEach(s=>{
    const el=document.getElementById(`${s}LastReading`);
    const lbl=document.getElementById(`${s}LastReadingLabel`);
    if(el&&lbl){ el.classList.remove("hidden"); lbl.textContent=t("last_reading_before_disconnect"); }
  });
}
function hideLastReadingInfo(){ ["temp","humidity","light","door"].forEach(s=>document.getElementById(`${s}LastReading`)?.classList.add("hidden")); }
function checkDailyReset(){
  const today=new Date().toDateString();
  if (DASHBOARD_STATE.lastResetDate!==today){
    resetDailyStats();
    DASHBOARD_STATE.lastResetDate=today;
    localStorage.setItem("last-reset-date", today);
  }
}
function resetDailyStats(){
  DASHBOARD_STATE.dailyStats={temperature:{max:null,min:null},humidity:{max:null,min:null},light:{max:null,min:null},door:{openCount:0,closeCount:0}};
  DASHBOARD_STATE.chartData={temperature:[],humidity:[],light:[],door:[]};
  saveDailyStats();
  Object.keys(DASHBOARD_STATE.chartData).forEach(k=>localStorage.setItem(`chart-${k}`,JSON.stringify(DASHBOARD_STATE.chartData[k])));
  updateDailyStatsDisplay();
}
function saveDailyStats(){ localStorage.setItem("daily-stats", JSON.stringify(DASHBOARD_STATE.dailyStats)); }
function updateDailyStats(type,val){
  const v=parseFloat(val);
  if(["temperature","humidity","light"].includes(type)){
    if (DASHBOARD_STATE.dailyStats[type].max===null || v>DASHBOARD_STATE.dailyStats[type].max) DASHBOARD_STATE.dailyStats[type].max=v;
    if (DASHBOARD_STATE.dailyStats[type].min===null || v<DASHBOARD_STATE.dailyStats[type].min) DASHBOARD_STATE.dailyStats[type].min=v;
  }
  updateDailyStatsDisplay(); saveDailyStats();
}
function updateDailyStatsDisplay(){
  const ds=DASHBOARD_STATE.dailyStats;
  updateElement("tempMaxValue", ds.temperature.max!==null?`${formatNumber(ds.temperature.max)}${t("celsius")}`:"--");
  updateElement("tempMinValue", ds.temperature.min!==null?`${formatNumber(ds.temperature.min)}${t("celsius")}`:"--");
  updateElement("humidityMaxValue", ds.humidity.max!==null?`${formatNumber(ds.humidity.max)}${t("percent")}`:"--");
  updateElement("humidityMinValue", ds.humidity.min!==null?`${formatNumber(ds.humidity.min)}${t("percent")}`:"--");
  updateElement("lightMaxValue", ds.light.max!==null?formatInteger(Math.round(ds.light.max)):"--");
  updateElement("lightMinValue", ds.light.min!==null?formatInteger(Math.round(ds.light.min)):"--");
  updateElement("doorOpenCount", `${formatInteger(ds.door.openCount)} ${t("times")}`);
  updateElement("doorCloseCount", `${formatInteger(ds.door.closeCount)} ${t("times")}`);
}

/* ===========================
   Sensor helpers
=========================== */
function getLightLevel(ldr){
  if (ldr<=CONFIG.LIGHT.NONE) return {text:t("light_none"), class:"none"};
  if (ldr<=CONFIG.LIGHT.DIM) return {text:t("light_dim"), class:"dim"};
  if (ldr<=CONFIG.LIGHT.MEDIUM) return {text:t("light_medium"), class:"medium"};
  if (ldr<=CONFIG.LIGHT.BRIGHT) return {text:t("light_bright"), class:"bright"};
  return {text:t("light_very_bright"), class:"very_bright"};
}
function getDoorStatus(distance){
  if (distance===null || distance===-1) return {text:t("door_sensor_error"), class:"error"};
  if (distance>=CONFIG.DOOR.MIN_CLOSED && distance<=CONFIG.DOOR.MAX_CLOSED) return {text:t("door_closed"), class:"closed"};
  return {text:t("door_open"), class:"open"};
}

/* ===========================
   Chart data helpers
=========================== */
const lastN = (arr,n)=>arr.slice(Math.max(arr.length-n,0));

function shouldAddToChart(type, value){
  const arr=DASHBOARD_STATE.chartData[type];
  const last=arr[arr.length-1];
  if (!last) return true;
  if (type==="door") return last.value!==value;         // تخزين تغيّر الحالة فقط
  const th= type==="light" ? 50 : 0.5;
  return Math.abs(last.value-value)>=th;
}
function addToChart(type, value, timestamp=null){
  const now=timestamp || new Date();
  DASHBOARD_STATE.chartData[type].push({ value, timestamp: now });
  // قصّ صارم لآخر 15
  DASHBOARD_STATE.chartData[type] = lastN(DASHBOARD_STATE.chartData[type], CONFIG.CHART_MAX_POINTS);
  localStorage.setItem(`chart-${type}`, JSON.stringify(DASHBOARD_STATE.chartData[type]));
}

/* خصيصًا للباب: نخزن تغيّر الحالة فقط (بدون تكرار) ونُبقي آخر 15 تغيّر */
function compressSeries(arr){
  if (!arr || arr.length===0) return [];
  const out=[arr[0]];
  for (let i=1;i<arr.length;i++){
    if (arr[i].value!==arr[i-1].value) out.push(arr[i]);
  }
  return out;
}
function pushDoorChange(val, ts=new Date()){
  const arr=DASHBOARD_STATE.chartData.door;
  const last = arr[arr.length-1];
  if (!last || last.value!==val){
    arr.push({ value: val, timestamp: ts });
    const compressed = compressSeries(arr);
    DASHBOARD_STATE.chartData.door = lastN(compressed, CONFIG.CHART_MAX_POINTS);
    localStorage.setItem("chart-door", JSON.stringify(DASHBOARD_STATE.chartData.door));
  }
}

/* ===========================
   Charts rendering
=========================== */
function renderCharts(){
  Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(type=>{
    if (!DASHBOARD_STATE.chartNeedsUpdate[type]) return;

    let toDraw = DASHBOARD_STATE.chartData[type]||[];
    if (type==="door"){
      toDraw = lastN(compressSeries(toDraw), CONFIG.CHART_MAX_POINTS);
      drawDoorChartSmooth(
        "doorChart",
        toDraw,
        getComputedStyle(document.body).getPropertyValue('--door').trim() || "#0ea5e9",
        t("door_chart")
      );
    } else {
      toDraw = lastN(toDraw, CONFIG.CHART_MAX_POINTS); // تأكيد آخر 15 قراءة
      const cs = getComputedStyle(document.body);
      const colors={
        temperature: cs.getPropertyValue('--temperature').trim() || "#3b82f6",
        humidity:    cs.getPropertyValue('--humidity').trim()    || "#10b981",
        light:       cs.getPropertyValue('--light').trim()       || "#8b5cf6"
      };
      const units={temperature:t("celsius"), humidity:t("percent"), light:""};
      drawSmoothChart(`${type}Chart`, toDraw, colors[type], units[type], t(`${type}_chart`));
    }

    DASHBOARD_STATE.chartNeedsUpdate[type]=false;
  });
}

/* منحنى سلس (Catmull-Rom -> Bezier) للحرارة/الرطوبة/الإضاءة */
function drawSmoothChart(canvasId, data, color, unit, title){
  const canvas=document.getElementById(canvasId);
  if (!canvas) return;
  const ctx=canvas.getContext("2d");
  const rect=canvas.getBoundingClientRect();
  const dpr=window.devicePixelRatio||1;
  canvas.width=rect.width*dpr; canvas.height=rect.height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);

  const width=rect.width, height=rect.height;
  const padding=80, chartW=width-2*padding, chartH=height-2*padding;

  ctx.clearRect(0,0,width,height);
  const isDark=DASHBOARD_STATE.currentTheme==="dark";
  ctx.fillStyle=isDark?"#1e293b":"#ffffff"; ctx.fillRect(0,0,width,height);

  // Grid (نصف-بيكسل)
  ctx.strokeStyle=isDark?"#475569":"#e2e8f0"; ctx.lineWidth=1; ctx.setLineDash([3,3]);
  for(let i=0;i<=5;i++){ const y=padding+(chartH*i)/5; ctx.beginPath(); ctx.moveTo(padding,crisp(y)); ctx.lineTo(width-padding,crisp(y)); ctx.stroke(); }
  ctx.setLineDash([]);

  const series = lastN(data, CONFIG.CHART_MAX_POINTS);
  if (series.length===0){ canvas.onmousemove=null; canvas.onmouseleave=null; return; }

  const values=series.map(d=>d.value);
  const minV=Math.min(...values), maxV=Math.max(...values); const range=maxV-minV||1;

  const pts=series.map((pt,i)=>({
    x: padding + (chartW*i)/Math.max(series.length-1,1),
    y: padding + chartH - ((pt.value-minV)/range)*chartH,
    raw: pt
  }));

  // Area
  if (pts.length>=2){
    const grad=ctx.createLinearGradient(0,padding,0,height-padding);
    grad.addColorStop(0,withAlpha(color,.18)); grad.addColorStop(1,withAlpha(color,.03));
    ctx.fillStyle=grad; ctx.beginPath();
    ctx.moveTo(pts[0].x, height-padding);
    ctx.lineTo(pts[0].x, pts[0].y);
    for(let i=0;i<pts.length-1;i++){
      const p0=pts[i-1]||pts[i], p1=pts[i], p2=pts[i+1], p3=pts[i+2]||p2;
      const t=1;
      const cp1x=p1.x+((p2.x-p0.x)/6)*t, cp1y=p1.y+((p2.y-p0.y)/6)*t;
      const cp2x=p2.x-((p3.x-p1.x)/6)*t, cp2y=p2.y-((p3.y-p1.y)/6)*t;
      ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,p2.x,p2.y);
    }
    ctx.lineTo(pts[pts.length-1].x, height-padding); ctx.closePath(); ctx.fill();
  }

  // Line
  if (pts.length>=2){
    ctx.strokeStyle=color; ctx.lineWidth=3; ctx.lineCap="round"; ctx.lineJoin="round";
    ctx.beginPath(); ctx.moveTo(pts[0].x,pts[0].y);
    for(let i=0;i<pts.length-1;i++){
      const p0=pts[i-1]||pts[i], p1=pts[i], p2=pts[i+1], p3=pts[i+2]||p2;
      const t=1;
      const cp1x=p1.x+((p2.x-p0.x)/6)*t, cp1y=p1.y+((p2.y-p0.y)/6)*t;
      const cp2x=p2.x-((p3.x-p1.x)/6)*t, cp2y=p2.y-((p3.y-p1.y)/6)*t;
      ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,p2.x,p2.y);
    }
    ctx.stroke();
  }

  // Points
  ctx.strokeStyle=isDark?"#1e293b":"#ffffff";
  for(let i=0;i<pts.length;i++){
    const p=pts[i], isLast=i===pts.length-1, r=isLast?6:3.5;
    ctx.fillStyle=isLast?color:withAlpha(color,.65);
    ctx.lineWidth=2; ctx.beginPath(); ctx.arc(p.x,p.y,r,0,Math.PI*2); ctx.fill(); ctx.stroke();
  }

  // Y labels على الحافة، محاذاة صحيحة (لا فوق الرسم)
  const isAr=DASHBOARD_STATE.currentLanguage==="ar";
  ctx.fillStyle=isDark?"#e2e8f0":"#64748b"; ctx.font="12px Cairo, system-ui, sans-serif";
  ctx.textBaseline="middle";
  if (isAr){ ctx.textAlign="left"; }
  else { ctx.textAlign="right"; }
  const labelX = isAr ? (width - padding + 10) : (padding - 10);
  for(let i=0;i<=5;i++){
    const val=minV + (range*(5-i))/5; const y=padding + (chartH*i)/5;
    const label = canvasId==="lightChart" ? getLightLevel(val).text : `${formatNumber(val)}${unit}`;
    ctx.fillText(label, labelX, y);
  }

  // Tooltip (الإضاءة: حالة فقط)
  canvas.__points=pts;
  canvas.onmousemove=(evt)=>{
    const r=canvas.getBoundingClientRect(); const mx=evt.clientX-r.left;
    let found=null; for(const p of canvas.__points){ if (Math.abs(mx-p.x)<=8){ found=p; break; } }
    if (found){
      canvas.style.cursor="pointer";
      const display = canvasId==="lightChart" ? `${getLightLevel(found.raw.value).text}` : `${formatNumber(found.raw.value)}${unit}`;
      showTooltip(evt.clientX, evt.clientY, title, display, found.raw.timestamp);
    } else { canvas.style.cursor="default"; hideTooltip(); }
  };
  canvas.onmouseleave=()=>{ hideTooltip(); canvas.style.cursor="default"; };
}

/* الباب: منحنى سلس + آخر 15 تغيّر مميّز فقط */
function drawDoorChartSmooth(canvasId, data, color, title){
  const canvas=document.getElementById(canvasId); if(!canvas) return;
  const ctx=canvas.getContext("2d");
  const rect=canvas.getBoundingClientRect(); const dpr=window.devicePixelRatio||1;
  canvas.width=rect.width*dpr; canvas.height=rect.height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);

  const width=rect.width, height=rect.height, padding=80, chartW=width-2*padding, chartH=height-2*padding;
  ctx.clearRect(0,0,width,height);
  const isDark=DASHBOARD_STATE.currentTheme==="dark";
  ctx.fillStyle=isDark?"#1e293b":"#ffffff"; ctx.fillRect(0,0,width,height);

  // Grid
  ctx.strokeStyle=isDark?"#475569":"#e2e8f0"; ctx.lineWidth=1; ctx.setLineDash([3,3]);
  for(let i=0;i<=2;i++){ const y=padding+(chartH*i)/2; ctx.beginPath(); ctx.moveTo(padding,crisp(y)); ctx.lineTo(width-padding,crisp(y)); ctx.stroke(); }
  ctx.setLineDash([]);

  const series = lastN(compressSeries(data), CONFIG.CHART_MAX_POINTS);
  if (series.length===0){ canvas.onmousemove=null; canvas.onmouseleave=null; return; }

  const marginY=24;
  const topY=padding+marginY;           // open
  const botY=padding+chartH-marginY;    // closed
  const midY=(topY+botY)/2;             // error
  const valY=(v)=> v===1 ? topY : v===0 ? botY : midY;

  const pts=series.map((pt,i)=>({
    x: padding + (chartW*i)/Math.max(series.length-1,1),
    y: valY(pt.value),
    raw: pt
  }));

  // Smooth path
  if (pts.length>=2){
    ctx.strokeStyle=color; ctx.lineWidth=3; ctx.lineCap="round"; ctx.lineJoin="round";
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for(let i=0;i<pts.length-1;i++){
      const p0=pts[i-1]||pts[i], p1=pts[i], p2=pts[i+1], p3=pts[i+2]||p2;
      const t=1;
      const cp1x=p1.x+((p2.x-p0.x)/6)*t, cp1y=p1.y+((p2.y-p0.y)/6)*t;
      const cp2x=p2.x-((p3.x-p1.x)/6)*t, cp2y=p2.y-((p3.y-p1.y)/6)*t;
      ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,p2.x,p2.y);
    }
    ctx.stroke();
  }

  // نقاط (لون حسب الحالة)
  ctx.strokeStyle=isDark?"#1e293b":"#ffffff";
  for (let i=0;i<pts.length;i++){
    const p=pts[i], isLast=i===pts.length-1, r=isLast?8:5;
    const col = p.raw.value===1 ? "#3b82f6" : p.raw.value===0 ? "#10b981" : "#8b5cf6";
    ctx.fillStyle = isLast ? col : withAlpha(col,.7);
    ctx.lineWidth=2; ctx.beginPath(); ctx.arc(p.x,p.y,r,0,Math.PI*2); ctx.fill(); ctx.stroke();
  }

  // Y labels على الحافة، محاذاة صحيحة
  const isAr=DASHBOARD_STATE.currentLanguage==="ar";
  ctx.fillStyle=isDark?"#e2e8f0":"#64748b"; ctx.font="12px Cairo, system-ui, sans-serif";
  ctx.textBaseline="middle";
  if (isAr){ ctx.textAlign="left"; }
  else { ctx.textAlign="right"; }
  const labelX = isAr ? (width - padding + 10) : (padding - 10);
  ctx.fillText(t("door_open"), labelX, topY);
  ctx.fillText(t("door_sensor_error"), labelX, midY);
  ctx.fillText(t("door_closed"), labelX, botY);

  // Tooltip
  canvas.__points=pts;
  canvas.onmousemove=(evt)=>{
    const r=canvas.getBoundingClientRect(); const mx=evt.clientX-r.left;
    let found=null; for(const p of canvas.__points){ if (Math.abs(mx-p.x)<=8){ found=p; break; } }
    if (found){
      canvas.style.cursor="pointer";
      const status = found.raw.value===1 ? t("door_opened") : found.raw.value===0 ? t("door_closed_event") : t("door_error");
      showTooltip(evt.clientX, evt.clientY, title, `${t("changed_to")} ${status}`, found.raw.timestamp);
    } else { canvas.style.cursor="default"; hideTooltip(); }
  };
  canvas.onmouseleave=()=>{ hideTooltip(); canvas.style.cursor="default"; };
}

/* Tooltip UI */
function showTooltip(x,y,title,value,time){
  const tip=document.getElementById("chartTooltip");
  document.getElementById("tooltipTitle").textContent=title;
  document.getElementById("tooltipValue").textContent=value;
  document.getElementById("tooltipTime").textContent=`${t("at_time")} ${formatDateTime(time)}`;
  let tx=x+10, ty=y-10, vw=window.innerWidth;
  if (tx+260>vw) tx=x-270;
  tip.style.left=`${tx}px`; tip.style.top=`${ty}px`; tip.classList.remove("hidden");
}
function hideTooltip(){ document.getElementById("chartTooltip")?.classList.add("hidden"); }

/* ===========================
   Security / Events
=========================== */
function getEventIcon(type){
  const icons = {
    temperature:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>`,
    humidity:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    light:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    door:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><circle cx="15" cy="12" r="1"/></svg>`,
  };
  return icons[type] || icons.door;
}
function checkForEvent(type,severity,message){
  const now=new Date(); const last=DASHBOARD_STATE.events[0];
  if (last && last.type===type && last.severity===severity && now-new Date(last.timestamp)<30000) return;
  const event={ id:Date.now().toString(), type, message, timestamp:now, severity, icon:getEventIcon(type) };
  DASHBOARD_STATE.events.unshift(event); DASHBOARD_STATE.events=DASHBOARD_STATE.events.slice(0,50);

  if (DASHBOARD_STATE.currentMode==="security" && ((type==="light"&&severity==="high")||(type==="door"&&severity==="high"))){
    DASHBOARD_STATE.alerts.unshift(event); showAlertBanner(message);
  }
  updateEventsDisplay(); updateAlertsDisplay();
  localStorage.setItem("dashboard-events", JSON.stringify(DASHBOARD_STATE.events));
  localStorage.setItem("dashboard-alerts", JSON.stringify(DASHBOARD_STATE.alerts));
}
function showAlertBanner(msg){
  const b=document.getElementById("alertBanner"); document.getElementById("alertMessage").textContent=`${t("security_alert")}: ${msg}`;
  b.classList.remove("hidden"); setTimeout(()=>b.classList.add("hidden"),5000);
}
function updateEventsDisplay(){
  const list=document.getElementById("eventsList");
  if (DASHBOARD_STATE.events.length===0){ list.innerHTML=`<div class="no-events">${t("no_events")}</div>`; return; }
  list.innerHTML = DASHBOARD_STATE.events.slice(0,18).map(ev=>`
    <div class="event-item ${ev.type}">
      <div class="event-icon">${ev.icon}</div>
      <div class="event-content">
        <div class="event-message">${ev.message}</div>
        <div class="event-time">${formatDateTime(new Date(ev.timestamp))}</div>
      </div>
    </div>`).join("");
}
function updateAlertsDisplay(){
  const list=document.getElementById("alertsList"); const clearBtn=document.getElementById("clearAllAlerts");
  if (DASHBOARD_STATE.alerts.length===0){ list.innerHTML=`<div class="no-alerts">${t("no_alerts")}</div>`; clearBtn.classList.add("hidden"); return; }
  clearBtn.classList.remove("hidden");
  list.innerHTML = DASHBOARD_STATE.alerts.map(al=>`
    <div class="alert-item ${al.type}">
      <div class="event-icon">${al.icon}</div>
      <div class="event-content">
        <div class="event-message">${al.message}</div>
        <div class="event-time">${formatDateTime(new Date(al.timestamp))}</div>
      </div>
    </div>`).join("");
}
function clearAllAlerts(){ DASHBOARD_STATE.alerts=[]; updateAlertsDisplay(); localStorage.setItem("dashboard-alerts", JSON.stringify([])); }

/* ===========================
   Cards UI
=========================== */
function updateElement(id,text){ const el=document.getElementById(id); if (el) el.textContent=text; }
function updateLiveIndicators(){
  ["temp","humidity","light","door"].forEach(s=>{
    const lt=document.getElementById(`${s}LiveText`); const dot=document.getElementById(`${s}PulseDot`);
    if (lt) lt.textContent=DASHBOARD_STATE.isConnected?t("live"):t("offline");
    if (dot) dot.className=DASHBOARD_STATE.isConnected?"pulse-dot":"pulse-dot offline";
  });
}
function updateTemperatureCard(){
  const card=document.getElementById("temperatureCard"), value=document.getElementById("temperatureValue");
  const temp = DASHBOARD_STATE.isConnected ? DASHBOARD_STATE.sensorData.temperature : DASHBOARD_STATE.lastConnectedData.temperature;
  if (temp===null){ value.textContent=`-- ${t("celsius")}`; card.className="sensor-card offline"; value.className="sensor-value offline"; return; }
  value.textContent=`${formatNumber(temp)}${t("celsius")}`; card.className="sensor-card"; value.className="sensor-value";
  if (!DASHBOARD_STATE.isConnected){ card.classList.add("offline"); value.classList.add("offline"); }
  else { card.classList.add("normal"); value.classList.add("normal"); }
}
function updateHumidityCard(){
  const card=document.getElementById("humidityCard"), value=document.getElementById("humidityValue");
  const h = DASHBOARD_STATE.isConnected ? DASHBOARD_STATE.sensorData.humidity : DASHBOARD_STATE.lastConnectedData.humidity;
  if (h===null){ value.textContent=`-- ${t("percent")}`; card.className="sensor-card offline"; value.className="sensor-value offline"; return; }
  value.textContent=`${formatNumber(h)}${t("percent")}`; card.className="sensor-card"; value.className="sensor-value";
  if (!DASHBOARD_STATE.isConnected){ card.classList.add("offline"); value.classList.add("offline"); }
  else { card.classList.add("normal"); value.classList.add("normal"); }
}
function updateLightCard(){
  const card=document.getElementById("lightCard"), value=document.getElementById("lightValue");
  const light = DASHBOARD_STATE.isConnected ? DASHBOARD_STATE.sensorData.ldr : DASHBOARD_STATE.lastConnectedData.ldr;
  if (light===null){ value.textContent=`--`; card.className="sensor-card offline"; value.className="sensor-value offline"; return; }
  const lvl=getLightLevel(light);
  value.textContent = lvl.text; // حالة فقط
  card.className="sensor-card"; value.className="sensor-value";
  if (!DASHBOARD_STATE.isConnected){ card.classList.add("offline"); value.classList.add("offline"); }
  else { card.classList.add("normal"); value.classList.add("normal"); }
}
function updateDoorCard(){
  const card=document.getElementById("doorCard"), value=document.getElementById("doorValue"), icon=document.getElementById("doorIconSvg");
  const dist = DASHBOARD_STATE.isConnected ? DASHBOARD_STATE.sensorData.distance_cm : DASHBOARD_STATE.lastConnectedData.distance_cm;
  if (dist===null){ value.textContent=`--`; card.className="sensor-card offline"; value.className="sensor-value offline"; return; }
  const st=getDoorStatus(dist); value.textContent=st.text;

  if (st.class==="open"){
    icon.innerHTML=`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8"/><path d="M22 12h-4"/><circle cx="18" cy="12" r="1"/>`;
  } else if (st.class==="closed"){
    icon.innerHTML=`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><circle cx="15" cy="12" r="1"/>`;
  } else {
    icon.innerHTML=`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><path d="M12 8v8"/><path d="M8 12h8"/>`;
  }

  card.className="sensor-card"; value.className="sensor-value";
  if (!DASHBOARD_STATE.isConnected){ card.classList.add("offline"); value.classList.add("offline"); }
  else { card.classList.add("normal"); value.classList.add("normal"); }
}
function updateAllSensorCards(){ updateTemperatureCard(); updateHumidityCard(); updateLightCard(); updateDoorCard(); }

/* ===========================
   Clock / Language / Theme / Mode
=========================== */
function updateClock(){
  const now=new Date();
  const str=now.toLocaleTimeString(DASHBOARD_STATE.currentLanguage==="ar"?"ar-SA":"en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:DASHBOARD_STATE.currentLanguage==="en"});
  updateElement("digitalClock", str);
}
function updateTranslatableElements(){
  updateElement("welcomeText", t("welcome"));
  updateElement("dashboardTitle", t("dashboard_title"));
  updateElement("langText", DASHBOARD_STATE.currentLanguage==="ar"?"EN":"عر");
  updateElement("normalModeText", t("normal_mode"));
  updateElement("securityModeText", t("security_mode"));

  updateElement("tempTitle", t("temperature"));
  updateElement("humidityTitle", t("humidity"));
  updateElement("lightTitle", t("light"));
  updateElement("doorTitle", t("door"));

  updateElement("tempMaxLabel", t("max_label"));
  updateElement("tempMinLabel", t("min_label"));
  updateElement("humidityMaxLabel", t("max_label"));
  updateElement("humidityMinLabel", t("min_label"));
  updateElement("lightMaxLabel", t("max_label"));
  updateElement("lightMinLabel", t("min_label"));
  updateElement("doorOpenLabel", t("open_count"));
  updateElement("doorCloseLabel", t("close_count"));

  updateElement("tempLastReadingLabel", t("last_reading_before_disconnect"));
  updateElement("humidityLastReadingLabel", t("last_reading_before_disconnect"));
  updateElement("lightLastReadingLabel", t("last_reading_before_disconnect"));
  updateElement("doorLastReadingLabel", t("last_reading_before_disconnect"));

  updateElement("eventsLogTitle", t("events_log"));
  updateElement("alertsTitle", t("security_alert"));
  updateElement("clearAllAlerts", t("clear_alerts"));

  updateElement("chartsTitle", t("charts_title"));
  updateElement("tempChartTitle", t("temperature_chart"));
  updateElement("humidityChartTitle", t("humidity_chart"));
  updateElement("lightChartTitle", t("light_chart"));
  updateElement("doorChartTitle", t("door_chart"));

  updateModeStatus(); updateLiveIndicators(); updateAllSensorCards(); updateDailyStatsDisplay(); updateEventsDisplay(); updateAlertsDisplay();
  updateFooterByLanguage();
}
function applyLanguage(){
  document.documentElement.lang=DASHBOARD_STATE.currentLanguage;
  document.documentElement.dir=DASHBOARD_STATE.currentLanguage==="ar"?"rtl":"ltr";
  Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(k=>DASHBOARD_STATE.chartNeedsUpdate[k]=true);
  setTimeout(renderCharts,0);
  updateConnectionStatus(DASHBOARD_STATE.isConnected?"connected":"disconnected");
  localStorage.setItem("dashboard-language", DASHBOARD_STATE.currentLanguage);
  updateTranslatableElements();
}
function applyTheme(){
  document.body.setAttribute("data-theme", DASHBOARD_STATE.currentTheme);
  Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(k=>DASHBOARD_STATE.chartNeedsUpdate[k]=true);
  setTimeout(renderCharts,100);
  localStorage.setItem("dashboard-theme", DASHBOARD_STATE.currentTheme);
}
function applyMode(){
  const normal=document.getElementById("normalMode"), sec=document.getElementById("securityMode");
  const card=document.getElementById("modeToggleCard"), section=document.getElementById("roomStatusSection"), mstat=document.querySelector(".mode-status");
  if (DASHBOARD_STATE.currentMode==="normal"){ normal?.classList.add("active"); sec?.classList.remove("security-active"); card?.classList.remove("security-mode"); section?.classList.add("hidden"); mstat?.classList.remove("security-status"); }
  else { normal?.classList.remove("active"); sec?.classList.add("security-active"); card?.classList.add("security-mode"); section?.classList.remove("hidden"); mstat?.classList.add("security-status"); }
  updateModeStatus();
  localStorage.setItem("dashboard-mode", DASHBOARD_STATE.currentMode);
}
function updateModeStatus(){ updateElement("modeStatusText", DASHBOARD_STATE.currentMode==="security"?t("security_status"):t("normal_status")); }

/* ===========================
   Listeners / Intervals
=========================== */
function setupEventListeners(){
  document.getElementById("languageToggle")?.addEventListener("click", ()=>{ DASHBOARD_STATE.currentLanguage = DASHBOARD_STATE.currentLanguage==="ar"?"en":"ar"; applyLanguage(); });
  document.getElementById("themeToggle")?.addEventListener("click", ()=>{ DASHBOARD_STATE.currentTheme = DASHBOARD_STATE.currentTheme==="light"?"dark":"light"; applyTheme(); });
  document.getElementById("normalMode")?.addEventListener("click", ()=>{ DASHBOARD_STATE.currentMode="normal"; applyMode(); });
  document.getElementById("securityMode")?.addEventListener("click", ()=>{ DASHBOARD_STATE.currentMode="security"; applyMode(); });
  document.getElementById("closeAlert")?.addEventListener("click", ()=>document.getElementById("alertBanner")?.classList.add("hidden"));
  document.getElementById("clearAllAlerts")?.addEventListener("click", clearAllAlerts);

  window.addEventListener("beforeunload", ()=>{ clearIntervals(); saveDataToStorage(); });
  window.addEventListener("resize", ()=>{ Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(k=>DASHBOARD_STATE.chartNeedsUpdate[k]=true); setTimeout(renderCharts,100); });
}
function startIntervals(){
  clearIntervals();
  DASHBOARD_STATE.intervals.clock=setInterval(updateClock, CONFIG.UPDATE_INTERVAL);
  DASHBOARD_STATE.intervals.charts=setInterval(renderCharts, CONFIG.CHART_UPDATE_INTERVAL);
  DASHBOARD_STATE.intervals.save=setInterval(saveDataToStorage, CONFIG.SAVE_INTERVAL);
  DASHBOARD_STATE.intervals.connectionCheck=setInterval(checkConnectionTimeout, CONFIG.UPDATE_INTERVAL);
}
function clearIntervals(){ Object.values(DASHBOARD_STATE.intervals).forEach(i=>i&&clearInterval(i)); }
function saveDataToStorage(){
  try{
    localStorage.setItem("dashboard-events", JSON.stringify(DASHBOARD_STATE.events));
    localStorage.setItem("dashboard-alerts", JSON.stringify(DASHBOARD_STATE.alerts));
    saveDailyStats();
    Object.keys(DASHBOARD_STATE.chartData).forEach(k=>localStorage.setItem(`chart-${k}`, JSON.stringify(DASHBOARD_STATE.chartData[k])));
  }catch(e){ logMessage(`Storage error: ${e.message}`,"error"); }
}

/* ===========================
   Firebase Listeners
=========================== */
function initializeFirebaseListeners(){
  logMessage("🔥 Initializing Firebase listeners...","info");
  const base=`/Users/${CONFIG.USER_UID}`;

  database.ref(`${base}/temperature`).on("value",(snap)=>{
    const v=snap.val(); if (v===null) return;
    const temp=parseFloat(v); DASHBOARD_STATE.sensorData.temperature=temp; resetConnectionTimeout();
    updateTemperatureCard(); updateDailyStats("temperature", temp);
    if (shouldAddToChart("temperature", temp)){ addToChart("temperature", temp); DASHBOARD_STATE.chartNeedsUpdate.temperature=true; }
  }, (err)=>{ logMessage(`Temperature error: ${err.message}`,"error"); updateConnectionStatus("disconnected"); });

  database.ref(`${base}/humidity`).on("value",(snap)=>{
    const v=snap.val(); if (v===null) return;
    const h=parseFloat(v); DASHBOARD_STATE.sensorData.humidity=h; resetConnectionTimeout();
    updateHumidityCard(); updateDailyStats("humidity", h);
    if (shouldAddToChart("humidity", h)){ addToChart("humidity", h); DASHBOARD_STATE.chartNeedsUpdate.humidity=true; }
  }, (err)=>{ logMessage(`Humidity error: ${err.message}`,"error"); updateConnectionStatus("disconnected"); });

  database.ref(`${base}/ldr`).on("value",(snap)=>{
    const v=snap.val(); if (v===null) return;
    const l=parseInt(v); DASHBOARD_STATE.sensorData.ldr=l; resetConnectionTimeout();
    updateLightCard(); updateDailyStats("light", l);
    if (shouldAddToChart("light", l)){ addToChart("light", l); DASHBOARD_STATE.chartNeedsUpdate.light=true; }
  }, (err)=>{ logMessage(`Light error: ${err.message}`,"error"); updateConnectionStatus("disconnected"); });

  database.ref(`${base}/distance_cm`).on("value",(snap)=>{
    const v=snap.val(); if (v===null) return;
    const d=parseInt(v); DASHBOARD_STATE.sensorData.distance_cm=d; resetConnectionTimeout();
    updateDoorCard();
    const st=getDoorStatus(d);
    const doorVal = st.class==="open" ? 1 : st.class==="closed" ? 0 : 0.5;
    if (DASHBOARD_STATE.lastDoorState!==st.class){
      pushDoorChange(doorVal, new Date());
      DASHBOARD_STATE.chartNeedsUpdate.door=true;

      if (st.class==="open" && DASHBOARD_STATE.lastDoorState==="closed"){ DASHBOARD_STATE.dailyStats.door.openCount++; checkForEvent("door", DASHBOARD_STATE.currentMode==="security"?"high":"medium", t("door_opened")); }
      else if (st.class==="closed" && DASHBOARD_STATE.lastDoorState==="open"){ DASHBOARD_STATE.dailyStats.door.closeCount++; checkForEvent("door","medium", t("door_closed_event")); }
      else if (st.class==="error"){ checkForEvent("door","warning", t("door_error")); }

      DASHBOARD_STATE.lastDoorState=st.class; updateDailyStatsDisplay(); saveDailyStats();
    }
  }, (err)=>{ logMessage(`Distance error: ${err.message}`,"error"); updateConnectionStatus("disconnected"); });

  database.ref(".info/connected").on("value",(snap)=>{
    if (snap.val()===true){ resetConnectionTimeout(); logMessage("🔗 Firebase connected","success"); }
    else { updateConnectionStatus("disconnected"); logMessage("🔗 Firebase disconnected","error"); }
  });
}

/* ===========================
   Init
=========================== */
function initDashboard(){
  checkDailyReset();

  // Load chart data (قصّ صارم إلى 15) + ضغط الباب
  ["temperature","humidity","light","door"].forEach(k=>{
    const saved=localStorage.getItem(`chart-${k}`);
    if (saved){
      try{
        let arr=JSON.parse(saved).map(it=>({...it, timestamp:new Date(it.timestamp)}));
        if (k==="door") arr=compressSeries(arr);
        DASHBOARD_STATE.chartData[k]= lastN(arr, CONFIG.CHART_MAX_POINTS);
      }catch(e){ logMessage(`Error loading chart ${k}: ${e.message}`,"error"); DASHBOARD_STATE.chartData[k]=[]; }
    }
  });

  // Load events/alerts
  try{
    const ev=localStorage.getItem("dashboard-events");
    if (ev) DASHBOARD_STATE.events=JSON.parse(ev).map(e=>({...e, timestamp:new Date(e.timestamp)}));
    const al=localStorage.getItem("dashboard-alerts");
    if (al) DASHBOARD_STATE.alerts=JSON.parse(al).map(a=>({...a, timestamp:new Date(a.timestamp)}));
  }catch(e){ logMessage(`Error loading events/alerts: ${e.message}`,"error"); DASHBOARD_STATE.events=[]; DASHBOARD_STATE.alerts=[]; }

  applyLanguage(); applyTheme(); applyMode();
  updateClock(); updateAllSensorCards(); updateDailyStatsDisplay();
  Object.keys(DASHBOARD_STATE.chartNeedsUpdate).forEach(k=>DASHBOARD_STATE.chartNeedsUpdate[k]=true);
  renderCharts(); updateEventsDisplay(); updateAlertsDisplay();

  initializeFirebaseListeners(); startIntervals(); setupEventListeners();
  updateFooterByLanguage();
  logMessage("✅ Dashboard initialized successfully!","success");
}

/* Global */
window.clearAllAlerts = clearAllAlerts;

/* Error handlers */
window.addEventListener("error",(e)=>logMessage(`Dashboard Error: ${e.error?.message||e.message}`,"error"));
window.addEventListener("unhandledrejection",(e)=>logMessage(`Unhandled Promise Rejection: ${e.reason}`,"error"));

/* Start */
document.addEventListener("DOMContentLoaded", ()=>{ try{ initDashboard(); }catch(e){ logMessage(`Failed to initialize: ${e.message}`,"error"); } });
