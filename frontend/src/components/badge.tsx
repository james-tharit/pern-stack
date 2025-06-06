import "./badge.css";
export const Badge: React.FC<{ title: string, color: string }> = ({ title, color }) => {
  return (
    <p className="badge" style={{ color }} data-testid="badge">
      {title}
    </p>
  );
};
