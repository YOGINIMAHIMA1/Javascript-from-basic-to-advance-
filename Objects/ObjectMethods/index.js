/*
1. Add a new method to the object called 'hotelClosed'.
    2. When called, this new method should log out the phrase 'I'm sorry, 
       the hotel is currently closed.'
    3. Call the method to check it works.
*/
var hotel={}
hotel.name='Taj palace';
  hotel.stars=5;
hotel.price= $500;
hotel.isFull= false;
hotel.SummarizeHotel= function ()
  {
    console.log('Taj Palace is 5 star hotel');
  }
hotel.hotelClosed=function()
  {
    console.log('Sorry, the hotel is Closed');
  }
hotel.SummarizeHotel()
hotel.hotelClosed()
