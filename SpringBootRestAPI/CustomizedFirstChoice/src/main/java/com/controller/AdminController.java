package com.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entities.Admin;
import com.service.AdminService;

@CrossOrigin("*")
@RequestMapping("/admin")
@RestController
public class AdminController {
	@Autowired
	AdminService aservice;

	@PostMapping("/adminlogin")
	public ResponseEntity<Boolean> loginAdmin(@RequestBody Admin admin)
	{
			return aservice.loginAdmin(admin);
	}

}
