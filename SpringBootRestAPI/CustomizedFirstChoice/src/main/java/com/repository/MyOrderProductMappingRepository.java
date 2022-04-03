package com.repository;


import com.entities.MyOrder;
import com.entities.MyOrderProductMapping;
import com.entities.MyOrderProductMappingId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface MyOrderProductMappingRepository  extends JpaRepository<MyOrderProductMapping, MyOrderProductMappingId> {
    @Query(value="select op from my_order_product_mapping op where op.order_id=?1",nativeQuery = true)
    public List<MyOrderProductMapping> getAllOrderProductMappingForOrder(int order_id);

}
