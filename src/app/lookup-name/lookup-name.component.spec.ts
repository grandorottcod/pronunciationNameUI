import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupNameComponent } from './lookup-name.component';

describe('LookupNameComponent', () => {
  let component: LookupNameComponent;
  let fixture: ComponentFixture<LookupNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
