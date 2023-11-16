import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodypartComponent } from './bodypart.component';

describe('BodypartComponent', () => {
  let component: BodypartComponent;
  let fixture: ComponentFixture<BodypartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodypartComponent]
    });
    fixture = TestBed.createComponent(BodypartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
