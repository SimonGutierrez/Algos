/* rotate matrix with blocks & stoppers-in-place, return new matrix

Given a matrix of empty elements and special characters, return a new matrix that represents how the original matrix would look like if rotated clockwise with gravity.

'*' : indicates a fixed block that canNOT fall
'#' : indicates a block that can fall
'' : empty space

*/

let matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['#', '*', ''],
    ['#', '', ''],
  ]
  //rotates 90 deg clockwise
  let output =  [
    ['', '#', '', '', ''],
    ['', '*', '', '', ''],
    ['#', '', '', '', ''],
  ]
  /* 5 x 3 (row x col)
  (3,0) = #
  (3,1) = *
  (4,0) = #
  ---ROTATE---
  (0,1) = #
  (1,1) = *
  (1,0) = # (before gravity)
  */


  function rotateMatrix(matrix){
    let rotated = new Array(matrix[0].length).fill().map(() => new Array(matrix.length));
    //rotate the matrix
    let rotatedCol = rotated[0].length - 1;
    for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[i].length; j++){
        rotated[j][rotatedCol] = matrix[i][j]
      }
      rotatedCol--
    }

    //then apply gravity
      // check if below space has a block or not
      // we can check cells bottom up:
      // have a "lowest free space" pointer
        // first occurence of MOVEABLE will go into the pointer, then move pointer + 1
        // if first occurence is FIXED block, change pointer to that coordinate, continue looking above

    // let pointer;
    inflictGravity(rotated);
    return rotated
  }

  const inflictGravity = (board) => {
    for (let j = 0; j < board[0].length; j++) {
      let start = board.length - 1;
      let end = board.length - 2;
      while (end >= 0) {
        if (board[start][j] === '' && board[end][j] === '#') {
          // swap
          let temp = board[start][j];
          board[start][j] = board[end][j];
          board[end][j] = temp;
          start--;
        } else if (board[end][j] === '*') {
          start -= 2;
        } else if (board[start][j] !== '') {
          start--;
        }
        end--;
      }
    }
  }

  console.log(rotateMatrix(matrix))
  console.log(rotateMatrix(output))

  /*
  first run

  [
    [ '', '#', '', '', '' ],
    [ '', '*', '', '', '' ],
    [ '#', '', '', '', '' ]
  ]

    second run

    [
  [ '', '', '' ],
  [ '', '*', '' ],
  [ '', '', '' ],
  [ '', '', '' ],
  [ '#', '', '#' ]
    ]
  */
