import { Component, OnInit} from '@angular/core';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matriculesMock = this.dataService.rechercheParNom('nom');

  rechercher = false;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void { }

  recherche(): void {
    this.rechercher = true;
  }
}
