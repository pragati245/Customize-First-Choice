package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.entities.Admin;
import com.repository.AdminRepository;
@Service
public class AdminService
{
	@Autowired
	private AdminRepository adminrepo;
	
	public ResponseEntity loginAdmin(Admin admin)
	{
		// TODO Auto-generated method stub
		Admin admin1=adminrepo.findByEmail(admin.getA_email(),admin.getA_password());
		
		if(admin1!= null && admin1.getA_email().equals(admin.getA_email())&&admin1.getA_password().equals(admin.getA_password()))
			return new ResponseEntity<Admin>(admin1,HttpStatus.ACCEPTED);
		else
				return new ResponseEntity<String>("Wrong Username and Password",HttpStatus.FORBIDDEN);
	}	

}

