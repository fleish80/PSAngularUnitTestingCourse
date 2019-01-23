import { HeroComponent } from './hero.component';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeroComponent (shalow tests)', () => {
let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it ('should have the correct hero', () => {
    fixture.componentInstance.hero = {
      id: 1, name: 'SuperDude', strength: 3
    };

    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });

  it ('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = {
      id: 1, name: 'SuperDude', strength: 3
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
  });
});
