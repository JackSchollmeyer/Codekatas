//The function will make sure that both arguments start and end with the same letter and will return 'true' if so

function feast(beast, dish) {
    return beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length-1) == dish.charAt(dish.length-1)
  }