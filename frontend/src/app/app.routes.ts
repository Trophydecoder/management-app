import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { EnterguardianPageComponent } from './pages/enterguardian-page/enterguardian-page.component';
import { RegisterplayerpageComponent } from './pages/registerplayerpage/registerplayerpage.component';

export const routes: Routes = [
    {path:'' ,  title: ' homepage' , component : HomepageComponent},
    {path:'registeradmin' , title:'Registeradminpage' , component : RegisterpageComponent },
    {path:'enterguardian' , title:'enterguardianpage' , component: EnterguardianPageComponent },
    {path:'registerplayer' , title:'registerplayerpage' , component : RegisterplayerpageComponent  },
];
