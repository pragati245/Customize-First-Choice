package com.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vendoraudit")
public class VendorAudit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vaid;
	@Column
	private int vid;
	@Column
	private int vuid;
	@Column
	private String vfname;
	@Column
	private String vlname;
	@Column
	private Date vtime;

	public VendorAudit() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VendorAudit(int vaid, int vid, int vuid, String vfname, String vlname, Date vtime) {
		super();
		this.vaid = vaid;
		this.vid = vid;
		this.vuid = vuid;
		this.vfname = vfname;
		this.vlname = vlname;
		this.vtime = vtime;
	}

	public int getVaid() {
		return vaid;
	}

	public void setVaid(int vaid) {
		this.vaid = vaid;
	}

	public int getVid() {
		return vid;
	}

	public void setVid(int vid) {
		this.vid = vid;
	}

	public int getVuid() {
		return vuid;
	}

	public void setVuid(int vuid) {
		this.vuid = vuid;
	}

	public String getVfname() {
		return vfname;
	}

	public void setVfname(String vfname) {
		this.vfname = vfname;
	}

	public String getVlname() {
		return vlname;
	}

	public void setVlname(String vlname) {
		this.vlname = vlname;
	}

	public Date getVtime() {
		return vtime;
	}

	public void setVtime(Date vtime) {
		this.vtime = vtime;
	}

}
