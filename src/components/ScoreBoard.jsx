const ScoreBoard = (props) => {
  const content = [];
  let numCorrect = 0;
  let numWrong = 0;

  let finalScore = parseInt((props.score / props.results.length) * 100);

  if (!finalScore) {
    finalScore = 0;
  }

  for (let r of props.results) {
    if (r.correct === false) {
      content.push(r);
      numWrong++;
    } else if (r.correct === true) {
      content.push(r);
      numCorrect++;
    }
  }

  return (
    <div id="resultsCont">
      <div className="card finalCard">
        <div className="card-body">
          <div className="card-text">
            Final Score: {finalScore}%
            <br />
            Correct: {numCorrect}/{props.results.length}
            <br />
            Wrong: {numWrong}/{props.results.length}
          </div>
        </div>
      </div>

      {content.map((el) => {
        return (
          <div
            key={el.id}
            className={`card resultsCard ${el.correct ? "correct" : "wrong"}`}
          >
            <div className="card-body">
              <h5 className="card-title">
                Question {el.id + 1}
                <hr />
              </h5>
              <div className="card-text">
                {el.param1} X {el.param2}
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
