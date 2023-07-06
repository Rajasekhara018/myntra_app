import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scree1Component } from './scree1.component';

describe('Scree1Component', () => {
  let component: Scree1Component;
  let fixture: ComponentFixture<Scree1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scree1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scree1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
