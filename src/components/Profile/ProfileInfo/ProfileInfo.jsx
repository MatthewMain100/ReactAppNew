import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  return (
  <div>
    <img src='https://fb.ru/misc/i/gallery/85035/3248623.jpg' />
    <div className={s.descriptionBlock}>
       <img src={props.profile.photos.large} />
        <div>{props.profile.aboutMe} </div>
    </div>
  </div>
)
}
export default ProfileInfo;