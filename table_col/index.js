/**
* @type {{name:string, time:string, love1:string, love2?:string}[]}
*/
const arr = [
    {
        name: `Balassi B†lint`,
        time: `reform†ci¢`,
        love1: `Losonczy Anna`,
        love2: `Dob¢ Krisztina`
    },
    {
        name: `Csokonai VitÇz Mih†ly`,
        time: `felvil†gosod†s`,
        love1: `Vajda Juli†na`
    },
    {
        name: `Pet?fi S†ndor`,
        time: `magyar romantika`,
        love1: `Mednyanszky Berta`,
        love2: `Szendrey J£lia`
    },
    {
        name: `Ady Endre`,
        time: `20. sz†zad`,
        love1: `LÇda`,
        love2: `Csinszka`
    }
]

// t†bla lÇtrehoz†sa Çs hozz†ad†sa a dokumentumhoz
const table = document.createElement('table');
document.body.appendChild(table);

// fejlÇc rÇsz lÇtrehoz†sa
const thead = document.createElement('thead');
table.appendChild(thead);

// els? sor (fejlÇcsor) hozz†ad†sa a thead-hez
const tr1 = document.createElement('tr');
thead.appendChild(tr1);

// fejlÇc oszlopai
createCellElement("th", "Szerz? neve", tr1);
createCellElement("th", "Korszak", tr1);
const th3 = createCellElement("th", "Szerelmek", tr1);
th3.colSpan = 2; // a ?Szerelmek? kÇt oszlopot fog îssze

// tîrzs (tbody) lÇtrehoz†sa
const tbody = document.createElement('tbody');
table.appendChild(tbody);

// a tîmb adatainak bej†r†sa, minden szerz?hîz £j sor lÇtrehoz†sa
for (const a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    // nÇv Çs korszak mindig megjelenik
    createCellElement("td", a.name, tr2);
    createCellElement("td", a.time, tr2);

    // els? szerelem oszlop
    const td3 = createCellElement("td", a.love1, tr2);

    // ha van m†sodik szerelem, kÅlîn cell†ban jelenik meg
    if (a.love2) {
        createCellElement("td", a.love2, tr2);
    } else {
        // ha nincs, az els? szerelem cella kÇt oszlopot foglal
        td3.colSpan = 2;
    }
}

/**
* SegÇdfÅggvÇny cell†k lÇtrehoz†s†hoz Çs a megfelel? sorhoz ad†s†hoz.
*
* @param {string} cellType - a cella t°pusa (th vagy td)
* @param {string} cellContent - a cella szîvege
* @param {HTMLTableRowElement} cellRow - a sor, amihez a cell†t hozz†adjuk
* @returns {HTMLTableCellElement} - visszaadja a cell†t, ha kÇs?bb m¢dos°tani kell (pl. colSpan)
*/
function createCellElement(cellType, cellContent, cellRow) {
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    cellRow.appendChild(cell);
    return cell;
}

// =======================
// ?rlap lÇtrehoz†sa
// =======================

// form elem felÇp°tÇse
const form = document.createElement('form');
form.id = 'form_js';
document.body.appendChild(form);

// c°m hozz†ad†sa a form tetejÇre
const h2 = document.createElement('h2');
h2.innerText = 'Javascript form';
form.appendChild(h2);

/**
 * SegÇdfÅggvÇny input mez? + c°mke lÇtrehoz†s†ra
 * @param {string} labelText - a label felirata
 * @param {string} inputType - az input t°pusa (pl. text)
 * @param {string} inputId - az input azonos°t¢ja
 * @param {HTMLElement} forms - az elem, amihez hozz†adjuk (jelen esetben a form)
 */
function createInputField(labelText, inputType, inputId, forms) {
    // label lÇtrehoz†sa
    const label = document.createElement('label');
    label.htmlFor = inputId;
    label.innerText = labelText;
    forms.appendChild(label);

    // sortîrÇs
    forms.appendChild(document.createElement('br'));

    // input mez? lÇtrehoz†sa
    const input = document.createElement('input');
    input.type = inputType;
    input.id = inputId;
    input.name = inputId;
    forms.appendChild(input);

    // extra sortîrÇsek a rendezett megjelenÇshez
    forms.appendChild(document.createElement('br'));
    forms.appendChild(document.createElement('br'));
}

// input mez?k lÇtrehoz†sa a segÇdfÅggvÇnnyel
createInputField('Kîlt? neve:', 'text', 'kolto_nev', form);
createInputField('Korszak:', 'text', 'korszak', form);
createInputField('Szerelme:', 'text', 'szerelem1', form);
createInputField('Szerelme:', 'text', 'szerelem2', form);

// gomb hozz†ad†sa az ?rlaphoz
const button = document.createElement('button');
button.innerText = 'Hozz†ad†s';
form.appendChild(button);
