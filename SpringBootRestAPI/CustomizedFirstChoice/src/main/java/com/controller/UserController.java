package com.controller;

import java.util.List;

import org.apache.tomcat.websocket.AuthenticationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	}

	@GetMapping("/{id}")
	public User getUser(@PathVariable("id") int id)
	{
		return userservice.getUserById(id);

	}
	
	@PostMapping("/loginuser")
	//public ResponseEntity<User> loginUser(@RequestBody User user)
	public ResponseEntity loginUser(@RequestBody User user) throws AuthenticationException {
		User foundUser = userservice.loginUser(user);
		if(foundUser!=null)
			return new ResponseEntity<>(foundUser, HttpStatus.OK);
		return new ResponseEntity<>("Wrong Username and Password", HttpStatus.FORBIDDEN);
	}
	
	@PutMapping("/updateuser")
	public User updateUser(@RequestBody User user)
	{
		return userservice.updateUser(user);
	}//Ok

	@PostMapping("/addMoney")
	public User addMoneyToUserWallet(@RequestBody User user)
	{
		return userservice.addWalletMoney(user);
	}


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
