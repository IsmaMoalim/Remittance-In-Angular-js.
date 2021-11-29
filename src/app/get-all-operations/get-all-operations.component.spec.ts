import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllOperationsComponent } from './get-all-operations.component';

describe('GetAllOperationsComponent', () => {
  let component: GetAllOperationsComponent;
  let fixture: ComponentFixture<GetAllOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
