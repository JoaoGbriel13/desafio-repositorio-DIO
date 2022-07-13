import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { erroComponent } from "./component/404/404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";


@NgModule({
  declarations:[
    NavBarComponent,
    erroComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component : erroComponent
      }
    ])
  ],
  exports:[
    NavBarComponent
  ]
})

export class CoreModule{

}