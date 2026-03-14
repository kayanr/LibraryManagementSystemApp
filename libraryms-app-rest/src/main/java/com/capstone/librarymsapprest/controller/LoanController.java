package com.capstone.librarymsapprest.controller;

import com.capstone.librarymsapprest.model.Loan;
import com.capstone.librarymsapprest.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class LoanController {

    @Autowired
    private LoanService loanService;

    @GetMapping("/ping-loans")
    public String ping() {
        return "Up - loans";
    }

    @GetMapping("/loans")
    public List<Loan> getAllLoans() {
        return loanService.getAllLoans();
    }

    @GetMapping("/loan/{id}")
    public Loan getLoanById(@PathVariable long id) {
        return loanService.getLoanById(id);
    }

    @PostMapping("/loan")
    public Loan createLoan(@RequestBody Loan loan) {
        return loanService.createLoan(loan);
    }

    @PutMapping("/loan/{id}")
    public Loan updateLoanById(@RequestBody Loan newLoan, @PathVariable long id) {
        return loanService.updateLoan(id, newLoan);
    }

    @DeleteMapping("/loan/{id}")
    public void deleteLoanById(@PathVariable long id) {
        loanService.deleteLoan(id);
    }
}