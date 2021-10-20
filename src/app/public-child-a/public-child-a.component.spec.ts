import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicChildAComponent } from './public-child-a.component';

describe('PublicChildAComponent', () => {
  let component: PublicChildAComponent;
  let fixture: ComponentFixture<PublicChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicChildAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
