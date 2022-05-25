import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { MainMenuComponentComponent } from './main-menu-component/main-menu-component.component';
import { AddNoteComponentComponent } from './add-note-component/add-note-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    MainMenuComponentComponent,
    AddNoteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
