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

import com.entities.Vendor;
import com.service.VendorService;

@CrossOrigin("*")
@RestController
@RequestMapping("/vendor")
public class VendorController
{

	@Autowired
	 private VendorService vendorservice;
	 
	
	@PostMapping("/addvendor")
	public Vendor registerVendor(@RequestBody Vendor vendor)
	{
		return vendorservice.registerVendor(vendor);
	
	}//Ok
	
	@GetMapping("/loginvendor")
	//public ResponseEntity<Vendor> loginVendor(@RequestBody Vendor vendor)
	public boolean loginVendor(@RequestBody Vendor vendor)
	{
		boolean value = vendorservice.loginVendor(vendor);
		if(value==true)
			return true;
		else 
			return false;
		//return userservice.loginUser(user);

		
	}//Ok
	
	@PutMapping("/updatevendor")
	public Vendor updateVendor(@RequestBody Vendor vendor)
	{
		return vendorservice.updateVendor(vendor);
	}//Ok
	
	
	@DeleteMapping("/deletevendor/{v_id}")
	public Boolean deleteVendor(@PathVariable int v_id)
	{
		boolean value=vendorservice.deleteVendor(v_id);
		if(value==true)
			return true;
		else
			return false;
	}//Ok
	
	@GetMapping("/getvendor/{v_id}")
	public Vendor singleVendor(@PathVariable int v_id)
	{
		return vendorservice.singleVendor(v_id);
	}//Ok
	
	@GetMapping("/getallvendor")
	public List<Vendor> allVendor()
	{
		return vendorservice.allVendor();
	}//Ok
	
	
	
	 
}
