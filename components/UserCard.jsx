// UserCard.jsx
const UserCard = ({name, tier}) => {
  return <div className={`user-card tier-${tier}`}>{name}</div>;
};
