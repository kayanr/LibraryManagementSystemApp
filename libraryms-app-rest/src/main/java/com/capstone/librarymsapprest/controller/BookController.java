package com.capstone.librarymsapprest.controller;

import com.capstone.librarymsapprest.model.Book;
import com.capstone.librarymsapprest.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class BookController {

    @Autowired
    private BookRepository bookRepository;
    //    Request: GET /ping
//    Response: "Up"
    @GetMapping("/ping")
    public String ping(){
        return "Up -books";
    }


    //    Request: GET /books
//    Response: Book[]
    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    //    Request: GET /book/{id}
//    Response: Book

    @GetMapping("/book/{id}")
    public Book getBookById(@PathVariable long id){
        return bookRepository.findById(id);
    }

    //    Request: POST /book Book
    //    Response: Book
    @PostMapping("/book")
    public Book saveBook(@RequestBody Book book){
        return bookRepository.save(book);
    }

    //    Request: DELETE /book/{id}
//    Response: void
    @DeleteMapping("/book/{id}")
    public void deleteBookById(@PathVariable long id){
        bookRepository.deleteById(id);
    }

    //    Request: PUT /book
    //    Response: Book
    @PutMapping("/book")
    public Book updateBook(@RequestBody Book book){
        bookRepository.save(book);
        return book;
    }

    /*
    @PutMapping("/book/{id}")
    public Book updateBookById(@RequestBody Book book){
        bookRepository.save(book);
        return book;
    }
  */

    @PutMapping("/book/{id}")
    Book updateBookById(@RequestBody Book newBook, @PathVariable Long id) {

        return bookRepository.findById(id).map(book -> {
            book.setTitle(newBook.getTitle());
            book.setAuthor(newBook.getAuthor());
            book.setRating(newBook.getRating());
            book.setIsbn(newBook.getIsbn());
            return bookRepository.save(book);
        }).orElseGet(() -> {
            newBook.setId(id);
            return bookRepository.save(newBook);
        });
    }
}
