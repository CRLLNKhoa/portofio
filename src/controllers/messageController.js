const messageService = require("../services/messageService");

const send = async (req, res) => {
  try {
    const { name_sender, email_sender, message, time, user } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email_sender);
    if ( !name_sender || !email_sender || !message || !time || !user) {
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
    const response = await messageService.send(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateMessage = async (req, res) => {
  try {
    const messageId = req.params.id;
    const data = { seen: true}
    if (!messageId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID liên hệ!",
      });
    }
    const response = await messageService.updateMessage(messageId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;
    if (!messageId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await messageService.deleteMessage(messageId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getMessage = async (req, res) => {
  try {
    const userId = req.params.id;
    const { limit, page,filter } = req.query
    if (!userId) {
      return response.status(200).json({
        status: "ERR",
        message: "Thiếu ID người dùng!",
      });
    }
    const response = await messageService.getMessage(userId,Number(limit) || 10 , Number(page) || 0, filter);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  send,
  updateMessage,
  deleteMessage,
  getMessage,
};
