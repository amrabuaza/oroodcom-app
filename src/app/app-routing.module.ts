import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/onboarding/onboarding.module").then(
        (m) => m.OnboardingPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "category",
    loadChildren: () =>
      import("./pages/category/category.module").then(
        (m) => m.CategoryPageModule
      ),
  },
  {
    path: "my-appointments",
    loadChildren: () =>
      import("./pages/my-appointments/my-appointments.module").then(
        (m) => m.MyAppointmentsPageModule
      ),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./pages/settings/settings.module").then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "shop",
    loadChildren: () =>
      import("./pages/shop/shop.module").then((m) => m.ShopPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}