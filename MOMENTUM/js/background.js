//배열정리
images = ["0.jpeg", "1.jpeg", "2.jpeg"];

chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

//element 생성
const bgImage = document.createElement("img");

//경로 추가
bgImage.src = `img/${chosenImage}`;
//body 위치 지정
document.body.appendChild(bgImage);