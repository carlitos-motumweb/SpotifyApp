import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component'

import {APP_ROUTING} from './app.routes';
import {SpotifyService} from './services/spotify.service';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ArtistaComponent } from './components/artista/artista.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistaComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    Angular2FontawesomeModule,
    APP_ROUTING
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
