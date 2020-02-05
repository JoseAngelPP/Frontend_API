import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TagInputModule } from 'ngx-chips';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PresentationModule } from './pages/presentation/presentation.module';

import { routes } from './app-routing.module';
import { ComponentsModule } from './shared/components.module';
import { CallbackComponent } from './shared/callback/callback.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    PresentationModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, CallbackComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
