import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetaskComponent } from './onetask.component';

describe('OnetaskComponent', () => {
  let component: OnetaskComponent;
  let fixture: ComponentFixture<OnetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnetaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
