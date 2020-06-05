import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { IItemsResponse, IItem } from "src/app/services/types";
import { GetItemsService } from "src/app/services/get-items.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  cardInf: any[];
  public title: string;
  public description: string;
  public language: string;
  public items: IItem[];
  constructor(
    private router: Router,
    private menu: MenuController,
    private _translate: TranslateService,
    private itemService: GetItemsService
  ) {}

  public ionViewDidLoad(): void {
    this._initialiseTranslation();
  }
  public changeLanguage(): void {
    this._translateLanguage();
  }
  private _translateLanguage(): void {
    this._translate.use(this.language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.title = this._translate.instant("home.heading");
      this.description = this._translate.instant("home.description");
    }, 250);
  }

  showProfile() {
    this.router.navigateByUrl("/shop");
  }
  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }
  ngOnInit() {
    this.itemService.getLatestItem().subscribe((response: IItemsResponse) => {
      this.items = response.items;
    });
  }
}
