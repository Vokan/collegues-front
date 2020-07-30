import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  modif: false;
  sansModif: null;

  constructor() { }

  ngOnInit(): void {
  }
  modifier(): void{
    this.modif = false;
    this.sansModif = null;
    console.log('Modification du collègue');
}
nouveauCollegue(): void {
  console.log('Création d\'un nouveau collègue');
}
}
