import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserDetailsComponent } from './user-details.component';

describe('#UserAccessDetailsComponent unit test case suit', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  let routerStub = {
    navigate: () => { }
  } as unknown as Router;

  let routeStub = {
    params: {
      subscribe: () => { }
    }
  } as ActivatedRoute;

  let userServiceStub = {
    getUserById: () => { }
  } as unknown as UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: UserService, useValue: userServiceStub }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('1. UserDetailsComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
