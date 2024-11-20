import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListTwoComponent } from './grid-list-two.component';

describe('GridListTwoComponent', () => {
  let component: GridListTwoComponent;
  let fixture: ComponentFixture<GridListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridListTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
