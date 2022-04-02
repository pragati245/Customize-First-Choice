package com.entities;

import java.io.Serializable;

public class MyOrderProductMappingId implements Serializable {
    private int product;
    private int order;

    public int getProduct() {
        return product;
    }

    public void setProduct(int product) {
        this.product = product;
    }

    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }
}
