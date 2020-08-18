import { Collegue } from '../models/Collegue';

export function collegueMock(): Collegue[] {

const date1 = '1450-11-11';
const date2 = '1503-05-11';
const Collegue1 = new Collegue ('NEO404', 'Loinvoyant', 'Fitz', 'Loinvoyant.Fite@gmail.com', date1, './assets/Fitz.jpg');
const Collegue2 = new Collegue ('NEO405', 'Loinvoyant', 'Abeille', 'Loinvoyant.Abeille@gmail.com', date2, './assets/Abeille.jpg');
const collegues: Collegue [] = [Collegue1, Collegue2];
return collegues;
}

