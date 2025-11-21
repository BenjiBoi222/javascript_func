/**
 * Írók országonkénti típusdefiníciója
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} CountryWriters
 */

/**
 * Űrlapmező típusdefiníció
 * @typedef {{id:string, label:string}} FormField
 */

/**
 * Adatbejegyzések tömbje
 * @type {CountryWriters[]}
 */
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
        literarypiece1: 'Egyperces Novellák',
        author2: 'József Attila',
        literarypiece2: 'Klárisok',
    },
    {
        nationality: 'Svájc',
        author1: 'Friedrich Dürrenmatt',
        literarypiece1: 'A fizikusok',
    }
]

/**
 * Űrlap konfiguráció: táblázatfejlécek és űrlapmezők
 * @type {{header:string[], formFields:FormField[]}}
 */
const formElements = {
    header: ['Nemzetiség', 'Szerző', 'Mű'],
    formFields: [
        { 
            id: "nemzetiseg",
            label: "Nemzetiség: ",
        },
        { 
            id: "szerzo1",
            label: "Szerző: ",
        },
        { 
            id: "mu1",
            label: "Mű: ",
        },
        { 
            id: "szerzo2",
            label: "Másik Szerző: ",
        },
        { 
            id: "mu2",
            label: "Mű: ",
        }
    ]
}

// Táblázat létrehozása és törzs feltöltése
generateTable(formElements.header, "tablebody");
renderTableBody(arr);

// HTML űrlap bekötése a beküldési eseménykezelőhöz
const formHTML = document.getElementById("htmlform");
formHTML.addEventListener('submit', HTMLFormEventListener);

// Űrlap létrehozása JavaScripttel és hozzáadása a dokumentumhoz
const formJS = generateForm("jsForm", formElements.formFields);
document.body.appendChild(formJS);

// A JS által generált űrlap beküldésének eseménykezelője
formJS.addEventListener("submit", function(e){
    e.preventDefault(); // megakadályozza az oldal újratöltését

    /**
     * @type {HTMLFormElement}
     */
    const event = e.target;

    // Kötelező mezők
    /** @type {HTMLInputElement} */
    const nemzetiseg = event.querySelector("#nemzetiseg");
    /** @type {string} */
    const nemzetisegvalue = nemzetiseg.value;

    /** @type {HTMLInputElement} */
    const szerzo1 = event.querySelector("#szerzo1");
    /** @type {string} */
    const szerzo1value = szerzo1.value;

    // Opcionális mezők
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

    /** 
     * Új CountryWriters objektum létrehozása az űrlapadatokból
     * @type {CountryWriters} 
     */
    const obj = {};

    // Kötelező mezők érvényesítése; kilép, ha hibásak
    if (!validateFields(nemzetiseg, szerzo1, mu1)){
        return;
    }

    // Objektum feltöltése az űrlap értékeivel
    obj.nationality = nemzetisegvalue;
    obj.author1 = szerzo1value;
    obj.literarypiece1 = mu1value;

    // Opcionális mezők hozzáadása csak ha megadták őket
    obj.author2 = szerzo2value !== "" ? szerzo2value : undefined;
    obj.literarypiece2 = mu2value !== "" ? mu2value : undefined;

    // Új bejegyzés hozzáadása és táblázat
    arr.push(obj);
    renderTableBody(arr);
})