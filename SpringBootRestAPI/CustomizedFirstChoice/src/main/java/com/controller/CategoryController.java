package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entities.Category;
import com.service.CategoryService;

@CrossOrigin("*")
@RestController
@RequestMapping("/category")
public class CategoryController
{

	@Autowired
	 private CategoryService categoryservice;
	 
	
	@PostMapping("/addcategory")
	public Category registerCategory(@RequestBody Category category)
	{
		return categoryservice.registerCategory(category);
	
	}//Ok
	
	@GetMapping("/getallcategory")
	public List<Category> allCategory()
	{
		return categoryservice.allCategory();
	}//Ok
	
	 
}
