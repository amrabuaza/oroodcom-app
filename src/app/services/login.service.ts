import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpclient: HttpClient) {}
  sigin(data) {
    let headers = new HttpHeaders();
    return this.httpclient.post(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/authorization/login",
      data,
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
      }
    );
  }
}
