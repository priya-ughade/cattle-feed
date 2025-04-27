// const express = require('express');
// let app = express();
// const router = express.Router();
// const cors = require('cors')
// let controller = require('../Backend/controller/product-controller')
// let PORT = 3000;
// app.use(cors())
// app.use('/api/getProd',require('./routes/product.routes'));
// app.listen(PORT,()=>{
//     console.log(`Port is running on ${PORT}`)
// })


const express = require('express');
const cors = require('cors');

const app = express();
let PORT = 3000
app.use(cors())
app.use(express.json());


app.use('/api/getProd', require('./routes/product.routes'));
app.use('/api/addProd',require('./routes/product.routes'));




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})