
const fundamentalsCompleted = 47;
const totalFundamentals = 47;
const intermediateHTMLandCSSCompleted = 23;
const totalIntermediateHTMLandCSSLessons = 23;
const JSCompleted = 3;
const totalJS = 40;
const advancedHTMLandCSSCompleted = 0;
const totalAdvancedHTMLandCSS = 16;
const nodeJSCompleted = 0;
const totalNodeJS = 24;
const gettingHiredCompleted = 0;
const totalGettingHired = 13;

const totalFullStackJS = totalIntermediateHTMLandCSSLessons+totalJS+totalAdvancedHTMLandCSS+
totalNodeJS+totalGettingHired;
const FullStackJSCompleted = intermediateHTMLandCSSCompleted + JSCompleted + 
    advancedHTMLandCSSCompleted + nodeJSCompleted + gettingHiredCompleted;

const totalCompleted = fundamentalsCompleted + FullStackJSCompleted;
const totalLessons = totalFundamentals + totalFullStackJS;
const totalRemaining = totalLessons - totalCompleted;



const fundamentals = document.querySelector('.fundamentals');
fundamentals.textContent += `${fundamentalsCompleted}/${totalFundamentals} 
(${((fundamentalsCompleted/totalFundamentals)*100).toFixed(1)}%)`;

const fullstackJS = document.querySelector('.fullstackJS');
fullstackJS.textContent += `${FullStackJSCompleted}/${totalFullStackJS} 
(${((FullStackJSCompleted/totalFullStackJS)*100).toFixed(1)}%)`;

const intermediateHTMLandCSS = document.querySelector('.li1');
intermediateHTMLandCSS.textContent += `${intermediateHTMLandCSSCompleted}/${totalIntermediateHTMLandCSSLessons} 
(${((intermediateHTMLandCSSCompleted/totalIntermediateHTMLandCSSLessons)*100).toFixed(1)}%)`;

const JavaScript = document.querySelector('.li2');
JavaScript.textContent += `${JSCompleted}/${totalJS} (${((JSCompleted/totalJS)*100).toFixed(1)}%)`;

const advancedHTMLandCSS = document.querySelector('.li3');
advancedHTMLandCSS.textContent += `${advancedHTMLandCSSCompleted}/${totalAdvancedHTMLandCSS} 
(${((advancedHTMLandCSSCompleted/totalAdvancedHTMLandCSS)*100).toFixed(1)}%)`;

const nodeJS = document.querySelector('.li4');
nodeJS.textContent += `${nodeJSCompleted}/${totalNodeJS} 
(${((nodeJSCompleted/totalNodeJS)*100).toFixed(1)}%)`;

const gettingHired = document.querySelector('.li5');
gettingHired.textContent += `${gettingHiredCompleted}/${totalGettingHired} 
(${((gettingHiredCompleted/totalGettingHired)*100).toFixed(1)}%)`;

const total = document.querySelector('.total');
total.textContent += `${totalCompleted}/${totalLessons} (${((totalCompleted/totalLessons)*100).toFixed(1)}%)`;

const daysLeft = document.querySelector('.days-left');
daysLeft.textContent += `Approximately ${(totalRemaining / 2).toFixed(0)} days left (2/d)`;
