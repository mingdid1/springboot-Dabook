package dabook.dabook.repository;

import dabook.dabook.entity.Cart;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CartRepositoryImpl {

    private final EntityManager em;

    @Query
    public List<Cart> findByNo(String no) {
        return em.createQuery(
                "select c from Cart c " +
                        "join fetch c.users u " +
                        "join fetch c.books b " +
                        "where u.no = :no", Cart.class)
                .setParameter("no", no)
                .getResultList();
    }




}
