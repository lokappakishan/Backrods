// eslint-disable-next-line react/prop-types
export const Title = ({ firstWord, secondWord }) => {
  return (
    <div className="section-title">
      <h2>
        {firstWord} <span>{secondWord}</span>
      </h2>
    </div>
  );
};
