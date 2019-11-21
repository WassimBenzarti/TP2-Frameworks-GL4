import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultImageViewerComponent } from './ex5/default-image-viewer/default-image-viewer.component';
import { ArcEnCielViewerComponent } from './ex2/arc-en-ciel-viewer/arc-en-ciel-viewer.component';
import { ClassThemeComponent } from './ex3/class-theme/class-theme.component';


const routes: Routes = [
  {path:"ex1",component:ArcEnCielViewerComponent},
  {path:"ex2",component:ArcEnCielViewerComponent},
  {path:"ex3",component:ClassThemeComponent},
  {path:"ex4",component:ArcEnCielViewerComponent},
  {path:"ex5",component:DefaultImageViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
