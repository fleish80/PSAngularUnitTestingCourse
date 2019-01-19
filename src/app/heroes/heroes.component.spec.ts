import { HeroesComponent } from './../../../.history/src/app/heroes/heroes.component_20190118123552';
describe('HerosComponent', () => {
  let component: HeroesComponent;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];
    component = new HeroesComponent();
  });
});
