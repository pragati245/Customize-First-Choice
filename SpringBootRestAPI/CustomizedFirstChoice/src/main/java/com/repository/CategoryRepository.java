package com.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.entities.Category;
import com.entities.User;

@Transactional

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> 
{
	@Query(value="select * from category  WHERE c_id=? ",nativeQuery = true)
	User findById(int c_id);
}
