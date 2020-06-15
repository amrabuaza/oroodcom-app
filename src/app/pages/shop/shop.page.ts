import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from "@ionic-native/native-geocoder/ngx";
import { IShop } from "src/app/services/types";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { ImageReaderService } from "src/app/services/image-reader.service";
import { DomSanitizer } from "@angular/platform-browser";

declare var google;

@Component({
  selector: "app-shop",
  templateUrl: "./shop.page.html",
  styleUrls: ["./shop.page.scss"],
})
export class ShopPage implements OnInit {
  @ViewChild("map", { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  shop: IShop;
  latitude: number;
  longitude: number;
  shopLat: number;
  shopLong: number;

  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private imgService: ImageReaderService,
    private sanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe((params) => {
      this.shop = JSON.parse(params["shop"]);
      this.imgService.getShopPic(this.shop.item_id).subscribe((res) => {
        let tempImg = URL.createObjectURL(res.blob());
        this.shop.img = this.sanitizer.bypassSecurityTrustResourceUrl(tempImg);
      });
      this.shopLat = Number.parseFloat(this.shop.latitude);
      this.shopLong = Number.parseFloat(this.shop.longitude);
    });
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = this.shopLat;
        this.longitude = this.shopLong;

        let latLng = new google.maps.LatLng(this.shopLat, this.shopLong);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          gestures: {
            rotate: false,
            tilt: false,
            scroll: false,
          },
        };

        this.getAddressFromCoords(this.shopLat, this.shopLong);

        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
      })
      .catch((error) => {
        console.log("Error getting location", error);
      });
  }

  getAddressFromCoords(lattitude, longitude) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };

    this.nativeGeocoder
      .reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0) responseAddress.push(value);
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
        console.log(error);
      });
  }
}
