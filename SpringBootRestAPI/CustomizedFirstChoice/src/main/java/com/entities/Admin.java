package com.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table
@Entity
public class Admin 
{
   @Id
   @GeneratedValue
   private int a_id;
   
   private String a_password;
   private String a_phone;
   private String a_email;
   private float a_wallet=0f;
   
   public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(int a_id, String a_password, String a_phone, String a_email, float a_wallet) {
		super();
		this.a_id = a_id;
		this.a_password = a_password;
		this.a_phone = a_phone;
		this.a_email = a_email;
		this.a_wallet = 0f;
	}

	public int getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
	}

	public String getA_password() {
		return a_password;
	}

	public void setA_password(String a_password) {
		this.a_password = a_password;
	}

	public String getA_phone() {
		return a_phone;
	}

	public void setA_phone(String a_phone) {
		this.a_phone = a_phone;
	}

	public String getA_email() {
		return a_email;
	}

	public void setA_email(String a_email) {
		this.a_email = a_email;
	}

	@Override
	public String toString() {
		return "Admin [a_id=" + a_id + ", a_password=" + a_password + ", a_phone=" + a_phone + ", a_email=" + a_email + "]";
	}

	public float getA_wallet() {
		return a_wallet;
	}

	public void setA_wallet(float a_wallet) {
		this.a_wallet = a_wallet;
	}

}
