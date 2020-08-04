import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  rechercher = false;
  matriculesMock = this.src.rechercheParNom('nom');

  constructor( private src: DataService ) { }

  ngOnInit(): void {
  }

  recherche(): void {
    this.rechercher = true;
  }
}
