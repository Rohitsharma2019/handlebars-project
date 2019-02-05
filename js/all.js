this["JST"] = this["JST"] || {};

this["JST"]["template/about.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"info\">\n\n <h1>ABOUT ROHIT SHARMA</h1>\n hello ,\n Welcome sir..this is Rohit sharma\n</div>\n";
},"useData":true});

this["JST"]["template/home.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"information\">\n	<h1>About Rohit Sharma</h1>\n	Hello, this is "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " .I blong to khanpur(gr.noida) and i am "
    + alias4(((helper = (helper = helpers.occupation || (depth0 != null ? depth0.occupation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"occupation","hash":{},"data":data}) : helper)))
    + ". All Information about me comming soon...please wait.\n</div>\n";
},"useData":true});

this["JST"]["template/main.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<div id=\"address-template\">\n \n    <h3>Address</h3>\n    You can find me in "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ". My address is "
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.street || (depth0 != null ? depth0.street : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data}) : helper)))
    + ".\n    My post-office is "
    + alias4(((helper = (helper = helpers.postoffice || (depth0 != null ? depth0.postoffice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postoffice","hash":{},"data":data}) : helper)))
    + ".<br><br><br>\n    <input id=\"hidefirst\" type=\"button\" onclick=\"about();\" name=\"About\" value=\"About\">\n\n</div>\n";
},"useData":true});