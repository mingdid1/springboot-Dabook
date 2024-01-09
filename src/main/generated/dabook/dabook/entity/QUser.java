package dabook.dabook.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = 181691414L;

    public static final QUser user = new QUser("user");

    public final ListPath<Address, QAddress> address = this.<Address, QAddress>createList("address", Address.class, QAddress.class, PathInits.DIRECT2);

    public final ListPath<Cart, QCart> cart = this.<Cart, QCart>createList("cart", Cart.class, QCart.class, PathInits.DIRECT2);

    public final StringPath email = createString("email");

    public final NumberPath<Long> no = createNumber("no", Long.class);

    public final ListPath<Order, QOrder> orders = this.<Order, QOrder>createList("orders", Order.class, QOrder.class, PathInits.DIRECT2);

    public final StringPath password = createString("password");

    public final StringPath phone = createString("phone");

    public final ListPath<Review, QReview> review = this.<Review, QReview>createList("review", Review.class, QReview.class, PathInits.DIRECT2);

    public final StringPath userId = createString("userId");

    public final StringPath username = createString("username");

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

