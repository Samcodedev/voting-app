let vote1 = document.getElementById("vote-1")
// let pre1 = document.getElementById("pre-1")


fetch('data.json')
.then((res) => res.json())
.then((data) => {
    let candidate=''
    data[0].forEach(function(API){
        console.log(data)
        candidate +=` 
        <div class="deli-div">
            <img src=${API.img} alt="deligate image" />
            <h2>${API.detail.name}</h2>
            <p>Department: ${API.detail.department}</p>
            <h4>Matrix Num: ${API.detail.matrix}</h4>
            <div class="count">
                <h3>${API.detail.position}</h3>
                <h3>${API.vote.votes}</h3>
            </div>
            <button id=${API.vote.voteId2} onClick="${API.vote.voteId}">vote</button>
            <div id=${API.id}>
                <h3>Details</h3>
                <h4>About: ${API.detail.about}.</h4>
                <hr/>
                <li>Gender: ${API.detail.gender}</li>
                <div class="butts">
                    <button onclick="openvote()">CLICK TO VOTE</button>
                    <button onClick="${API.closeDetail}">close</button>
                </div>
            </div>
        </div>
        `
    })
    document.getElementById("sun-deligate1").innerHTML = candidate
})


fetch('data.json')
.then((res) => res.json())
.then((data) => {
    let candidate=''
    data[1].forEach(function(API){
        console.log(data)
        candidate +=` 
        <div class="deli-div">
            <img src=${API.img} alt="deligate image" />
            <h2>${API.name}</h2>
            <p>Department: ${API.department}</p>
            <h4>Matrix Num: ${API.matrix}</h4>
            <div class="count">
                <h3>${API.position}</h3>
                <h3>${API.votes}</h3>
            </div>
            <button id="vote">vote</button>
        </div>
        `
    })
    document.getElementById("sun-deligate2").innerHTML = candidate
})


fetch('data.json')
.then((res) => res.json())
.then((data) => {
    let candidate=''
    data[2].forEach(function(API){
        console.log(data)
        candidate +=` 
        <div class="deli-div">
            <img src=${API.img} alt="deligate image" />
            <h2>${API.name}</h2>
            <p>Department: ${API.department}</p>
            <h4>Matrix Num: ${API.matrix}</h4>
            <div class="count">
                <h3>${API.position}</h3>
                <h3>${API.votes}</h3>
            </div>
            <button id="vote">vote</button>
        </div>
        `
    })
    document.getElementById("sun-deligate3").innerHTML = candidate
})



fetch('data.json')
.then((res) => res.json())
.then((data) => {
    let candidate=''
    data[3].forEach(function(API){
        console.log(data)
        candidate +=` 
        <div class="deli-div">
            <img src=${API.img} alt="deligate image" />
            <h2>${API.name}</h2>
            <p>Department: ${API.department}</p>
            <h4>Matrix Num: ${API.matrix}</h4>
            <div class="count">
                <h3>${API.position}</h3>
                <h3>${API.votes}</h3>
            </div>
            <button id="vote">vote</button>
        </div>
        `
    })
    document.getElementById("sun-deligate4").innerHTML = candidate
})



// first profile
function vote11(){
    document.getElementById("pre-1").style.display="flex"
    document.getElementById("vote-close-1").style.display="none"
}

function close1(){
    document.getElementById("pre-1").style.display="none"
    document.getElementById("vote-close-1").style.display="block"
}

// second profile
function vote22(){
    document.getElementById("pre-2").style.display="flex"
    document.getElementById("vote-close-2").style.display="none"
}

function close2(){
    document.getElementById("pre-2").style.display="none"
    document.getElementById("vote-close-2").style.display="block"
}

// third profile
function vote33(){
    document.getElementById("pre-3").style.display="flex"
    document.getElementById("vote-close-3").style.display="none"
}

function close3(){
    document.getElementById("pre-3").style.display="none"
    document.getElementById("vote-close-3").style.display="block"
}

// forth profile
function vote44(){
    document.getElementById("pre-4").style.display="flex"
    document.getElementById("vote-close-4").style.display="none"
}

function close4(){
    document.getElementById("pre-4").style.display="none"
    document.getElementById("vote-close-4").style.display="block"
}

// fifth profile
function vote55(){
    document.getElementById("pre-5").style.display="flex"
    document.getElementById("vote-close-5").style.display="none"
}

function close5(){
    document.getElementById("pre-5").style.display="none"
    document.getElementById("vote-close-5").style.display="block"
}

// third profile
function vote66(){
    document.getElementById("pre-6").style.display="flex"
    document.getElementById("vote-close-6").style.display="none"
}

function close6(){
    document.getElementById("pre-6").style.display="none"
    document.getElementById("vote-close-6").style.display="block"
}

function closevote(){
    document.getElementById("ddd").style.display="none"
}
function openvote(){
    document.getElementById("ddd").style.display="flex"
    // try to work on the open vote that the body will stop scrolling.
    document.querySelector(body).style.overflowY="hidden"
}
