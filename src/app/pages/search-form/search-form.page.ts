import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  LoadingController,
  ModalController,
} from "@ionic/angular";
import { TranslateLaService } from "src/app/services/translate-la.service";
import { IonicSelectableComponent } from "ionic-selectable";
import { IItemName, IItemsNames, IItemsResponse } from "src/app/services/types";
import { GetItemsService } from "src/app/services/get-items.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.page.html",
  styleUrls: ["./search-form.page.scss"],
})
export class SearchFormPage implements OnInit {
  names: IItemName[];
  port: IItemName;
  rate: number;
  item_name: string;
  public form = [
    {
      val: "search.fields_nearest_shops",
      isChecked: false,
      name: "nearByShop",
    },
    {
      val: "search.fiedls_lowest_price",
      isChecked: false,
      name: "lowestPrice",
    },
  ];
  constructor(
    private geolocation: Geolocation,
    private loading: LoadingController,
    private translateLaService: TranslateLaService,
    private modalCtrl: ModalController,
    private itemService: GetItemsService
  ) {
    this.item_name = null;
    this.rate = 5;
  }

  nameChange(event) {
    this.item_name = event.value["name"];
  }

  logRatingChange(rating) {
    this.rate = rating;
  }

  submit() {
    var lowestPrice = 0;
    var latitude = null;
    var longitude = null;
    var nearByShop = false;
    this.form.forEach((element) => {
      if (element.name === "nearByShop" && element.isChecked) {
        nearByShop = true;
      }
      if (element.name === "lowestPrice" && element.isChecked) {
        lowestPrice = 1;
      }
    });
    var data = {};
    if (nearByShop) {
      this.geolocation
        .getCurrentPosition()
        .then((resp) => {
          latitude = resp.coords.latitude;
          longitude = resp.coords.longitude;
          data = {
            item_name: this.item_name,
            shop_rate: this.rate,
            lowest_price: lowestPrice,
            latitude: latitude,
            longitude: longitude,
          };
          this.itemService
            .filterITems(data)
            .subscribe((res: IItemsResponse) => {
              var items = res.items;
              this.modalCtrl.dismiss({ items: items });
            });
        })
        .catch((error) => {
          alert("Error getting location");
        });
    } else {
      data = {
        item_name: this.item_name,
        shop_rate: this.rate,
        lowest_price: lowestPrice,
      };
      this.itemService.filterITems(data).subscribe((res: IItemsResponse) => {
        var items = res.items;
        this.modalCtrl.dismiss({ items: items });
      });
    }
  }

  ngOnInit() {
    this.itemService.getITemsNames().subscribe((res: IItemsNames) => {
      this.names = res.names;
    });
  }
  close() {
    this.modalCtrl.dismiss({ items: this.names });
  }
}
