import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangosComponent } from './frangos.component';

describe('FrangosComponent', () => {
  let component: FrangosComponent;
  let fixture: ComponentFixture<FrangosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrangosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrangosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
