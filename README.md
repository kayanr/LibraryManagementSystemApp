# Library Management System

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-Framework-brightgreen)
![React](https://img.shields.io/badge/React-Frontend-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)

A comprehensive **Library Management System** built with modern web technologies.
This application demonstrates a full-stack architecture with a React frontend, a Spring Boot REST API backend, and a MySQL database.

---

# 🚀 Overview

The **Library Management System** is a full-stack web application designed to streamline library operations.

The system enables librarians and administrators to manage books through an intuitive web interface. The frontend communicates with a backend REST API that handles business logic and database interactions.

This project demonstrates how a modern web application integrates a client interface with a backend service and persistent data storage.

---

# 📌 Project Status

This project was created to practice **full-stack development using React and Spring Boot**.

It demonstrates a typical CRUD architecture where a frontend application communicates with a REST API backed by a relational database.

### Key Learning Areas

• Building REST APIs using Spring Boot
• Implementing CRUD operations with Spring Data JPA
• Connecting a React frontend to backend APIs
• Managing relational data using MySQL
• Structuring a multi-module Java project

Future improvements may include:

• Authentication and user roles
• Pagination and search functionality
• UI improvements
• Containerized deployment using Docker

---

# 🛠️ Tech Stack

## Frontend

* React

## Backend

* Java
* Spring Boot
* Spring Data JPA
* REST APIs

## Database

* MySQL

---

# ✨ Features

## 📚 Book Management

The system provides complete CRUD functionality for managing books.

Users can:

• Add new books to the library catalog
• View all books with detailed information
• Update book details and availability status
• Remove books from the system

---

# 🏗️ Project Architecture

The application is organized into three modules:

**libraryms-app-data**
Contains JPA entities and database persistence logic.

**libraryms-app-rest**
Spring Boot REST API that exposes endpoints for managing books.

**libraryms-app-web**
React frontend that communicates with the backend API.

---

# ⚙️ How to Run the Project

## 1️⃣ Clone the repository

```
git clone https://github.com/kayanr/LibraryManagementSystemApp.git
```

---

## 2️⃣ Setup MySQL

Create a database:

```
CREATE DATABASE libraryms_db;
```

Update database credentials in:

```
libraryms-app-rest/src/main/resources/application.properties
```

---

## 3️⃣ Start the Backend

```
cd libraryms-app-rest
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

## 4️⃣ Start the Frontend

```
cd libraryms-app-web
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 📷 Screenshots

<p align="center">
  <img src="Screenshots/BookList.jpg" width="45%">
  <img src="Screenshots/AddBook.jpg" width="45%">
</p>

<p align="center">
  <img src="Screenshots/UpdateForm.jpg" width="45%">
</p>

---

# 📚 Future Improvements

• Add authentication and authorization
• Implement pagination and filtering
• Improve UI/UX
• Deploy application to cloud infrastructure
