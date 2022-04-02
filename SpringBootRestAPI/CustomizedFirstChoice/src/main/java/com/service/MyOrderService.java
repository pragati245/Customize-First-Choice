package com.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.entities.MyOrderProductMapping;
import com.entities.Product;
import com.entities.User;
import com.models.Order;
import com.models.OrderQuantity;
import com.repository.MyOrderProductMappingRepository;
import com.repository.ProductRepository;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.entities.MyOrder;
import com.repository.MyOrderRepository;

@Service
public class MyOrderService {
	@Autowired
	MyOrderRepository morepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	ProductRepository productRepo;

	@Autowired
	MyOrderProductMappingRepository opMappingRepo;

	@Autowired
	MyOrderRepository orderRepo;

	public List<MyOrder> getOrderDataFromUid(int uid) {
		// TODO Auto-generated method stub
		return morepo.getOrderDataFromUid(uid);
	}
	public MyOrder addMyOrder(Order mo) {
		float price = mo.getTotalprice();
		MyOrder orderEntity = new MyOrder();
		orderEntity.setAddress(mo.getAddress());
		orderEntity.setContactno(mo.getO_phone());
		orderEntity.setOstatus(mo.getOstatus());
		orderEntity.setTotalprice(mo.getTotalprice());

		User user = userRepo.getById(mo.getU_id());
		/*Logic of calculating wallet balance of user*/
		orderEntity.setUser(user);
		orderRepo.save(orderEntity);

		List<Product> allProducts = productRepo.findAll();
		Map<Integer, Product> productMap = new HashMap();
		for(Product product : allProducts){
			productMap.put(product.getP_id(), product);
		}

		for (OrderQuantity oq : mo.getProductsQuantity()){
			MyOrderProductMapping myOrderProductMapping = new MyOrderProductMapping();
			Product foundProduct = productMap.get(oq.getProduct_id());
			myOrderProductMapping.setProduct(foundProduct);
			myOrderProductMapping.setQuantity(oq.getQuantity());
			myOrderProductMapping.setOrder(orderEntity);
			opMappingRepo.save(myOrderProductMapping);
			orderEntity.addProductAssoc(myOrderProductMapping);
		}
		return orderEntity;
	}

	public Optional<MyOrder> findById(int oid){
		return morepo.findById(oid);
	}
	public List<MyOrder> findAll() {
		List<MyOrder> orders = morepo.findAll();
		// TODO Auto-generated method stub
		if(orders!=null)
		{
			return orders;
		}
		else
		{
			return null;
		}
	} 
}