import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import {
  MenuController,
  NavController,
  ModalController,
  Platform,
} from "@ionic/angular";
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
import { SearchFormPage } from "../search-form/search-form.page";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http } from "@angular/http";
import { DomSanitizer } from "@angular/platform-browser";
import { ImageReaderService } from "src/app/services/image-reader.service";

const styleAr =
  localStorage.getItem("content-language") !== null &&
  localStorage.getItem("content-language") !== undefined;

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss", styleAr ? "../../ar.scss" : ""],
})
export class HomePage implements OnInit {
  public title: string;
  public description: string;
  public language: string;
  public items: IItem[];
  public categoires: ICategory[];
  public cat_id: string;
  public username: string;
  private ContentLanguageKey = "content-language";
  public testImg: any;

  constructor(
    private router: Router,
    private menu: MenuController,
    private _translate: TranslateService,
    private itemService: GetItemsService,
    private categoryService: CategotyService,
    private translateLaService: TranslateLaService,
    private navCtrl: NavController,
    private authSerivce: AuthService,
    private modalCtrl: ModalController,
    private platform: Platform,
    private httpclient: HttpClient,
    private http: Http,
    private sanitizer: DomSanitizer,
    private imgService: ImageReaderService
  ) {}

  languageChanged() {
    localStorage.setItem(this.ContentLanguageKey, this.language);
    this.translateLaService.setLanguage(this.language);
    if (this.language === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    location.reload();
  }

  showShop(item) {
    let shop = item.shop;
    shop.item_id = item.id;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        shop: JSON.stringify(shop),
      },
    };
    this.navCtrl.navigateForward("/shop", navigationExtras);
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
      if (lang === "ar") {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    }

    this.itemService.getLatestItem().subscribe((response: IItemsResponse) => {
      this.items = response.items;
      // this.items.map((item) => {
      //   this.imgService.getItemPic(item.id).subscribe((res) => {
      //     let tempImg = URL.createObjectURL(res.blob());
      //     item.img = this.sanitizer.bypassSecurityTrustResourceUrl(tempImg);
      //   });
      // });
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

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SearchFormPage,
      cssClass: "modal-transparency",
    });
    modal.onDidDismiss().then((data) => {
      if (data.data !== undefined) {
        this.items = data.data["items"];
      }
    });
    return await modal.present();
  }
}
