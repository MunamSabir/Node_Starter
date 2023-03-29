const UserServices = require("../services/userServices");
const jwtHelper = require("../utilities/jwt");
const messageUtil = require("../utilities/message");
const {
  serverErrorResponse,
  successResponse,
  notFoundResponse,
  authorizationErrorResponse,
} = require("../utilities/response");
const { bcryptHash, comparePassword } = require("../utilities/passwordUtils");

const CreateUser = async (req, res) => {
  try {
    const { password } = req.body;

    // hashing user password
    const hash = await bcryptHash(password);

    const document = await UserServices.createUser({
      ...req.body,
      password: hash,
    });

    return successResponse(res, messageUtil.userRegister, document);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
};

const UpdateUser = async (req, res) => {
  try {
    const user = await UserServices.updateUser(
      { _id: req.params.id },
      { ...req.body }
    );
    if (!user) {
      return notFoundResponse(res, messageUtil.NotFound);
    }
    return successResponse(res, messageUtil.updateSuccess, user);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
};

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const doc = await UserServices.getUserDetails({
      username,
    });

    if (!doc) {
      return notFoundResponse(res, messageUtil.NotFound);
    }
    const isMatch = await comparePassword(password, doc.password);

    if (!isMatch) {
      return authorizationErrorResponse(res, messageUtil.incorrectPassword);
    }
    const token = jwtHelper.issue({ id: doc._id });

    return successResponse(res, messageUtil.userLogin, doc, token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const GetAll = async (req, res) => {
  try {
    let users = await UserServices.getAllUsers();
    if (users.length < 1) {
      return notFoundResponse(res, messageUtil.notFound);
    }

    return successResponse(res, messageUtil.found, users);
  } catch (err) {
    serverErrorResponse(res, err);
  }
};

module.exports = {
  CreateUser,
  UpdateUser,
  GetAll,
  Login,
};
