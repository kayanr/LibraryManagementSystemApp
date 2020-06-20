package com.capstone.librarymsapprest.repository;

import com.capstone.librarymsapprest.model.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long> {
    List<Book> findAll();
    Book findById(long id);

}
