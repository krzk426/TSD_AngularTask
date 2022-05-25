import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note-component',
  templateUrl: './add-note-component.component.html',
  styleUrls: ['./add-note-component.component.scss']
})
export class AddNoteComponentComponent implements OnInit {
  note: Note = {
    id: Math.round(Math.random()*100),
    text: '',
    date: new Date()
  };
  constructor(    
    private noteService: NoteService,

    ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    // this.location.back()
  }
  save(): void {
   this.noteService.addNote(this.note);
  }
}
