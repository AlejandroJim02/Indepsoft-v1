import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerTrabajadorPage } from './ver-trabajador.page';

describe('VerTrabajadorPage', () => {
  let component: VerTrabajadorPage;
  let fixture: ComponentFixture<VerTrabajadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTrabajadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerTrabajadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
