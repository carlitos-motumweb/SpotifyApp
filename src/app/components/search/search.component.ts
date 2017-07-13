import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    artistas: any[] = [];
    nombreArtista: string;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscarArtista() {
      this._spotifyService.getArtista(this.nombreArtista).subscribe(respuesta => { });
  }



}
