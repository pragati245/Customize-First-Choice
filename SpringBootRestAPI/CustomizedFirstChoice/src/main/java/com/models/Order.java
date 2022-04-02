package com.models;

import java.util.ArrayList;
import java.util.List;

public class Order {

    private int o_id;
    private String address;
    private String o_phone;
    private float totalprice;
    private int u_id;
    private String ostatus="Placed";
    private List<OrderQuantity> productsQuantity;

    public int getO_id() {
        return o_id;
    }

    public void setO_id(int o_id) {
        this.o_id = o_id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getO_phone() {
        return o_phone;
    }

    public void setO_phone(String o_phone) {
        this.o_phone = o_phone;
    }

    public float getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(float totalprice) {
        this.totalprice = totalprice;
    }

    public String getOstatus() {
        return ostatus;
    }

    public void setOstatus(String ostatus) {
        this.ostatus = ostatus;
    }

    public List<OrderQuantity> getProductsQuantity() {
        return productsQuantity;
    }

    public void setProductsQuantity(List<OrderQuantity> productsQuantity) {
        this.productsQuantity = productsQuantity;
    }


    public void addProductsQuantity(OrderQuantity productQuantity) {
        if(this.productsQuantity == null)
            this.productsQuantity = new ArrayList<>();

        this.productsQuantity.add(productQuantity);
    }

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }
}
