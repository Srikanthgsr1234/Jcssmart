// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./Models/Users'); // Correct import path
const app = express();
const port = 3001; // Change the port number

// Middleware
app.use(cors());
app.use(express.json());

// Blynk Auth Tokens
const PLANT_WATERING_AUTH_TOKEN = 'ENPHpaD47D5EiuM1dSuPa7BXghc4XJKj';
const GAS_TEMPERATURE_HUMIDITY_AUTH_TOKEN = 'w2hXVCcDbyZU4oJrsJ1G7WcYvKd3FUgQ';

mongoose.connect('mongodb+srv://Srikanth:1234567890@smarthome.vk07g3o.mongodb.net/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.json({ message: 'Success', user });
      } else {
        res.status(401).json({ message: 'Incorrect password' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Plant Watering System
app.get('/api/moisture', async (req, res) => {
  try {
    const response = await axios.get(`http://blynk.cloud/external/api/get?token=${PLANT_WATERING_AUTH_TOKEN}&V0`);
    res.json({ moisture: response.data });
  } catch (error) {
    console.error('Error fetching moisture level:', error);
    res.status(500).send('Error fetching moisture level');
  }
});

app.post('/api/water', async (req, res) => {
  const { state } = req.body; // State should be 'on' or 'off'
  const pinValue = state === 'on' ? 1 : 0;

  try {
    await axios.get(`http://blynk.cloud/external/api/update?token=${PLANT_WATERING_AUTH_TOKEN}&V1=${pinValue}`);
    res.send('Water pump state updated');
  } catch (error) {
    console.error('Error updating water pump state:', error);
    res.status(500).send('Error updating water pump state');
  }
});

// Gas, Temperature, and Humidity Monitoring
app.get('/api/gas', async (req, res) => {
  try {
    const response = await axios.get(`http://blynk.cloud/external/api/get?token=${GAS_TEMPERATURE_HUMIDITY_AUTH_TOKEN}&V2`);
    res.json({ gas: response.data });
  } catch (error) {
    console.error('Error fetching gas level:', error);
    res.status(500).send('Error fetching gas level');
  }
});

app.get('/api/temperature', async (req, res) => {
  try {
    const response = await axios.get(`http://blynk.cloud/external/api/get?token=${GAS_TEMPERATURE_HUMIDITY_AUTH_TOKEN}&V3`);
    res.json({ temperature: response.data });
  } catch (error) {
    console.error('Error fetching temperature:', error);
    res.status(500).send('Error fetching temperature');
  }
});

app.get('/api/humidity', async (req, res) => {
  try {
    const response = await axios.get(`http://blynk.cloud/external/api/get?token=${GAS_TEMPERATURE_HUMIDITY_AUTH_TOKEN}&V4`);
    res.json({ humidity: response.data });
  } catch (error) {
    console.error('Error fetching humidity level:', error);
    res.status(500).send('Error fetching humidity level');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
