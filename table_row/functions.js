const arr = [
    {
        nationality: 'Orosz',
        author1: 'Gogol',
        literarypiece1: 'A köpönyeg',
        author2: 'Csehov',
        literarypiece2: 'A csinovnyik halála',
    },
    {
        nationality: 'Cseh',
        author1: 'Franz Kafka',
        literarypiece1: 'Az átváltozás',
    },
    {
        nationality: 'Magyar',
        author1: 'Örkény István',
        literarypiece1: 'gyperces Novellák',
        author2: 'József Attila',
        literarypiece2: 'Klárisok',
    },
    {
        nationality: 'Svácj',
        author1: 'Friedrich Dürrenmatt',
        literarypiece1: 'A fizikusok',
    }
]


function renderTableRow(tablebody, CountryWriters) {
    const tr2 = document.createElement('tr');
    tablebody.appendChild(tr2);
 console.log(CountryWriters)
    const tr2_td1 = createCell("td",tr2,CountryWriters.nationality);

    tr2_td1.addEventListener("click",function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        
        const valtozo = e.target;
 
        const tr = valtozo.parentElement;
        const tbody = tr.parentElement;
        const alrmarked = tbody.querySelector('.marked');
 
        if (alrmarked !== null) {
            alrmarked.classList.remove('marked');
        }
 
        valtozo.classList.add("marked");
    });

    
    createCell("td",tr2,CountryWriters.author1)
    createCell("td",tr2,CountryWriters.literarypiece1)

    if (CountryWriters.author2 != undefined && CountryWriters.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tablebody.appendChild(tr3);
 
        createCell("td",tr3,CountryWriters.author2)
        createCell("td",tr3,CountryWriters.literarypiece2)
 
        tr2_td1.rowSpan = 2;
    }
}
 
 
 
 
 
const formElement = document.getElementById("htmlform");
 
//====FORM IMPLEMENTING====
 
 
 
const form = document.createElement('form');
form.id = 'htmlform';
document.body.appendChild(form);
 
createFormElement(form, 'nemzetiseg', 'Nemzetiség:');
createFormElement(form, 'szerzo1', 'Szerző:');
createFormElement(form, 'mu1', 'Mű:');
createFormElement(form, 'szerzo2', 'Másik Szerző:');
createFormElement(form, 'mu2', 'Mű:');
 
form.addEventListener("submit", function(e){
    //alapértelmezett működés egy get-et küld
    e.preventDefault(); //alapértelmezett működést gátolja
    /**
     * @type {HTMLFormElement}
     */
    const event = e.target;

    /** @type {HTMLInputElement} */
    const nemzetiseg = event.querySelector("#nemzetiseg");
    /** @type {string} */
    const nemzetisegvalue = nemzetiseg.value;

    /** @type {HTMLInputElement} */
    const szerzo1 = event.querySelector("#szerzo1");
    /** @type {string} */
    const szerzo1value = szerzo1.value;

    /** @type {HTMLInputElement} */
    const szerzo2 = event.querySelector("#szerzo2");
    /** @type {string} */
    const szerzo2value = szerzo2.value;

    /** @type {HTMLInputElement}*/
    const mu1 = event.querySelector("#mu1");
    /** @type {string} */
    const mu1value = mu1.value;

    /** @type {HTMLInputElement} */
    const mu2 = event.querySelector("#mu2");
    /** @type {string} */
    const mu2value = mu2.value;

    /**
     * @type {CountryWriters[]}
     */
    const obj2 = {}
    obj2.nationality = nemzetisegvalue;
    obj2.author1 = szerzo1value;
    obj2.literarypiece1 = mu1value;

    if (szerzo2value && mu2value) {
        obj2.author2 = szerzo2value;
        obj2.literarypiece2 = mu2value;
    }

    arr.push(obj2);
    renderTableBody(arr);
})
 
const button = document.createElement('button');
button.innerText = 'Hozzáadás';
form.appendChild(button);
 
 
/**
 * @param {CountryWriters[]}
 */
function renderTableBody(array) {
    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = "";
 
    for(let a of array) {
        renderTableRow(tablebody, a);
    }
}
renderTableBody(arr);
 
/**
 * @param {string} labelText - label szövege
 * @param {string} inputId - id inputja
 * @param {HTMLElement} forms - amihelyhez hozzáadjuk
 */
function createFormElement(forms, id, labelContent) {
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelContent;
    forms.appendChild(label);
 
    const br1 = document.createElement('br');
    forms.appendChild(br1);
 
    const input = document.createElement('input');
    input.id = id;
    forms.appendChild(input);
 
    const br2 = document.createElement('br');
    forms.appendChild(br2);
 
    const br3 = document.createElement('br');
    forms.appendChild(br3);
}

/**
 * @param {'td'|'td'} cellType 
 * @param {*} ParentRow 
 */
function createCell(cellType, ParentRow, cellContent)
{
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    ParentRow.appendChild(cell);
    return cell;
}

function generateHeader(table,headerList)
{
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    for(let iterater of headerList){
        createCell("th",tr,iterater);
    }
    return thead;
}

function htmlFormEventListener(e){
    //alapértelmezett működés egy get-et küld
    e.preventDefault(); //alapértelmezett működést gátolja
    /**
     * @type {HTMLFormElement}
     */
    const event = e.target;
 
    /** @type {HTMLInputElement} */
    const nemzetiseg = event.querySelector("#nemzetiseg");
    /** @type {string} */
    const nemzetisegvalue = nemzetiseg.value;
 
    /** @type {HTMLInputElement} */
    const szerzo1 = event.querySelector("#szerzo1");
    /** @type {string} */
    const szerzo1value = szerzo1.value;
 
    /** @type {HTMLInputElement} */
    const szerzo2 = event.querySelector("#szerzo2");
    /** @type {string} */
    const szerzo2value = szerzo2.value;
 
    /** @type {HTMLInputElement}*/
    const mu1 = event.querySelector("#mu1");
    /** @type {string} */
    const mu1value = mu1.value;
 
    /** @type {HTMLInputElement} */
    const mu2 = event.querySelector("#mu2");
    /** @type {string} */
    const mu2value = mu2.value;
 
    /**
     * @type {CountryWriters[]}
     */
    const obj = {}
    obj.nationality = nemzetisegvalue;
    obj.author1 = szerzo1value;
    obj.author2 = szerzo2value;
    obj.literarypiece1 = mu1value;
    obj.literarypiece2 = mu2value;
 
    const tbody = document.getElementById("tablebody1");
 
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);
 
    const tr2_td1 = createCell("td",tr2,obj.nationality);
    createCell("td",tr2,obj.author1);
    createCell("td",tr2,obj.literarypiece1);

 
    if (obj.author2 && obj.literarypiece2) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);
 
        createCell("td",tr3,obj.author2)
        createCell("td",tr3,obj.literarypiece2)
 
        tr2_td1.rowSpan = 2;
    }
}


function validateFielads() {}