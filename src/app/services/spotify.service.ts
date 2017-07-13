import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService implements OnInit {
    client_id = 'e7e21c84cb2b4dacb94f9baf1a8832f9';
    client_secret = '10b9ba0f71f9418fa058795382c1a2fb';
    grant_type = 'client_credentials'

    urlToken = 'https://accounts.spotify.com/api/token';
    urlBase = 'https://api.spotify.com/v1/';
    urlSearch = this.urlBase + 'search';
    urlArtista = this.urlBase + 'artists/';

    artistas: any[] = [];
    artistaSeleccionado: any;
    topCanciones: any[];

    token_type: string;
    access_token: string;
    expires_in;
    token = 'Bearer BQBmIAzbxfmcfcLpwWllIKpmZS-rTO2xLY-fJZvFbUxJN2Y6fGTLnL3fRPfLO0Wqsg_gD6CMH-hukvxvspnEEw';
  constructor(private http: Http) {
  }

   ngOnInit() {
   }

  getToken() {
      const headers: Headers = new Headers();
      headers.append('client_id', this.client_id);
      headers.append('client_secret', this.client_secret);
      headers.append('grant_type', this.grant_type);

      console.log(`Obtener token: ${this.urlToken}`)
      return this.http.get(this.urlToken, {headers}).map( resp => {
          console.log(`Token: resp.json()`);
           const tokenJSON: any = resp.json();

           this.token_type = tokenJSON.token_type;
           this.access_token = tokenJSON.access_token;
           this.expires_in = new Date().getMilliseconds + (tokenJSON.expires_in + 1000);
           this.token = this.token_type + ' ' + this.access_token;
           console.log(`Token: ${this.token}`);
      })
  }


  getArtista(nombreArtista: string) {
    //   const miliActual = new Date().getMilliseconds;
    //   if (this.token == null){
    //       this.getToken();
    //   }
    //   if ( miliActual > this.expires_in ) {
    //       this.getToken();
    //   }
      const headers: Headers = new Headers();
      headers.append('Authorization', this.token);
//      const query = `?q=${encodeURIComponent(nombreArtista.trim())}&type=artist`;
      const query = `?q=${encodeURIComponent(nombreArtista)}&type=artist`;
      const url = this.urlSearch + query;
      console.log(url);

      return this.http.get(url, {headers}).map( resp => {
          this.artistas = resp.json().artists.items;
          console.log(this.artistas)
      })
  }

  getArtistaID(idArtista: string) {
    //   if (this.token == null){
    //       this.getToken();
    //   }
      //
    //   const miliActual = new Date().getMilliseconds;
    //   if ( miliActual > this.expires_in ) {
    //       this.getToken();
    //   }
      const headers: Headers = new Headers();
      headers.append('Authorization', this.token);
      const url = this.urlArtista + idArtista;
      console.log(url);

      return this.http.get(url, {headers}).map( resp => {
          this.artistaSeleccionado = resp.json();
          console.log(this.artistaSeleccionado);
          return this.artistaSeleccionado;
      })
  }

  getTopTracksArtist(idArtista: string) {
    //   if (this.token == null){
    //       this.getToken();
    //   }
    //   const miliActual = new Date().getMilliseconds;
    //   if ( miliActual > this.expires_in ) {
    //       this.getToken();
    //   }
      const headers: Headers = new Headers();
      headers.append('Authorization', this.token);
      const url = this.urlArtista + idArtista + '/top-tracks?country=ES';
      console.log(url);

      return this.http.get(url, {headers}).map( resp => {
          this.topCanciones = resp.json().tracks;
          console.log(this.topCanciones);
          return this.topCanciones;
      })
  }

}
