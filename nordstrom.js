process.stdin.resume();
process.stdin.setEncoding("utf8");

var stdin = "";
process.stdin
  .on("data", function (chunk) {
    stdin += chunk;
  })
  .on("end", function () {
    var lines = stdin.trim().split("\n");

    var q = []; // queue
    const verified = {};

    // Creates The Grid
    const grid = [];

    for (var i = 0; i < lines.length; i++) {
      grid.push(lines[i]);
    }

    const visit = (r, c) => {
      const key = `${r},${c}`;
      verified[key] = 1;
    };
    const visited = (r, c) => {
      const key = `${r},${c}`;
      if (verified[key] === 1) {
        return true;
      } else {
        false;
      }
    };

    var start;
    var end;

    const R = grid.length; // Rows
    const C = grid[0].length; // Columns

    for (i = 0; i < R; i++) {
      for (j = 0; j < C; j++) {
        if (grid[i][j] === "S") {
          start = [i, j];
        } else if (grid[i][j] === "E") {
          end = [i, j];
        }
      }
    }

    const startPath = []; // New Array with start Path
    startPath.push(start); // First element is Starting x1,y1
    q.push(startPath); // Enqueue startPath

    const dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];

    const isValidCoord = (r, c) => {
      return r >= 0 && r < R && c >= 0 && c < C;
    };

    while (q.length) {
      //  while(!q.isEmpty()) {

      var currentPath = q.shift(); //    List<int[]> currPath = q.poll();
      var currentNode = currentPath[currentPath.length - 1];

      if (grid[currentNode[0]][currentNode[1]] === "E") {
        setStars(grid, currentPath);

        break;
      }

      visit(currentNode[0], currentNode[1]);

      for (let [moveX, moveY] of dirs) {
        const nextX = currentNode[1] + moveX;
        const nextY = currentNode[0] + moveY;
        if (isValidCoord(nextY, nextX) && visited[nextY][nextX]) {
          continue;
        }

        if (
          isValidCoord(nextY, nextX) &&
          (grid[nextY][nextX] === "." || grid[nextY][nextX] === "E")
        ) {
          const nextNode = [nextY, nextX];
          const nextPath = [...currentPath, nextNode];
          q.push(nextPath);
        }
      }
    }

    const setStars = (grid, path) => {
      for (p in path) {
        grid[p[0]][p[1]] = "*";
      }

      console.log(grid);
    };
  });
