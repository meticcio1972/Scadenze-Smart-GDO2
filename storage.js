// ============================================
// SCADENZE SMART GDO 2.0
// storage.js
// ============================================

"use strict";

const Storage = {

    salvaProdotti(prodotti = []) {

        localStorage.setItem(
            "prodotti",
            JSON.stringify(prodotti)
        );

    },

    caricaProdotti() {

        const dati = localStorage.getItem("prodotti");

        if (!dati) return [];

        try {

            return JSON.parse(dati);

        } catch {

            return [];

        }

    },

    salvaScadenze(scadenze) {

        localStorage.setItem(
            "scadenzeModificate",
            JSON.stringify(scadenze)
        );

    },

    caricaScadenze() {

        return JSON.parse(

            localStorage.getItem("scadenzeModificate") ||

            "{}"

        );

    },

    salvaStorico(storico) {

        localStorage.setItem(

            "storicoModifiche",

            JSON.stringify(storico)

        );

    },

    caricaStorico() {

        return JSON.parse(

            localStorage.getItem("storicoModifiche") ||

            "[]"

        );

    },

    salvaOfferte(offerte) {

        localStorage.setItem(

            "offerte",

            JSON.stringify(offerte)

        );

    },

    caricaOfferte() {

        return JSON.parse(

            localStorage.getItem("offerte") ||

            "[]"

        );

    },

    salvaReparto(reparto) {

        localStorage.setItem(

            "repartoAttivo",

            reparto

        );

    },

    caricaReparto() {

        return localStorage.getItem("repartoAttivo") ||

            "macelleria"; 

    },

    inizializza() {

        if (!localStorage.getItem("prodotti"))

            this.salvaProdotti([]);

        if (!localStorage.getItem("offerte"))

            this.salvaOfferte([]);

        if (!localStorage.getItem("scadenzeModificate"))

            this.salvaScadenze({});

        if (!localStorage.getItem("storicoModifiche"))

            this.salvaStorico([]);

    }

};
