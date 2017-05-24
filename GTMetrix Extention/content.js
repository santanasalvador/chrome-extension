 var images = document.getElementsByTagName('img');
   for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F71%2F3d%2Ff7%2F713df700fa9a8b6d76ba0be9e87df3e0.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Frachelrb71%2Fvegeta%2F&docid=8tKA5P6O5T5ohM&tbnid=lcfYvAIqUY8f3M%3A&vet=10ahUKEwi3n8XXzPnTAhWqhFQKHZdbAywQMwhCKAkwCQ..i&w=736&h=920&bih=735&biw=1517&q=vegeta&ved=0ahUKEwi3n8XXzPnTAhWqhFQKHZdbAywQMwhCKAkwCQ&iact=mrc&uact=8' + images[i].width + '/' + images[i].height;
}
