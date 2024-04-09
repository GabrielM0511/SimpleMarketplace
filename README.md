**How to run Simple Marketplace API**

**Server setup in Visual Studio Code**

To start the server, simply run “npm run server”. After running that, the console should look something like this:

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.001.png)

Although there are no database files in the project, all of the entries are actually being saved in Gabriel's MongoDB.

**Authentication Functionality**

For Authentication, we decided to use JWT and Postman Headers, authentication will only be required for POST, PUT, and DELETE.

- To create a new token in postman, use the following URL <http://localhost:3000/login>
- Then, ensure that “Body”, “raw” and “JSON” options are selected and provide the following JSON file (“admin” is just an example, it could be anything):
- Lastly, the preview pane contains your token, use this for some of the methods in CRUD.

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.002.png)

**CRUD Functionality**

- **Create (POST):** To add an entry to the MongoDB, follow these steps:
  - In postman, use the following URL <http://localhost:3000/upload-product> , then you can use a dummy JSON entry for testing purposes:
  - Additionally, ensure that “Body”, “raw” and “JSON” options are selected (refer to image for an example)
  - Lastly, ensure that in the header section meets the following criteria:
    - Key: “Authorization”
    - Value: “YOUR TOKEN KEY”

{

`  `"name": "Wireless Headphones",

`  `"description": "High-quality wireless headphones with noise-canceling feature",

`  `"manufacturer": "Beats",

`  `"quantity": 1,

`  `"price": 129.99,

`  `"image": "headphones\_image.jpg",

`  `"condition": "new",

`  `"rating": 4.8

}

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.003.png)

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.004.png)



- **Read (GET):** To fetch an entry from the MongoDB, follow these steps:
  - To fetch all entries in postman, use the following URL <http://localhost:3000/products> 

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.005.png)



- To fetch a specific entry in postman, use the following URL (place the product id at the end of the URL) [http://localhost:3000/products/<product_id_here](http://localhost:3000/products/\<product_id_here)> 

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.006.png)



- **Update (PUT):** To update an entry from the MongoDB, follow these steps:
  - To update a specific entry in postman, use the following URL (place the product id at the end of the URL) [http://localhost:3000/products/<product_id_here](http://localhost:3000/products/\<product_id_here)>
  - Additionally, ensure that “Body”, “raw” and “JSON” options are selected (refer to image for an example)
  - Lastly, ensure that in the header section meets the following criteria:
    - Key: “Authorization”
    - Value: “YOUR TOKEN KEY”

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.007.png)

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.008.png)

- **Delete (DELETE):** To delete an entry from the MongoDB, follow these steps:
  - To delete a specific entry in postman, use the following URL (place the product id at the end of the URL) [http://localhost:3000/products/<product_id_here](http://localhost:3000/products/\<product_id_here)>
  - Lastly, ensure that in the header section meets the following criteria:
    - Key: “Authorization”
    - Value: “YOUR TOKEN KEY”

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.009.png)

![](Aspose.Words.4ff9a4f7-2baf-417e-8205-f9c2c87ae072.010.png)
