const { verifyToken } = require("../middlewares/jwt");
const User = require("../models/user");
const Cartform = require("../models/cartform");

const authentication = async (req, res, next) => {
  const { access_token } = req.headers;
  try {
    const userData = verifyToken(access_token);
    let user = await User.findOne({
      where: {
        email: userData.email,
      },
    });
    if (user) {
      req.userData = userData;
      next();
    } else {
      throw { message: "Doesnt recognize user..", statusCode: 401 };
    }
  } catch (error) {
    return next(error);
  }
};

const authorization = (req, res, next) => {
  User.findByPk(req.userData.id)
    .then((user) => {
      if (user.isAdmin) {
        next();
      } else {
        throw { message: "You are not an admin!", statusCode: 403 };
      }
    })
    .catch((err) => {
      return next(err);
    });
};

const authorizationCust = async (req,res,next) => {

  try {
    const Cartform = await Cartform.findOne({
      where: {
        productId: req.params.id
      }
    })
    if (Cartform && Cartform.userId === req.userData.id) {
      next()
    } else {
      throw { message: `Forbidden Access`, statusCode: 403 }
    }
  } catch (err) {
    return next(err)
  }
}

module.exports = { authentication, authorization, authorizationCust };
