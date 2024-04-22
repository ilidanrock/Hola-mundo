import profile from "./assets/profileimg.jpg";
import PropTypes from "prop-types";

export default function TwitterFollowCard({
  userName,
  isFollowing,
  formatNameAt,
}) {
  console.log(isFollowing);
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
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  nickName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool,
  formatNameAt: PropTypes.node,
};
