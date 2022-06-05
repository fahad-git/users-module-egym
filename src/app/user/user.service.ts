import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from './user-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "https://randomuser.me/api/";
  private usersData: IUser[] | undefined;

  constructor(
    private http: HttpClient
  ) {}

  /**
   * @description this method calls API to get user list
   * @returns { IUsers[] } users
   */
  getUsersList(records: number): Observable<IUser[] | undefined> {
    return this.http
      .get<any>(`${this.url}`, 
        {
          params: {results: records}
        }
      )
      .pipe(
        map((res: any) => {
          try {
            throw new Error("Failed to load users list")
            if (res && res?.results && res?.results?.length > 0) {
              let usersList: IUser[] = res.results;
              this.usersData = usersList;
              return usersList ? this.sortUsersList(usersList) : usersList;
            }
          }catch (error: any) { 
            throw new Error(error?.message);
          }
        }));
  }


  /**
   * @description this method calls API to get user from user list
   * @param { string } userId
   * @returns { Object } user
   */
     getUserById(md5: string): Observable<IUser | undefined> {
      const user: IUser | undefined = this.usersData?.find(
        (user) => user?.login?.md5 === md5
      );
      return new Observable((observer) => {
        if(user)
          observer.next(user);
        else
          observer.error(new Error("User Not Found"))
      });
    }

  /**
   * @description sort the user list based on first name
   */
  private sortUsersList(usersList: IUser[]): IUser[] {
    usersList.sort((user1: IUser, user2: IUser) => {
      return (user1?.name?.first?.toLowerCase() >= user2?.name?.first?.toLowerCase()) ? 1 : -1
    })
    return usersList;
  }
}
