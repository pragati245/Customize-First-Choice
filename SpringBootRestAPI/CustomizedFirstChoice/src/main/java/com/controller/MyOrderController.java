package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.entities.MyOrder;
import com.service.MyOrderService;

@RestController
public class MyOrderController {
	
	@Autowired
	MyOrderService moservice;
	
	@PostMapping("/saveMyOrder")
	public MyOrder addMyOrder(@RequestBody MyOrder mo) {
		return moservice.addMyOrder(mo); 
	}
	
	/*@PostMapping("/saveProduct")
	public Product add(@RequestBody Product p) {
		return prepo.save(p);		
	}*/
	
	
	@GetMapping("/getMyOrder")
	public List<MyOrder> getMyOrder() {
		
		return moservice.findAll();
	}
	
	/*@GetMapping("/getMyOrderbyid")
	public MyOrder getMyOrderById(@RequestParam("oid") int id) {
		 final Optional<MyOrder> or =  orepo.findById(id);
		 MyOrder o = new MyOrder(); 
		o.setUname(or.get().getUname());
		o.setAddress(or.get().getAddress());
		o.setContactno(or.get().getContactno());
		o.setTotalprice(or.get().getTotalprice());
		o.setQty(or.get().getQty());
		o.setProducts(or.get().getProducts());
		return o;		 
	}*/	
	@GetMapping("/getorderdatafromuid")
	public List<MyOrder> getOrderDataFromUid(@RequestParam("uid") int uid)
	{
		return moservice.getOrderDataFromUid(uid);
	}
}
