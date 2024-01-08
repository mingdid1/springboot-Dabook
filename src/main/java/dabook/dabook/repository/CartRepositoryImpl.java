package dabook.dabook.repository;

import dabook.dabook.entity.Cart;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CartRepositoryImpl {

    private final EntityManager em;

    public List<Cart> findByNo(Long no) {
        return em.createQuery("select c from Cart c where c.users = : no", Cart.class)
                .setParameter("no", no)
                .getResultList();
    }



}
