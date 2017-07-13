import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

    artistaSeleccionado: any;
    topCancionesArtista: any[] = [ ];

  constructor(private _activatedRoute: ActivatedRoute,
  private _spotifyService: SpotifyService) { }

  ngOnInit() {
      this._activatedRoute.params.map(parametros => parametros['id']).subscribe( id => {
          console.log(id);
          this._spotifyService.getArtistaID(id).subscribe(respuesta => {
              this.artistaSeleccionado = respuesta;
          });

          this._spotifyService.getTopTracksArtist(id).subscribe(respuesta => {
              this.topCancionesArtista = respuesta;
          });
        });

  }

}
