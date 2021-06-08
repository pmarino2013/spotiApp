import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAn494L7kqr52gYgJjNuuXWwYjpeuy-GPyZT-oE9HgYOjMWNNQoXoCr-SaZDFBxt-DCKmRziREQKsnIGug',
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map((data: any) => data.albums.items));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAn494L7kqr52gYgJjNuuXWwYjpeuy-GPyZT-oE9HgYOjMWNNQoXoCr-SaZDFBxt-DCKmRziREQKsnIGug',
    });

    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
        { headers }
      )
      .pipe(map((data: any) => data.artists.items));
  }
}
