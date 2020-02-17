import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  base_url = "http://localhost:8080/users";

  createUser(user: User) {
    return this.http.post(this.base_url, user, this.httpOptions)
  }

  getUserByID(id) {
    return this.http.get<User>(this.base_url + "/" + id)
  }

  getAllUsers() {
    return this.http.get(this.base_url)
  }

  updateUser(id, user: User) {
    return this.http.put(this.base_url + "/" + id, user, this.httpOptions)
  }

  deleteUser(id) {
    return this.http.delete(this.base_url + "/" + id)
  }

}
