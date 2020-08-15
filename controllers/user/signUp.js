const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;
    try {
      await User.findOrCreate({
        where: { email: email },
        defaults: { password: password },
      }).then(async ([user, created]) => {
        if (!created) {
          return res.status(409).send({ message: "email already exists" });
        }
        res.status(201).send({ message: "SignUp success" });
      });
    } catch (err) {
      res.status(500).send({ message: "Server Error" });
    }
  },
};