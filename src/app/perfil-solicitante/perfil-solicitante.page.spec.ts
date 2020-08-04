import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilSolicitantePage } from './perfil-solicitante.page';

describe('PerfilSolicitantePage', () => {
  let component: PerfilSolicitantePage;
  let fixture: ComponentFixture<PerfilSolicitantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilSolicitantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilSolicitantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
