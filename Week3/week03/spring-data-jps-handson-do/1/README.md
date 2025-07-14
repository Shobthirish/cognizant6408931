# orm-learn

Demo project for Spring Data JPA and Hibernate

## Prerequisites
- Java 11 or higher
- Maven
- MySQL Server

## Database Setup
1. Create the database and table in MySQL:
   ```sql
   CREATE DATABASE ormlearn;
   USE ormlearn;
   CREATE TABLE country (
     co_code VARCHAR(2) PRIMARY KEY,
     co_name VARCHAR(50)
   );
   INSERT INTO country VALUES ('IN', 'India');
   INSERT INTO country VALUES ('US', 'United States of America');
   ```

2. Update `src/main/resources/application.properties` with your MySQL username and password if needed.

## Build and Run
1. Build the project:
   ```sh
   mvn clean package
   ```
2. Run the application:
   ```sh
   mvn spring-boot:run
   ```

## Project Structure
- `src/main/java/com/cognizant/ormlearn/` - Main application
- `src/main/java/com/cognizant/ormlearn/model/` - Entity classes
- `src/main/java/com/cognizant/ormlearn/repository/` - Repository interfaces
- `src/main/java/com/cognizant/ormlearn/service/` - Service classes
- `src/main/resources/` - Configuration files 