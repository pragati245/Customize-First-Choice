package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.entities.MyOrder;
import com.repository.MyOrderRepository;

@Service
public class MyOrderService {
	@Autowired
	MyOrderRepository morepo;
	public List<MyOrder> getOrderDataFromUid(int uid) {
		// TODO Auto-generated method stub
		return morepo.getOrderDataFromUid(uid);
	}
	public MyOrder addMyOrder(MyOrder mo) {
		float price = mo.getTotalprice();
		int uid = mo.getUid();
		MyOrder m = morepo.save(mo);
		morepo.addToAwallet(price);
		morepo.deducUwallet(price, uid);
		morepo.getpidaudit();
		morepo.deletepidaudit();
		return m;
	}
	public Optional<MyOrder> findById(int oid){
		return morepo.findById(oid);
	}
	public List<MyOrder> findAll() {
		// TODO Auto-generated method stub
		if(morepo.findAll()!=null)
		{
		return morepo.findAll();
		}
		else
		{
			return null;
		}
	} 
}