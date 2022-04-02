package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entities.Product;
import com.entities.ProductAudit;
import com.repository.ProductAuditRepository;
import com.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository prepo;
	@Autowired
	ProductAuditRepository parepo;

	public List<Product> getAllProducts() {
		return prepo.findAll();
	}
	public List<Product> getproducts(int p_id)
	{
		return prepo.getproducts(p_id);
	}

	public Product save(Product p) {
		return prepo.save(p);
	}

	public List<Product> getByCategoryId(int c_id) {
		return prepo.getByCategoryId(c_id);
	}
	public List<Product> searchbykeyword(String pname, String pbrand, String pdesc) {
		// TODO Auto-generated method stub
		return prepo.searchbykeyword(pname, pbrand, pdesc);
		
	}
	public List<Product> getAllMen() {
		return prepo.getAllMen();
	}
	public List<Product> getAllWomen() {
		return prepo.getAllWomen();
	}
	public List<Product> getByVid(int v_id) {
		return prepo.getByVid(v_id);
	}
	public boolean productStatusAction(int p_id,float pprice,int pqty,String action) 
	{
		// TODO Auto-generated method stub
		prepo.productAudit(p_id);
		if(action.equals("yes"))
		{
			prepo.productadd(p_id);
			//prepo.gettotalprice(p_id);
			//prepo.pdadminwallet(pprice,pqty);
			return true;
		}
		else
		{
			prepo.productdel(p_id);
			return false;
		}
		
	}
	public List<ProductAudit> getAllProductAudit() {
		return parepo.getAllprojectaudit();
	}
	public int vaddproduct(int c_id, int v_id, String pname, String pdesc, String psize, String pbrand, float pprice,
			int pqty) {
		return prepo.vaddproduct(c_id,v_id,pname,pdesc,psize,pbrand,pprice,pqty);

	}
	
	public int cidReturn(String c_type) {
		return prepo.cidReturn(c_type);
	}
	public List<Product> viewOutOfStock(int v_id) {
		// TODO Auto-generated method stub
		return prepo.viewOutOfStock(v_id);
	}
}
