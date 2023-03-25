// values as of July 11th 2022
const fundamentalsCompleted = 49;
const totalFundamentals = 49;
const intermediateHTMLandCSSCompleted = 23;
const totalIntermediateHTMLandCSSLessons = 23;
let JSCompleted = 31;
const totalJS = 53;
let advancedHTMLandCSSCompleted = 16;
const totalAdvancedHTMLandCSS = 16;
let nodeJSCompleted = 1;
const totalNodeJS = 26;
let gettingHiredCompleted = 11;
const totalGettingHired = 13;

const totalFullStackJS = totalIntermediateHTMLandCSSLessons+totalJS+totalAdvancedHTMLandCSS+
totalNodeJS+totalGettingHired;
let FullStackJSCompleted = intermediateHTMLandCSSCompleted + JSCompleted + 
    advancedHTMLandCSSCompleted + nodeJSCompleted + gettingHiredCompleted;

let totalCompleted = fundamentalsCompleted + FullStackJSCompleted;
const totalLessons = totalFundamentals + totalFullStackJS;
let totalRemaining = totalLessons - totalCompleted;

if(!localStorage.getItem('jsCompleted')) {
    retrieveStorage();
} else {
    updateStorage();
}

function updateStorage() {
    let currentJSCompleted = localStorage.getItem('jsCompleted');
    let currentAHACCompleted = localStorage.getItem('ahacCompleted');
    let currentNODECompleted = localStorage.getItem('nodeCompleted');
    let currentGHCompleted = localStorage.getItem('ghCompleted');

    JSCompleted = +currentJSCompleted;
    advancedHTMLandCSSCompleted = +currentAHACCompleted;
    nodeJSCompleted = +currentNODECompleted;
    gettingHiredCompleted = +currentGHCompleted;
}

function retrieveStorage() {
    localStorage.setItem('jsCompleted', +JSCompleted);
    localStorage.setItem('ahacCompleted', +advancedHTMLandCSSCompleted);
    localStorage.setItem('nodeCompleted', +nodeJSCompleted);
    localStorage.setItem('ghCompleted', +gettingHiredCompleted);

    updateStorage();
}

function displayValues() {

    retrieveStorage();

    let FullStackJSCompleted = intermediateHTMLandCSSCompleted + JSCompleted + 
    advancedHTMLandCSSCompleted + nodeJSCompleted + gettingHiredCompleted;
    let totalCompleted = fundamentalsCompleted + FullStackJSCompleted;
    let totalRemaining = totalLessons - totalCompleted;

    const fundamentals = document.querySelector('.fundamentals');
    fundamentals.textContent = `Fundamentals - ${fundamentalsCompleted}/${totalFundamentals} 
    (${((fundamentalsCompleted/totalFundamentals)*100).toFixed(1)}%)`;

    const fullstackJS = document.querySelector('.fullstackJS');
    fullstackJS.textContent = `Fullstack JavaScript - ${FullStackJSCompleted}/${totalFullStackJS} 
    (${((FullStackJSCompleted/totalFullStackJS)*100).toFixed(1)}%)`;

    const intermediateHTMLandCSS = document.querySelector('.li1');
    intermediateHTMLandCSS.textContent = `Intermediate HTML & CSS - ${intermediateHTMLandCSSCompleted}/${totalIntermediateHTMLandCSSLessons} 
    (${((intermediateHTMLandCSSCompleted/totalIntermediateHTMLandCSSLessons)*100).toFixed(1)}%)`;

    const JavaScript = document.querySelector('.li2');
    JavaScript.textContent = `JavaScript - ${JSCompleted}/${totalJS} (${((JSCompleted/totalJS)*100).toFixed(1)}%)`;

    const advancedHTMLandCSS = document.querySelector('.li3');
    advancedHTMLandCSS.textContent = `Advanced HTML & CSS - ${advancedHTMLandCSSCompleted}/${totalAdvancedHTMLandCSS} 
    (${((advancedHTMLandCSSCompleted/totalAdvancedHTMLandCSS)*100).toFixed(1)}%)`;

    const nodeJS = document.querySelector('.li4');
    nodeJS.textContent = `nodeJS - ${nodeJSCompleted}/${totalNodeJS} 
    (${((nodeJSCompleted/totalNodeJS)*100).toFixed(1)}%)`;

    const gettingHired = document.querySelector('.li5');
    gettingHired.textContent = `Getting Hired - ${gettingHiredCompleted}/${totalGettingHired} 
    (${((gettingHiredCompleted/totalGettingHired)*100).toFixed(1)}%)`;

    const total = document.querySelector('.total');
    total.textContent = `Total - ${totalCompleted}/${totalLessons} (${((totalCompleted/totalLessons)*100).toFixed(1)}%)`;

    const daysLeft = document.querySelector('.days-left');
    daysLeft.textContent = `Approximately ${(totalRemaining / 2).toFixed(0)} days left (2/d)`;
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', updateCourse);
function updateCourse(e) {
    e.preventDefault();

    const editModal = createEditModal(JSCompleted, advancedHTMLandCSSCompleted, nodeJSCompleted, gettingHiredCompleted);
    document.body.append(editModal.newModal);

    editModal.newModal.showModal();
}

const createEditModal = (jsValue, ahacValue, nodeValue, gHValue) => {
    
    const newModal = document.createElement('dialog');
    newModal.classList.add('editModal');
    newModal.setAttribute('id', 'editModal');

    const editModalForm = document.createElement('form');
    editModalForm.classList.add('editForm');
    editModalForm.setAttribute('method', 'dialog');

    const jsDiv = document.createElement('div');
    const js = document.createElement('input');
    const jsLabel = document.createElement('label');
    js.setAttribute('type', 'text');
    js.setAttribute('name', 'js');
    js.setAttribute('id', 'js');
    js.setAttribute('placeholder', '10');
    js.setAttribute('value', jsValue);
    jsLabel.setAttribute('for', 'js');
    jsLabel.textContent = 'JavaScript';
    jsDiv.appendChild(jsLabel);
    jsDiv.appendChild(js);

    const ahacDiv = document.createElement('div');
    const ahac = document.createElement('input');
    const ahacLabel = document.createElement('label');
    ahac.setAttribute('type', 'text');
    ahac.setAttribute('name', 'ahac');
    ahac.setAttribute('id', 'ahac');
    ahac.setAttribute('placeholder', '10');
    ahac.setAttribute('value', ahacValue);
    ahacLabel.setAttribute('for', 'ahac');
    ahacLabel.textContent = 'Advanced HTML & CSS';
    ahacDiv.appendChild(ahacLabel);
    ahacDiv.appendChild(ahac);

    const nodeDiv = document.createElement('div');
    const node = document.createElement('input');
    const nodeLabel = document.createElement('label');
    node.setAttribute('type', 'text');
    node.setAttribute('name', 'node');
    node.setAttribute('id', 'nodeEdit');
    node.setAttribute('placeholder', '10');
    node.setAttribute('value', nodeValue);
    nodeLabel.setAttribute('for', 'node');
    nodeLabel.textContent = 'nodeJS';
    nodeDiv.appendChild(nodeLabel);
    nodeDiv.appendChild(node);

    const gHDiv = document.createElement('div');
    const gH = document.createElement('input');
    const gHLabel = document.createElement('label');
    gH.setAttribute('type', 'text');
    gH.setAttribute('name', 'gH');
    gH.setAttribute('id', 'gH');
    gH.setAttribute('placeholder', '10');
    gH.setAttribute('value', gHValue);
    gHLabel.setAttribute('for', 'gH');
    gHLabel.textContent = 'Getting Hired';
    gHDiv.appendChild(gHLabel);
    gHDiv.appendChild(gH);

    const btns = document.createElement('div');
    btns.classList.add('btns');

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    submitBtn.classList.add('submitEditBtn');
    submitBtn.setAttribute('type', 'button');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // update values
        JSCompleted = +js.value;
        advancedHTMLandCSSCompleted = +ahac.value;
        nodeJSCompleted = +node.value;
        gettingHiredCompleted = +gH.value;

        displayValues();

        document.body.removeChild(newModal);
    });


    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = `<i class="fa-solid fa-ban"></i>`;
    cancelBtn.classList.add('cancelEditBtn');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newModal.close();
        document.body.removeChild(newModal);
    });

    btns.appendChild(submitBtn);
    btns.appendChild(cancelBtn);

    editModalForm.appendChild(jsDiv);
    editModalForm.appendChild(ahacDiv);
    editModalForm.appendChild(nodeDiv);
    editModalForm.appendChild(gHDiv);
    editModalForm.appendChild(btns);
    newModal.appendChild(editModalForm);

    return {newModal, editModalForm, ahac, node, 
        js, submitBtn, cancelBtn};
};

displayValues();
