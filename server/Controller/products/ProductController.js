const Category = require('../../Models/CategoryModel')
module.exports = {
    AddCategory: async (req, res) => {
        try {
            const { categoryName, subcategories } = req.body; // Parsing category name and subcategories from request body

            // Check if categoryName is provided
            if (!categoryName) {
                return res.status(409).send({ message: "Enter the type of category" });
            }
const categoryExist = await Category.findOne({categoryName:categoryName})
if(categoryExist){
    return res
              .status(409)
              .send({ message: "category is  already Exist!" });
}
            // Creating a new category instance
            const newCategory = new Category({
                categoryName: categoryName,
                subcategories: subcategories // Assigning the provided subcategories array
            });

            // Saving the new category (with or without subcategories) to the database
            await newCategory.save();

            res.status(200).send({ message: "Category added successfully" });
        } catch (error) {
            res.status(500).send({ message: "Internal Server Error" + error });
        }
    }
}