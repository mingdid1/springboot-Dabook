package dabook.dabook.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QBookDetail is a Querydsl query type for BookDetail
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QBookDetail extends BeanPath<BookDetail> {

    private static final long serialVersionUID = -1165197147L;

    public static final QBookDetail bookDetail = new QBookDetail("bookDetail");

    public final StringPath content = createString("content");

    public final StringPath photo = createString("photo");

    public QBookDetail(String variable) {
        super(BookDetail.class, forVariable(variable));
    }

    public QBookDetail(Path<? extends BookDetail> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBookDetail(PathMetadata metadata) {
        super(BookDetail.class, metadata);
    }

}

