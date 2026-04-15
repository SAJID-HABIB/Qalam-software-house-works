function step1() {
  return new Promise ((reslove,reject) => {
setTimeout(() => {
    reslove("step1 done");
    reject("step1 fail");
  }, 2000);
  })
}

function step2() {
  return new Promise ((reslove,reject) => {
    setTimeout(() => {
      reslove("step2 done");
      reject("step2 fail");
    }, 3000);
  })
}

Promise.any([step1(),step2()])
.then((res) => {
  console.log(res);
  // return step2();
})
// .then((res,) => {
//   console.log(res);
// })
.catch((err) => {
  console.log(err);
});