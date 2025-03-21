function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  // Export the function so it can be accessed by the test file
  module.exports = superbowlWin;
  