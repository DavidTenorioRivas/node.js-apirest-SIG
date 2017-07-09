#create table for product
DROP TABLE IF EXISTS PRODUCT;
CREATE TABLE PRODUCT
(
  idProduct       INT UNSIGNED   NOT NULL AUTO_INCREMENT,
  codeProduct     VARCHAR(50)    NOT NULL,
  descriProduct   VARCHAR(50)    NOT NULL,
  uniteProduct    DOUBLE         NOT NULL,
  costProduct     DOUBLE         NOT NULL,
  totalProdcut    DOUBLE         NOT NULL,
  PRIMARY KEY (idProduct)
);
#create products
INSERT INTO PRODUCT (codeProduct, descriProduct, uniteProduct, costProduct, totalProdcut)
VALUES ('aaaa','mesa', 27, 1.20, uniteProduct*costProduct);
INSERT INTO PRODUCT (codeProduct, descriProduct, uniteProduct, costProduct, totalProdcut)
VALUES ('bbb','mesa', 10, 1.30, uniteProduct*costProduct);
INSERT INTO PRODUCT (codeProduct, descriProduct, uniteProduct, costProduct, totalProdcut)
VALUES ('ccc','puerta', 20, 2.30, uniteProduct*costProduct);
#create SP product
#GET MOSTRAR PRODUCTOS
DROP PROCEDURE IF EXISTS sp_GetProducts;
DELIMITER //
CREATE PROCEDURE sp_GetProducts()
  BEGIN
    SELECT *
    FROM PRODUCT ORDER BY totalProdcut DESC;
  END //
DELIMITER ;
#POST INSERT PRODUC
DROP PROCEDURE IF EXISTS sp_PostProduct;
DELIMITER //
CREATE PROCEDURE sp_PostProduct(IN _codeProduct VARCHAR(50), IN _descriProduct VARCHAR(50),
                                 IN _uniteProduct DOUBLE, IN _costProduct DOUBLE)
  BEGIN
    INSERT INTO PRODUCT (codeProduct, descriProduct, uniteProduct, costProduct, totalProdcut)
    VALUES (_codeProduct,_descriProduct,_uniteProduct, _costProduct, uniteProduct*costProduct);
  END //
DELIMITER ;