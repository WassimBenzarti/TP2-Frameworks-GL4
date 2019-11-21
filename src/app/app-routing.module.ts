import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultImageViewerComponent} from './ex5/default-image-viewer/default-image-viewer.component';
import {ArcEnCielViewerComponent} from './ex2/arc-en-ciel-viewer/arc-en-ciel-viewer.component';
import {ClassThemeComponent} from './ex3/class-theme/class-theme.component';
import {MiniWordComponent} from './ex1/mini-word/mini-word.component';
import {TP1Component} from './ex4/tp1/tp1.component';


const routes: Routes = [
    {path: '1', component: MiniWordComponent},
    {path: '2', component: ArcEnCielViewerComponent},
    {path: '3', component: ClassThemeComponent},
    {path: '4', component: TP1Component},
    {path: '5', component: DefaultImageViewerComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
