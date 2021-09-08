//This function returns what color the traffic light should turn to next given it's currect color

function updateLight(current) {
    return current == 'green' ? 'yellow'
         : current == 'yellow' ? 'red'
         : 'green'
   }