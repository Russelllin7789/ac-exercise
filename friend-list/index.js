const BASE_URL = 'https://lighthouse-user-api.herokuapp.com'
const INDEX_URL = BASE_URL + '/api/v1/users'
const dataPanel = document.querySelector('#data-panel')
const friends = []

axios
  .get(INDEX_URL)
  .then(response => {
    friends.push(...response.data.results)
    renderFriendList(friends)
  })
  .catch(error => console.log(error))

function renderFriendList(data) {
  let rawHTML = ''
  data.forEach((item) => {
    rawHTML += `
    <div class="col-sm-3">
    <div class="card" style="width: 18rem;">
      <img src="${item.avatar}" class="card-img-top" alt="Friend's Face">
      <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <a href="#" class="btn btn-primary">See Info</a>
      </div>
    </div>
    </div>
    `
  })

  dataPanel.innerHTML = rawHTML
}

