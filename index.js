/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/



/***** Deliverable 1 *****/
let header = document.querySelector('h1#header')

header.addEventListener('click', function(event){
  toggleColor(header)
})

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

/***** Deliverable 2 *****/
let form = document.getElementById('new-player-form')
let allNodes = Array.from(form.childNodes)

form.addEventListener('submit', function(event){
  event.preventDefault()
  let player = {
    number: allNodes[1].value,
    name: allNodes[3].value,
    nickname: allNodes[5].value,
    photo: allNodes[7].value,
    likes: 1000
  }
  renderPlayer(player)
  allNodes[1].value = ""
  allNodes[3].value = ""
  allNodes[5].value = ""
  allNodes[7].value = ""
})

/***** Deliverable 3 *****/

playerContainer.addEventListener('click', function(event){
  if (event.target.className === 'like-button'){
    let playerLikes = event.target.parentNode.querySelector('.likes')
    playerLikes.innerText = `${(parseInt(playerLikes.innerText) + 1)} likes`
  }
})

