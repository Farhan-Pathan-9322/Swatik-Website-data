const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // For sending HTTP requests
const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Google Apps Script Web App URL
const scriptUrl = 'https://script.google.com/macros/s/AKfycbyy1Cfhs2bMKB2Ip6ev3BWT9e7qJPsvqw75iC6Rx94Ya2IikuRLLQLJ5xLvrOndWdYm/exec'; // Replace with your Google Apps Script URL

// Serve the static files (HTML, CSS)
app.use(express.static('public'));

// Handle form submissions
app.post('/submit-form', async (req, res) => {
  const formData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    people: req.body.people,
    days: req.body.days,
    message: req.body.message
  };

  try {
    // Send form data to Google Apps Script
    const response = await axios.post(scriptUrl, formData);
    if (response.data.status === 'success') {
      // Redirect with success message
      res.redirect('/?success=1'); // Redirect with success query parameter
    } else {
      // Redirect with failure message
      res.redirect('/?success=0');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    // Redirect with error message
    res.redirect('/?success=0');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
