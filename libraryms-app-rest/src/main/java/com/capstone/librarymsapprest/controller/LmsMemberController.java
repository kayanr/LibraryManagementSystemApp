package com.capstone.librarymsapprest.controller;

import com.capstone.librarymsapprest.model.LibraryMember;
import com.capstone.librarymsapprest.repository.LmsMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class LmsMemberController {

    @Autowired
    private LmsMemberRepository lmsMemberRepository;
    //    Request: GET /ping
//    Response: "Up"
    @GetMapping("/lmsping")
    public String ping(){
        return "Up -Library Members";
    }

    @GetMapping("/lmembers")
    public List<LibraryMember> getAllLibraryMembers(){
        return lmsMemberRepository.findAll();
    }

    @GetMapping("/lmember/{id}")
    public LibraryMember getLibraryMembersById(@PathVariable long id){
        return lmsMemberRepository.findById(id);
    }

    @PostMapping("/lmember")
    public LibraryMember saveLibraryMembers(@RequestBody LibraryMember lmember){
        return lmsMemberRepository.save(lmember);
    }


    @DeleteMapping("/lmember/{id}")
    public void deleteLibraryMembersById(@PathVariable long id){
        lmsMemberRepository.deleteById(id);
    }


    @PutMapping("/lmember")
    public LibraryMember updateLibraryMembers(@RequestBody LibraryMember lmember){
        lmsMemberRepository.save(lmember);
        return lmember;
    }


    @PutMapping("/lmember/{id}")
    LibraryMember updateLibraryMemberById(@RequestBody LibraryMember newLmember, @PathVariable Long id) {

        return lmsMemberRepository.findById(id).map(libraryMember -> {
            libraryMember.setFirstName(newLmember.getFirstName());
            libraryMember.setLastName(newLmember.getLastName());
            libraryMember.setGender(newLmember.getGender());
            libraryMember.setAddress(newLmember.getAddress());
            libraryMember.setCity(newLmember.getCity());
            libraryMember.setLstate(newLmember.getLstate());
            libraryMember.setPostalCode(newLmember.getPostalCode());
            libraryMember.setPhoneNumber(newLmember.getPhoneNumber());
            return lmsMemberRepository.save(libraryMember);
        }).orElseGet(() -> {
            newLmember.setId(id);
            return lmsMemberRepository.save(newLmember);
        });
    }
}
