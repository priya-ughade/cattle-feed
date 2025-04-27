
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install nodejs 
npm install express cors mongoose 

create basic folder structure
Backend --> 
        controller -->
        middelware --->
        routes --->
        util --->
        server.js 

set server.js file -->
   get express --> get cors -->  get app --> define PORT 3000
   server.listen on 3000
   check data with thunderclient plugin or postman 

-create json of products in util 

-use that data in product controller 
        getProduct const --->
        const getProduct = (req,res) =>{
        }
        do not forget to export the function

- Need to get the product using routes 

- define routes in routes folder 
    use const express --> use Router method from express 
    then define the http methods with router like get post delete
    Export the router
    In server.js file use that router with app.use

server file 
   while using app.use use (/) before any routes.
   app.use('/api/getProd',require('./routes/product.routes'));

check proct json file by running http://localhost/3000/api/getProd/



POST the Data into json file

- need to set body to send --> check body parameters
- creat route in server file first -> app.use('/api/addProd',require('./routes/product.routes'));
- add the destination file from controller to routers folder like --> router.post('/add',product-controller.addproduct);
- use fs and path to read the existing json file then add or write










































