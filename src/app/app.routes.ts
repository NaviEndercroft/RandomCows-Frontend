import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomCowComponent } from './random-cow/random-cow.component';

export const routes: Routes = [
    {path: '', component: RandomCowComponent},
    {path: 'upload-random-cow', component: HomeComponent},
    {path: '**', component: HomeComponent}
];
