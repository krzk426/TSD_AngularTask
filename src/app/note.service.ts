import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES } from './mock-notes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private messageService: MessageService) { }

  getNotes(): Observable<Note[]>  {
    const notes = of(NOTES);
    this.messageService.add('NotesService: fetched notes');
    return notes;
  }

  addNote (note:Note): void {
    NOTES.push(note)    
    // const notes = of(NOTES)
  }
}
