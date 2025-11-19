/**
 * Ez az adattipus irja le a tablazat egy elem tipusat.
 * A masodik szerzo es a masodik mu opcionálisak.
 * @typedef {{
 *   nationality:string,
 *   author1:string,
 *   author2?:string,
 *   literarypiece1:string,
 *   literarypiece2?:string
 * }} CountryWriters
 */

/**
 * Ez a form generalasi mezotipus (id + label).
 * @typedef {{
 *   id:string,
 *   label:string
 * }} FormField
 */

/**
 * A cella tipusa td vagy th lehet.
 * @typedef {'td'|'th'} CellType
 */

/**
 * Egy tabla cellat hoz letre, majd visszaadja azt.
 */
function cell_letrehoz(celltype, parentrow, content) {
    const c = document.createElement(celltype);
    c.innerText = content;
    parentrow.appendChild(c);
    return c;
}

/**
 * Letrehozza a tablazat fejlecet egy sorral.
 */
function fejlec_letrehoz(table, headerek) {
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    for (let i = 0; i < headerek.length; i++) {
        cell_letrehoz('th', tr, headerek[i]);
    }

    return thead;
}

/**
 * Letrehoz egy teljes tablazatot: fejlec + tbody.
 */
function tabla_letrehoz(headerek, tbodyid) {
    const table = document.createElement('table');
    document.body.appendChild(table);

    fejlec_letrehoz(table, headerek);

    const tbody = document.createElement('tbody');
    tbody.id = tbodyid;
    table.appendChild(tbody);

    return tbody;
}

/**
 * Letrehoz egy vagy ket sort, attol fuggoen hogy van-e masodik szerzo + mu.
 */
function sor_letrehoz(tbody, elem) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const elso = cell_letrehoz('td', tr, elem.nationality);

    // Kattintasra kijeloles
    elso.addEventListener('click', function (e) {
        const cell = e.target;
        const body = cell.parentElement.parentElement;

        const regebbi = body.querySelector('.marked');
        if (regebbi !== null) {
            regebbi.classList.remove('marked');
        }

        cell.classList.add('marked');
    });

    cell_letrehoz('td', tr, elem.author1);
    cell_letrehoz('td', tr, elem.literarypiece1);

    if (elem.author2 !== undefined && elem.literarypiece2 !== undefined) {
        const tr2 = document.createElement('tr');
        tbody.appendChild(tr2);

        cell_letrehoz('td', tr2, elem.author2);
        cell_letrehoz('td', tr2, elem.literarypiece2);

        elso.rowSpan = 2;
    }
}

/**
 * A teljes tablazat ujrarajzolasa.
 */
function tabla_ujrarajzol(tbody, adatlista) {
    tbody.innerHTML = '';
    for (let i = 0; i < adatlista.length; i++) {
        sor_letrehoz(tbody, adatlista[i]);
    }
}

/**
 * A form letrehozasa tagolt szerkezettel: div + label + input + span.error
 */
function form_letrehoz(formid, mezok) {
    const form = document.createElement('form');
    form.id = formid;

    for (let i = 0; i < mezok.length; i++) {
        const wrap = document.createElement('div');
        wrap.classList.add('formrow');

        const lbl = document.createElement('label');
        lbl.htmlFor = mezok[i].id;
        lbl.innerText = mezok[i].label;
        wrap.appendChild(lbl);

        const inp = document.createElement('input');
        inp.id = mezok[i].id;
        wrap.appendChild(inp);

        const err = document.createElement('span');
        err.classList.add('error');
        wrap.appendChild(err);

        form.appendChild(wrap);
    }

    form.appendChild(document.createElement('br'));

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.innerText = 'Hozzaadas';
    form.appendChild(btn);

    return form;
}

/**
 * Egyetlen input mezo ellenorzese. Ha ures, hibaüzenet irasa.
 */
function mezot_ellenoriz(input, msg) {
    let jo = true;

    if (input.value.trim() === '') {
        const div = input.parentElement;
        const sp = div.querySelector('.error');
        sp.innerText = msg;
        jo = false;
    }
    return jo;
}

/**
 * Harom kotelezo mezo ellenorzese egyszerre.
 */
function mezok_ellenoriz(a, b, c) {
    let valid = true;
    if (!mezot_ellenoriz(a, 'A mezo kitoltese kotelezo')) valid = false;
    if (!mezot_ellenoriz(b, 'A mezo kitoltese kotelezo')) valid = false;
    if (!mezot_ellenoriz(c, 'A mezo kitoltese kotelezo')) valid = false;
    return valid;
}

/**
 * Torli a form osszes hibauzenetet.
 */
function hibak_torol(form) {
    const spans = form.querySelectorAll('.error');
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerText = '';
    }
}

/**
 * A submit esemenykezelo:
 * - validalas
 * - uj objektum letrehozasa
 * - tablazat frissitese
 * - form reset
 */
function form_submit(e) {
    e.preventDefault();

    const form = e.target;

    hibak_torol(form);

    const nemz = form.querySelector('#nemzetiseg');
    const szer1 = form.querySelector('#szerzo1');
    const mu1 = form.querySelector('#mu1');
    const szer2 = form.querySelector('#szerzo2');
    const mu2 = form.querySelector('#mu2');

    if (!mezok_ellenoriz(nemz, szer1, mu1)) return;

    const adat = {
        nationality: nemz.value.trim(),
        author1: szer1.value.trim(),
        literarypiece1: mu1.value.trim(),
        author2: szer2.value.trim() !== '' ? szer2.value.trim() : undefined,
        literarypiece2: mu2.value.trim() !== '' ? mu2.value.trim() : undefined
    };

    adatlista.push(adat);

    const tbody = document.getElementById('tbody_id');
    tabla_ujrarajzol(tbody, adatlista);

    form.reset();
}
