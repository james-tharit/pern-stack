import "./badge.css";
export const Badge: React.FC<{ title: string }> = ({ title }) => {
  return (
    <p className="badge" data-testid="badge">
      {title}
    </p>
  );
};
