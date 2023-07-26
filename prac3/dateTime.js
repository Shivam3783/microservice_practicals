const dateTime = () => {
  const date = new Date();

//   date.toDateString(); // => "Wed Feb 22 2023"
//   date.toLocaleTimeString(); // => "11:38:02 AM"

  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
}

module.exports = { dateTime };

// const dateTime = () => {
//     return new Date().toLocaleString(); 
//   }
  
