const { generateAccessToken } = require('../services/auth');
const { checkForFirstLogin } = require('../services/firstLogin');

module.exports.loginUser = async (req, res) => {
  try {
    const { token, handle } = await generateAccessToken(req.body);
    res.cookie('access-token', token, { httpOnly: true, sameSite: true });
    const firstLoginStatus = await checkForFirstLogin(handle);
    return res.status(200).json({ msg: 'User logged in!', firstLoginStatus });
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};
