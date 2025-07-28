# Exercise 5 – Spring IoC Container Configuration

## Project Structure

```
src/
  main/
    java/
      com/
        example/
          library/
            BookRepository.java
            BookService.java
            LibraryApp.java
    resources/
      applicationContext.xml
pom.xml
```

## How to Build and Run

1. **Build the project:**
   ```
   mvn clean package
   ```
2. **Run the application:**
   ```
   mvn exec:java -Dexec.mainClass="com.example.library.LibraryApp"
   ```

## What it Does
- Configures Spring beans using `applicationContext.xml`.
- Demonstrates setter injection for `BookService`.
- Prints a book title from the repository using the service bean. 