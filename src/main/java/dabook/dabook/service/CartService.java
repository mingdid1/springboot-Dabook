package dabook.dabook.service;

import dabook.dabook.entity.Cart;
import dabook.dabook.repository.CartRepository;
import dabook.dabook.repository.CartRepositoryImpl;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Transactional
@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final CartRepositoryImpl cartRepositoryImpl;

    public List<Cart> findByNo(Long no) {
        List<Cart> cartList = cartRepositoryImpl.findByNo(no);
        return cartList;
    }

}

