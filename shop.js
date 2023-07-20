"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// prendo i dati da Abbigliamento.json
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("Abbigliamento.json");
    const dati = yield response.json();
    console.log(dati);
}))();
// Classe CapiAbbigliamento con costruttore
class CapiAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    // Calcolo il prezzo scontato del capo
    getsaldocapo() {
        return this.prezzoivaesclusa - this.saldo;
    }
    // Calcolo calcolare il costo totale del capo con IVA inclusa
    getacquistocapo() {
        return this.prezzoivainclusa;
    }
}
// Prendo i dati dentro API
const capo1 = new CapiAbbigliamento(1, 2121, "primavera", "cardigan", 1231, 5, "nero", 18.5, 22.57, "Sì", 45);
const capo2 = new CapiAbbigliamento(2, 4111, "estate", "t-shirt", 1251, 6, "rosso", 5.5, 6.71, "Sì", 30);
const capo3 = new CapiAbbigliamento(3, 1181, "inverno", "felpa", 1229, 8, "beige", 17.5, 21.35, "Sì", 50);
const capo4 = new CapiAbbigliamento(4, 1111, "estate", "maglione", 1221, 4, "verde", 20, 24.4, "Sì", 50);
const capo5 = new CapiAbbigliamento(5, 6111, "primavera", "maglia", 1021, 5, "blu", 11, 13.42, "Sì", 60);
//stampo in console il prezzo scontato e il costo totali di ogni capo
console.log("Prezzo scontato del capo 1:", capo1.getsaldocapo());
console.log("Costo totale del capo 1:", capo1.getacquistocapo());
console.log("Prezzo scontato del capo 2:", capo2.getsaldocapo());
console.log("Costo totale del capo 2:", capo2.getacquistocapo());
console.log("Prezzo scontato del capo 3:", capo3.getsaldocapo());
console.log("Costo totale del capo 3:", capo3.getacquistocapo());
console.log("Prezzo scontato del capo 4:", capo4.getsaldocapo());
console.log("Costo totale del capo 4:", capo4.getacquistocapo());
console.log("Prezzo scontato del capo 4:", capo4.getsaldocapo());
console.log("Costo totale del capo 5:", capo5.getacquistocapo());
