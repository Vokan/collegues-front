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

  constructor() { }

  rechercheParNom(nom: string): string[]{
    return this.matriculesMock;
  }

  recupererCollegueCourant(): Collegue {
    return this.collegueMock;
  }
}
