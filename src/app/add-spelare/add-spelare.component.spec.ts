import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpelareComponent } from './add-spelare.component';

describe('AddSpelareComponent', () => {
  let component: AddSpelareComponent;
  let fixture: ComponentFixture<AddSpelareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpelareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpelareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
