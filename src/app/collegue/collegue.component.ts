import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  elementMasquee = true;

  constructor() { }

  ngOnInit(): void {
  }

  modifier(): void{
    console.log('Modification du collegue');
    this.elementMasquee = !this.elementMasquee;
  }
  valider(): void{
    console.log('Validation des modifications');
    this.elementMasquee = !this.elementMasquee;
  }

  nouveauCollegue(): void {
    console.log('Création d\'un nouveau collègue');
  }
}
