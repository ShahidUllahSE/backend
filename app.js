const express = require('express')

const prodsRoute = require("./routes/products")

const userRoute = require ('./routes/users')

const cartRoute = require ( './routes/cart' )

const app = express()

app.use(express.json());

// to not make mess we make seprate file for each route

// now to use products route we do so 

app.use("/api/products", prodsRoute);

app.use("/api/users", userRoute)

app.use("/api/cart" , cartRoute)



app.get('/' , ( req , res ) => {

    // res.send( req.body.message )   // getting text from body using postman tool

    

 
})






const PORT = 3001

// app.get("/products" , ( req, res ) => {
//     res.send( " List of all products  " )
// })

// app.post( "/products" , ( req ,res ) => {

//     res.send(" add new products ")

// } )

// app.patch( "/products", ( req , res) => {

//     res.send(" updating products ")

// } )

// app.delete( "/products", ( req, res ) => {

//     res.send( "  prodcuts deleted " )

// } )




app.listen(PORT, () => {
  console.log('running on port ' + PORT)
})
