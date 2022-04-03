package com.service;

import java.util.*;

import com.entities.*;
import com.models.Order;
import com.models.OrderQuantity;
import com.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyOrderService {
	@Autowired
	MyOrderRepository morepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	ProductRepository productRepo;

	@Autowired
	VendorRepository vendorRepo;

	@Autowired
	AdminRepository adminRepo;

	@Autowired
	MyOrderProductMappingRepository opMappingRepo;

	@Autowired
	MyOrderRepository orderRepo;

	public List<MyOrder> getOrderDataFromUid(int uid) {
		List<MyOrder> orders = morepo.findAll();
		List<MyOrder> ordersForUser = new ArrayList<>();
		for(MyOrder order: orders) {
			if (order != null && order.getUser().getU_id()==uid) {
				ordersForUser.add(order);
				List<MyOrderProductMapping> allMappings = opMappingRepo.findAll();
				List<MyOrderProductMapping> mappings = new ArrayList<>();
				for (MyOrderProductMapping op : allMappings) {
					if (op.getOrder().getOid() == order.getOid()) {
						mappings.add(op);
					}
				}
				order.setProductAssoc(mappings);
			}
		}
		return ordersForUser;
	}
	public MyOrder addMyOrder(Order mo) throws Exception {
		float price = mo.getTotalprice();
		MyOrder orderEntity = new MyOrder();
		orderEntity.setAddress(mo.getAddress());
		orderEntity.setContactno(mo.getO_phone());
		orderEntity.setOstatus(mo.getOstatus());
		orderEntity.setTotalprice(mo.getTotalprice());
		orderEntity.setTotalprice(price);

		User user = userRepo.getById(mo.getU_id());
		orderEntity.setUser(user);

		/*Logic of calculating wallet balance of user*/
		if(!calculateWalletBalances(orderEntity)){
			throw new Exception("Not enough money in the wallet");
		}

		orderRepo.save(orderEntity);

		List<Product> allProducts = productRepo.findAll();
		Map<Integer, Product> productMap = new HashMap();
		for(Product product : allProducts){
			productMap.put(product.getP_id(), product);
		}

		List<Vendor> allVendors = this.vendorRepo.findAll();
		Map<Integer, Vendor> vendorMap = new HashMap();
		for(Vendor vendor : allVendors){
			vendorMap.put(vendor.getV_id(), vendor);
		}

		for (OrderQuantity oq : mo.getProductsQuantity()){
			MyOrderProductMapping myOrderProductMapping = new MyOrderProductMapping();
			Product foundProduct = productMap.get(oq.getProduct_id());
			myOrderProductMapping.setProduct(foundProduct);
			myOrderProductMapping.setQuantity(oq.getQuantity());

			/*Calculate Vendor wallet balance and quanity*/
			calculateWalletForVendor(myOrderProductMapping, vendorMap);
			boolean isQntySuffice = calculateAvailableProductQuantity(myOrderProductMapping);
			if(!isQntySuffice){
				throw new Exception("Quantity not suffice.");
			}

			myOrderProductMapping.setOrder(orderEntity);
			opMappingRepo.save(myOrderProductMapping);
			orderEntity.addProductAssoc(myOrderProductMapping);
		}
		Admin admin = adminRepo.findById(1).get();
		float updatedAdminWallet = admin.getA_wallet() + (price*0.1f);
		admin.setA_wallet(updatedAdminWallet);
		adminRepo.save(admin);
		System.out.println(updatedAdminWallet);
		return orderEntity;
	}

	private boolean calculateWalletBalances(MyOrder orderEntity){
		User user = orderEntity.getUser();
		float remainingUserBalance = user.getWallet() - orderEntity.getTotalprice();
		if(remainingUserBalance < 0){
			return false;
		}
		user.setWallet(remainingUserBalance);
		this.userRepo.save(user);
		return true;
	}

	private void calculateWalletForVendor(MyOrderProductMapping mapping, Map<Integer, Vendor> vendors){
		float totalPriceForProduct = mapping.getProduct().getPprice() * mapping.getQuantity();
		Vendor requiredVendor = vendors.get(mapping.getProduct().getVdr().getV_id());
		float updatedVendorWallet = requiredVendor.getV_wallet() + totalPriceForProduct*0.9f;
		requiredVendor.setV_wallet(updatedVendorWallet);
	}

	private boolean calculateAvailableProductQuantity(MyOrderProductMapping mapping){
		Product product = mapping.getProduct();
		int updatedProductQuantity = product.getPqty() - mapping.getQuantity();
		if(updatedProductQuantity < 0){
			return false;
		}
		product.setPqty(updatedProductQuantity);
		productRepo.save(product);
		return true;
	}

	public MyOrder findById(int oid){
		MyOrder order = morepo.findById(oid).get();
		if(order!=null){
			List<MyOrderProductMapping> allMappings = opMappingRepo.findAll();
			List<MyOrderProductMapping> mappings = new ArrayList<>();
			for(MyOrderProductMapping op:allMappings){
				if(op.getOrder().getOid() == oid){
					mappings.add(op);
				}
			}
			order.setProductAssoc(mappings);

		}
		return order;
	}

	public List<MyOrder> getAllOrders(){
		List<MyOrder> orders = morepo.findAll();
		for(MyOrder order: orders) {
			if (order != null) {
				List<MyOrderProductMapping> allMappings = opMappingRepo.findAll();
				List<MyOrderProductMapping> mappings = new ArrayList<>();
				for (MyOrderProductMapping op : allMappings) {
					if (op.getOrder().getOid() == order.getOid()) {
						mappings.add(op);
					}
				}
				order.setProductAssoc(mappings);
			}
		}
		return orders;
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