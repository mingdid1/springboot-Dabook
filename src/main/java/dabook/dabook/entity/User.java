package dabook.dabook.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class User {

    @Id @GeneratedValue
    @Column(name = "user_no")
    private Long no;

    private String userId;
    private String password;
    private String username;
    private String phone;
    private String email;

    @OneToMany(mappedBy = "users")
    private List<Address> address;

//    @Enumerated(EnumType.STRING)
//    private GuestCheck guestCheck;

    @OneToMany(mappedBy = "users")
    private List<Order> orders = new ArrayList<>();

    @OneToMany(mappedBy = "users")
    private List<Cart> cart = new ArrayList<>();

    @OneToMany(mappedBy = "users")
    private List<Review> review = new ArrayList<>();

}
