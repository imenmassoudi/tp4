import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
@Input() position:number;
@Input() nombre:number;
carre(){
  return this.nombre*this.nombre;
}
  constructor() { }

  ngOnInit() {
  }

}
