package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entities.Vendor;
import com.repository.VendorRepository;

@Service
public class VendorService
{
	@Autowired
	private VendorRepository vendorrepo;

	//register
	public Vendor registerVendor(Vendor vendor) 
	{
		// TODO Auto-generated method stub
			return vendorrepo.save(vendor);
	}

	//login
	public Vendor loginVendor(Vendor vendor)
	{
		// TODO Auto-generated method stub
		
		Vendor vendor1=vendorrepo.findByEmail(vendor.getV_email(),vendor.getV_password());
		
		if(vendor1!=null && vendor1.getV_email().equals(vendor.getV_email())&& vendor1.getV_password().equals(vendor.getV_password()))
			return vendor1 ;
		else
				return null;
	}
	
	//update
	public Vendor updateVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		Vendor existingvendor;
		existingvendor=vendorrepo.findById(vendor.getV_id()).orElse(null);
		existingvendor.setV_name(vendor.getV_name());
		existingvendor.setV_phone(vendor.getV_phone());
		existingvendor.setV_email(vendor.getV_email());
		existingvendor.setV_password(vendor .getV_password());
		existingvendor.setV_address(vendor.getV_address());
		
		return vendorrepo.save(existingvendor);
	}


	public boolean deleteVendor(int v_id) {
		// TODO Auto-generated method stub
		
		vendorrepo.deleteById(v_id);
		return true;
		
	}


	public Vendor singleVendor(int v_id) {
		// TODO Auto-generated method stub
		return vendorrepo.findById(v_id).orElse(null);
	}


	public java.util.List<Vendor> allVendor() {
		// TODO Auto-generated method stub
		return vendorrepo.findAll();
	}

	public Vendor approveVendor(int v_id, Boolean v_status) {
		Vendor vendor = vendorrepo.findById(v_id).orElse(null);
		if(vendor!= null){
			vendor.setV_status(v_status);
			return vendorrepo.save(vendor);
		}
		return null;
	}
}

