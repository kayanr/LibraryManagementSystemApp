package com.capstone.librarymsapprest.service;

import com.capstone.librarymsapprest.model.Member;
import com.capstone.librarymsapprest.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    // Get all members
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    // Get a single member by id
    public Member getMemberById(long id) {
        Member member = memberRepository.findById(id);
        if (member == null) {
            throw new RuntimeException("Member not found with id: " + id);
        }
        return member;
    }

    // Create a new member
    public Member createMember(Member member) {
        return memberRepository.save(member);
    }

    // Update an existing member
    public Member updateMember(long id, Member memberDetails) {
        Member member = memberRepository.findById(id);
        if (member == null) {
            throw new RuntimeException("Member not found with id: " + id);
        }
        member.setName(memberDetails.getName());
        member.setEmail(memberDetails.getEmail());
        member.setMembershipDate(memberDetails.getMembershipDate());
        member.setMembershipType(memberDetails.getMembershipType());
        return memberRepository.save(member);
    }

    // Delete a member
    public void deleteMember(long id) {
        memberRepository.deleteById(id);
    }
}