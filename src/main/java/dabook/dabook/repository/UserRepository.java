package dabook.dabook.repository;

import dabook.dabook.entity.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final EntityManager em;

    //회원가입
    public void save (User user){
        em.persist(user);
        em.flush();
    }

    public User findOne(String userId){
        return em.find(User.class, userId);
    }

    public List<User> findById(String userId) {
        return em.createQuery("select u from User u where u.userId = :userId", User.class)
                .setParameter("userId", userId)
                .getResultList();
    }
}
