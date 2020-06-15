import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private httpclient: HttpClient) {}

  signup(data) {
    let headers = new HttpHeaders();
    return this.httpclient.post(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/authorization/signup",
      data,
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
      }
    );
  }
}
