package dabook.dabook.service;

import dabook.dabook.entity.User;
import dabook.dabook.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    //회원가입
    @Transactional
    public String join(User user) {
        validateTestUser(user);
        userRepository.save(user);
        return user.getUserId();
    }

    private void validateTestUser(User user) {
        //EXCEPTION
        List<User> findmembers = userRepository.findById(user.getUserId());
        if (!findmembers.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 아이디 입니다.");
        }
    }
}