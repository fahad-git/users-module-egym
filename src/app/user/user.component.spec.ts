import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';=
import { UserComponent } from './user.component';

xdescribe('#UsersComponent unit test cases suit', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [],
      providers: [],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
      });
  });

  it('1. UsersComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('2. UsersComponent should have ngOnInit function', () => {
    expect(component.ngOnInit).toBeDefined();
  });
});
