import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Importo httpClient para consumir API

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
})
export class PaisesComponent implements OnInit {
  paises: any[] = []; //Creo arreglo donde se almacenará la data
  constructor(private http: HttpClient) {
    //inyecto el httpClient
    //Uso método get con la direccion del API
    this.http
      .get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((data: any) => {
        //Subscribe me trae la data
        this.paises = data; //almaceno la data en el arreglo de paises
        console.log(data);
      });
  }

  ngOnInit(): void {}
}
