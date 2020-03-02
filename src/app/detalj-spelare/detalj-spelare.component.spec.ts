import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljSpelareComponent } from './detalj-spelare.component';

describe('DetaljSpelareComponent', () => {
  let component: DetaljSpelareComponent;
  let fixture: ComponentFixture<DetaljSpelareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljSpelareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljSpelareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
