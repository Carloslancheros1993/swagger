const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post("/login", (req, res) => {
    res.json({
        "message": "Has iniciado sesion correctamente"
    })
});

app.post("/signup", (req, res) => {
    console.log(req.headers);
    res.status(201).json({
        id: 1, 
        firstName: "Hector",
        lastName: "Alvarez",
        email: "hector@gmail.com",
        password: "$7dsfs89"
    });
});

app.listen(9000, () => {
    console.log("Escuchando sobre el puerto 9000");
});