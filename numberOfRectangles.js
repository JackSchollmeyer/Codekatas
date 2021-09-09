//This function creates a grid of arrays and determines how many rectangles are inside that grid

function numberOfRectangles(m, n) {
    let a = (m * m + m) / 2;
    let b = (n * n + n) / 2;
    return a * b
  }