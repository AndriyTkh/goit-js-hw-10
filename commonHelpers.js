import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as i,i as u}from"./assets/vendor-d07556bb.js";let o=new Date;const e=document.querySelector("button[data-start]"),c=document.querySelector("span[data-days]"),l=document.querySelector("span[data-hours]"),m=document.querySelector("span[data-minutes]"),f=document.querySelector("span[data-seconds]"),h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0],Date.now()>o.getTime()?(u.error({theme:"dark",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"red",progressBarColor:"#ff91a4",message:"Please choose a date in the future"}),e.disabled=!0):e.disabled=!1}};function p(t){const a=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:r,minutes:s,seconds:d}}function y(t){c.textContent=t.days.toString().padStart(2,"0"),l.textContent=t.hours.toString().padStart(2,"0"),m.textContent=t.minutes.toString().padStart(2,"0"),f.textContent=t.seconds.toString().padStart(2,"0")}e.addEventListener("click",t=>{e.disabled=!0,setInterval(()=>{let n=o.getTime()-Date.now();n>0&&y(p(n))},1e3)});i("#datetime-picker",h);setInterval(()=>{Date.now()>o.getTime()?e.disabled=!0:e.disabled=!1},100);
//# sourceMappingURL=commonHelpers.js.map