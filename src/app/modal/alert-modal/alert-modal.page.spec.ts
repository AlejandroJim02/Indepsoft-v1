import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertModalPage } from './alert-modal.page';

describe('AlertModalPage', () => {
  let component: AlertModalPage;
  let fixture: ComponentFixture<AlertModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
