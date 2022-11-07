import { BooksComponent } from './components/books/books.component';
import { BasketComponent } from './components/basket/basket.component';
import { NgModule } from '@angular/core' 
import { Routes , RouterModule } from '@angular/router'
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddbookComponent } from './components/addbook/addbook.component';

const routes:Routes=[
    {path:'', component:LoginComponent},
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'home', component: HomepageComponent},
    {path:'books', component: BooksComponent},
    {path:'addbook', component: AddbookComponent},
    {path:'basket', component: BasketComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [HomepageComponent,BooksComponent,BasketComponent]