import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
const accessToken = localStorage.getItem("access-token");
const isLogined =
  accessToken !== undefined && accessToken !== null ? true : false;
const loginRoute = import("./pages/login/login.module").then(
  (m) => m.LoginPageModule
);
const homeRoute = import("./pages/home/home.module").then(
  (m) => m.HomePageModule
);

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      isLogined
        ? homeRoute
        : import("./pages/onboarding/onboarding.module").then(
            (m) => m.OnboardingPageModule
          ),
  },
  {
    path: "login",
    loadChildren: () => loginRoute,
  },
  {
    path: "register",
    loadChildren: () =>
      isLogined
        ? homeRoute
        : import("./pages/register/register.module").then(
            (m) => m.RegisterPageModule
          ),
  },
  {
    path: "profile",
    loadChildren: () =>
      isLogined
        ? import("./pages/profile/profile.module").then(
            (m) => m.ProfilePageModule
          )
        : loginRoute,
  },
  {
    path: "home",
    loadChildren: () => (isLogined ? homeRoute : loginRoute),
  },
  {
    path: "shop",
    loadChildren: () =>
      isLogined
        ? import("./pages/shop/shop.module").then((m) => m.ShopPageModule)
        : loginRoute,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
