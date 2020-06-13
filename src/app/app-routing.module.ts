import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./services/auth-guard.service";
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
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "profile",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "home",
    canActivate: [AuthGuardService],
    loadChildren: () => homeRoute,
  },
  {
    path: "shop",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./pages/shop/shop.module").then((m) => m.ShopPageModule),
  },
  {
    path: "change-password",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./pages/change-password/change-password.module").then(
        (m) => m.ChangePasswordPageModule
      ),
  },

  // {
  //   path: "password-form",
  //   loadChildren:
  //     "./pages/password-form/password-form.module#PasswordFormPageModule",
  // },
  // { path: 'search-form', loadChildren: './search-form/search-form.module#SearchFormPageModule' },

  // { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
