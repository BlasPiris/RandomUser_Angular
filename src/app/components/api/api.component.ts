import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[ApiService],
})
export class ApiComponent implements OnInit {

  constructor(public datosService:ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){this.datosService.getData().subscribe(result=>{console.log(result)})}}
