const rating = document.getElementsByClassName('rating')[0];

// Increase the number of blocks to reduce the gap
for (var i = 0; i < 100; i++) {
  rating.insertAdjacentHTML('beforeend', "<div class='block'></div>");
}

const blocks = document.querySelectorAll('.block');
const totalBlocks = blocks.length;

for (var i = 0; i < totalBlocks; i++) {
  const rotationAngle = (360 / totalBlocks) * i;
  blocks[i].style.transform = "rotate(" + rotationAngle.toFixed(2) + "deg)";
  blocks[i].style.animationDelay = `${i / 40}s`;

  //
  const counter = document.querySelector('.counter');
  counter.innerText = 0;

  const target = +counter.getAttribute('data-target');

  const NumberCounter = () => {
    const value = +counter.innerText;
    if (value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(() =>{
            NumberCounter()
        },25)
    } 
  }
  NumberCounter()

}
