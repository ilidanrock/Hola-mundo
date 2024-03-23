import profile from "./assets/profileimg.jpg";
import PropTypes from "prop-types";

export default function TwitterFollowCard({ nickName, userName }) {
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
          <span className="tw-followCard-infoUserName">{nickName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  nickName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
