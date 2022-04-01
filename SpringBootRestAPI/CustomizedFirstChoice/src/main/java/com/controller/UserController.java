package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entities.User;
import com.service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController
{

	@Autowired
	 private UserService userservice;
	 
	
	@PostMapping("/adduser")
	public User registerUser(@RequestBody User user)
	{
		return userservice.registerUser(user);
	
	}//Ok
	
	@PostMapping("/loginuser")
	//public ResponseEntity<User> loginUser(@RequestBody User user)
	public boolean loginUser(@RequestBody User user)
	{
		boolean value = userservice.loginUser(user);
		if(value==true)
			return true;
		else 
			return false;
		//return userservice.loginUser(user);

		
	}//Ok
	
	@PutMapping("/updateuser")
	public User updateUser(@RequestBody User user)
	{
		return userservice.updateUser(user);
	}//Ok
	
	
	@DeleteMapping("/deleteuser/{u_id}")
	public Boolean deleteUser(@PathVariable int u_id)
	{
		boolean value=userservice.deleteUser(u_id);
		if(value==true)
			return true;
		else
			return false;
	}//Ok
	
	@GetMapping("/getuser/{u_id}")
	public User singleUser(@PathVariable int u_id)
	{
		return userservice.singleUser(u_id);
	}//Ok
	
	@GetMapping("/getalluser")
	public List<User> allUser()
	{
		return userservice.allUser();
	}//Ok
	
	 
}
