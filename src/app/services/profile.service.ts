import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(private httpclient: HttpClient) {}

  profileData() {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: accessToken,
    });
    return this.httpclient.get(
      "https://admin.oroodcom.com/private-api/user/get-user-profile",
      {
        headers: headers,
      }
    );
  }
  updateProfile(data) {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: accessToken,
    });
    return this.httpclient.put(
      "https://admin.oroodcom.com/private-api/user/update-user",
      data,
      {
        headers: headers,
      }
    );
  }
}
