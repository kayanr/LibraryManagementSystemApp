package com.capstone.librarymsapprest.service;

import com.capstone.librarymsapprest.model.Loan;
import com.capstone.librarymsapprest.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Loan getLoanById(long id) {
        Loan loan = loanRepository.findById(id);
        if (loan == null) {
            throw new RuntimeException("Loan not found with id: " + id);
        }
        return loan;
    }

    public Loan createLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    public Loan updateLoan(long id, Loan newLoan) {
        Loan loan = loanRepository.findById(id);

        if (loan == null) {
            throw new RuntimeException("Loan not found with id: " + id);
        }

        loan.setBook(newLoan.getBook());
        loan.setMember(newLoan.getMember());
        loan.setCheckoutDate(newLoan.getCheckoutDate());
        loan.setDueDate(newLoan.getDueDate());
        loan.setReturnDate(newLoan.getReturnDate());

        return loanRepository.save(loan);
    }

    public void deleteLoan(long id) {
        loanRepository.deleteById(id);
    }
}