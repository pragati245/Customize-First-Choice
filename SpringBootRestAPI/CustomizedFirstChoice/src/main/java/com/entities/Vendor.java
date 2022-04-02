package com.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table
@Entity
public class Vendor {

	@Id
	@GeneratedValue
	private int v_id;
	
	private String v_name;
	private long v_phone;
	private String v_address;
	private String v_email;
	private String v_password;
	
	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vendor(int v_id, String v_name, long v_phone, String v_address, String v_email, String v_password) {
		super();
		this.v_id = v_id;
		this.v_name = v_name;
		this.v_phone = v_phone;
		this.v_address = v_address;
		this.v_email = v_email;
		this.v_password = v_password;
	}

	public int getV_id() {
		return v_id;
	}

	public void setV_id(int v_id) {
		this.v_id = v_id;
	}

	public String getV_name() {
		return v_name;
	}

	public void setV_name(String v_name) {
		this.v_name = v_name;
	}

	public long getV_phone() {
		return v_phone;
	}

	public void setV_phone(long v_phone) {
		this.v_phone = v_phone;
	}

	public String getV_address() {
		return v_address;
	}

	public void setV_address(String v_address) {
		this.v_address = v_address;
	}

	public String getV_email() {
		return v_email;
	}

	public void setV_email(String v_email) {
		this.v_email = v_email;
	}

	public String getV_password() {
		return v_password;
	}

	public void setV_password(String v_password) {
		this.v_password = v_password;
	}

	@Override
	public String toString() {
		return "Vendor [v_id=" + v_id + ", v_name=" + v_name + ", v_phone=" + v_phone + ", v_address=" + v_address
				+ ", v_email=" + v_email + ", v_password=" + v_password + "]";
	}
	
	
	
}
