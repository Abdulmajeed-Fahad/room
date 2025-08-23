
const TELEGRAM = {
  BOT_TOKEN: "8489434423:AAEadp3ucFIaSFHTu993LuxUbntIsIm-T9g",
  CHAT_ID: "485606744"
};

function tgSend(text){
  try{
    if(!TELEGRAM.BOT_TOKEN || !TELEGRAM.CHAT_ID) return false;
    const url =
      `https://api.telegram.org/bot${encodeURIComponent(TELEGRAM.BOT_TOKEN)}` +
      `/sendMessage?chat_id=${encodeURIComponent(TELEGRAM.CHAT_ID)}` +
      `&parse_mode=HTML&text=${encodeURIComponent(text)}`;
    const beacon = new Image();
    beacon.src = url + `&t=${Date.now()}`;
    return true;
  }catch(e){ console.error(e); return false; }
}

/* ========= أدوات عرض ========= */
function readText(id){
  const el = document.getElementById(id);
  if(!el) return null;
  const txt = (el.textContent || "").trim();
  return txt || null;
}
function domSnapshot(){
  const temp = readText("temperatureValue");
  const hum  = readText("humidityValue");
  const light= readText("lightValue");
  const door = readText("doorValue");
  const ready = [temp,hum,light,door].every(v=>v && !/^--/.test(v));
  return {ready,temp,hum,light,door};
}

function formatNowLikeUI(){
  const lang = (window.DASHBOARD_STATE?.currentLanguage)||"ar";
  const d = new Date();
  const date = d.toLocaleDateString(lang==="ar"?"ar-SA":"en-US", {year:"numeric", month:"2-digit", day:"2-digit"});
  const time = d.toLocaleTimeString(lang==="ar"?"ar-SA":"en-US", {hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:(lang==="en")});
  return `${date} ${time}`;
}

function currentSummary(){
  const lang = (window.DASHBOARD_STATE?.currentLanguage)||"ar";
  const L = (lang==="ar")
    ? {temp:"الحرارة", hum:"الرطوبة", light:"الضوء", door:"حالة الباب", date:"التاريخ"}
    : {temp:"Temperature", hum:"Humidity", light:"Light", door:"Door status", date:"Date/Time"};

  try{
    const snap = domSnapshot();
    if(snap.ready){
      return [
        `\n${L.temp}: ${snap.temp}`,
        `${L.hum}: ${snap.hum}`,
        `${L.light}: ${snap.light}`,
        `${L.door}: ${snap.door}`,
        `${L.date}: ${formatNowLikeUI()}`
      ].join("\n");
    }

    const S = window.DASHBOARD_STATE || {};
    const s = (S.isConnected ? S.sensorData : (S.lastConnectedData || S.sensorData)) || {};
    const tFn = (typeof window.t==="function")?window.t:(k)=>k;
    const fmt = (v,u="")=>{
      if(v===null||v===undefined||Number.isNaN(v)) return "--";
      const str = (typeof v==="number") ? v.toFixed(1) : String(v);
      if (lang==="ar") return str.replace(".", "٫").replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]) + u;
      return str + u;
    };
    const lightText = (typeof getLightLevel==="function" && s.ldr!=null)?getLightLevel(s.ldr).text:"--";
    const doorText  = (typeof getDoorStatus==="function" && s.distance_cm!=null)?getDoorStatus(s.distance_cm).text:"--";

    return [
      `\n${L.temp}: ${fmt(s.temperature,tFn("celsius"))}`,
      `${L.hum}: ${fmt(s.humidity,tFn("percent"))}`,
      `${L.light}: ${lightText}`,
      `${L.door}: ${doorText}`,
      `${L.date}: ${formatNowLikeUI()}`
    ].join("\n");
  }catch{
    return "";
  }
}

function notifyTG(title, body){
  const msg = `🔔 <b>${title}</b>${body ? "\n" + body : ""}${currentSummary()}`;
  tgSend(msg);
}


const __checkForEvent = window.checkForEvent;
window.checkForEvent = function(type, severity, message){
  const ret = __checkForEvent?.apply(this, arguments);
  try{
    if(type==="door")          notifyTG(langTitle("door"), message);
    else if(type==="light")    notifyTG(langTitle("light"), message);
    else if(severity==="high") notifyTG(langTitle("security"), message);
  }catch(e){ console.warn(e); }
  return ret;
};

function langTitle(kind){
  const lang = (window.DASHBOARD_STATE?.currentLanguage)||"ar";
  if (lang==="ar"){
    if (kind==="door") return "تنبيه الباب";
    if (kind==="light") return "تغيّر الإضاءة";
    return "تنبيه أمني";
  } else {
    if (kind==="door") return "Door Alert";
    if (kind==="light") return "Light Change";
    return "Security Alert";
  }
}

const __updateConnectionStatus = window.updateConnectionStatus;
let __lastConnStatus = null;
window.updateConnectionStatus = function(status){
  const res = __updateConnectionStatus?.apply(this, arguments);
  try{
    if(status!==__lastConnStatus){
      const lang = (window.DASHBOARD_STATE?.currentLanguage)||"ar";
      if(status==="disconnected"){
        notifyTG(lang==="ar"?"انقطاع الاتصال":"Disconnected",
                 lang==="ar"?"انقطع الاتصال بالمستشعرات.":"Lost connection to sensors.");
      }else if(status==="connected"){
        setTimeout(()=>notifyTG(lang==="ar"?"عودة الاتصال":"Reconnected",
                                lang==="ar"?"تمت إعادة الاتصال بالمستشعرات.":"Sensors reconnected."), 800);
      }
      __lastConnStatus = status;
    }
  }catch(e){ console.warn(e); }
  return res;
};

const __updateLightCard = window.updateLightCard;
let __prevLightClass;
window.updateLightCard = function(){
  const r = __updateLightCard?.apply(this, arguments);
  try{
    const s = (window.DASHBOARD_STATE?.sensorData)||{};
    if(typeof s.ldr!=="undefined" && typeof getLightLevel==="function"){
      const lvl = getLightLevel(s.ldr);
      if(typeof __prevLightClass!=="undefined" && lvl.class!==__prevLightClass){
        const lang = (window.DASHBOARD_STATE?.currentLanguage)||"ar";
        notifyTG(lang==="ar"?"تغيّر الإضاءة":"Light Change",
                 (lang==="ar"?"الإضاءة أصبحت: ":"Light is now: ") + lvl.text);
      }
      __prevLightClass = lvl.class;
    }
  }catch(e){ console.warn(e); }
  return r;
};
