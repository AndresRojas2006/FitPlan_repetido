import { Routes } from '@angular/router';
import { User1Component } from './user1/user1.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

export const routes: Routes = [
{path: '',  component: User1Component},
{path: 'second', component: SecondComponent},
{path: 'third', component: ThirdComponent}
];
