import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { PagesComponent } from './componentes/pages/pages.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: 'inicio', component:AppComponent},
  {path: 'loguin', component:LoginComponent},
  {path: 'edicion', component:LayoutComponent},
  {path: 'otro', component:PagesComponent}
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
