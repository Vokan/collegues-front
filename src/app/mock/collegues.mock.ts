import { Collegue } from '../models/Collegue';

export const collegueMock: Collegue = new Collegue();

collegueMock.matricule = 'NEO404';
collegueMock.nom = 'Loinvoyant';
collegueMock.prenom = 'Fitz';
collegueMock.email = 'Loinvoyant.Fite@gmail.com';
collegueMock.dateDeNaissance = new Date('21450-11-11');
collegueMock.photoUrl = './assets/Fitz.jpg';


