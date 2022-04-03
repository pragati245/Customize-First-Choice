package com.entities;


import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Table
@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int p_id;
	
	private String pname;

	private String pdesc;
	// img1 and img2
	
	private String psize;
	
	private int prating;
	
	private int pqty;

	private float pprice;

	private String pbrand;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "c_id")
	private Category cat;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "v_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Vendor vdr;
	
//	@ManyToMany(mappedBy = "products", cascade = CascadeType.ALL)
//	@JsonProperty(access = Access.WRITE_ONLY)
//	private List<MyOrder> myorders = new ArrayList<MyOrder>();


	@OneToMany(mappedBy = "product")
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<MyOrderProductMapping> orderAssoc;

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(String pname, String pdesc, String psize, int pqty, float pprice,
			String pbrand, String papprove, Category cat, Vendor vdr, List<MyOrder> myorders) {
		super();
		this.pname = pname;
		this.pdesc = pdesc;
		this.psize = psize;
		this.prating = 3;
		this.pqty = pqty;
		this.pprice = pprice;
		this.pbrand = pbrand;
		this.cat = cat;
		this.vdr = vdr;
//		this.myorders = myorders;
	}

	public int getP_id() {
		return p_id;
	}

	public void setP_id(int p_id) {
		this.p_id = p_id;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPdesc() {
		return pdesc;
	}

	public void setPdesc(String pdesc) {
		this.pdesc = pdesc;
	}

	public String getPsize() {
		return psize;
	}

	public void setPsize(String psize) {
		this.psize = psize;
	}

	public int getPrating() {
		return prating;
	}

	public void setPrating(int prating) {
		this.prating = prating;
	}

	public int getPqty() {
		return pqty;
	}

	public void setPqty(int pqty) {
		this.pqty = pqty;
	}

	public float getPprice() {
		return pprice;
	}

	public void setPprice(float pprice) {
		this.pprice = pprice;
	}

	public String getPbrand() {
		return pbrand;
	}

	public void setPbrand(String pbrand) {
		this.pbrand = pbrand;
	}

	public Category getCat() {
		return cat;
	}

	public void setCat(Category cat) {
		this.cat = cat;
	}

	public Vendor getVdr() {
		return vdr;
	}

	public void setVdr(Vendor vdr) {
		this.vdr = vdr;
	}

//	public List<MyOrder> getMyorders() {
//		return myorders;
//	}
//
//	public void setMyorders(List<MyOrder> myorders) {
//		this.myorders = myorders;
//	}


	public List<MyOrderProductMapping> getOrderAssoc() {
		return orderAssoc;
	}

	public void setOrderAssoc(List<MyOrderProductMapping> orderAssoc) {
		this.orderAssoc = orderAssoc;
	}

	@Override
	public String toString() {
		return "Product [p_id=" + p_id + ", pname=" + pname + ", pdesc=" + pdesc + ", psize=" + psize + ", prating="
				+ prating + ", pqty=" + pqty + ", pprice=" + pprice + ", pbrand=" + pbrand + ",cat=" + cat + ", vdr=" + vdr;
	}
	
    
}
