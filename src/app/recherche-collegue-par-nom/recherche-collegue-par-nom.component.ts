import { matriculesMock } from './../mock/matricules.mock';
import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

   // avant utilisation de DataService
  // matriculesMock = matriculesMock;

  rechercher = false;

  // Apres utilisation de DataService
  matriculesMock;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.matriculesMock = this.dataService.rechercheParNom('NEO405');
  }

  recherche(): void {
    this.rechercher = true;
  }
}
