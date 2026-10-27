
// Pure calculator functions (testable in Node and browser)
function pctOf(x,p){return x*p/100}
function pctWhat(x,y){return y===0?NaN:x/y*100}
function pctChange(a,b){return a===0?NaN:(b-a)/Math.abs(a)*100}
function discountCalc(price,p){var s=price*p/100;return {saved:s,final:price-s}}
function calcAge(dob, today){
  var d=new Date(dob), t=new Date(today); if(isNaN(d)||isNaN(t)||t<d) return null;
  var y=t.getFullYear()-d.getFullYear(), m=t.getMonth()-d.getMonth(), day=t.getDate()-d.getDate();
  if(day<0){ m--; var prev=new Date(t.getFullYear(),t.getMonth(),0); day+=prev.getDate(); }
  if(m<0){ y--; m+=12; }
  return {years:y,months:m,days:day};
}
function averageCalc(nums){ if(!nums.length) return null; var s=nums.reduce(function(a,b){return a+b},0); var sorted=nums.slice().sort(function(a,b){return a-b}); var med=sorted.length%2?sorted[Math.floor(sorted.length/2)]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2; return {sum:s,count:nums.length,mean:s/nums.length,median:med,min:sorted[0],max:sorted[sorted.length-1]}; }
function areaCalc(shape,a,b){ if(shape==='rect') return a*b; if(shape==='circle') return Math.PI*a*a; if(shape==='tri') return 0.5*a*b; return NaN; }
function timeDiffMs(a,b){ var ms=Math.abs(new Date(b)-new Date(a)); return {days:Math.floor(ms/86400000),hours:Math.floor(ms/3600000)%24,minutes:Math.floor(ms/60000)%60,totalMinutes:Math.floor(ms/60000),totalHours:ms/3600000}; }
function fmt(n){ if(!isFinite(n)) return 'Please check your numbers.'; return (Math.round(n*1000000)/1000000).toString(); }
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function(){
    var $=function(id){return document.getElementById(id)};
    function out(id,txt){var el=$(id); if(el) el.textContent=txt;}
    var b;
    if((b=$('pct-btn'))) b.onclick=function(){var m=$('pct-mode').value, x=parseFloat($('pct-x').value), y=parseFloat($('pct-y').value); if(isNaN(x)||isNaN(y)){out('pct-result','Please enter two numbers.');return;} if(m==='of') out('pct-result', y+'% of '+x+' = '+fmt(pctOf(x,y))); else if(m==='what') out('pct-result', x+' is '+fmt(pctWhat(x,y))+'% of '+y); else out('pct-result','Change from '+x+' to '+y+' = '+fmt(pctChange(x,y))+'%');};
    if((b=$('disc-btn'))) b.onclick=function(){var p=parseFloat($('disc-price').value), d=parseFloat($('disc-pct').value); if(isNaN(p)||isNaN(d)){out('disc-result','Please enter a price and a discount.');return;} var r=discountCalc(p,d); out('disc-result','You save '+fmt(r.saved)+'. Final price: '+fmt(r.final));};
    if((b=$('age-btn'))) b.onclick=function(){var dob=$('age-dob').value; if(!dob){out('age-result','Please choose a date of birth.');return;} var r=calcAge(dob,new Date()); if(!r){out('age-result','Date of birth cannot be in the future.');return;} out('age-result','You are '+r.years+' years, '+r.months+' months and '+r.days+' days old.');};
    if((b=$('avg-btn'))) b.onclick=function(){var nums=$('avg-input').value.split(/[\s,]+/).filter(Boolean).map(Number).filter(function(n){return !isNaN(n)}); var r=averageCalc(nums); if(!r){out('avg-result','Please enter at least one number.');return;} out('avg-result','Count: '+r.count+'\nSum: '+fmt(r.sum)+'\nMean (average): '+fmt(r.mean)+'\nMedian: '+fmt(r.median)+'\nSmallest: '+fmt(r.min)+'  Largest: '+fmt(r.max));};
    if((b=$('area-btn'))) b.onclick=function(){var s=$('area-shape').value, a=parseFloat($('area-a').value), bb=parseFloat($('area-b').value); if(isNaN(a)||(s!=='circle'&&isNaN(bb))){out('area-result','Please enter the measurements.');return;} var r=areaCalc(s,a,bb); out('area-result','Area = '+fmt(r)+' square units');};
    if((b=$('time-btn'))) b.onclick=function(){var a=$('time-a').value, c=$('time-b').value; if(!a||!c){out('time-result','Please choose both dates/times.');return;} var r=timeDiffMs(a,c); out('time-result','Difference: '+r.days+' days, '+r.hours+' hours, '+r.minutes+' minutes\nTotal: '+fmt(r.totalHours)+' hours ('+r.totalMinutes+' minutes)');};
  });
}
if (typeof module !== 'undefined') module.exports={pctOf:pctOf,pctWhat:pctWhat,pctChange:pctChange,discountCalc:discountCalc,calcAge:calcAge,averageCalc:averageCalc,areaCalc:areaCalc,timeDiffMs:timeDiffMs};
