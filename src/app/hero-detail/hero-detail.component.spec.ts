import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';

describe('Her0DetailComponent', () => {
  let mockActiveRoute;
  let mockHeroService;
  let mockLoction;
  let fixture;

  beforeEach(() => {
    mockActiveRoute = {
      snapshot: {
        paramMap: {
          get: () => '3'
        }
      }
    };
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLoction = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        {provide: ActivatedRoute, use: mockActiveRoute},
        {provide: HeroService, use: mockHeroService},
        {provide: Location, use: mockLoction}
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
  });
});
