const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const createUser = (newUser) => {
    return new Promise(async(resolve, reject) => {
        const {email, full_name, password} = newUser
        try {
            const isCheckUser = await User.findOne({
                email: email
            })
            if(isCheckUser !== null){
                resolve({
                    status: "ERR",
                    message: "Người dùng đã tồn tại!"
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            const create = await User.create({
                full_name,
                email,
                password: hash,
                slug: `${email.slice(0, -10)}`
            })
            if(create){
                resolve({
                    status: "CREATED",
                    message: "Đăng ký thành công!",
                    data: create
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

const loginUser = (user) => {
    return new Promise(async(resolve, reject) => {
        const {email, password} = user
        try {
            const isCheckUser = await User.findOne({
                email: email
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            const comparePassword = bcrypt.compareSync(password, isCheckUser.password)
            if(!comparePassword){
                resolve({
                    status: "ERR",
                    message: "Mật khẩu không chính xác!",
                    data: isCheckUser
                })
            }
            resolve({
                status: "OK",
                message: "Đăng nhập thành công!",
                data: isCheckUser
            })
        } catch (error) {
            reject(error)
        }
    })
}

const updateUser = (id, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await User.findOne({
                _id: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            const update = await User.findByIdAndUpdate(id,data, {new: true})
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

const updateUserPush = (id, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await User.findOne({
                _id: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            const update = await User.findByIdAndUpdate({_id: id}, { $push: data} , {new: true})
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

const updateUserPull = (id, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await User.findOne({
                _id: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            const update = await User.findByIdAndUpdate({_id: id}, { $pull: data} , {new: true})
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

const updateUserSkill = (id, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await User.findOne({
                _id: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            const update = await User.findByIdAndUpdate({_id: id}, { $addToSet: data} , {new: true})
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

const deleteUser = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await User.findOne({
                _id: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            await User.findByIdAndDelete(id)
            resolve({
                status: "OK",
                message: "Xóa người dùng thành công!",
            })
        } catch (error) {
            reject(error)
        }
    })
}

const getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const allUser = await User.find()
            resolve({
                status: "OK",
                message: "Lấy danh sách người dùng thành công!",
                data: allUser
            })
        } catch (error) {
            reject(error)
        }
    })
}

const getUser = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await User.findOne({
                _id: id
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            resolve({
                status: "OK",
                message: "Lấy thông tin người dùng thành công!",
                data: isCheckUser
            })
        } catch (error) {
            reject(error)
        }
    })
}

const getView = (slug) => {
    return new Promise(async(resolve, reject) => {
        try {
            const isCheckUser = await User.findOne({
                slug
            })
            if(isCheckUser === null){
                resolve({
                    status: "ERR",
                    message: "Người dùng không tồn tại!"
                })
            }
            resolve({
                status: "OK",
                message: "Lấy thông tin người dùng thành công!",
                data: isCheckUser
            })
        } catch (error) {
            reject(error)
        }
    })
}

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
}
