package com.capstone.librarymsapprest.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    // @Column(name = "total_pages")
    //private int totalPages;

    @Column(name = "rating")
    private int rating;

    @Column(name = "isbn")
    private String isbn;
    /*
        @Column(name = "published_date")
        private Date publishedDate;

        @Column(name = "publisher_id")
        private int publisherId;

        @Column(name = "fines")
        private double fines;
    */
    public Book() {}

    public Book(String title, String author, int rating, String isbn) {
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.isbn = isbn;
    }
/*
    public Book(String title, int totalPages, double rating, String isbn, Date publishedDate, int publisherId, double fines) {
        this.title = title;
        this.totalPages = totalPages;
        this.rating = rating;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.publisherId = publisherId;
        this.fines = fines;
    }
*/


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    /*
        public int getTotalPages() {
            return totalPages;
        }

        public void setTotalPages(int totalPages) {
            this.totalPages = totalPages;
        }
    */
    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    /*
    public Date getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(Date publishedDate) {
        this.publishedDate = publishedDate;
    }

    public int getPublisherId() {
        return publisherId;
    }

    public void setPublisherId(int publisherId) {
        this.publisherId = publisherId;
    }

    public double getFines() {
        return fines;
    }

    public void setFines(double fines) {
        this.fines = fines;
    }

     */
}
