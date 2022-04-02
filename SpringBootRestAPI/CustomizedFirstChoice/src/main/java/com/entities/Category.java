package com.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table
@Entity
public class Category {

	@Id
	@GeneratedValue
	private int c_id;

	private String c_name;
	private String c_type;

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(int c_id, String c_type,String c_name) {
		super();
		this.c_id = c_id;
		this.c_type = c_type;
		this.c_name = c_name;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public String getC_type() {
		return c_type;
	}
	public void setC_type(String c_type) {
		this.c_type = c_type;
	}

	public String getC_name() {
		return c_name;
	}

	public void setC_name(String c_name) {
		this.c_name = c_name;
	}

	@Override
	public String toString() {
		return "Category [c_id=" + c_id + ", c_type=" + c_type + "]";
	}
	
	 
}

