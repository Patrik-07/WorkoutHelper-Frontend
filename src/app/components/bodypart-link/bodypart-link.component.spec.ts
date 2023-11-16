import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodypartLinkComponent } from './bodypart-link.component';

describe('BodypartLinkComponent', () => {
  let component: BodypartLinkComponent;
  let fixture: ComponentFixture<BodypartLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodypartLinkComponent]
    });
    fixture = TestBed.createComponent(BodypartLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
