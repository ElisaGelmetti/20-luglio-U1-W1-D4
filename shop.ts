// prendo i dati da Abbigliamento.json
(async () => {
  const response = await fetch("Abbigliamento.json");
  const dati = await response.json();
  console.log(dati);
})();

// Definisco l'interfaccia per le caratteristiche dei capi di abbigliamento
interface Abbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
}

// Classe CapiAbbigliamento con costruttore
class CapiAbbigliamento implements Abbigliamento {
  constructor(
    public id: number,
    public codprod: number,
    public collezione: string,
    public capo: string,
    public modello: number,
    public quantita: number,
    public colore: string,
    public prezzoivaesclusa: number,
    public prezzoivainclusa: number,
    public disponibile: string,
    public saldo: number
  ) {}

  // Calcolo il prezzo scontato del capo
  getsaldocapo(): number {
    return this.prezzoivaesclusa - this.saldo;
  }

  // Calcolo calcolare il costo totale del capo con IVA inclusa
  getacquistocapo(): number {
    return this.prezzoivainclusa - this.getsaldocapo();
  }
}

// Prendo i dati dentro API
const capo1 = new CapiAbbigliamento(
  1,
  2121,
  "primavera",
  "cardigan",
  1231,
  5,
  "nero",
  18.5,
  22.57,
  "Sì",
  45
);
const capo2 = new CapiAbbigliamento(
  2,
  4111,
  "estate",
  "t-shirt",
  1251,
  6,
  "rosso",
  5.5,
  6.71,
  "Sì",
  30
);
const capo3 = new CapiAbbigliamento(
  3,
  1181,
  "inverno",
  "felpa",
  1229,
  8,
  "beige",
  17.5,
  21.35,
  "Sì",
  50
);

const capo4 = new CapiAbbigliamento(
  4,
  1111,
  "estate",
  "maglione",
  1221,
  4,
  "verde",
  20,
  24.4,
  "Sì",
  50
);

const capo5 = new CapiAbbigliamento(
  5,
  6111,
  "primavera",
  "maglia",
  1021,
  5,
  "blu",
  11,
  13.42,
  "Sì",
  60
);

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
