function displayName (callback) {
  setTimeout(() =>{
    console.log("Name: Riad Alhaj");
    callback();
  },1000);
}

function displayAge(callback) {
  setTimeout(() => {
    console.log("Age: 31");
    callback();
  }, 2000); 
}

