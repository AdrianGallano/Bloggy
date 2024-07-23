import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ExploreComponent } from './pages/explore/explore.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'explore',
        component: ExploreComponent,
    },
    {
        path: 'blogs',
        component: BlogsComponent,
    },
    {
        path: 'blogs/:id',
        component: BlogComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

];


