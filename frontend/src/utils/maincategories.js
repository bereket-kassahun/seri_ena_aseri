const {categories} = require('./categories')

let mainCategories = []

categories.forEach(element => {
    mainCategories.push(element.category)
});

module.exports = {
    mainCategories
}