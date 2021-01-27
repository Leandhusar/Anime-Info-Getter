import { TestBed } from '@angular/core/testing';

import { AnimeSearchService } from './anime-search.service';

describe('AnimeSearchService', () => {
  let service: AnimeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
