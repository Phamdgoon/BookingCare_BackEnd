import userService from "../services/userService";

let handleLogin = async (req, res) => {
    //check email, password phía client gửi
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing input parameter!",
        });
    }

    let userData = await userService.handleUserLogin(email, password);
    //check email exist
    //compare password
    //return userInfo

    //check user thành công
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {},
    });
};

module.exports = {
    handleLogin,
};
