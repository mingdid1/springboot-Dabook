package dabook.dabook.repository;

import dabook.dabook.entity.Book;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long>{


    // 베스트셀러 출력
    @Query("select b from Book b order by b.salesVolume desc")
    List<Book> findBestSeller();

}
