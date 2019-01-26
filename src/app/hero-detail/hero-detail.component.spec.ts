import { Location } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('HeroDetailComponent', () => {
  let mockActiveRoute;
  let mockHeroService;
  let mockLoction;
  let fixture: ComponentFixture<HeroDetailComponent>;

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
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActiveRoute},
        {provide: HeroService, useValue: mockHeroService},
        {provide: Location, useValue: mockLoction}
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
    mockHeroService.getHero.and.returnValue(of({id: 3, name: 'SuperDude', strength: 100}));
  });

  it ('should render hero name in a h2 tag', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
  });
});
