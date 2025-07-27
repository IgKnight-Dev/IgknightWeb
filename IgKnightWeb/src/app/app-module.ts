import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeModule } from './features/home/home-module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { RefreshTokenInterceptor } from './core/interceptors/refresh.interceptor';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './core/services/auth.reducer';
import { NGX_MONACO_EDITOR_CONFIG, NgxMonacoEditorConfig } from 'ngx-monaco-editor-v2';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        positionClass: 'toast-top-right',
        timeOut: 3500,
        closeButton: true,
        progressBar: true,
        tapToDismiss: true,
      }),
    StoreModule.forRoot({ auth: authReducer }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()), // replaces HttpClientModule
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {  provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
  ],
  bootstrap: [App]
})
export class AppModule { }
