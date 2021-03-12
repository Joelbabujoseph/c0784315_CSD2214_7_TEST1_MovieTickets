const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const amount = document.getElementById('amount');

const movieselect = document.getElementById('film');
let ticketprice = +movieselect.Value;

const populateUI =() =>{
    const selectseats = JSON.parse(localStorage.getItem('selectedseats'));

    if(selectseats !==null && selectseats.length>0){
        seats.foreach((seat,))
    }

}

