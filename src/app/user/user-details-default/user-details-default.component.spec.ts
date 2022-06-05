import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsDefaultComponent } from './user-details-default.component';

describe('#UserAccessDetailsDefaultComponent unit test case suit', () => {
  let component: UserDetailsDefaultComponent;
  let fixture: ComponentFixture<UserDetailsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsDefaultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
