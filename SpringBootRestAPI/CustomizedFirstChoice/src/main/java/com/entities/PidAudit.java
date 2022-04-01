package com.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="pidaudit")
public class PidAudit {

	@Id
	@GeneratedValue
	private int paid;
	@Column
	private int pid;
	@Column
	private int oid;
	@Column
	private Date otime;

	public PidAudit() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PidAudit(int pid, int oid, Date otime) {
		super();
		this.pid = pid;
		this.oid = oid;
		this.otime = otime;
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

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	public Date getOtime() {
		return otime;
	}

	public void setOtime(Date otime) {
		this.otime = otime;
	}

	@Override
	public String toString() {
		return "PidAudit [paid=" + paid + ", pid=" + pid + ", oid=" + oid + ", otime=" + otime + "]";
	}

	
}