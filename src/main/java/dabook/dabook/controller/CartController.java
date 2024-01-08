package dabook.dabook.controller;

import dabook.dabook.entity.Cart;
import dabook.dabook.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/Cart/{no}")
    public List<Cart> findAll(@PathVariable("no") Long no){
        List<Cart> cartList = cartService.findByNo(no);
        return cartList;
    }


}
