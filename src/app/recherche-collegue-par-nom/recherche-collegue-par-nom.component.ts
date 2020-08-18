import { Component, OnInit} from '@angular/core';
import { DataService} from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  // matriculesMock = this.dataService.rechercheParNom('nom');


  matricule: string;
  matriculeSub: Subscription;
  rechercher = false;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.matriculeSub = this.dataService.rechercheParNom('Oddet').subscribe(
      valeur => {
        this.matricule = valeur[0].matricule; }
    );
  }

  recherche(): void {
    this.rechercher = true;
  }
}
