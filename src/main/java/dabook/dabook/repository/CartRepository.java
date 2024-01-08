package dabook.dabook.repository;

import dabook.dabook.entity.Cart;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import java.util.List;

public interface CartRepository extends JpaRepositoryImplementation<Cart, Long> {


}
