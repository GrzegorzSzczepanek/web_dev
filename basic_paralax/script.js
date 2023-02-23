const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    console.log("OffSet "+ offset);//log do testow by sprawdzic ile pixeli musze wpisac do funkcji powyzej
    console.log("OffSet * 0.7 "+ offset * 0.7);//chemy uzyskac w ten sposob efekt takiego opuznionego parralaxowego scrollowania w dół. Osiągniemy wówczas takie fajne opóźnienie 

    parallax.style.backgroundPositionY = offset * 0.6 + "px";//ta linia tworzy nam efekt parallaxu
})