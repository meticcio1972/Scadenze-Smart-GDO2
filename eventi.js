no// ============================================
// SCADENZE SMART GDO 2.0
// eventi.js
// Gestione Eventi
// ============================================

"use strict";

const Eventi = {

    inizializza() {

        this.importaCSV();

        this.ricerca();

        this.menu();

        this.offerte();

        this.documenti();

        this.assistente();

    },

    // ==========================
    // IMPORT CSV
    // ==========================

    importaCSV() {

        const input = document.getElementById("csvFile");

        if (!input) return;

        input.addEventListener("change", (e) => {

            if (!e.target.files.length) return;

            CSV.importa(e.target.files[0]);

        });

    },

    // ==========================
    // RICERCA
    // ==========================

    ricerca() {

        const input = document.getElementById("ricerca");

        if (!input) return;

        input.addEventListener("input", (e) => {

            const risultati = Ricerca.testo(e.target.value);

            if (typeof mostraProdotti === "function") {

                mostraProdotti(risultati);

            }

        });

    },

    // ==========================
    // MENU
    // ==========================

    menu() {

        document.querySelectorAll("[data-pagina]")

        .forEach(bottone => {

            bottone.addEventListener("click", () => {

                UI.mostraSezione(

                    bottone.dataset.pagina

                );

            });

        });

    },

    // ==========================
    // OFFERTE
    // ==========================

    offerte() {

        document.querySelectorAll("[data-offerta]")

        .forEach(bottone => {

            bottone.addEventListener("click", () => {

                // verrà completato
                // quando costruiremo la schermata offerte

            });

        });

    },

    // ==========================
    // DOCUMENTI
    // ==========================

    documenti() {

        document.querySelectorAll("[data-documento]")

        .forEach(bottone => {

            bottone.addEventListener("click", () => {

                // PDF
                // Excel
                // CSV

            });

        });

    },

    // ==========================
    // ASSISTENTE GDO
    // ==========================

    assistente() {

        const bottone = document.getElementById("assistenteAI");

        if (!bottone) return;

        bottone.addEventListener("click", () => {

            const briefing = AI.briefing();

            console.log(briefing);

        });

    }

};
function mostraProdotti(lista) {

    const contenuto = document.getElementById("contenuto");

    if (!contenuto) return;

    if (!lista || lista.length === 0) {

        contenuto.innerHTML = "<p>Nessun dato caricato</p>";

        return;

    }

    let html = `
        <table class="tabella-prodotti">
            <thead>
                <tr>
                    <th>Codice</th>
                    <th>Descrizione</th>
                    <th>Scadenza</th>
                    <th>Giorni</th>
                </tr>
            </thead>
            <tbody>
    `;

    lista.forEach(prodotto => {

        html += `
            <tr>
                <td>${prodotto.codice}</td>
                <td>${prodotto.descrizione}</td>
                <td>${prodotto.scadenza}</td>
                <td>${prodotto.giorni}</td>
            </tr>
        `;

    });

    html += `
            </tbody>
        </table>
    `;

    contenuto.innerHTML = html;

}
