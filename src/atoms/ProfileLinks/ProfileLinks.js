import React from "react";
import { Link } from "react-router-dom";
import style from "./ProfileLinks.module.scss";

const ProfileLinks = (props) => {
  return (
    <div className={style["a-profile-links"]}>
      <div>
        <ul>
          {props.routes.map((link, i) => {
            return (
              <li key={i}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProfileLinks;
