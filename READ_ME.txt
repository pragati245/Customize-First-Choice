admin create 

I manually added auto increament for product table

Product Audit


ALTER TABLE `finalproject`.`vendor` 
CHANGE COLUMN `v_status` `v_status` BIT(1) NULL DEFAULT 0 ;

ALTER TABLE `finalproject`.`myorder` 
CHANGE COLUMN `o_id` `o_id` INT NOT NULL AUTO_INCREMENT ;

ALTER TABLE `finalproject`.`myorder` 
DROP COLUMN `qty`;





User when buys, quantity of products available in staock not reducing


Pending:
All orders in Admin
Images
Add money
when adding product increate its value by 10 percent