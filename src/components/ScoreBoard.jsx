const ScoreBoard = (props) => {
  const content = [];

  let finalScore = parseInt((props.score / props.results.length) * 100);

  if (!finalScore) {
    finalScore = 0;
  }

  for (let r of props.results) {
    if (r.correct === false) {
      content.push({
        ...r,
        question: `${r.param1} X ${r.param2}`,
      });
    }
  }

  return (
    <div id="resultsCont">
      <div className="card finalCard">
        <div className="card-body">
          <div className="card-text">
            Final Score: {finalScore}%
            <br />
          </div>
        </div>
      </div>

      {content.map((el) => {
        return (
          <div key={el.id} className="card resultsCard">
            <div className="card-body">
              <div className="card-text">
                {el.question}
                <br />
              </div>
              <div className="card-text">
                You Said: {el.guessed}
                <br />
              </div>
              <div className="card-text">
                Correct: {el.correctAnswer}
                <br />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreBoard;
