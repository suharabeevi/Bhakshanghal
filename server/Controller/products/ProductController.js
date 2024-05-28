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
              .send({ message: "category is already Exist!" });
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
    },
     DeleteCategory : async (req, res) => {
        try {
            const categoryId = req.params.categoryid; // Assuming you pass category ID in the request parameters
    
            // Find the category by ID and remove it
            const deletedCategory = await Category.findByIdAndDelete(categoryId);
    
            if (!deletedCategory) {
                return res.status(404).send({ message: "Category not found" });
            }
    
            res.status(200).send({ message: "Category deleted successfully", deletedCategory });
        } catch (error) {
            console.error("Error deleting category:", error);
            res.status(500).send({ message: "Internal Server Error" });
        }
     }
    
}