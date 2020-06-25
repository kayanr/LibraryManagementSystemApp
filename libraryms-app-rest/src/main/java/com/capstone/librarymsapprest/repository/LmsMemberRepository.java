package com.capstone.librarymsapprest.repository;

import com.capstone.librarymsapprest.model.Book;
import com.capstone.librarymsapprest.model.LibraryMember;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LmsMemberRepository extends CrudRepository<LibraryMember, Long> {
    List <LibraryMember> findAll();
    LibraryMember findById(long id);

}
