import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsDefaultComponent } from './user-details-default/user-details-default.component';
import { UserRoutingModule } from './user-routing.module';
import { Shared } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserDetailsDefaultComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    Shared
  ],
  exports: [RouterModule],
})
export class UserModule {}
