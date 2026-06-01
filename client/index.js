import fetch from "node-fetch";

async function callWebService() {

    const response = await fetch("http://localhost:3000/add", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            num1: 5,
            num2: 3
        })
    });

    const data = await response.json();

    console.log("Server Response:", data);
}

callWebService();