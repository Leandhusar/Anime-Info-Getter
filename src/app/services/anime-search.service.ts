import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AnimeSearchService {

  constructor(private http: HttpClient) { }

  getAnimeList(animeRequest: String): Observable<any>{
    const API_URL = "https://api.jikan.moe/v3/search/anime?q=" + animeRequest;
    return this.http.get<any>(API_URL);
  }
}
