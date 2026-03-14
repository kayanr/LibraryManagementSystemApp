package com.capstone.librarymsapprest.repository;

import com.capstone.librarymsapprest.model.Member;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MemberRepository extends CrudRepository<Member, Long> {

    List<Member> findAll();

    Member findById(long id);

}