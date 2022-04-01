package com.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entities.User;

@Transactional

@Repository
public interface UserRepository extends JpaRepository<User, Integer> 
{
	@Query(value="select * from User  WHERE u_email=? AND u_password=?",nativeQuery = true)
	User findByEmail(String u_email, String u_password);

}
