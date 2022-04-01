package com.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entities.User;
import com.repository.UserRepository;

@Service
public class UserService
{
	@Autowired
	private UserRepository userrepo;

	//register
	public User registerUser(User user) 
	{
		// TODO Auto-generated method stub
			return userrepo.save(user);
	}

	//login
	public boolean loginUser(User user) 
	{
		// TODO Auto-generated method stub
		
		User user1=userrepo.findByEmail(user.getU_email(),user.getU_password());
		
		if(user1.getU_email().equals(user.getU_email())&& user1.getU_password().equals(user.getU_password()))
			return true ;
		else
				return false;
	}
	
//	
//	public ResponseEntity<User> loginUser(User user) 
//	{
//		// TODO Auto-generated method stub
//		User user1=userrepo.findByEmail(user.getU_email(),user.getU_password());
//		
//		if(user1.getU_email().equals(user.getU_email())&&user1.getU_password().equals(user.getU_password()))
//			return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
//		else
//				return new ResponseEntity<>(HttpStatus.FORBIDDEN);		
//	}	

	//update
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		User existinguser;
		existinguser=userrepo.findById(user.getU_id()).orElse(null);
		existinguser.setU_fname(user.getU_fname());
		existinguser.setU_lname(user.getU_lname());
		existinguser.setU_phone(user.getU_phone());
		existinguser.setU_email(user.getU_email());
		existinguser.setU_password(user .getU_password());
		existinguser.setU_address(user.getU_address());
		
		return userrepo.save(existinguser);
	}


	public boolean deleteUser(int u_id) {
		// TODO Auto-generated method stub
		
		userrepo.deleteById(u_id);
		return true;
		
	}


	public User singleUser(int u_id) {
		// TODO Auto-generated method stub
		return userrepo.findById(u_id).orElse(null);
	}


	public java.util.List<User> allUser() {
		// TODO Auto-generated method stub
		return userrepo.findAll();
	}
}

