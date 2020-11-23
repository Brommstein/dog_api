'use strict';

const baseURL = 'https://dog.ceo/api/breed/';

function getNumber() {
  $('#number').submit(function (event) {
    event.preventDefault();
    let breed = $(event.currentTarget).find('input').val();
    console.log(breed);



    let request = `${baseURL}${breed}/images/random`;

    console.log(request);



    fetch(request).then((response) => response.json()).then((json) => {
      let html = generateImages(json);
      $('.images').html(html);
    })
      .catch(err => console.log(err));
  });
}

function generateImages(json) {
  let jsonArray = [];
  //for (let i = 0; i < json.message.length; i++){
  jsonArray.push(`<img src="${json.message}">`);
  //  }
  return jsonArray;
}

function main() {
  getNumber();
}

$(main);