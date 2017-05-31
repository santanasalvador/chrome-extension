var images = document.getElementsByTagName('img');
    for (var i = 0, l = images.length; i < l; i++) {
      images[i].src = 'https://placekitten.com/360/417' + images[i].width + '/' + images[i].height;
}