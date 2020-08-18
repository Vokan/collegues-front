import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {


  col: Collegue = this.dataService.recupererCollegueCourant();

  modif = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  modifier(): void{
    console.log('Modification du collegue');
    this.modif = true;
  }
  valider(): void{
    console.log('Validation des modifications');
    this.modif = false;
  }

  nouveauCollegue(): void {
    console.log('Création d\'un nouveau collègue');
  }
}
