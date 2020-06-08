import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController, NavController, ModalController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import {
  IItemsResponse,
  IItem,
  ICategory,
  ICategoryResponse,
} from "src/app/services/types";
import { GetItemsService } from "src/app/services/get-items.service";
import { TranslateLaService } from "src/app/services/translate-la.service";
import { CategotyService } from "src/app/services/categoty.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public title: string;
  public description: string;
  public language: string;
  public items: IItem[];
  public categoires: ICategory[];
  public cat_id: string;
  private ContentLanguageKey = "content-language";
  constructor(
    private router: Router,
    private menu: MenuController,
    private _translate: TranslateService,
    private itemService: GetItemsService,
    private categoryService: CategotyService,
    private translateLaService: TranslateLaService,
    private navCtrl: NavController,
    private authSerivce: AuthService,
    private modalCtrl: ModalController
  ) {}
  public username: string;
  languageChanged() {
    localStorage.setItem(this.ContentLanguageKey, this.language);
    this.translateLaService.setLanguage(this.language);
    location.reload();
  }

  showProfile() {
    this.navCtrl.navigateForward("/shop");
  }
  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }
  ngOnInit() {
    var lang;
    if (localStorage.getItem(this.ContentLanguageKey) === undefined) {
      localStorage.setItem(this.ContentLanguageKey, "en");
      lang = "en";
    } else {
      lang = localStorage.getItem(this.ContentLanguageKey);
    }
    this.language = lang;
    //this.languageChanged();

    this.itemService.getLatestItem().subscribe((response: IItemsResponse) => {
      this.items = response.items;
    });
    this.categoryService.getCategories().subscribe((res: ICategoryResponse) => {
      this.categoires = res.names;
    });
    this.username = localStorage.getItem("username");
    this.cat_id = "-1";
  }
  onCategoryChange(id) {
    this.cat_id = id;
    if (id === "-1") {
      this.itemService.getLatestItem().subscribe((response: IItemsResponse) => {
        this.items = response.items;
      });
    } else {
      this.categoryService
        .filterItemsByCategoryId(id)
        .subscribe((response: IItemsResponse) => {
          this.items = response.items;
        });
    }
  }

  handleLogout() {
    localStorage.removeItem("access-token");
    localStorage.removeItem(this.ContentLanguageKey);
    this.authSerivce.logout();
    window.location.reload();
  }
}
