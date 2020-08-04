import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilTrabajadorPage } from './perfil-trabajador.page';

describe('PerfilTrabajadorPage', () => {
  let component: PerfilTrabajadorPage;
  let fixture: ComponentFixture<PerfilTrabajadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilTrabajadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilTrabajadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
