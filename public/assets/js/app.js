function paso(selected, proximas) {
  balance = balance - selected.buy;
  balance = balance + selected.sell;
  $('#total').html(accounting.formatMoney(balance));
  if (proximas === 'final') {
    var gain_loss = balance - 1925000;
    var finalMessage = "Total Balance " + accounting.formatMoney(balance) + "<br> Gain/Losses: " + accounting.formatMoney(gain_loss);
    $('#instructions').html('Game Finished');
    $('#game-content').html('Total Balance: '+ finalMessage + '<br><section> <div class="container text-header header-section" style="height: 120px"> <div class="col-xs-12 col-sm-6"> <a href="game.html" class="btn btn-primary btn-lg active btn-block" role="button" aria-pressed="true">Play Again</a> </div> </div> </section>');
    $('.extra-space').remove();
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
  description: '1755 Ocean Ave APT 302,Santa Monica, CA 90401. This two bedroom home features a great room and an open island kitchen with wine refrigerator. The master suite has a spa-like five piece bath and an oversized walk-in closet. The residence also includes a second bedroom with en suite bath, a powder room and a washer/dryer.'
};
var casa2 = {
  img: 'assets/images/House2.png',
  buy: 1925000,
  sell: 1825000,
  alt: 'House 2',
  next: 'paso(casa2, paso2)',
  description: '2203 3rd St APT 11,Santa Monica, CA 90405. Stunning Light Filled Corner Unit Townhouse designed by noted Architect William Brantley! This Fabulous 2 Bedroom/2.5 Bath plus Office/Den (easily used as a 3rd Bedroom) feels just like a Single Family Home! Conveniently located just moments from Main St., Abbot Kinney, Santa Monica Place, 3rd St. Promenade & the Beach! Enter directly through a gated drive into your own private two car garage w/ direct entry into the unit. '
};
var casa3 = {
  img: 'assets/images/House3.png',
  buy: 575000,
  sell: 550000,
  alt: 'House 3',
  next: 'paso(casa3, paso3)',
  description: '8253 Upper Perse Cir,Orlando, FL 32827. Well presented 4/3/1 David Weekly home tucked away in the Laureate Park community in Lake Nona. Location, location, location! Close to the expressway and every convenience, youre at the center of it all, yet enjoy the feeling as if you are away from it all. This luxury home is designed to cater to the entertainers soul with private pool with fountains and custom made pergola, all accentuated with plantation shutters for that traditional Florida flair. '
};
var casa4 = {
  img: 'assets/images/House4.png',
  buy: 624900,
  sell: 529900,
  alt: 'House 4',
  next: 'paso(casa4, paso3)',
  description: '1117 Montcalm St,Orlando, FL 32806. Beautiful 4 bed/5 bath Pool & Spa home situated on a huge fenced corner lot w/ a view of the new Southern Oaks lighted Fountain. Home features include: Hardwood Floors, 3 Fireplaces, High Ceilings w/ Accent Lighting in the Formal Living & Dining Room, Crown Molding, Custom Built Cabinetry, a built in BBQ & outdoor sitting area & Plantation Shutters throughout. The Gourmet Kitchen is 20x12 w/ a Brick Fireplace, Copper Range Hood, Raised Panel Wood Cabinets. '
};
var casa5 = {
  img: 'assets/images/House5.png',
  buy: 124900,
  sell: 137500,
  alt: 'House 5',
  next: 'paso(casa5, "final")',
  description: '311 Comanche Village Dr,Fountain, CO 80817. This home does have a detached garage long enough to fit 2 cars deep* Garage is a drive through* There is a covered carport in front of the home as well* Back of the home has a storage shed* The area between the home and garage is covered to provide additional storage space Entrance to the inside of the home is a covered wood deck with views of the Mountains* As you go inside you have an eat in Kitchen* Vaulted ceilings are in the middle of the home between the living room and dining room 3 bedrooms on the main level '
};
var casa6 = {
  img: 'assets/images/House6.png',
  buy: 148000,
  sell: 130000,
  alt: 'House 6',
  next: 'paso(casa6, "final")',
  description: '212 Sherri Dr,Colorado Springs, CO 80911. Doll House! Hard woods run under the carpet waiting to be restored to beauty,no maintenance vinyl siding,vinyl windows,6 panel doors,Completely remodeled kitchen with imported granite counter tops. Family room with fireplace and stone hearth,fully fenced yard front and back!,newer wiring in kitchen with replaced electrical panel. Mature landscaping with huge beautiful shade trees and mountain views. This is a rare and unique opportunity!,Auto Sprinklers and Fireplace has not been used by the homeowner for 5 years,inspect if concerned.'
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
