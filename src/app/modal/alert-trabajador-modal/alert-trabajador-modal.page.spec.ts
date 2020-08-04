import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertTrabajadorModalPage } from './alert-trabajador-modal.page';

describe('AlertTrabajadorModalPage', () => {
  let component: AlertTrabajadorModalPage;
  let fixture: ComponentFixture<AlertTrabajadorModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertTrabajadorModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertTrabajadorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
