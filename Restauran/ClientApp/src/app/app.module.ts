import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { OrdenComponent } from './orden/orden.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { FoodService } from './service/food.service';
import { CustomerService } from './service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    OrdenComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Orden', component: OrdenComponent },
      { path: 'Admin', component: AdminComponent },
      { path: 'Home', component: HomeComponent },
      { path: 'Orders', component: OrdersComponent }
    ])
  ],
  providers: [
    FoodService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
