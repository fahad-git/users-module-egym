import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { IUser } from "../user-interfaces";
import { UserService } from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  currentAlphabet: string | undefined;
  sortingAccending: boolean | undefined;
  usersList: IUser[] | undefined;
  userFilteredList: IUser[] | undefined;
  error: boolean | undefined;
  errorMessage: string | undefined;
   
  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userService.getUsersList(10).subscribe({
      next: (usersList: IUser[] | undefined) => {
        this.usersList = usersList;
        this.userFilteredList = usersList;
        this.sortingAccending = false;
      },
      error: (error: any) => {
        this.error = true;
        this.errorMessage = error?.message;
      }
    })
  }

  checkIfNew(name: string | undefined) {
    if (this.currentAlphabet === name?.charAt(0).toLowerCase()) return false;
    this.currentAlphabet = name?.charAt(0).toLowerCase();
    return true;
  }

  async fetchData(): Promise<void> {
    const users = this.usersList;
    const descCallback = (user1: IUser, user2: IUser) => {
        return (user1?.name?.first?.toLowerCase() < user2?.name?.first?.toLowerCase()) ? 1 : -1;
    }

    const assCallback = (user1: IUser, user2: IUser) => {
      return (user1?.name?.first?.toLowerCase() >= user2?.name?.first?.toLowerCase()) ? 1 : -1;
    }

    const callback = this.sortingAccending ? assCallback : descCallback
    users?.sort(callback);
    this.usersList = users;
    this.sortingAccending = !this.sortingAccending;
    this.cd.detectChanges();
  }

  search(data: any){
    if (data && data !== '') {
      this.usersList = this.userFilteredList?.filter(
        (user: IUser) => user?.name?.first?.toLowerCase()?.includes(data.toLowerCase())
      );
    } else this.usersList = this.userFilteredList;
  }
  
  closeErrorAlert(){
    this.error = false;
    this.errorMessage = "";
  }

  ngOnDestroy(): void {
  }
}
