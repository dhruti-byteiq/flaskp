const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", async (req, res) => {
    const formData = req.body;

    // Send data to Flask backend
    const response = await fetch("http://backend:5000/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    res.send(data);
});

app.listen(3000, () => console.log("Frontend running on port 3000"));
