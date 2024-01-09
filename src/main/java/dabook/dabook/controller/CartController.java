package dabook.dabook.controller;

import dabook.dabook.dto.CartDto;
import dabook.dabook.entity.Book;
import dabook.dabook.entity.Cart;
import dabook.dabook.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/Cart/{userNo}")
    public List<CartDto> ListCartByUser (@PathVariable String userNo) {

        List<Cart> userCartList = cartService.findByNo(userNo);

        return userCartList.stream()
                .map(CartDto::new)
                .toList();


    }
}
