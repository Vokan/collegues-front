import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import {matriculesMock} from '../mock/matricules.mock';
import {collegueMock} from '../mock/collegues.mock';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { filter } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  matriculesMock = matriculesMock;
  collegueMock = collegueMock;

  constructor(private _http: HttpClient) { }


  rechercheParNom(nom: string): Observable<Collegue>{
    // TODO retourner une liste de matricules fictifs à partir du fichier

    return this._http.get<Collegue>('https://leo-collegues-api.herokuapp.com/collegues')
     .pipe(
       filter(col => col.nom === nom));
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return collegueMock;
  }


}
