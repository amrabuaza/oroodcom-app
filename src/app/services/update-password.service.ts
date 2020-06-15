import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UpdatePasswordService {
  constructor(private httpclient: HttpClient) {}
  updatePassword(data) {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: accessToken,
    });
    return this.httpclient.patch(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/user/change-password",
      data,
      {
        headers: headers,
      }
    );
  }
}
