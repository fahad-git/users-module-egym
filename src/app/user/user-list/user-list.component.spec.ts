import { BehaviorSubject, Observable } from 'rxjs';
import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';

describe('#UserListComponent unit test cases suit', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>

  let userServiceStub = {
    getUsersList: (data: number) => {
      return new Observable((observer) => observer.error());
    }
  } as UserService;

  let cdStub = {
    detectChanges: () => {}
  } as ChangeDetectorRef

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: UserService, useValue: userServiceStub },
        { provide: ChangeDetectorRef, useValue: cdStub }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('1. UserListComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('2. UserListComponent should have checkIfNew method', () => {
    expect(component.checkIfNew).toBeDefined();
  });

  it('3. UserListComponent should return true because name with new alphabet', () => {
    component.currentAlphabet = 'a';
    expect(component.checkIfNew('Fake Name')).toBeTrue();
  });

  it('4. UserListComponent should return false because name with same alphabet', () => {
    component.currentAlphabet = 'f';
    expect(component.checkIfNew('Fake Name')).toBeFalse();
  });
});
