import {Routes} from '@angular/router';
import {SigninComponent} from "./pages/signin/signin.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {BlankComponent} from "./pages/blank/blank.component";
import {Notfound404Component} from "./pages/notfound404/notfound404.component";
import {HomeComponent} from "./pages/home/home.component";
import {ManagealbumAdminComponent} from "./pages/manage/managealbum-admin/managealbum-admin.component";
import {ManageartistAdminComponent} from "./pages/manage/manageartist-admin/manageartist-admin.component";
import {ManagegenreAdminComponent} from "./pages/manage/managegenre-admin/managegenre-admin.component";
import {ManagesongAdminComponent} from "./pages/manage/managesong-admin/managesong-admin.component";
import {ManageuserAdminComponent} from "./pages/manage/manageuser-admin/manageuser-admin.component";
import {ChartComponent} from "./pages/chart/chart.component";

export const routes: Routes = [

  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'blank', component: BlankComponent},
      {path: '404', component: Notfound404Component},
      {path: 'manage/album', component: ManagealbumAdminComponent},
      {path: 'manage/artist', component: ManageartistAdminComponent},
      {path: 'manage/genre', component: ManagegenreAdminComponent},
      {path: 'manage/song', component: ManagesongAdminComponent},
      {path: 'manage/user', component: ManageuserAdminComponent},
      {path: 'dashboard', component: ChartComponent},
    ]
  },


];
