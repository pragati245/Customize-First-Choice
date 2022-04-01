package com.entities;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="productaudit")
public class ProductAudit {
	@Id
	@GeneratedValue
	private int paid;
	@Column
	private int pid;
	@Column
	private String pname;
	@Column
	private float pprice;
	@Column
	private int pqty;
	@Column
	private Date ptime;
	public ProductAudit() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProductAudit(int paid, int pid, String pname, float pprice, int pqty, Date ptime) {
		super();
		this.paid = paid;
		this.pid = pid;
		this.pname = pname;
		this.pprice = pprice;
		this.pqty = pqty;
		this.ptime = ptime;
	}
	public int getPaid() {
		return paid;
	}
	public void setPaid(int paid) {
		this.paid = paid;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public float getPprice() {
		return pprice;
	}
	public void setPprice(float pprice) {
		this.pprice = pprice;
	}
	public int getPqty() {
		return pqty;
	}
	public void setPqty(int pqty) {
		this.pqty = pqty;
	}
	public Date getPtime() {
		return ptime;
	}
	public void setPtime(Date ptime) {
		this.ptime = ptime;
	}
}