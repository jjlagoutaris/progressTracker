
const fundamentalsCompleted = 47;
const totalFundamentals = 47;
const intermediateHTMLandCSSCompleted = 11;
const totalIntermediateHTMLandCSSLessons = 23;
const JSCompleted = 0;
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



const fundamentals = document.querySelector('.fundamentals');
fundamentals.textContent += `${fundamentalsCompleted}/${totalFundamentals} 
(${(fundamentalsCompleted/totalFundamentals).toFixed(3)*100}%)`;
const fullstackJS = document.querySelector('.fullstackJS');
fullstackJS.textContent += `${FullStackJSCompleted}/${totalFullStackJS} 
(${(FullStackJSCompleted/totalFullStackJS).toFixed(3)*100}%)`;
const intermediateHTMLandCSS = document.querySelector('.li1');
intermediateHTMLandCSS.textContent += `${intermediateHTMLandCSSCompleted}/${totalIntermediateHTMLandCSSLessons} 
(${(intermediateHTMLandCSSCompleted/totalIntermediateHTMLandCSSLessons).toFixed(3)*100}%)`;
const JavaScript = document.querySelector('.li2');
JavaScript.textContent += `${JSCompleted}/${totalJS} (${(JSCompleted/totalJS).toFixed(3)*100}%)`;
const advancedHTMLandCSS = document.querySelector('.li3');
advancedHTMLandCSS.textContent += `${advancedHTMLandCSSCompleted}/${totalAdvancedHTMLandCSS} 
(${(advancedHTMLandCSSCompleted/totalAdvancedHTMLandCSS).toFixed(3)*100}%)`;
const nodeJS = document.querySelector('.li4');
nodeJS.textContent += `${nodeJSCompleted}/${totalNodeJS} 
(${(nodeJSCompleted/totalNodeJS).toFixed(3)*100}%)`;
const gettingHired = document.querySelector('.li5');
gettingHired.textContent += `${gettingHiredCompleted}/${totalGettingHired} 
(${(gettingHiredCompleted/totalGettingHired).toFixed(3)*100}%)`;
const total = document.querySelector('.total');
total.textContent += `${totalCompleted}/${totalLessons} (${(totalCompleted/totalLessons).toFixed(3)*100}%)`;