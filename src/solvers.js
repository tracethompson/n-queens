/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var used = [];

  var recurse = function() {
    if(solution.length === n) {
      return;
    }

    for( var i = 0; i < n; i++ ) {
      if ( used.indexOf(i) < 0 ) {
        used.push(i);
        var row = [];
        for( var j = 0; j < n; j++ ) {
          row.push(0);
        }
        row[i] = 1;
        solution.push(row);
        recurse();
      }
    }
  };

  recurse();

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  console.log('n: ', n);
  var board = new Board({'n': n})

  var recurse = function(n){
    if(n === 0){
      if(!board.hasAnyRooksConflicts()){
        solutionCount ++;
        return;
      }
    }
    for( var i = 0; i < n; i++ ) {
      board.togglePiece()
    }


    n = n-1;
  }

  // var recurse = function(currentArray) {
  //   if(currentArray.length === n) {
  //     var board = new Board(currentArray);
  //     if(!board.hasAnyRooksConflicts()) {
  //       solutionCount++;
  //     }
  //     board = null;
  //     return;
  //   }

  //   for( var i = 0; i < n; i++ ) {
  //     var current = currentArray.slice();
  //     var row = [];
  //     for( var j = 0; j < n; j++) {
  //       row.push(0);
  //     }
  //     row[i] = 1;
  //     console.log('row[' + i + ']: ' + row);
  //     // console.log('current: ');
  //     current.push(row);
  //     debugger;
  //     recurse(current);
  //   }
  // };


  recurse([]);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
