import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildproductComponent } from './childproduct.component';

describe('ChildproductComponent', () => {
  let component: ChildproductComponent;
  let fixture: ComponentFixture<ChildproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
