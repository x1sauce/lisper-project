// Import express and axios
import express from "express";
import axios from "axios";

// Create an express app and set the port number.
const app = express();
const port = 3000;

// Use the public folder for static files.
app.use(express.static("public"));

const API_URL = "https://secrets-api.appbrewery.com/random";

// When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    // Use axios to get a random secret and pass it to index.ejs to display the secret and the username of the secret.
    try {
        const result = await axios.get(API_URL);
        console.log(result.data);
        res.render("index.ejs", { secret: result.data.secret, user: result.data.username });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }

})

// Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});




































