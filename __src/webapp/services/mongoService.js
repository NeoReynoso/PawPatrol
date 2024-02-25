//create account email and password
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://website:test123@website.jiwlyrl.mongodb.net/createaccount?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.post('/create-account', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'Account created successfully' });
  } catch (err) {
    console.error('Error creating account:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//login section
{
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://website:test123@website.jiwlyrl.mongodb.net/createaccount?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
}

// profile adding name, email and age
{
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://website:test123@website.jiwlyrl.mongodb.net/profile?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const Profile = mongoose.model('Profile', profileSchema);

app.post('/add-profile', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newProfile = new Profile({ name, email, age });
    await newProfile.save();
    res.status(201).json({ message: 'Profile created successfully' });
  } catch (err) {
    console.error('Error creating profile:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
}

//boarding code
{
    const express = require('express');
    const mongoose = require('mongoose');
    
    const app = express();
    app.use(express.json());
    
    mongoose.connect('mongodb+srv://website:test123@website.jiwlyrl.mongodb.net/boarding?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Error connecting to MongoDB:', err));
    
    const boardingSchema = new mongoose.Schema({
      email: String,
      date: Date,
      numberOfDays: Number,
      comments: String
    });
    
    const Boarding = mongoose.model('Boarding', boardingSchema);
    
    app.post('/add-boarding', async (req, res) => {
      try {
        const { email, date, numberOfDays, comments } = req.body;
        const newBoarding = new Boarding({ email, date, numberOfDays, comments });
        await newBoarding.save();
        res.status(201).json({ message: 'Boarding information added successfully' });
      } catch (err) {
        console.error('Error adding boarding information:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
}

//sitting service
{
    const express = require('express');
    const mongoose = require('mongoose');
    
    const app = express();
    app.use(express.json());
    
    mongoose.connect('mongodb+srv://website:test123@website.jiwlyrl.mongodb.net/sitting?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Error connecting to MongoDB:', err));
    
    const sittingSchema = new mongoose.Schema({
      email: String,
      date: Date,
      duration: Number,
      startTime: String,
      endTime: String,
      comments: String
    });
    
    const Sitting = mongoose.model('Sitting', sittingSchema);
    
    app.post('/add-sitting', async (req, res) => {
      try {
        const { email, date, duration, startTime, endTime, comments } = req.body;
        const newSitting = new Sitting({ email, date, duration, startTime, endTime, comments });
        await newSitting.save();
        res.status(201).json({ message: 'Sitting information added successfully' });
      } catch (err) {
        console.error('Error adding sitting information:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
}

//walking code
{
    const express = require('express');
    const mongoose = require('mongoose');
    
    const app = express();
    app.use(express.json());
    
    mongoose.connect('mongodb+srv://website:test123@website.jiwlyrl.mongodb.net/walking?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Error connecting to MongoDB:', err));
    
    const walkingSchema = new mongoose.Schema({
      email: String,
      date: Date,
      durationHours: Number,
      dropOffTime: String,
      comments: String
    });
    
    const Walking = mongoose.model('Walking', walkingSchema);
    
    app.post('/add-walking', async (req, res) => {
      try {
        const { email, date, durationHours, dropOffTime, comments } = req.body;
        const newWalking = new Walking({ email, date, durationHours, dropOffTime, comments });
        await newWalking.save();
        res.status(201).json({ message: 'Walking information added successfully' });
      } catch (err) {
        console.error('Error adding walking information:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
}

//pyament code
{
    const express = require('express');
    const mongoose = require('mongoose');
    
    const app = express();
    app.use(express.json());
    
    mongoose.connect('mongodb+srv://website:test123@website.jiwlyrl.mongodb.net/payment?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Error connecting to MongoDB:', err));
    
    const paymentSchema = new mongoose.Schema({
      type: String,
      status: String,
      cardType: String,
      cardNumber: String,
      expirationMonth: String,
      expirationYear: String,
      cvv: String
    });
    
    const Payment = mongoose.model('Payment', paymentSchema);
    
    app.post('/add-payment', async (req, res) => {
      try {
        const { type, status, cardType, cardNumber, expirationMonth, expirationYear, cvv } = req.body;
        const newPayment = new Payment({ type, status, cardType, cardNumber, expirationMonth, expirationYear, cvv });
        await newPayment.save();
        res.status(201).json({ message: 'Payment information added successfully' });
      } catch (err) {
        console.error('Error adding payment information:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
}