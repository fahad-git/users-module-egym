import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../user-interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  routeSub: Subscription | undefined;
  userSub: Subscription | undefined;
  apiSubscription: Subscription | undefined;
  user: IUser | null | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const userId: string = params['id'];
      if(!userId) this.router.navigate(['/']);
      this.userSub = this.userService.getUserById(userId)
      .subscribe({
        next: (user: IUser | undefined) => {
          this.user = user;
        },
        error: (error: any) => {
          this.router.navigate(['/']);
        }
      })
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }
}
