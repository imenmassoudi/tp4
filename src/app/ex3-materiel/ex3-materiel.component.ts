import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ex3-materiel',
  templateUrl: './ex3-materiel.component.html',
  styleUrls: ['./ex3-materiel.component.css']
})
export class Ex3MaterielComponent implements OnInit {
@Input() nom:string;
@Input() reference:string;
@Input() image:string;
@Input() prix:number;
@Input() repare:string;
onReparer(){
  this.repare="réparé"
}
  constructor() { }

  ngOnInit() {
  }

}
