package com.capstone.librarymsapprest.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "membership_date")
    @Temporal(TemporalType.DATE)
    private Date membershipDate;

    @Column(name = "membership_type")
    private String membershipType;

    public Member() {
    }

    public Member(String name, String email, Date membershipDate, String membershipType) {
        this.name = name;
        this.email = email;
        this.membershipDate = membershipDate;
        this.membershipType = membershipType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }   

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getMembershipDate() {
        return membershipDate;
    }

    public void setMembershipDate(Date membershipDate) {
        this.membershipDate = membershipDate;
    }

    public String getMembershipType() {
        return membershipType;
    }

    public void setMembershipType(String membershipType) {
        this.membershipType = membershipType;
    }
}