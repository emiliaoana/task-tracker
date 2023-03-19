import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ButtonComponent} from './components/button/button.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {TasksItemComponent} from './components/tasks-item/tasks-item.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {FormsModule} from "@angular/forms";
import {Router, RouterModule, Routes} from "@angular/router";
import {RouterComponent} from './components/router/router.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'greeting', component: RouterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
