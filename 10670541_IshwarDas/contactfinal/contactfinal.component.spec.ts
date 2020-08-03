import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactfinalComponent } from './contactfinal.component';

describe('ContactfinalComponent', () => {
  let component: ContactfinalComponent;
  let fixture: ComponentFixture<ContactfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
