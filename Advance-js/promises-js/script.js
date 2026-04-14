let step1 = new Promise((resolve, reject) => {
  let done = false;
  if (done) {
    resolve("successs");
  } else {
    reject("Error");
  }
});

step1
.then((res) => 
  console.log(res))
.catch((err) => console.log(err));

// realife use of thee Promise

function step2() {
  return new Promise((sol,fail) => {
    setTimeout(() => {
      let success = true;
      if (success) {
       sol("step2"); 
      } else {
        fail("step 2 fail");
      }
    }, 5000);
  });
}

function step3() {
  return new Promise ((b) => {
    setTimeout(() => {
      b("step3")
    }, 3000);
  })
}

step2()
.then(sol =>{
  console.log(sol);
  return step3(); 
})
.then(noterr => {
  console.log(noterr);
})
.catch(error => {
  console.log("error",error);
  
});