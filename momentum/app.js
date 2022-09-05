const title = document.getElementById("title");

// title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("imgood");

console.log(hellos)
// array 반환

const h1 = document.getElementsByTagName('h1');

console.log(h1)
// array 반환

const select = document.querySelector(".imgood h1");

console.log(select);


title.style.color = 'red'

select.addEventListener('click', function(){
    select.style.color='blue'
})

function handleTitleClick (){
    console.log("click!")
}

select.addEventListener("click", handleTitleClick);
// 'click' 이라는 이벤트가 발생할때에만 handleTitleClick event를 실행한다.