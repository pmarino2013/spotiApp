import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: any = {};
  loading: boolean;

  constructor(private http: HttpClient) {
    this.loading = true;
    // this.getToken().subscribe((data) => {
    //   console.log(data);
    //   this.loading = false;
    // });
  }

  getToken() {
    let urlToken = `https://get-token-spotiapp.herokuapp.com/spotify/f64ef4cc78354346ab8741aad657ae70/f6f0688a3db44bd3b4d966b02468f55d`;

    return this.http.get(urlToken);
  }

  //Función para manejar la peticion a Spotify
  getQuery(query: string, token: string) {
    let url = `https://api.spotify.com/v1/${query}`;

    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQB2QqVSXXhh61sSp7Ig71miIiEr0agseWhVQD7mn5J2ZFzB89ktFLYOGJy0NnVP8TlHq2BuFWdfx0VoulI',
    // });
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(token: string) {
    console.log(token);
    return this.getQuery('browse/new-releases', token).pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtistas(termino: string, token: string) {
    return this.getQuery(
      `search?q=${termino}&type=artist&limit=15`,
      token
    ).pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string, token: string) {
    return this.getQuery(`artists/${id}`, token);
    // .pipe(map((data: any) => data.artists.items));
  }
  getTopTracks(id: string, token: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`, token).pipe(
      map((data: any) => data.tracks)
    );
  }
}
