package com.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.entities.Product;
import com.entities.ProductAudit;
import com.service.ProductService;

@CrossOrigin("*")
@RequestMapping("/product")
@RestController
public class ProductController {
	@Autowired
	ProductService pservice;
	
	@GetMapping("/getallproducts")
	public List<Product> getAllProducts() {
		return pservice.getAllProducts();
		
	}
	@GetMapping("/getallproductaudit")
	public List<ProductAudit> getAllProductAudit() {
		return pservice.getAllProductAudit();
	}
	@PostMapping("/addproduct")
	public Product save(@RequestBody Product p) {
		return pservice.save(p);
	}

	@GetMapping("/getbycid")
	public List<Product> getByCategoryId(@RequestParam("c_id") int c_id) {
		return pservice.getByCategoryId(c_id);
	}
	@PostMapping("/searchbykeyword")
	public List<Product> searchbykeyword(@RequestBody Product p) {
		return pservice.searchbykeyword(p.getPname(), p.getPbrand(), p.getPdesc());
	}
	@GetMapping("/men")
	public List<Product> getAllMen() {
		return pservice.getAllMen();
	}
	@GetMapping("/women")
	public List<Product> getAllWomen() {
		return pservice.getAllWomen();
	}
	@GetMapping("/viewbyvid")
	public List<Product> getByVid(@RequestParam("v_id")int v_id){
		return pservice.getByVid(v_id);
	}
	@GetMapping("/productstatusaction")
	public void productStatusAction(@RequestParam("p_id") int p_id,@RequestParam("pprice") float pprice,@RequestParam("pqty") int pqty,@RequestParam("action") String action)
	{
		pservice.productStatusAction(p_id,pprice,pqty,action);
	}
	@GetMapping("/vaddproduct")
	public void vaddproduct(@RequestParam("c_type")String c_type, @RequestParam("v_id") int v_id,
			@RequestParam("pname") String pname, @RequestParam("pdesc") String pdesc,
			@RequestParam("psize") String psize, @RequestParam("pbrand") String pbrand,
			@RequestParam("pprice") float pprice, @RequestParam("pqty") int pqty) {
		int cid = pservice.cidReturn(c_type);
		pservice.vaddproduct(cid, v_id, pname, pdesc, psize, pbrand, pprice, pqty);
	}
	@GetMapping("/viewoutofstock")
	public List<Product> viewOutOfStock(@RequestParam("v_id") int v_id)
	{
		return pservice.viewOutOfStock(v_id);
	}
}
