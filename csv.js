// ============================================
// SCADENZE SMART GDO 2.0
// csv.js
// ============================================

"use strict";

const CSV = {

    importa(file) {

        if (!file) return;

        console.log("A - Import CSV avviato");

        const reader = new FileReader();

        reader.onload = (evento) => {

            try {

                console.log("B - File letto");

                const testo = evento.target.result;

                const righe = testo.split(/\r\n|\n|\r/);

                const prodotti = [];

                for (let i = 1; i < righe.length; i++) {

                    if (!righe[i].trim()) continue;

                    const colonne = righe[i].split(/\t|;|,/);

                    if (colonne.length < 3) continue;

                    const codice = colonne[0].trim();
                    const descrizione = colonne[1].trim();
                    const scadenza = colonne[2].trim();

                    prodotti.push({

                        codice,
                        descrizione,
                        scadenza,
                        giorni: Utils.giorniAllaScadenza(scadenza)

                    });

                }

                console.log("C - Prodotti letti:", prodotti.length);

                // Caricamento prodotti
                if (typeof Prodotti !== "undefined" &&
                    typeof Prodotti.carica === "function") {

                    Prodotti.carica(prodotti);

                    console.log("D - Prodotti caricati");
                }

                // Salvataggio
                if (typeof Storage !== "undefined" &&
                    typeof Storage.salvaProdotti === "function") {

                    Storage.salvaProdotti(prodotti);

                    console.log("E - Storage aggiornato");
                }

                // Dashboard
                if (typeof Dashboard !== "undefined" &&
                    typeof Dashboard.aggiorna === "function") {

                    Dashboard.aggiorna();

                    console.log("F - Dashboard aggiornata");
                }

                // Registro
                if (typeof Registro !== "undefined") {

                    Registro.registraEvento({

                        categoria: "CSV",

                        operazione: "IMPORTAZIONE",

                        livello: "SUCCESS",

                        stato: "OK",

                        note: `${prodotti.length} prodotti importati`

                    });

                    console.log("G - Registro aggiornato");
                }

                // Sessione
                if (typeof Sessione !== "undefined" &&
                    typeof Sessione.aggiornaImport === "function") {

                    Sessione.aggiornaImport(prodotti.length);

                    console.log("H - Sessione aggiornata");
                }

                // Notifica
                if (typeof Notifiche !== "undefined" &&
                    typeof Notifiche.successo === "function") {

                    Notifiche.successo(
                        `${prodotti.length} prodotti importati`
                    );
                }

                console.log("IMPORTAZIONE TERMINATA");

            }

            catch (errore) {

                console.error("ERRORE CSV:", errore);

            }

        };

        reader.readAsText(file);

    }

};
