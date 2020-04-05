import React from "react";
import Title from "./Title";
import ProfileImage from "./ProfileImage";

const ProfileCard = props => {
  return (
    <div className="box">
      <ProfileImage />
      <Title name={props.propsPassedFromParent.name} />
    </div>
  );
};

export default ProfileCard;
