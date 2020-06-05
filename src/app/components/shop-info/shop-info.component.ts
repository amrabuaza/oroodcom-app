import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-shop-info",
  templateUrl: "./shop-info.component.html",
  styleUrls: ["./shop-info.component.scss"],
})
export class ShopInfoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  showInfo() {}
}
