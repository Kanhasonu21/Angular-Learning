import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicThingsComponent } from './basic-things.component';

describe('BasicThingsComponent', () => {
  let component: BasicThingsComponent;
  let fixture: ComponentFixture<BasicThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
