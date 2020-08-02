import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  avantModif: true;
  apresModif: false;

  constructor() { }

  ngOnInit(): void {
  }

  modifier(): void{
    this.avantModif = true;
    this.apresModif = false;
    console.log('Modification du collègue');
}
valider(): void{
  this.apresModif = false;
}

nouveauCollegue(): void {
  console.log('Création d\'un nouveau collègue');
}
}
