import { Component, OnInit } from '@angular/core';


import { BookService } from '../services/book.service';
import { Book } from '../services/book';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
    books: Book[];
    constructor(private bookService: BookService) { }
    ngOnInit(): void {
        this.getBooks();
    }	
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
   			
} 