import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListOneComponent } from './grid-list-one.component';

describe('GridListOneComponent', () => {
  let component: GridListOneComponent;
  let fixture: ComponentFixture<GridListOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridListOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
