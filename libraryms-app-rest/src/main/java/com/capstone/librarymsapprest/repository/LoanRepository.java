package com.capstone.librarymsapprest.repository;

import com.capstone.librarymsapprest.model.Loan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LoanRepository extends CrudRepository<Loan, Long> {

    List<Loan> findAll();

    Loan findById(long id);
}