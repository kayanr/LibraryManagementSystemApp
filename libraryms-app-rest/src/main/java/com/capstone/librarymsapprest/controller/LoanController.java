package com.capstone.librarymsapprest.controller;

import com.capstone.librarymsapprest.dto.LoanDTO;
import com.capstone.librarymsapprest.model.Book;
import com.capstone.librarymsapprest.model.Loan;
import com.capstone.librarymsapprest.model.Member;
import com.capstone.librarymsapprest.repository.BookRepository;
import com.capstone.librarymsapprest.repository.MemberRepository;
import com.capstone.librarymsapprest.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class LoanController {

    @Autowired
    private LoanService loanService;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private MemberRepository memberRepository;

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
    public Loan createLoan(@RequestBody LoanDTO loanDTO) {
        Book book = bookRepository.findById(loanDTO.getBookId());
        Member member = memberRepository.findById(loanDTO.getMemberId());

        Loan loan = new Loan(book, member, loanDTO.getCheckoutDate(), loanDTO.getDueDate(), loanDTO.getReturnDate());
        return loanService.createLoan(loan);
    }

    @PutMapping("/loan/{id}")
    public Loan updateLoanById(@RequestBody LoanDTO loanDTO, @PathVariable long id) {
        Book book = bookRepository.findById(loanDTO.getBookId());
        Member member = memberRepository.findById(loanDTO.getMemberId());

        Loan loan = new Loan(book, member, loanDTO.getCheckoutDate(), loanDTO.getDueDate(), loanDTO.getReturnDate());
        return loanService.updateLoan(id, loan);
    }

    @DeleteMapping("/loan/{id}")
    public void deleteLoanById(@PathVariable long id) {
        loanService.deleteLoan(id);
    }
}
