(function () {
  console.log("this function will never run again");
})()(() => console.log("this arrows function will never run again"))();
