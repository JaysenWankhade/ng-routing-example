import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicChildBComponent } from './public-child-b.component';

describe('PublicChildBComponent', () => {
  let component: PublicChildBComponent;
  let fixture: ComponentFixture<PublicChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
