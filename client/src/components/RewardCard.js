import './RewardCard.css';
const RewardCard = ({ shopName, points }) => {
  return (
    <div className="card">
      <div className="card__title">{points || 0}</div>
      <div className="card__subtitle">Reward Points</div>
      <div className="card__description">{shopName}</div>
    </div>
  );
};

export default RewardCard;
