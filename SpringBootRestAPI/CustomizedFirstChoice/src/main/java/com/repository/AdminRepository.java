package com.repository;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entities.Admin;

@Transactional

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> 
{

	@Query(value="Select * from Admin WHERE a_email=? AND a_password=?",nativeQuery = true)
	
	Admin findByEmail(String a_email,String a_password);
	
}
