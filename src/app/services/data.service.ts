import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import {matriculesMock} from '../mock/matricules.mock';
import {collegueMock} from '../mock/collegues.mock';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  matriculesMock = matriculesMock;
  collegueMock = collegueMock;


  rechercheParNom(nom: string): string[]{
    // TODO retourner une liste de matricules fictifs à partir du fichier

    return this.matriculesMock;
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return collegueMock;
  }


}
