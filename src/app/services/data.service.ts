import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import {matriculesMock} from '../mock/matricules.mock';
import {collegueMock} from '../mock/collegues.mock';
import { NewCollegue} from '../models/NewCollegue';
import { Observable, from, interval, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegues: Collegue[] = collegueMock();

  constructor(private http: HttpClient) { }

  rechercheParNom(nom: string): string[]{
    // TODO retourner une liste de matricules fictifs à partir du fichier

    return  matriculesMock.map(m => m.matricule);
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return this.collegues[0];
  }


}
