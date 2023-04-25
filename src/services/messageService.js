const Message = require("../models/messageModel");

const send = (newMessage) => {
  return new Promise(async (resolve, reject) => {
    const { name_sender, email_sender, message, time, user } = newMessage;
    try {
      const create = await Message.create({
        name_sender,
        email_sender,
        message,
        time,
        user,
      });
      if (create) {
        resolve({
          status: "OK",
          message: "Liên hệ thành công!",
          data: create,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateMessage = (id,data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await Message.findOne({
                _id: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Liên hệ không tồn tại!"
                })
            }
            const update = await Message.findByIdAndUpdate(id,data, {new: true})
            resolve({
                status: "OK",
                message: "Cập nhật thành công!",
                data: update
            })
        } catch (error) {
            reject(error)
        }
    })
}

const deleteMessage = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await Message.findOne({
                _id: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Tin nhấn không tồn tại!"
                })
            }
            await Message.findByIdAndDelete(id)
            resolve({
                status: "OK",
                message: "Xóa liên hệ thành công!",
            })
        } catch (error) {
            reject(error)
        }
    })
}

const getMessage = (id,limit, page=0, filter) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await Message.find({
                user: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            const totalMessage = await Message.count()
            if(filter){
                const isTrue = filter === "true"
                const allMessageFilter = await Message.find({user: id, seen: isTrue }).limit(limit).skip(page * limit).limit(limit).skip(page * limit)
                resolve({
                  status: "OK",
                  message: "Get All Message Success!",
                  data: allMessageFilter,
                  total: allMessageFilter.length,
                  pageCurrent: Number(page + 1),
                  totalPage: Math.ceil(totalMessage / limit)
                })
              }
              const allMessage = await Message.find().limit(limit).skip(page * limit)
              resolve({
                status: "OK",
                message: "Get All Success!",
                data: allMessage,
                total: totalMessage,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalMessage / limit)
              })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
  send,
  updateMessage,
  deleteMessage,
  getMessage
};
