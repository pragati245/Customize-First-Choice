package com.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.entities.Vendor;
import com.service.VendorService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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
	
	@PostMapping("/loginvendor")
	//public ResponseEntity<Vendor> loginVendor(@RequestBody Vendor vendor)
	public ResponseEntity<Vendor> loginVendor(@RequestBody Vendor vendor)
	{
		Vendor value = vendorservice.loginVendor(vendor);
		if(value!=null)
			return new ResponseEntity(value, HttpStatus.OK);
		else
			return new ResponseEntity(false, HttpStatus.FORBIDDEN);
		//return userservice.loginUser(user);

		
	}//Ok
	
	@PutMapping("/updatevendor")
	public Vendor updateVendor(@RequestBody Vendor vendor)
	{
		return vendorservice.updateVendor(vendor);
	}//Ok


	@PatchMapping("/approve/{v_id}/{v_status}")
	public Vendor approvevendor(@PathVariable("v_id") int v_id, @PathVariable("v_status") Boolean v_status)
	{
		return vendorservice.approveVendor(v_id, v_status);
	}


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
