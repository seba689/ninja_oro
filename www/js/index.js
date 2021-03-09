$(document).ready(function () {
  y = Math.floor(Math.random() * 100);
  var farm =document.getElementById('farm');
  var cave=document.getElementById('cave');
  var house=document.getElementById('house');
  var casino=document.getElementById('casino');

  Hammer(farm).on('pan',function(event){

    x= parseInt($('#oro').val());
    y= azar(-10,10)
    z= x+y 
    $('#oro').val(z);
    si()


  })

  Hammer(cave).on('pan',function(event){

    x= parseInt($('#oro').val());
    y= azar(-5,10)
    z= x+y 
    $('#oro').val(z);
    si()


  })

  Hammer(house).on('pan',function(event){

    x= parseInt($('#oro').val());
    y= azar(-2,5)
    z= x+y 
    $('#oro').val(z);
    si()


  })

  Hammer(casino).on('pan',function(event){

    x= parseInt($('#oro').val());
    y= azar(-50,50)
    z= x+y 
    $('#oro').val(z);
    si()


  })
  
  $('#btn').click(function (e) { 
    e.preventDefault();
    x= parseInt($('#oro').val());
    y= azar(-10,10)
    z= x+y 
    $('#oro').val(z);
    si()
  });

  $('#btn1').click(function (e) { 
    e.preventDefault();
    x= parseInt($('#oro').val());
    y= azar(-5,10)
    z= x+y 
    $('#oro').val(z);
    si()

  });

  $('#btn2').click(function (e) { 
    e.preventDefault();
    

  });

  $('#btn3').click(function (e) { 
    e.preventDefault();
    x= parseInt($('#oro').val());
    y= azar(-50,50)
    z= x+y 
    $('#oro').val(z);
    si()
  });


});

function azar(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function si(x){
  x= parseInt($('#oro').val());

  if(x>100){
    alert("felicidades ... haz ganado el juego ")
  }
  else if(x<-50){
    alert("lo lamento , haz persido")
  }

}