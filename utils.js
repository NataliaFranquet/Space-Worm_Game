function generateRandomRGBA(opacity = 1) {
  return `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${opacity})`
}

function generateRandomColorScaleRGBA(scale = red, opacity = 1) {
  if (scale === "red") {
    return `rgba(${Math.round(Math.random() * 255)}, 0, 0, ${opacity})`
  }

  if (scale === "green") {
    return `rgba(0, ${Math.round(Math.random() * 255)}, 0, ${opacity})`
  }

  if (scale === "blue") {
    return `rgba(0, 0, ${Math.round(Math.random() * 255)}, ${opacity})`
  }
}

function randomIntFromInterval(min, max) // min and max included
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// var counter = 0;

// function colorRandom(num) {
//   if (num === 1) {
//     generateRandomColorScaleRGBA("red", 0.8);
//     counter++;
//   }
//   if (num === 2)  {
//     generateRandomColorScaleRGBA("blue", 0.8);
//     counter++;
//   }
//   if (num === 3)  {
//     generateRandomColorScaleRGBA("blue", 0.8);
//     counter++;
//   }
// }