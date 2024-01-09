package dabook.dabook.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReview is a Querydsl query type for Review
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReview extends EntityPathBase<Review> {

    private static final long serialVersionUID = -1586525981L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReview review = new QReview("review");

    public final QBook books;

    public final NumberPath<Long> no = createNumber("no", Long.class);

    public final NumberPath<Integer> rating = createNumber("rating", Integer.class);

    public final StringPath reviewContent = createString("reviewContent");

    public final DateTimePath<java.time.LocalDateTime> reviewDate = createDateTime("reviewDate", java.time.LocalDateTime.class);

    public final QUser users;

    public QReview(String variable) {
        this(Review.class, forVariable(variable), INITS);
    }

    public QReview(Path<? extends Review> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReview(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReview(PathMetadata metadata, PathInits inits) {
        this(Review.class, metadata, inits);
    }

    public QReview(Class<? extends Review> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.books = inits.isInitialized("books") ? new QBook(forProperty("books"), inits.get("books")) : null;
        this.users = inits.isInitialized("users") ? new QUser(forProperty("users")) : null;
    }

}

