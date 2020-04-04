let form = $('form');
let startbutton = $('.start');
let head = $('h1');

// sets up the player class
class Player {
  constructor(element, keycode) {
    this.element = element;
    this.keycode = keycode;
    this.name = null;
    this.position = 0;
  }
  movePosition() {
    this.position = this.position + 10;
    this.element.css({ left: this.position + "px" })
    this.checkWin();
  }
  checkWin() {
    if (this.position > 800) {
      head.html(this.name + " Wins!")
      $(document).off("keydown");
    }
  }
}

// instatiates 2 players
let grandpa = new Player($('#grandpaGame'), '90')
let grandma = new Player($('#grandmaGame'), '77')

//create an array for grandpa and grandma players
var people = [grandpa, grandma];

//call function grabForm on the submit
form.submit(grabForm);

function grabForm(event) {
  event.preventDefault()
  grandpa.name = $('#grandpaName').val();
  grandma.name = $('#grandmaName').val();
  //hide the form
  form.hide();
  //display the try again button
  $('.tryAgain').css("display", "inherit");
}

//creates an event listener on the keydown event
$(document).keydown(function (event) {
  people.forEach(person => {
    // if the keycode == that player's keycode, call function movePosition
    if (event.keyCode == person.keycode) {
      person.movePosition()
    }
  })
})
