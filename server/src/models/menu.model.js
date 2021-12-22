const mongoose = require("mongoose")

const Schema = mongoose.Schema

const menuSchema = new Schema({
    _id: String,
    menus: [{
        name: String,
        path: String
    }]
}, { timestamps: false, versionKey: false })

const model = mongoose.model('menuSchema', menuSchema, 'menus')

module.exports = model