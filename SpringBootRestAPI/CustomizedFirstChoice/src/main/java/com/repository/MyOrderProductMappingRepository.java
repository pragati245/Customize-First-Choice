package com.repository;


import com.entities.MyOrder;
import com.entities.MyOrderProductMapping;
import com.entities.MyOrderProductMappingId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Transactional
@Repository
public interface MyOrderProductMappingRepository  extends JpaRepository<MyOrderProductMapping, MyOrderProductMappingId> {
}
