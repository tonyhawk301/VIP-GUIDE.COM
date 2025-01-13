// addEventListener
// $('.open-popup').click(function(){
//     e.preventDefault();
//     $('.popup-bg').fadeIn(800);
// });
// $('.close-popup').click(function()  {
//     $('.popup-bg').fadeOut(800);
// });
// fatalDesign.eventlistener-intellisense
let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup', '.sumbit');
openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});
closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active');
});

// $(document).ready(function() {
//     // Привязываем обработчик события клика к кнопке отправки формы
//     $('.submit').click(function(e) {
//         e.preventDefault(); // предотвращаем стандартное поведение кнопки

//         // Собираем данные формы
//         var name = $('#input1').val();
//         var tel = $('#input2').val();
//         var mail = $('#input3').val();

//         // Здесь вы можете отправить данные на сервер с помощью AJAX или сделать что-то ещё
//         console.log("Имя: " + name + ", Телефон: " + tel + ", Email: " + mail);

//         // Закрываем модальное окно
       
//     });
// });