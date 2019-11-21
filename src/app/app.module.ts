import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultImagePipe } from './ex5/default-image.pipe';
import { ClassThemeComponent } from './ex3/class-theme/class-theme.component';
import { ArcEnCielDirective } from './ex2/arc-en-ciel.directive';
import { ArcEnCielViewerComponent } from './ex2/arc-en-ciel-viewer/arc-en-ciel-viewer.component';
import { DefaultImageViewerComponent } from './ex5/default-image-viewer/default-image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultImagePipe,
    ClassThemeComponent,
    ArcEnCielDirective,
    ArcEnCielViewerComponent,
    DefaultImageViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
