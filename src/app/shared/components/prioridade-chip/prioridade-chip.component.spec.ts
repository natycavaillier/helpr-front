import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadeChipComponent } from './prioridade-chip.component';

describe('PrioridadeChipComponent', () => {
  let component: PrioridadeChipComponent;
  let fixture: ComponentFixture<PrioridadeChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioridadeChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioridadeChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
