import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export default function App() {
  const formatNameAt = (name) => (
    <span className="tw-followCard-infoUserName">@{name}</span>
  );
  return (
    <div className="App">
      <TwitterFollowCard
        userName="Luis Rivera"
        isFollowing={false}
        formatNameAt={formatNameAt("Ilidanrock")}
      />
      <TwitterFollowCard
        userName="Luis Rivera"
        isFollowing={true}
        formatNameAt={formatNameAt("Ilidanrock")}
      />
    </div>
  );
}
