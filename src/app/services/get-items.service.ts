import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GetItemsService {
  constructor(private httpclient: HttpClient) {}

  getLatestItem() {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    var lang = localStorage.getItem("content-language");

    if (lang === undefined || lang === null) {
      localStorage.setItem("content-language", "en");
      lang = "en";
    }
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept-Language": lang,
      Authorization: accessToken,
    });
    return this.httpclient.get(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/item/get-latest-items",
      {
        headers: headers,
      }
    );
  }

  getITemsNames() {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    var lang = localStorage.getItem("content-language");
    if (lang === undefined || lang === null) {
      localStorage.setItem("content-language", "en");
      lang = "en";
    }
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept-Language": lang,
      Authorization: accessToken,
    });
    return this.httpclient.get(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/item/get-items-name",
      {
        headers: headers,
      }
    );
  }

  getItemPic(id) {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept-Language": localStorage.getItem("content-language"),
      Authorization: accessToken,
    });
    return this.httpclient.get(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/item/get-item-picture?id=" +
        id,
      {
        headers: headers,
      }
    );
  }

  filterITems(data) {
    const accessToken = "Bearer " + localStorage.getItem("access-token");
    var lang = localStorage.getItem("content-language");
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept-Language": lang,
      Authorization: accessToken,
    });
    return this.httpclient.post(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/item/filter",
      data,
      {
        headers: headers,
      }
    );
  }
}
