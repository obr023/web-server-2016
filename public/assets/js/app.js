function paso(selected, proximas) {
  balance = balance - selected.buy;
  balance = balance + selected.sell;
  $('#total').html(accounting.formatMoney(balance));
  if (proximas === 'final') {
    var gain_loss = balance - 1925000;
    var finalMessage = "Total Balance " + accounting.formatMoney(balance) + "<br> Gain/Losses: " + accounting.formatMoney(gain_loss);
    $('#instructions').html('Game Finished');
    $('#game-content').html('Total Balance: '+ finalMessage);
  } else {
    var paso2Options = constructoption(proximas[0]) + constructoption(proximas[1]);
    $('#game-content').html(paso2Options);
  }
}

var casa1 = {
  img: 'assets/images/House1.png',
  buy: 1925000,
  sell: 2300000,
  alt: 'House 1',
  next: 'paso(casa1, paso2)',
  description: 'bla bla'
};
var casa2 = {
  img: 'assets/images/House2.png',
  buy: 1925000,
  sell: 1825000,
  alt: 'House 2',
  next: 'paso(casa2, paso2)',
  description: 'bla bla'
};
var casa3 = {
  img: 'assets/images/House3.png',
  buy: 575000,
  sell: 550000,
  alt: 'House 3',
  next: 'paso(casa3, paso3)',
  description: 'bla bla'
};
var casa4 = {
  img: 'assets/images/House4.png',
  buy: 624900,
  sell: 529900,
  alt: 'House 4',
  next: 'paso(casa4, paso3)',
  description: 'bla bla'
};
var casa5 = {
  img: 'assets/images/House5.png',
  buy: 124900,
  sell: 137500,
  alt: 'House 5',
  next: 'paso(casa5, "final")',
  description: 'bla bla'
};
var casa6 = {
  img: 'assets/images/House6.png',
  buy: 148000,
  sell: 130000,
  alt: 'House 6',
  next: 'paso(casa6, "final")',
  description: 'bla bla'
};
var paso2 = [casa3, casa4];
var paso3 = [casa5, casa6];

var balance =  1925000;

var constructoption = function(casa) {
  var optionHtml = "<div onclick='" + casa.next + "' class='col-xs-12 col-sm-6 option'> <img class='game-img' src='" + casa.img + "' alt='" + casa.alt + "' /> <p>" + casa.description + "</p></div>";
  return optionHtml;
}

var game = function() {
  var paso1Options = constructoption(casa1) + constructoption(casa2);
  $('#total').html(accounting.formatMoney(balance));
  $('#game-content').html(paso1Options);
}

$(document).ready(function() {
  game();

});
