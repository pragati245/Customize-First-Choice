package com.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Table(name="customizationdept")
@Entity

public class CustomizationDept {

	@Id
	@GeneratedValue
	private int cd_id;
	
	public int getCd_id() {
		return cd_id;
	}

	public void setCd_id(int cd_id) {
		this.cd_id = cd_id;
	}

	private float measurement;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name ="p_id",referencedColumnName="p_id")
	private Product p_id;

	public CustomizationDept() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CustomizationDept(int cd_id, float measurement, Product p_id) {
		super();
		this.cd_id = cd_id;
		this.measurement = measurement;
		this.p_id = p_id;
	}

	public float getMeasurement() {
		return measurement;
	}

	public void setMeasurement(float measurement) {
		this.measurement = measurement;
	}

	public Product getP_id() {
		return p_id;
	}

	public void setP_id(Product p_id) {
		this.p_id = p_id;
	}

	@Override
	public String toString() {
		return "CustomizationDept [cd_id=" + cd_id + ", measurement=" + measurement + ", p_id=" + p_id + "]";
	}

	
}
