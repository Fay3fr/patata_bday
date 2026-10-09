const screens = [...document.querySelectorAll(".screen")];

function go(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function deploy() {
  const r = document.getElementById("troopResult");
  r.innerHTML = "🪖 <strong>DEPLOYMENT COMPLETE.</strong><br>12,847 emotional support troops have been sent. Kaya's city is now 0% safer and 100% more emotionally supported.";
}

function court() {
  const r = document.getElementById("courtResult");
  r.innerHTML = "⚖️ Appeal denied.<br><strong>Sentence: Faye remains a patata.</strong><br>Additional punishment: Kaya gets to say “I told you so.”";
}

function language(choice) {
  const r = document.getElementById("languageResult");
  if (choice === "arabic") {
    r.innerHTML = "✅ Correct. Faye already knew this. The scientific community agrees.";
  } else {
    r.innerHTML = "❌ Incorrect. Nice attempt. Arabic Kaya remains undefeated.";
  }
}

let djCount = 0;
function dj() {
  djCount++;
  const r = document.getElementById("djResult");
  const messages = [
    "🚨 DJ DETECTED. Kaya.exe is monitoring the situation.",
    "🚨 JEALOUSY LEVELS RISING. Faye, explain yourself.",
    "🚨 KAYA HAS ENTERED THE CHAT. Hide your evidence.",
    "🚨 SYSTEM OVERLOAD. Please stop mentioning DJ.",
    "🥔 Kaya is officially going for Faye's head."
  ];
  r.innerHTML = messages[Math.min(djCount-1, messages.length-1)];
  const button = document.getElementById("djButton");
  const current = parseFloat(button.dataset.scale || "1");
  const next = Math.min(current * 1.16, 2.35);
  button.dataset.scale = String(next);
  button.style.setProperty("--dj-scale", next);
  birthdayConfetti(8);
}

function love(choice) {
  const r = document.getElementById("loveResult");
  if (choice === "kaya") {
    r.innerHTML = "❌ INCORRECT. Faye refuses to accept this propaganda.";
  } else {
    r.innerHTML = "❌ INCORRECT. Kaya would never allow such misinformation.";
  }
  setTimeout(() => {
    r.innerHTML = "💗 FINAL RESULT: TIE.<br>Two idiots are attempting to quantify an unquantifiable amount of love.";
  }, 1000);
}

const snow = document.getElementById("snow");
for (let i=0; i<45; i++) {
  const s = document.createElement("span");
  s.className = "snowflake";
  s.textContent = Math.random() > .5 ? "•" : "✦";
  s.style.left = Math.random()*100 + "vw";
  s.style.fontSize = (5 + Math.random()*9) + "px";
  s.style.animationDuration = (7 + Math.random()*12) + "s";
  s.style.animationDelay = (-Math.random()*15) + "s";
  snow.appendChild(s);
}

const balloons = document.getElementById("balloons");
const confetti = document.getElementById("confetti");
for (let i=0; i<12; i++) {
  const b = document.createElement("span");
  b.className = "birthday-balloon";
  b.style.left = (Math.random()*100) + "vw";
  b.style.animationDuration = (15 + Math.random()*13) + "s";
  b.style.animationDelay = (-Math.random()*20) + "s";
  b.style.background = ["#ff77ad", "#6bb7ff", "#ffd166", "#b99cff"][i%4];
  balloons.appendChild(b);
}
function birthdayConfetti(amount=10) {
  for (let i=0; i<amount; i++) {
    const c = document.createElement("span");
    c.className = "birthday-confetti";
    c.style.left = (Math.random()*100) + "vw";
    c.style.background = ["#ff77ad", "#6bb7ff", "#ffd166", "#69e0b0"][Math.floor(Math.random()*4)];
    c.style.animationDuration = (2.5 + Math.random()*2.5) + "s";
    c.style.animationDelay = (Math.random()*.4) + "s";
    confetti.appendChild(c);
    setTimeout(() => c.remove(), 5500);
  }
}
birthdayConfetti(18);
