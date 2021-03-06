import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard-admin/dashboard/dashboard.component';
import { PanelAdminComponent } from './admin/panel-admin/panel-admin.component';
import { CarrierComponent } from './carriers-pages/carrier/carrier.component';
import { OwnerCarComponent } from './carriers-pages/owner-car/owner-car.component';
import { RegisterCarriersComponent } from './carriers-pages/register-carriers/register-carriers.component';
import { EnterpriceComponent } from './enterprice-pages/enterprice/enterprice.component';
import { RegisterEnterpriceComponent } from './enterprice-pages/register-enterprice/register-enterprice.component';
import { AccessAdminGuard } from './guards/access-admin.guard';
import { AccessUserGuard } from './guards/access-user.guard';
import { ProfileAdminComponent } from './profiles/profile-admin/profile-admin.component';
import { ProfileCarrierComponent } from './profiles/profile-carrier/profile-carrier.component';
import { AdminPortadaComponent } from './public/admin-portada/admin-portada.component';
import { HomeComponent } from './public/home/home.component';
import { ViewPostComponent } from './public/view-post/view-post.component';
import { AccessDeniedComponent } from './redirect/access-denied/access-denied.component';
import { Page404Component } from './redirect/page404/page404.component';
import { RegisterUserComponent } from './user-admins/register-user/register-user.component';
import { UserComponent } from './user-admins/user/user.component';
import { LoginComponent } from './user-pages/login/login.component';
import { RecoveryPasswordComponent } from './user-pages/recovery-password/recovery-password.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'forgot-password', component: RecoveryPasswordComponent },
  { path:'access-denied', component: AccessDeniedComponent },
  { path:'conductor/:uid/:idcar', component: ProfileCarrierComponent },
  { path:'panel-admin', component: PanelAdminComponent, canActivate: [ AccessUserGuard ],
        children:[
          { path:'dashboard', component:DashboardComponent },
          { path:'portada-web', component:AdminPortadaComponent},
          { path:'view-post/:id', component:ViewPostComponent},
          { path:'enterprice', component:EnterpriceComponent },
          { path:'edit-enterprise/:id', component: RegisterEnterpriceComponent },
          { path:'carriers', component:CarrierComponent },
          { path:'edit-carriers/:id', component:RegisterCarriersComponent },
          { path:'my-profile', component:ProfileAdminComponent },
          { path:'users', component:UserComponent, canActivate:[AccessAdminGuard] },
          { path:'edit-user/:id', component:RegisterUserComponent },
          { path:'owner-car/:id', component: OwnerCarComponent}
        ]
  },
  { path:'page-NotFound', component: Page404Component },
  { path:'**', pathMatch:'full', redirectTo:'page-NotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
