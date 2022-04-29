import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangComponent } from './chang.component';

describe('ChangComponent', () => {
  let component: ChangComponent;
  let fixture: ComponentFixture<ChangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
