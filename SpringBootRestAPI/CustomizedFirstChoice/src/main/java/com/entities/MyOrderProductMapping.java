package com.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
@IdClass(MyOrderProductMappingId.class)
public class MyOrderProductMapping {
    @Id
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "p_id")
    private Product product;

    @Id
    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "o_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private MyOrder order;

    @Column(name = "quantity")
    private int quantity;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public MyOrder getOrder() {
        return order;
    }

    public void setOrder(MyOrder order) {
        this.order = order;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
