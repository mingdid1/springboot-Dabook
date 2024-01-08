package dabook.dabook.controller;


import dabook.dabook.entity.Book;
import dabook.dabook.service.BookService;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/book")
public class BookController {
    /* 책 관련 */

    private final BookService bookService;

    @GetMapping("")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(bookService.getAllBook(), HttpStatus.OK);
    }
    @GetMapping("bestSeller")
    public ResponseEntity<?> BestSeller(){
        return new ResponseEntity<>(bookService.getBestSeller(),HttpStatus.OK);
    }

    @GetMapping("bookInfo/{no}")
    public ResponseEntity<?> BookInfo(@PathVariable Long no){
        return new ResponseEntity<>(bookService.getBookInfo(no),HttpStatus.OK);
    }
}
