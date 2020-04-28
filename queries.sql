-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT 
	    p."ProductName", 
	    c."CategoryName"
    FROM "Product" AS p
    JOIN "Category" AS c
    ON p."CategoryId" = c."Id";

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

    SELECT 
        o."Id" "OrderId", 
        s."CompanyName" "ShipperCompanyName"
    FROM "Order" AS o
    JOIN "Shipper" AS s
    ON o."ShipVia" = s."Id"
    WHERE o."OrderDate" < date('2012-08-09');

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

    SELECT 
        p."ProductName", 
        od."Quantity"
    FROM "Product" AS p
    JOIN "OrderDetail" AS od
    ON p."Id" = od."ProductId"
    WHERE od."OrderId" = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
