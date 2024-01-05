package dabook.dabook.service;

import dabook.dabook.entity.User;
import dabook.dabook.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class UserServiceTest {

    @Autowired UserService userService;
    @Autowired UserRepository userRepository;
/*
    @Test
    public void service_join() throws Exception{
        //given
        User user = new User("testId", "test1", "010-1234-5678", "test@email");

        //when
        String id = userService.join(user);

        //then
        Assertions.assertEquals(user, userRepository.findOne(id));

    }*/
}