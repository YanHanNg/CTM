import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EndpointSettingComponent } from './components/endpoint-setting/endpoint-setting.component';
import { MainComponent } from './components/main/main.component';
import { ServersComponent } from './components/servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CTMService } from './services/ctm.services';

// Routes 
const ROUTES: Routes = [ 
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'servers' , component: ServersComponent },
  { path: 'settings', component: EndpointSettingComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EndpointSettingComponent,
    MainComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [CTMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
