const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views'); // Directory where your views are located

// Route to render the EJS file
app.get('/', (req, res) => {
    res.render('home'); // Renders 'example.ejs' from the 'views' directory
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
