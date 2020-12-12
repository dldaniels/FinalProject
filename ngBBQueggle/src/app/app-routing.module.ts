import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'reviews/:restId', component: ReviewsComponent },
{ path: 'home', component: HomeComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'info/:restId', component: RestaurantInfoComponent},
{ path: 'restaurant', component: RestaurantListComponent},
{ path: 'restaurant/:state', component: RestaurantListComponent},
{ path: 'restaurant/:state/:searchType/:searchTerm', component: RestaurantListComponent},
{ path: 'login', component: LoginComponent},
{ path: 'userProfile', component: UserProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
