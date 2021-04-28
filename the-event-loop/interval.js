let currentCount = 3;
var intervalId = setInterval(function () { countDown(currentCount); }, 1000);

const countDown = () => {
  console.log(currentCount);
  --currentCount;
  if (currentCount === 0) {
    console.log('BLAST OFF!');
    clearInterval(intervalId);
  }
};
