package dabook.dabook.controller;

import dabook.dabook.entity.User;
import dabook.dabook.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/member")
    public String member(){

        //화면 만들어지면 지우기
        //User user = new User("testId1", "test1", "010-1234-5678", "test@email");

        //userService.join(user);
        return "";
    }

    @PostMapping("/member")
    public void memberJoin(){

    }
}
