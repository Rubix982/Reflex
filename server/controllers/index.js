const { generateAccessToken } = require('../services/auth.js');
const { forgetPasswordUpdation } = require('../services/forgetPassword.js');
const { VerifyResetPasswordHash } = require('../services/verifyResetHash.js');
const { changePasswordForUser } = require('../services/changePassword.js');
const { checkForFirstLogin } = require('../services/firstLogin.js');
const { postUserInformationForBio } = require('../services/postFirstLogin.js');
const { changePasswordInSettings } = require('../services/settingsChangePassword.js');
const { postUserCredentialsInDatabase } = require('../services/register.js');
const { getSettingsFromDatabase } = require('../services/getSettings.js');
const { updateSettingsInDatabase } = require('../services/updateSettings.js');
const { getUserVerificationStatus, verifyUser } = require('../services/verify.js');

module.exports.getSettings = async (req, res) => {
  try {
    const output = await getSettingsFromDatabase(req.userHandle);
    return res.status(200).send(output);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateSettings = async (req, res) => {
  try {
    const updateForm = {
      Password: req.body.Password,
      CPassword: req.body.CPassword,
      userHandle: req.body.Handler,
      Email: req.body.Email,
      Username: req.body.Username,
    };
    await updateSettingsInDatabase(updateForm, req.userHandle);
    return res.status(200).json({ msg: 'Update settings performed successfully' });
  } catch (error) {
    return res.status(500).json({ msg: `Error while updating settings, ${error.message}` });
  }
};

module.exports.changePassword = async (req, res) => {
  try {
    await changePasswordInSettings(req.userHandle, req.body.oldPassword,
      req.body.newPassword, req.body.confirmPassword);
    return res.status(200).json({ msg: 'Password changed succesfully!' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to update password, due to ${error.message}` });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { token, handle } = await generateAccessToken(req.body);
    res.cookie('access-token', token, { httpOnly: true, sameSite: true });
    const firstLoginStatus = await checkForFirstLogin(handle);
    const verificationStatus = await getUserVerificationStatus(handle);
    return res.status(200).json({ msg: 'User logged in!!', firstLoginStatus, verificationStatus });
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

module.exports.registerUser = async (req, res) => {
  try {
    const registerForm = {
      password: req.body.password,
      cpassword: req.body.cpassword,
      userhandler: req.body.userhandler,
      username: req.body.username,
      email: req.body.email,
    };
    await postUserCredentialsInDatabase(registerForm);
    return res.status(200).json({ msg: 'Successfully registered user' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to register user, due to error "${error.message}"` });
  }
};

module.exports.newPassword = async (req, res) => {
  try {
    const handle = await VerifyResetPasswordHash(req.url.split('/')[2]);
    return res.status(200).json(handle);
  } catch (error) {
    return res.status(404).json({ msg: `Verification for reset hash not approved, see error, ${error.message}` });
  }
};

module.exports.resetPassword = async (req, res) => {
  try {
    await changePasswordForUser(req.body.password, req.body.handle);
    return res.status(200).json({ msg: 'Password reset!' });
  } catch (error) {
    return res.status(500).json({ msg: `Error while running changePasswordForUser, with error ${error.message}` });
  }
};

module.exports.forgetPassword = async (req, res) => {
  try {
    await forgetPasswordUpdation(req.body.email);
    return res.status(200).json({ msg: 'Successfully sent request to change password' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to send request for forgetPassword, due to error "${error.message}"` });
  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie('access-token');
    return res.status(200).json({ msg: 'User succesfully logged out' });
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

module.exports.postFirstLoginInformation = async (req, res) => {
  try {
    await postUserInformationForBio(req.userHandle, req.body.userInformation);
    return res.status(200).json({ msg: 'Succesfully posted first login information' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to perform insertion, due to error "${error.message}"` });
  }
};

module.exports.verifyUser = async (req, res) => {
  try {
    const { hash } = req.body;
    const status = await verifyUser(hash);
    res.json({ msg: 'User successfully verified', status });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
