import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  rechercher = false;
  matriculesMock;
  constructor() { }

  ngOnInit(): void {
  }

  recherche(): void {
    this.rechercher = true;
  }
}
