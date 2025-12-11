const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", async (req, res) => {
    const formData = req.body;

    // Send data to Flask backend
    const response = await fetch("https://fl-405b63ca1c5a4f7ca680311f156325da.ecs.ap-south-1.on.aws/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    res.send(data);
});

app.listen(80, () => console.log("Frontend running on port 3000"));
