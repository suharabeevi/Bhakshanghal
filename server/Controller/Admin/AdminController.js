const {Admin, validate, Loginvalidate} = require('../../Models/AdminModel')
const bcrypt = require('bcrypt')

module.exports={
    adminSignup: async (req, res) => {
        try {
          const { error } = validate(req.body);
          if (error)
            return res.status(400).send({ message: error.details[0].message });
    
          const admin = await Admin.findOne({ email: req.body.email });
          if (admin)
            return res
              .status(409)
              .send({ message: "Admin with given email already Exist!" });
    
          const salt = await bcrypt.genSalt(Number(process.env.SALT));
          const hashPassword = await bcrypt.hash(req.body.password, salt);
    
          await new Admin({ ...req.body, password: hashPassword }).save();
          res.status(201).send({ message: "Admin created successfully" });
        } catch (error) {
          res.status(500).send({ message: "Internal Server Error" + error });
        }
    },
    adminLogin: async (req, res) => {
        try {
          var { error } = Loginvalidate(req.body);
          if (error)
            return res.status(400).send({ message: error.details[0].message });
    
          var admin = await Admin.findOne({ email: req.body.email });
          if (!admin)
            return res.status(401).send({ message: "Invalid Email or Password" });
    
          var validPassword = await bcrypt.compare(
            req.body.password,
            admin.password
          );
          if (!validPassword)
            return res.status(401).send({ message: "Invalid Emailor Password" });
    
          var token = admin.generateAuthToken();
          res.status(200).json({ token, admin });
        } catch (error) {
          res.status(500).send({ message: "Internal Server Error" + error });
        }
      }
}