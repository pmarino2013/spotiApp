import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; //importar modulo de Rutas
import { HttpClientModule } from '@angular/common/http'; //para peticiones http importo el modulo

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//Importar rutas creadas en app.routes.ts
import { ROUTES } from './app.routes';
import { PaisesComponent } from './components/paises/paises.component';

//PIPES
import { NoimagenPipe } from './pipes/noimagen.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    PaisesComponent,
    NoimagenPipe,
    TarjetasComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //agrego el módulo http
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ], //Utilizo RouterModule para decirle a angular que usaré las rutos con el hash #
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
