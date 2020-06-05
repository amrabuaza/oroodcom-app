import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GetItemsService {
  constructor(private httpclient: HttpClient) {}

  getLatestItem() {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: accessToken,
    });
    return this.httpclient.get(
      "http://admin.oroodcom.com/private-api/item/get-latest-items",

      {
        headers: headers,
      }
    );
  }
}
