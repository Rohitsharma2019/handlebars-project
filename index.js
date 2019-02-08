window.onload = function (){
  //Retrieve the template data from the HTML .
  //var template = $('#handlebars-demo').html();

  var context={
    "city": "Gr.Noida",
    "street": "Khanpur",
    "number": "46A",
    "postoffice": "Kasna",
    "name": "Rohit",
    "occupation": "web designer",
    "file": "main.hbs"
  };
    Handlebars.registerPartial("home", JST['templates/home.hbs']);
    Handlebars.registerPartial("last", JST['templates/last.hbs']);
    Handlebars.registerPartial("sidebar", JST['templates/sidebar.hbs']);
    Handlebars.registerPartial("footer", JST['templates/footer.hbs']);


  var template = JST['templates/main.hbs'];
  var html = template(context);
  $(document.body).append(html);

//  var context2 = { "name" : "Rohit", "occupation" : "Web Designer"};
//  var template2 = JST['template/home.hbs'];
//  var html2 = template2(context2);
//  $(document.body).append(html2);
}

  function about(){
    var present = document.getElementById("info");
  if (present) {
    var context3 = {};
   $(document.body).children('div').last().remove();

  }
  else{
  var context3 = {};
  var template3 = JST['templates/about.hbs'];
  var html3 = template3(context3);
  $(document.body).append(html3);

  }

}
