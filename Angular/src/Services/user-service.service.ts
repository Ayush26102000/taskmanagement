import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

   apiUrl = "https://localhost:7192/api/User/";

  constructor(private http: HttpClient) { }

  addUser(userData: User): Observable<any> {
    console.log(userData);
    return this.http.post<any>(this.apiUrl + "AddUser", userData);
  }

  EditUser(userData: User): Observable<any> {
    console.log("Update user service : " + userData.username);
    return this.http.post<any>(this.apiUrl + "UpdateUser", userData);
  }

  deleteUser(userData: User): Observable<any> {
    console.log(userData);
    return this.http.post<any>(this.apiUrl + "DeleteUser", userData);
  }

  GetUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl );
  }
  
  GetRoles(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "GetRoles");
  }

  logoutUser(){
    sessionStorage.clear();
  }
  
}
