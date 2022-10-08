import { BooksComponent } from './components/books/books.component';
import { BasketComponent } from './components/basket/basket.component';
import { NgModule } from '@angular/core' 
import { Routes , RouterModule } from '@angular/router'
import { HomepageComponent } from './components/homepage/homepage.component';

const routes:Routes=[
    {path:'home', component: HomepageComponent},
    {path:'books', component: BooksComponent},
    {path:'basket', component: BasketComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [HomepageComponent,BooksComponent,BasketComponent]