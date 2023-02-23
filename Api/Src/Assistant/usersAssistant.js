const Users = require("../Models/Users");
const userSchema = require("../Models/Users");

const validateUser = async (req, res) => {
  const userDb = await Users.find({});
  const user = userSchema(req.body);

  let userEmail = userDb.filter((elem) => {
    elem.eMail === user.eMail;
  });

  let userDni = userDb.filter((elem) => {
    elem.dni === user.dni;
  });

  let userTelephone = userDb.filter((elem) => {
    elem.telephone === user.telephone;
  });

  if (userEmail.length)
    return res.status(304).json(`Sorry, the *${user.eMail}* already exists`);
  if (userDni.length)
    return res.status(304).json(`Sorry, the *${user.dni}* already exists `);
  if (userTelephone.length)
    return res
      .status(304)
      .json(`Sorry, the *${user.telephone}* already exists`);
};

module.exports = { validateUser };
