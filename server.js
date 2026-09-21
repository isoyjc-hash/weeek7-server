const express = require('express');
const app = express();
const PORT = 3000;

// Root Endpoint - Welcome Message
app.get('/', (req, res) => {
  res.send('Welcome to Bubble Express Laundromat API! Server is running smoothly.');
});


app.get('/info', (req, res) => {
  res.json({
    businessName: "Bubble Express Laundromat",
    tagline: "Wash, Dry, Fold — Stress-Free Laundry!",
    location: "Lucena City, Quezon",
    owner: "Maria Santos",
    acceptsGCash: true
  });
});


app.get('/services', (req, res) => {
  res.json([
    "Wash & Dry (Self-Service)",
    "Full Service (Wash, Dry, & Fold)",
    "Dry Cleaning",
    "Comforter & Heavy Blanket Care",
    "Shoe Cleaning & Sanitation"
  ]);
});


app.get('/hours', (req, res) => {
  res.json({
    status: "Open Daily",
    schedule: {
      weekdays: { open: "7:00 AM", close: "8:00 PM" },
      weekends: { open: "8:00 AM", close: "9:00 PM" },
      holidays: { open: "8:00 AM", close: "5:00 PM" }
    },
    lastDropoffTime: "6:30 PM"
  });
});


app.get('/pricing', (req, res) => {
  res.json([
    { service: "Wash Only (up to 8kg)", price: 60, unit: "per load" },
    { service: "Dry Only (up to 8kg)", price: 60, unit: "per load" },
    { service: "Full Service (Wash + Dry + Fold)", price: 160, unit: "per load" },
    { service: "King Comforter Wash", price: 200, unit: "per piece" }
  ]);
});


app.get('/branches', (req, res) => {
  res.json({
    mainContact: "0917-888-9999",
    branches: [
      { name: "Main Branch", address: "Gomez St., Lucena City" },
      { name: "University Branch", address: "Near Sacred Heart College, Lucena City" }
    ],
    socialMedia: {
      facebook: "fb.com/bubbleexpressph",
      instagram: "@bubbleexpress_ph"
    }
  });
});

app.listen(PORT, () => {
  console.log(`Laundromat API running at http://localhost:${PORT}`);
});