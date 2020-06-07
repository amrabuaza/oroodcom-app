import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CategotyService {
  constructor(private httpclient: HttpClient) {}

  getCategories() {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    const lang = localStorage.getItem("content-language");

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept-Language": lang,
      Authorization: accessToken,
    });
    return this.httpclient.get(
      "http://admin.oroodcom.com/private-api/category/get-names",
      {
        headers: headers,
      }
    );
  }

  filterItemsByCategoryId(id) {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    const lang = localStorage.getItem("content-language");

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept-Language": lang,
      Authorization: accessToken,
    });
    return this.httpclient.get(
      "http://admin.oroodcom.com/private-api/category/filter?id=" + id,
      {
        headers: headers,
      }
    );
  }
}
