

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const axios = require('axios').default;
 axios.get('https://api.github.com/users/Gavin-Rilee').then(response=>{console.log(response)}).catch(err=>{console.log("I got an error :(" + err)});



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/




function cardMakers(cardObj){
// initiate new elements
const card = document.createElement('div')
const image = document.createElement('img')
const cardInfo = document.createElement('div')
const hthree = document.createElement('h3')
const ptag1 = document.createElement('p')
const ptag2 = document.createElement('p')
const ptag3 = document.createElement('p')
const atag = document.createElement('a')
const ptag4 = document.createElement('p')
const ptag5 = document.createElement('p')
const ptag6 = document.createElement('p')

// adding to class list
card.classList.add('card')
cardInfo.classList.add('card-info')
hthree.classList.add('name')
ptag1.classList.add('username')



// text content
image.src = cardObj.avatar_url;
hthree.textContent = cardObj.name;
ptag1.textContent = cardObj.login;
ptag2.textContent = (`Location: ${cardObj.location}`);
ptag3.textContent = ('Profile:');
atag.href = cardObj.html_url;
ptag4.textContent = (`Followers: ${cardObj.followers}`);
ptag5.textContent = (`Following: ${cardObj.following}`);
ptag6.textContent = (`Bio: ${cardObj.bio}`);


// append
atag.appendChild(ptag3);
ptag6.appendChild(cardInfo);
ptag5.appendChild(cardInfo);
ptag4.appendChild(cardInfo);
ptag3.appendChild(cardInfo);
ptag2.appendChild(cardInfo);
ptag1.appendChild(cardInfo);
image.appendChild(card);
cardInfo.appendChild(card);

return card;

}



axios.get('https://api.github.com/users/Gavin-Rilee')
.then(response =>
  {

    let entryPoint = document.querySelector('.cards');
    const myData = response.data;
    entryPoint.appendChild(cardMakers(myData));

}).then(

).catch(err =>
  {
    console.log(err);
  })


followersArray.forEach(names =>
  axios.get('https://api.github.com/users/' + names)
  .then(response =>
    {
      const data = response.data;
      entryPoint.appendChild(cardMakers(data));
      .catch(err =>{
        console.log(err);
      });
    }));




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
