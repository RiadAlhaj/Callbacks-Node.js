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

function displayLocation(callback) {
  setTimeout(() => {
    console.log("Born in:Tripoli Libya, Currently living in: Stockholm");
    callback();
  }, 3000); 
}

function displayHobbies() {
  setTimeout(() => {
    console.log("Hobbies: Coding, Sports and cooking");
    callback();
  }, 5000); 
}

displayName(()=>{
  displayAge(()=>{
    displayLocation(()=>{
      displayHobbies();
    });
  });
});

