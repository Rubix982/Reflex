const { generateAccessToken } = require('../services/auth');
const { checkForFirstLogin } = require('../services/firstLogin');
const { postUserInformationForBio } = require('../services/postFirstLogin');

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

module.exports.postFirstLoginInformation = async (req, res) => {
  console.log('---------------------------');
  console.log('NEW REQUEST');
  console.log(req);

  try {
    await postUserInformationForBio(req.userHandle, req.body.userInformation);
    return res.status(200).json({ msg: 'Succesfully posted first login information' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to perform insertion, due to error "${error.message}"` });
  }
};
