import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.page.html",
  styleUrls: ["./shop.page.scss"],
})
export class ShopPage implements OnInit {
  constructor(private modalCtrl: ModalController, private route: Router) {}

  ngOnInit() {}
}
