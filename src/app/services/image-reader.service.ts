import { Injectable } from "@angular/core";
import {
  Http,
  RequestOptions,
  Headers,
  ResponseContentType,
} from "@angular/http";

@Injectable({
  providedIn: "root",
})
export class ImageReaderService {
  constructor(private httpclient: Http) {}

  getItemPic(id) {
    const accessToken = "Bearer " + localStorage.getItem("access-token");

    const headers = new Headers({
      "Accept-Language": localStorage.getItem("content-language"),
      Authorization: accessToken,
    });
    let op = new RequestOptions({
      headers: headers,
      responseType: ResponseContentType.Blob,
    });
    return this.httpclient.get(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/item/get-item-picture?id=" +
        id,
      op
    );
  }

  getShopPic(id) {
    const accessToken = "Bearer " + localStorage.getItem("access-token");

    const headers = new Headers({
      "Accept-Language": localStorage.getItem("content-language"),
      Authorization: accessToken,
    });
    let op = new RequestOptions({
      headers: headers,
      responseType: ResponseContentType.Blob,
    });
    return this.httpclient.get(
      "https://cors-anywhere.herokuapp.com/http://admin.oroodcom.com/private-api/item/get-shop-picture?id=" +
        id,
      op
    );
  }
}
