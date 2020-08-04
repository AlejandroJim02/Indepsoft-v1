import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTrabajadorPage } from './home-trabajador.page';

describe('HomeTrabajadorPage', () => {
  let component: HomeTrabajadorPage;
  let fixture: ComponentFixture<HomeTrabajadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrabajadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTrabajadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
