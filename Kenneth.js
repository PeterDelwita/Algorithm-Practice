const DOMSelectors = {
  content: document.querySelector(".content"),
  rock: document.querySelector("#rock"),
  paper: document.querySelector("#paper"),
  scissors: document.querySelector("#scissors"),
  historyButton: document.querySelector("#history"),
  history: document.querySelector(".history"),
};
const history = [];

function returnInput(input) {
  // Not an algorithm; lacks iteration
  let output;

  if (input == 0) {
    output = "rock";
  } else if (input == 1) {
    output = "paper";
  } else {
    output = "scissors";
  }

  return output;
}

function rockPaperScissors(input) {
  // This is an algorithm; it contains sequencing, selection, and iteration
  const random = Math.floor(Math.random() * 100);
  let opponentChoice;
  let outcome;

  for (let i = 0; i <= random; i++) {
    // Iteration (for loop)
    if (i % 3 == 0) {
      // Selection (use of if statements)
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }

  if (opponentChoice == "rock") {
    // More selection (also sequencing due to the presence of multiple steps)
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  }
  history.push(outcome); // Sequencing; another step

  DOMSelectors.history.innerHTML = ""; // Sequencing; more steps
  DOMSelectors.content.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${outcome}">
    <p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    </div>
    `
  );
}

function getHistory() {
  // Algorithm; contains sequencing, selection, and iteration
  DOMSelectors.content.innerHTML = "";
  DOMSelectors.history.innerHTML = "";
  let win = 0;
  let lose = 0;
  let draw = 0; // Sequencing; defining these variables is the first step in the function

  for (let i = 0; i < history.length; i++) {
    // Iteration; use of for loop
    if (history[i] == "win") {
      // Selection; use of if and else statements
      win++;
    } else if (history[i] == "lose") {
      lose++;
    } else {
      draw++;
    }

    DOMSelectors.history.insertAdjacentHTML(
      "afterbegin",
      `<div class="historyCard" id="${history[i]}">
        <h4>Game ${i + 1}: ${history[i].toUpperCase()}</h4>
        </div>`
    );
  }

  DOMSelectors.history.insertAdjacentHTML(
    "afterbegin",
    `<h2>Win Rate: ${((win / (win + lose + draw)) * 100)
      .toString()
      .substring(0, 5)}%</h2>
        <h3>Wins: ${win} | Losses: ${lose} | Draws: ${draw}</h3>`
  );
}

DOMSelectors.rock.addEventListener("click", function () {
  rockPaperScissors(0);
});

DOMSelectors.paper.addEventListener("click", function () {
  rockPaperScissors(1);
});

DOMSelectors.scissors.addEventListener("click", function () {
  rockPaperScissors(2);
});

DOMSelectors.historyButton.addEventListener("click", function () {
  getHistory();
});
