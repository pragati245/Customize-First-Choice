package com.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entities.Category;
import com.repository.CategoryRepository;

@Service
public class CategoryService
{
	@Autowired
	private CategoryRepository categoryrepo;

	//register
	public Category registerCategory(Category category) 
	{
		// TODO Auto-generated method stub
			return categoryrepo.save(category);
	}

	public java.util.List<Category> allCategory() {
		// TODO Auto-generated method stub
		return categoryrepo.findAll();
	}
}

