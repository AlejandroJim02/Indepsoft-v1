import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwitchPage } from './switch.page';

describe('SwitchPage', () => {
  let component: SwitchPage;
  let fixture: ComponentFixture<SwitchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
