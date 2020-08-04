import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContratosSolicitantePage } from './contratos-solicitante.page';

describe('ContratosSolicitantePage', () => {
  let component: ContratosSolicitantePage;
  let fixture: ComponentFixture<ContratosSolicitantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosSolicitantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContratosSolicitantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
