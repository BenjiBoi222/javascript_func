/**
 * Írók országonkénti típusdefiníció
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} CountryWriters
 */

 
/**
 * Táblázat létrehozása
 * 
 * @param {string[]} headerList - a fejlécek feliratai
 * @param {string} tbodyId - a tbody elem id-je
 * @returns {HTMLTableElement} - a létrehozott táblázat elem
 */
function generateTable(headerList, tbodyId) {
    const table = document.createElement("table");

    // Fejléc létrehozása meglévő függvénnyel
    generateHeader(table, headerList); 

    // tbody létrehozása
    const tbody = document.createElement('tbody');
    tbody.id = tbodyId;
    table.appendChild(tbody);

    // Táblázat hozzáadása a dokumentumhoz
    document.body.appendChild(table);

    return table;
}

/**
 * Fejléc létrehozása
 * 
 * @param {HTMLTableElement} table - a táblázat, amelyhez a thead tartozik
 * @param {string[]} headerList - a fejléc feliratai
 * @returns {HTMLTableSectionElement} - a létrehozott thead
 */
function generateHeader(table, headerList){
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    // Minden fejlécszöveghez létrehoz egy <th> cellát
    for (let i of headerList){
        createCell('th', i, tr)
    }
    return thead;
}

/**
 * tbody törzs újrarenderelése a megadott tömb alapján
 * 
 * @param {CountryWriters[]} array - a megjelenítendő adatok tömbje
 */
function renderTableBody(array) {
    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = ""; // korábbi tartalom törlése

    // Minden tömbelemhez új sor létrehozása
    for(let a of array) {
        renderTableRow(tablebody, a);
    }
}

/**
 * Táblázatsor(ok) létrehozása egy CountryWriters objektumból
 * Kezeli a rowspan alkalmazását, ha két soros megjelenés szükséges
 * 
 * @param {HTMLTableSectionElement} tablebody - a táblázat body, ahova a sorok kerülnek
 * @param {CountryWriters} CountryWriters - az adott bejegyzés adatai
 */
function renderTableRow(tablebody, CountryWriters) {
    const tr2 = document.createElement('tr');
    tablebody.appendChild(tr2);

    // Első cella: nemzetiség — kattintásra kijelölhető
    const td1 = createCell('td', CountryWriters.nationality, tr2)
    td1.addEventListener("click",function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const valtozo = e.target;

        const tr = valtozo.parentElement;
        const tbody = tr.parentElement;
        const alrmarked = tbody.querySelector('.marked');

        // Egy cella legyen kijelölve egyszerre
        if (alrmarked !== null) {
            alrmarked.classList.remove('marked');
        }

        valtozo.classList.add("marked");
    });

    // Második és harmadik cella: első szerző és mű
    const td2 = createCell('td', CountryWriters.author1, tr2);
    const td3 = createCell('td', CountryWriters.literarypiece1, tr2);

    // Ha van második szerző és mű, létrehoz egy külön sort a számukra
    if (CountryWriters.author2 != undefined && CountryWriters.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tablebody.appendChild(tr3);

        const td4 = createCell('td', CountryWriters.author2, tr3);
        const td5 = createCell('td', CountryWriters.literarypiece2, tr3);

        td1.rowSpan = 2; // a nemzetiség cella két sor magasságú lesz
    }
}

/**
 * Cellák létrehozása
 * 
 * @param {'td'|'th'} cellType - a létrehozandó cella típusa ('td' vagy 'th')
 * @param {string} cellContent - a cella tartalma (szöveg)
 * @param {HTMLTableRowElement} parentRow - a sor, amelyhez a cellát hozzáadjuk
 * @returns {HTMLTableCellElement} - a létrehozott cella
 */
function createCell(cellType, cellContent, parentRow) {
    const cell = document.createElement(cellType); 
    cell.innerText = cellContent;
    parentRow.appendChild(cell);
    return cell;
}

/**
 * Űrlapelem létrehozása (label + input + hibaszöveg)
 * 
 * @param {HTMLElement} forms - a form elem, amelyhez az elemet hozzáadjuk
 * @param {string} id - az input id attribútuma
 * @param {string} labelContent - a label szövege
 */
function createFormElement(forms, id, labelContent) {
    const div = document.createElement('div');
    forms.appendChild(div);

    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelContent;
    div.appendChild(label);
    
    const br1 = document.createElement('br');
    div.appendChild(br1);
    
    const input = document.createElement('input');
    input.id = id;
    div.appendChild(input);

    const br2 = document.createElement('br');
    div.appendChild(br2);

    const br3 = document.createElement('br');
    div.appendChild(br3);
    
    // Hibaszöveg span
    const span = document.createElement('span');
    span.classList.add("error");
    div.appendChild(span);
}

/**
 * Űrlap létrehozása a megadott mezőkkel
 * 
 * @param {string} id - a form id attribútuma
 * @param {FormField[]} elements - a létrehozandó label-input párok adatai
 * @returns {HTMLFormElement} - a létrehozott form elem
 */
function generateForm(id, elements) {
    const form = document.createElement('form');
    form.id = id

    // Input mezők létrehozása
    for (let elem of elements) {
        createFormElement(form, elem.id, elem.label)
    }

    // Hozzáadás gomb
    const button = document.createElement('button');
    button.innerText = 'Hozzáadás';
    form.appendChild(button);

    return form;
}

/**
 * HTML űrlap submit eseménykezelője
 * (Az htmlform eseménykezelőjét kiszervezzük ide)
 * @param {Event} e - az esemény objektuma
 */
function HTMLFormEventListener(e) {
    e.preventDefault(); // megakadályozza az oldal újratöltését
    /**
     * @type {HTMLFormElement}
     */
    const event = e.target;

    /** @type {HTMLInputElement} */
    const nemzetiseg = event.querySelector("#nemzetiseg"); // szükséges inputok lekérése
    /** @type {string} */
    const nemzetisegvalue = nemzetiseg.value; // inputok értékei

    /** @type {HTMLInputElement} */
    const szerzo1 = event.querySelector("#szerzo1");
    /** @type {string} */
    const szerzo1value = szerzo1.value;

    /** @type {HTMLInputElement} */
    const szerzo2 = event.querySelector("#szerzo2");
    /** @type {string} */
    const szerzo2value = szerzo2.value;

    /** @type {HTMLInputElement} */
    const mu1 = event.querySelector("#mu1");
    /** @type {string} */
    const mu1value = mu1.value;

    /** @type {HTMLInputElement} */
    const mu2 = event.querySelector("#mu2");
    /** @type {string} */
    const mu2value = mu2.value;

    // Validálás: ha hibás, megszakítjuk
    if(!validateFields(nemzetiseg, szerzo1, mu1)) {
        return;
    }

    // Új objektum létrehozása a táblázathoz
    /** 
     * @type {CountryWriters} 
     */
    const tomb = {};

    tomb.nationality = nemzetisegvalue;
    tomb.author1 = szerzo1value;
    tomb.literarypiece1 = mu1value;

    // Opcionális mezők beállítása, ha megadták őket
    if (szerzo2value && mu2value) {
        tomb.author2 = szerzo2value;
        tomb.literarypiece2 = mu2value;
    }

    // Új sor beszúrása a táblázatba
    const tbody = document.getElementById("tablebody1");
    renderTableRow(tbody, tomb);
}

/**
 * Validálás (egy mező)
 * 
 * @param {HTMLInputElement} inputField - a validálandó input
 * @param {string} errorMsg - a megjelenítendő hibaüzenet
 * @returns {boolean} - igaz, ha érvényes
 */
function validateField(inputField, errorMsg) {
    let valid = true;

    if (inputField.value === "") {
        const parentDiv = inputField.parentElement;
        const error = parentDiv.querySelector(".error");
        error.innerText = errorMsg; // hibaüzenet megjelenítése
        valid = false;
    }
    return valid;
}

/**
 * Validálás (több mező)
 * 
 * @param {HTMLInputElement} inputField1 - első kötelező mező
 * @param {HTMLInputElement} inputField2 - második kötelező mező
 * @param {HTMLInputElement} inputField3 - harmadik kötelező mező
 * @returns {boolean} - igaz, ha minden mező érvényes
 */
function validateFields(inputField1, inputField2, inputField3) {
    const form = inputField1.form;

    // Korábbi hibák törlése
    const error = form.querySelectorAll('.error');
    for (const i of error) {
        i.innerText = "";
    } // hibaszövegek törlése

    let valid = true;

    // Kötelező mezők ellenőrzése
    if (!validateField(inputField1, "Mező kitöltése kötelező!")) {
        valid = false;
    }

    if (!validateField(inputField2, "Mező kitöltése kötelező!")) {
        valid = false;
    }

    if (!validateField(inputField3, "Mező kitöltése kötelező!")) {
        valid = false;
    }

    return valid;
}