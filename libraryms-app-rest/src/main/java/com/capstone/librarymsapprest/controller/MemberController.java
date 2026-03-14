package com.capstone.librarymsapprest.controller;

import com.capstone.librarymsapprest.model.Member;
import com.capstone.librarymsapprest.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class MemberController {

    @Autowired
    private MemberService memberService;

    // Simple ping
    @GetMapping("/ping-members")
    public String ping(){
        return "Up - members";
    }

    // GET /members
    @GetMapping("/members")
    public List<Member> getAllMembers(){
        return memberService.getAllMembers();
    }

    // GET /member/{id}
    @GetMapping("/member/{id}")
    public Member getMemberById(@PathVariable long id){
        return memberService.getMemberById(id);
    }

    // POST /member
    @PostMapping("/member")
    public Member saveMember(@RequestBody Member member){
        return memberService.createMember(member);
    }

    // DELETE /member/{id}
    @DeleteMapping("/member/{id}")
    public String deleteMemberById(@PathVariable long id){
        memberService.deleteMember(id);
        return "Member deleted successfully";
    }

    // PUT /member
    @PutMapping("/member")
    public Member updateMember(@RequestBody Member member){
        return memberService.updateMember(member.getId(), member);
    }

    // PUT /member/{id}
    @PutMapping("/member/{id}")
    public Member updateMemberById(@RequestBody Member newMember, @PathVariable Long id) {
        return memberService.updateMember(id, newMember);
    }
}