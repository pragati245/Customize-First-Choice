admin create 

I manually added auto increament for product table

Product Audit


ALTER TABLE `finalproject`.`vendor` 
CHANGE COLUMN `v_status` `v_status` BIT(1) NULL DEFAULT 0 ;



User when buys, quantity of products available in staock not reducing