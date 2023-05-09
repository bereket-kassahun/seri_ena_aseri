const {categories} = require('./categories')

let subcategories = []

categories.forEach(element => {
    element.subcategories.forEach(element => {
        subcategories.push(element)
    })
});

module.exports = {
    subcategories
}