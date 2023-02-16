import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre_usr:string
  constructor() { 
    this.nombre_usr="";
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
