document.getElementById("short-url-form").addEventListener("submit", (event) => {
  url = document.querySelector('#url').value;

  if(url){
    console.log(url);
    fetch('http://168.138.40.63:3000/api/v0/urls/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: url})
    })
    .then((response) => {
      const content = response.json();
      console.log(response);
      document.getElementById('result').innerHTML = content.uuid
    })
    .catch((err) => {
      console.log(error)
    })
  }
  console.log('123')
  event.preventDefault();
});