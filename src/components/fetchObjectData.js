const fetchObjecData = () =>
  fetch("https://sports.api.decathlon.com/sports")
    .then((resp) => resp.json())
    .then((object) => console.log(object));
