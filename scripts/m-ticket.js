function play(){
  hideElementById('header');
  hideElementById('main');
  showElementsById('success-ful');
}
function countinuePlay(){
    hideElementById('success-ful');
    showElementsById('header');
    showElementsById('main');

}


const scrollButton = document.getElementById('btn');
const targetSection = document.getElementById('paribahan-seats');

scrollButton.addEventListener('click', function(){
  targetSection.scrollIntoView({behavior: "smooth" , block:"start"});
})


const myNodelist = document.querySelectorAll(".seat");
for (let i = 0; i < myNodelist.length; i++) {
    const nodeItems = myNodelist[i];
    nodeItems.addEventListener('click', function () {
        // background button by click.....
        nodeItems.classList.toggle('bg-green-400');

        // calculate total price......
        const currentSeat = document.getElementById('selected-seat');
        const valueText = currentSeat.innerText;
        const value = parseInt(valueText);

        // left seat
        const seatsLeft = document.getElementById('seat-left');
        const getSeats = seatsLeft.innerText;
        const current = parseInt(getSeats) ;

        // show prices
        const ticketPrice = 550;
        const ticketClass = 'Economy';
        
        if (nodeItems) {
            const updateSeat = value + 1;
            currentSeat.innerText = updateSeat;
            const totalPrice = updateSeat * 550;
            const currentPrice = document.getElementById('total-price');
            currentPrice.innerText = totalPrice;

            const totalSeats = current - 1;
            seatsLeft.innerText = totalSeats;

        const tableRow = document.createElement('tr');
        const tableTd1 = document.createElement('td');
        const tableTd2 = document.createElement('td');
        const tableTd3 = document.createElement('td');

        tableTd1.innerText = nodeItems.innerText;
        tableTd2.innerText = ticketClass;
        tableTd3.innerText = ticketPrice;
        tableRow.appendChild(tableTd1);
        tableRow.appendChild(tableTd2);
        tableRow.appendChild(tableTd3);

        const displaySeat = document.getElementById('display-seat');
        displaySeat.appendChild(tableRow);


            // Apply coupon code......
            const applyCoupon = document.getElementById('coupon');
            applyCoupon.addEventListener('click', function () {
                const getCoupon = document.getElementById('coupon-field').value;
                const couponCode = 'NEW15';
                const coupleCouponCode = 'Couple20';
                if (getCoupon === couponCode && value >= 3) {

                    const discount = totalPrice * 15 / 100;
                    const discountedPrice = totalPrice - discount;
                    const grandValue = document.getElementById('grand-total');
                    grandValue.innerText = discountedPrice;
                    hideElementById('coupon-area');
                    showElementsById('coupon-applied');
                    const Totaldiscount = document.getElementById('discount');
                    Totaldiscount.innerText = discount;
                    
                }

                if (getCoupon === coupleCouponCode && value >= 3) {
                    const discount = totalPrice * 20 / 100;
                    const discountedPrice = totalPrice - discount;
                    const grandValue = document.getElementById('grand-total');
                    grandValue.innerText = discountedPrice;
                    hideElementById('coupon-area');
                    showElementsById('coupon-applied');
                    const Totaldiscount = document.getElementById('discount');
                    Totaldiscount.innerText = discount;
                }
            })
        }
    })
}

const phoneNumber = document.getElementById('PhoneNumber');

phoneNumber.addEventListener('input', function (){
    const nextButton = document.getElementById('next-btn');
    if(phoneNumber !== 0){
        nextButton.removeAttribute('disabled')
    }
    else{
        nextButton.setAttribute('disabled');
    }
    
}
)


