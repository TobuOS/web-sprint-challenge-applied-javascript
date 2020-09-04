// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function CardCreator(headline, img, name) {
    const card = document.createElement('div')
    const headlineVar = document.createElement('div')
    const author = document.createElement('div')
    const cardImg = document.createElement('div')
    const authorName = document.createElement('span')
    const authorImg = document.createElement('img')

    card.appendChild(headlineVar)
    card.appendChild(author)
    author.appendChild(cardImg)
    author.appendChild(authorName)
    cardImg.appendChild(authorImg)

    card.classList.add('card')
    headlineVar.classList.add('headline')
    author.classList.add('author')
    cardImg.classList.add('img-container')

    headlineVar.textContent = headline
    authorName.textContent = name
    authorImg.src = img
//event listener
    card.addEventListener('click', (e) => {
        console.log(headlineVar, e.target)
    })

    return card
}

const cardContainer = document.querySelector('.cards-container')

axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then((x) => {
    console.log('Heres what was found', x)
    x.data.articles.bootstrap.forEach((data) => {
        cardContainer.append(CardCreator(data.headline, data.authorPhoto, data.authorName))
    })
    x.data.articles.javascript.forEach((data) => {
        cardContainer.append(CardCreator(data.headline, data.authorPhoto, data.authorName))
    })
    x.data.articles.jquery.forEach((data) => {
        cardContainer.append(CardCreator(data.headline, data.authorPhoto, data.authorName))
    })
    x.data.articles.node.forEach((data) => {
        cardContainer.append(CardCreator(data.headline, data.authorPhoto, data.authorName))
    })
    x.data.articles.technology.forEach((data) => {
        cardContainer.append(CardCreator(data.headline, data.authorPhoto, data.authorName))
    })
})
.catch((err) => {
    console.log('Looks like that didnt go as planned', err)
})