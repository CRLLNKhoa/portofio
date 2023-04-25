const userService = require("../services/userService");

const createUser = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!full_name || !email || !password) {
      return res.status(200).json({
        status: "ERR",
        message: "Nhập thiếu thông tin yêu cầu!",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        massage: "Nhập sai định dạng email!",
      });
    }
    const response = await userService.createUser(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password) {
      return res.status(200).json({
        status: "ERR",
        message: "Nhập thiếu thông tin yêu cầu!",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        massage: "Nhập sai định dạng email!",
      });
    }
    const response = await userService.loginUser(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await userService.updateUser(userId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUserPush = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await userService.updateUserPush(userId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUserPull = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await userService.updateUserPull(userId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUserSkill = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await userService.updateUserSkill(userId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await userService.deleteUser(userId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await userService.getAllUser();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await userService.getUser(userId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getView = async (req, res) => {
  try {
    const slug = req.params.slug;
    if (!slug) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await userService.getView(slug);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getUser,
  getView,
  updateUserPush,
  updateUserSkill,
  updateUserPull
};
