import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'


describe('HeroService', () => {

  let mockMessageService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessageService}
      ]
    });
  });

  describe('getHero', () => {

    it ('should call get with the correct URL',
    inject([HeroService, HttpTestingController], (service: HeroService, controler: HttpTestingController) => {
      service.getHero(4).subscribe();
      const req = controler.expectOne('api/heroes/4');
      req.flush({id: 4, name: 'SuperDude', strength: 100});
      controler.verify();
    }));
  });
});
