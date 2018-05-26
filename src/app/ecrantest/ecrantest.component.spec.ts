import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrantestComponent } from './ecrantest.component';

describe('EcrantestComponent', () => {
  let component: EcrantestComponent;
  let fixture: ComponentFixture<EcrantestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcrantestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrantestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
