package com.controller;

import java.util.List;

import com.entities.MyOrderProductMapping;
import com.models.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.entities.MyOrder;
import com.service.MyOrderService;

@CrossOrigin("*")
@RestController
public class MyOrderController {
	
	@Autowired
	MyOrderService moservice;
	
	@PostMapping("/saveMyOrder")
	public ResponseEntity addMyOrder(@RequestBody Order mo) {
		try{
			MyOrder order = moservice.addMyOrder(mo);
			return new ResponseEntity(order, HttpStatus.OK);
		}
		catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	@GetMapping("/getMyOrder/{o_id}")
	public MyOrder getMyOrder(@PathVariable int o_id) {
		return moservice.findById(o_id);
	}

	@GetMapping("/getAllOrders")
	public List<MyOrder> getAllOrder() {
		return moservice.getAllOrders();
	}

	@GetMapping("/getorderdatafromuid/{u_id}")
	public List<MyOrder> getOrderDataFromUid(@PathVariable("u_id") int uid)
	{
		return moservice.getOrderDataFromUid(uid);
	}
}
