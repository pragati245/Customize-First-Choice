package com.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entities.MyOrder;
@Transactional
@Repository
public interface MyOrderRepository extends JpaRepository<MyOrder, Integer> {

	Optional<MyOrder> findById(int oid);
	
	@Query(value="select * from myorder where uid=?1",nativeQuery = true)
	public List<MyOrder> getOrderDataFromUid(int uid);

	
	@Modifying
	@Query(value="update customer set uwallet=uwallet-?1 where uid=?2",nativeQuery = true)
	public void deducUwallet(float price,int uid);
	
	@Modifying
	@Query(value="update admin set awallet=awallet+?1 where adminid=121",nativeQuery = true)
	public void addToAwallet(float price);
	
	@Modifying
	@Query(value="update product set pqty=pqty-1 where pid =?1",nativeQuery = true)
	public void deductQty(int pid);
	
	@Modifying
	@Query(value="update product set pqty=pqty-1 where pid in (select pid from pidaudit)",nativeQuery = true)
	public void getpidaudit();
	
	@Modifying
	@Query(value="DELETE FROM pidaudit",nativeQuery = true)
	public void deletepidaudit();
}
