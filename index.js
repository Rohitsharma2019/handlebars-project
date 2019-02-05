window.onload = function (){
  //Retrieve the template data from the HTML .
  //var template = $('#handlebars-demo').html();

  var context={
    "city": "Gr.Noida",
    "street": "Khanpur",
    "number": "46A",
    "postoffice": "Kasna"
  };

  //Compile the template data into a function
  // var templateScript = Handlebars.compile(template);

   //var html = templateScript(context);
  //html = 'My name is Ritesh Kumar . I am a developer.'
  var template = JST['template/main.hbs'];
  var html = template(context);
  $(document.body).append(html);

  var context2 = { "name" : "Rohit", "occupation" : "Web Designer"};
  var template2 = JST['template/home.hbs'];
  var html2 = template2(context2);
  $(document.body).append(html2);
}

  function about(){
    var present = document.getElementById("info");
  if (present) {
    var context3 = {};
   $(document.body).children('div').last().remove();
  
  }
  else{
      var context3 = {};
  var template3 = JST['template/about.hbs'];
  var html3 = template3(context3);
  $(document.body).append(html3);
  }
 } 
  
 