import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  
  notes: Note[] = [];
  
  selectedNote?: Note;
  onSelect(note: Note): void {
    this.selectedNote = note;
  }
  constructor(private noteService: NoteService) {}
 
  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
    .subscribe(notes => this.notes = notes)
  }

}
