import { AuthService } from 'src/app/services/auth.service';
import { CommunicationService } from './../../../../services/communication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from './../../../../shared/book';
import { Status } from 'src/app/shared/status';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user';
import { BookDTO } from 'src/app/shared/book-dto';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  id : number
  currentUser :User;
  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    isbn: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private communicationService: CommunicationService, private authService:AuthService) {
    this.id = communicationService.getCurrentId()
  }
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  addBook() {
    var addedBook : BookDTO  = {
      addedBy: this.currentUser.id,
      Title: this.bookForm.get('title').value ,
      Author: this.bookForm.get('author').value,
      isbn:this.bookForm.get('isbn').value,
      Rating:0,
      Image: this.bookForm.get('image').value,
      Description:this.bookForm.get('description').value,
      Status: "Ready",

    }
   // this.id = this.communicationService.getCurrentId()
    this.communicationService.postBooktoAPI(addedBook);
  }

}
