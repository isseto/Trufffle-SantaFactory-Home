var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var cardlibrary = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="row libraryCard-container">';
    
    for (var i=0; i<cardlibrary.cards.length; i ++) {
            
      if (cardlibrary.cards[i].opened === true) {
        statusHTML += '<li class="small-10 small-centered columns libraryCard libraryCard-yellow">';
      } else {
        statusHTML += '<li class="small-10 small-centered columns libraryCard libraryCard-yellow">';
      }
      
      statusHTML += '<h3>';
      statusHTML += cardlibrary.cards[i].title;
      statusHTML += '</h3><p>';
      statusHTML += cardlibrary.cards[i].date;
      statusHTML += '</p>';
      statusHTML += '<p>Article description on the use of Christmas of this special 
thing either its culture or history value and how different it 
is today and how it shaped Christmas today.
Here is the follow up to the description which would only 
show once on hover. By now we should be getting to the 
end of the description until it ends soon once it reaches 
the last line of the paragraph.</p>'
    } // end for looop
    
    statusHTML += '</ul>';
    document.getElementById('libraryList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'js/json/cards.json');
xhr.send();