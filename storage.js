mi// ============================================
// SCADENZE SMART GDO 2.0
// storage.js
// ============================================

"use strict";

const Storage = {

    // ==========================
    // PRODOTTI
    // ==========================

    salvaProdotti(prodotti = Prodotti.tutti()) {

    localStorage.setItem(
        "prodotti",
        JSON.stringify(prodotti)
    );

}
    caricaProdotti() {

        const dati =
            localStorage.getItem("prodotti");

        if (!dati) return [];

        return JSON.parse(dati);

    },

    // ==========================
    // SCADENZE MODIFICATE
    // ==========================

    salvaScadenze(scadenze) {

        localStorage.setItem(
            "scadenzeModificate",
            JSON.stringify(scadenze)
        );

    },

    caricaScadenze() {

        const dati =
            localStorage.getItem(
                "scadenzeModificate"
            );

        return dati
            ? JSON.parse(dati)
            : {};

    },

    // ==========================
    // STORICO
    // ==========================

    salvaStorico(storico) {

        localStorage.setItem(
            "storicoModifiche",
            JSON.stringify(storico)
        );

    },

    caricaStorico() {

        const dati =
            localStorage.getItem(
                "storicoModifiche"
            );

        return dati
            ? JSON.parse(dati)
            : {};

    },

    // ==========================
    // OFFERTE
    // ==========================

    salvaOfferte(offerte) {

        localStorage.setItem(
            "offerte",
            JSON.stringify(offerte)
        );

    },

    caricaOfferte() {

        const dati =
            localStorage.getItem(
                "offerte"
            );

        return dati
            ? JSON.parse(dati)
            : [];

    },

    // ==========================
    // REPARTO
    // ==========================

    salvaReparto(reparto) {

        localStorage.setItem(
            "repartoAttivo",
            reparto
        );

    },

    caricaReparto() {

        return localStorage.getItem(
            "repartoAttivo"
        ) || "macelleria";

    }
,

    // ==========================
    // INIZIALIZZA STORAGE
    // ==========================

    inizializza() {

        if (!localStorage.getItem("prodotti")) {

            localStorage.setItem(

                "prodotti",

                JSON.stringify([])

            );

        }

        if (!localStorage.getItem("offerte")) {

            localStorage.setItem(

                "offerte",

                JSON.stringify([])

            );

        }

        if (!localStorage.getItem("scadenzeModificate")) {

            localStorage.setItem(

                "scadenzeModificate",

                JSON.stringify({})

            );

        }

        if (!localStorage.getItem("storicoModifiche")) {

            localStorage.setItem(

                "storicoModifiche",

                JSON.stringify([])

            );

        }

    }
};
