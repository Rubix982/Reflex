import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import ComponentStyling from '../../style/FirstLogin/MainContent.module.css';
import { sendFirstLoginToBackend } from '../../services/first.js';
import { loginUserContext } from '../LoginUserContext';

const MainContent = () => {
  const { firstLogin } = useContext(loginUserContext);
  const pictureSelection = [false, false, false, false]
  const [selectPicture, setSelectPicture] = useState(pictureSelection);
  const [biographyState, setBiographyState] = useState('');  
  const [isMale, setIsMale] = useState(true);
  let history = useHistory();
  let isFormSubmitted = false;

  const postFirstLoginInformation = async (event) => {

    event.preventDefault();

    let finalProfilePicture = '';

    if (isMale) {
      finalProfilePicture = 'boy';
    } else {
      finalProfilePicture = 'girl';
    }

    for (let i = 0; i < 4; ++i) {
      if (selectPicture[i]) {
        if (i === 0) {
          finalProfilePicture = `${finalProfilePicture}.svg`;
        } else {
          finalProfilePicture = `${finalProfilePicture}(${i}).svg`;
        }
      }
    }

    try {
      await sendFirstLoginToBackend({
        profilePicture: finalProfilePicture,
        biography: biographyState,
      });
      alert('Sucessfully filled the form!')
      firstLogin.setter(false);
    } catch (error) {
      alert(`Unable to submit form due to error "${error.message}"`)
    }

    history.push('/feed');
  };

  const FemaleProfilePictureGrid = () => {
    return (
      <div className={ComponentStyling.gridStylingForPictures}>
        <div className={selectPicture[0] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [true, false, false, false, false, false] })}
        >
          <img src='/assets/img/students/girl.svg' alt='' />
        </div>
        <div className={selectPicture[1] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, true, false, false, false, false] })}
        >
          <img src='/assets/img/students/girl(1).svg' alt='' />
        </div>
        <div className={selectPicture[2] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, false, true, false, false, false] })}
        >
          <img src='/assets/img/students/girl(2).svg' alt='' />
        </div>
        <div className={selectPicture[3] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, false, false, true, false, false] })}
        >
          <img src='/assets/img/students/girl(3).svg' alt='' />
        </div>
        <div className={selectPicture[4] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, false, false, false, true, false] })}
        >
          <img src='/assets/img/students/girl(4).svg' alt='' />
        </div>
        <div className={selectPicture[5] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, false, false, false, false, true] })}
        >
          <img src='/assets/img/students/girl(5).svg' alt='' />
        </div>                
      </div>
    );
  };

  const MaleProfilePictureGrid = () => {
    return (
      <div className={ComponentStyling.gridStylingForPictures}>
        <div className={selectPicture[0] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [true, false, false, false, false, false] })}
        >
          <img src='/assets/img/students/boy.svg' alt='' />
        </div>
        <div className={selectPicture[1] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, true, false, false, false, false] })}
        >
          <img src='/assets/img/students/boy(1).svg' alt='' />
        </div>
        <div className={selectPicture[2] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, false, true, false, false, false] })}
        >
          <img src='/assets/img/students/boy(2).svg' alt='' />
        </div>
        <div className={selectPicture[3] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, false, false, true, false, false] })}
        >
          <img src='/assets/img/students/boy(3).svg' alt='' />
        </div>
        <div className={selectPicture[4] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, false, false, false, true, false] })}
        >
          <img src='/assets/img/students/boy(4).svg' alt='' />
        </div>
        <div className={selectPicture[5] ?
          `${ComponentStyling.pictureToggle} ${ComponentStyling.pictureElement}`
          : `${ComponentStyling.pictureElement}`}
          onClick={() => setSelectPicture(() => { return [false, false, false, false, false, true] })}
        >
          <img src='/assets/img/students/boy(5).svg' alt='' />
        </div>                
      </div>
    );
  };

  const setToMale = () => {
    setIsMale(true);
  }

  const setToFemale = () => {
    setIsMale(false);
  }

  if (isFormSubmitted === true) {
    history.push('/feed');
  } else {

    console.log(biographyState);

    return (
      <div className={ComponentStyling.content}>
        <h1>Welcome!</h1>
        <h2>This looks like your first login!</h2>
        <h4>To get your started with your profile, let&apos;s go to some basic information</h4>
        <form className={ComponentStyling.formlogin}>
          <h2 style={{ paddingLeft: '0px' }}>Gender?</h2>

          <div>
            <input onClick={setToMale} type="radio" name="gender" value="male" />
            <label style={{ paddingLeft: "10px" }} htmlFor="male">Male</label>
          </div>

          <br />
          <div>
            <input onClick={setToFemale} type="radio" name="gender" value="female" />
            <label style={{ paddingLeft: "10px" }} htmlFor="female">Female</label>
          </div>

          <div className={ComponentStyling.Spacing}></div>

          <div className={ComponentStyling.PhotoGrid}>
            {isMale ? <MaleProfilePictureGrid /> : <FemaleProfilePictureGrid />}
          </div>

          <div className={ComponentStyling.Spacing}></div>

          <div className={`${ComponentStyling.FieldBox} ${ComponentStyling.Bio}`}>
            <label>
              What should your biography look like?
            <span>( 200 characters max )</span>
            </label>
            <br />
            <textarea
              type="text"
              name="biography"
              aria-placeholder="I like sports! Or I’m a website designer!"
              placeholder="I like sports! Or I’m a website designer!"
              className={ComponentStyling.ForBioTextArea}
              maxLength="200"
              rows="4"
              cols="50"
              onChange={(event) => setBiographyState(event.target.value)}
            />
          </div>

          <input
            className={ComponentStyling.login}
            type="button"
            value="Submit!"
            readOnly
            onClick={postFirstLoginInformation}
          />
        </form>
      </div>
    )
  };
};

export { MainContent };
