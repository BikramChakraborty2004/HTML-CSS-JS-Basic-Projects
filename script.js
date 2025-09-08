var istatus = document.querySelector("h5")

var addFriend = document.querySelector("#add")

var removeFriend = document.querySelector("#remove")

var check = 0;

addFriend.addEventListener("click",function(){
    if(check === 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = 'Green'
        addFriend.innerHTML ="Request sent"
        removeFriend.innerHTML = "Remove Request"
        console.log("Hii")
        check = 1;
    }
})

removeFriend.addEventListener("click",function(){
    if(check ===1 ){
        istatus.innerHTML = "Stranger"
        istatus.style.color="red"
        addFriend.innerHTML= "Add Friend"
        removeFriend.innerHTML = "Remove Friend"
        console.log("Hello")
        check = 0;
    }
})
