import { Component, OnInit } from '@angular/core';
import { AnimeSearchService } from '../services/anime-search.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit {
  animeResponse: any;

  constructor(private ass: AnimeSearchService) { }

  ngOnInit(): void {
  }

  getAnimeResponse(animeRequest: String){
    console.log(animeRequest);
    this.ass.getAnimeList(animeRequest).subscribe((queryResponse: any) => {
      this.animeResponse = queryResponse;
      console.log(this.animeResponse['results'][0]['title']);
      console.log(this.animeResponse['results'][0]['episodes']);
      console.log(this.animeResponse['results'][0]['image_url']);
      console.log(this.animeResponse['results'][0]['synopsis']);
    });
  }
}
