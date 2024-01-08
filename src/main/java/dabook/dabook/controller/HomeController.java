package dabook.dabook.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HomeController {

    @GetMapping("/api/demo-web")
    public List<String> Main(){
        return Arrays.asList("리액트 스프링 ", "연결 성공");
    }

}
