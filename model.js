const mongoose = require('mongoose')

const nutrionalInfo = new mongoose.Schema({
    calories : Number,
    proteins: Number,
    fats : Number,
    carbohydrates : Number,
    fiber: Number,
    sodium:Number,
    cholesterol: Number,
});

const foodSchema = new mongoose.Schema({
    FoodItemName: String,
    FoodGroup: String,
    Description: String,
    NutritionalInformation: nutrionalInfo,
    ServingSize: String,
    Allergens: [String],
    Ingredients: [String],
    PreparationMethods: [String],
    Certifications: [String],
    CountryofOrigin: String,
    BrandorManufacture: String,
    DietaryRestrictions: [String],
    HealthBenefits: [String],
    BestPractices: String
})

const foodRecord = mongoose.model('foodRecord',foodSchema)

module.exports = foodRecord