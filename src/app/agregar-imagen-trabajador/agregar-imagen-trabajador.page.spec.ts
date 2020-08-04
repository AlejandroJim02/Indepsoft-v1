import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarImagenTrabajadorPage } from './agregar-imagen-trabajador.page';

describe('AgregarImagenTrabajadorPage', () => {
  let component: AgregarImagenTrabajadorPage;
  let fixture: ComponentFixture<AgregarImagenTrabajadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarImagenTrabajadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarImagenTrabajadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
