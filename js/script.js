//SLIDE PRESSE //
// $(document).ready(function(){
// //     $("#logoHamburger").click(function(){
// //         $(".presse").toggle("slow");
// //     });
// // });

// // $('#une1').hover(function(){
// //     $(this).fadeTo('slow', 0.70);
// //   },function(){
// //     $(this).fadeTo('slow', 1);
// // });
// // $('#une3').hover(function(){
// //     $(this).fadeTo('slow', 0.70);
// //   },function(){
// //     $(this).fadeTo('slow', 1);
// // });
// // $('#une2').hover(function(){
// //     $(this).stop().fadeTo('slow', 0.70);
// //   },function(){
// //     $(this).stop().fadeTo('slow', 1);
// // });

////////////affichage d'un contenu différent par page////////

window.onload = function() {
  loadArticle('accueil.html', 'corpsDeLaPage');
};


function loadArticle(url, loc){
$("#"+loc).load(url);
} 

function AfficherOnclick(loc){
  $( "#"+loc ).toggle(function() {
  // $('.cache').removeClass('Afficher');
  $('#'+loc).addClass("Afficher");
}, function() {
  // $('.cache').removeClass('Afficher');
});

} 

// function AfficherOnclick(url, loc){
//   $( "#"+loc ).toggle(function() {
//   $('#'+loc).attr('class', 'Afficher');
// }, function() {
//   $('#'+loc).removeAttr('class', 'Afficher');
// });

// } 

///////////////////////////apparition seule//////////////////////////////////////////////
// function AfficherOnclick(url, loc){
// $('#'+loc).attr('class', 'Afficher');
// $('.Afficher').css('display', 'block');
// } 
