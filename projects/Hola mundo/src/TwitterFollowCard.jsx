import { useState } from "react";
import profile from "./assets/profileimg.jpg";
import PropTypes from "prop-types";

export default function TwitterFollowCard({
  userName,
  isFollowing,
  formatNameAt,
}) {
  const [followText, setFollowText] = useState(isFollowing);

  const textFollowing = followText ? "Siguiendo" : "Seguir";
  const buttonClassName = followText
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleFollow = () => {
    try {
      setFollowText((previous) => !previous);
    } catch (error) {
      console.warn("Error al seguir al usuario", error);
    }
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="User image profile"
          src={profile}
        />
        <div className="tw-followCard-info">
          <strong>{userName}</strong>
          {formatNameAt}
        </div>
      </header>
      <aside>
        <button
          onMouseEnter={() => {
            console.log("Mouse enter");
          }}
          onMouseLeave={() => {
            console.log("Mouse leave");
          }}
          onClick={() => handleFollow()}
          className={buttonClassName}
        >
          {textFollowing}
        </button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool,
  formatNameAt: PropTypes.node,
};
