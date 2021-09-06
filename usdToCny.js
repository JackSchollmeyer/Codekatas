//This function converts USD to CNY and always includes 2 decimal places

function usdcny(usd) {
    return (Math.round(100 * usd * 6.75)/100).toFixed(2) + " Chinese Yuan"
   }