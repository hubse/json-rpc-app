const express = require("express");

const app = express();

app.use(express.json());

// Web service endpoint
app.post("/add", (req, res) => {

    const { num1, num2 } = req.body;

    const result = num1 + num2;

    res.json({
        success: true,
        result: result
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});