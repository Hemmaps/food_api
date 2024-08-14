const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path'); // Import the path module
const cors = require('cors');
app.use(cors())
dotenv.config();
app.use(express.json());
require('./conn');
const foodRecord = require('./model');
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("hello"); // Use path.join to resolve the file path
});

app.post('/food', async (req, res) => {
    try {
        const newFoodItems = await foodRecord.create(req.body);
        res.status(200).json(newFoodItems);
    } catch (e) {
        console.log(e);
        res.status(500).json({ "message": "Server error" });
    }
});

app.get('/food', async (req, res) => {
    try {
        const AllFoodItem = await foodRecord.find();
        res.status(200).json(AllFoodItem);
    } catch (e) {
        console.log(e);
        res.status(500).json({ "message": "Server error" });
    }
});

app.get('/food/:id', async (req, res) => {
    try {
        const foodItemById = await foodRecord.findById(req.params.id);
        if (foodItemById) {
            res.status(200).json(foodItemById);
        } else {
            res.status(404).json({ "message": "Not found" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ "message": "Server error" });
    }
});

app.put('/food/:id', async (req, res) => {
    const updatedata = req.body;
    try {
        const updateFood = await foodRecord.findByIdAndUpdate(req.params.id, { $set: updatedata }, { new: true, runValidators: true });
        if (updateFood) {
            res.status(200).json(updateFood);
        } else {
            res.status(404).json({ "message": "Not found" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ "message": "Server error" });
    }
});

app.delete('/food/:id', async (req, res) => {
    try {
        const deleteFood = await foodRecord.findByIdAndDelete(req.params.id);
        if (deleteFood) {
            res.status(200).json({ "message": "Deleted Successfully" });
        } else {
            res.status(404).json({ "message": "Not found" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ "message": "Server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});
