this["JST"] = this["JST"] || {};

this["JST"]["template/about.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"info\">\n   <h1>ABOUT ROHIT SHARMA</h1>\n      Welcome sir..this is Rohit sharma\n</div>\n\n<!--<div id=\"wrapper\">\n  	<div id=\"object\">Hello Sir</div>\n</div>-->";
},"useData":true});

this["JST"]["template/home.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"information\">\n	<h1>About Rohit Sharma</h1>\n	    Hello, this is "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " .I blong to khanpur(gr.noida) and i am "
    + alias4(((helper = (helper = helpers.occupation || (depth0 != null ? depth0.occupation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"occupation","hash":{},"data":data}) : helper)))
    + ". All Information about me comming soon...please wait.<br><br>\n    <button id=\"hellobutton\" onclick=\"addbutton();\">Add</button>\n</div>";
},"useData":true});

this["JST"]["template/last.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"last-div\">\n    <p>Hello sir this is a last div of last file. and this is also partial files.</p>\n</div>";
},"useData":true});

this["JST"]["template/main.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<div id=\"address-template\">\n  <h3>Address</h3>\n      You can find me in "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ". My address is "
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.street || (depth0 != null ? depth0.street : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data}) : helper)))
    + ".\n      My post-office is "
    + alias4(((helper = (helper = helpers.postoffice || (depth0 != null ? depth0.postoffice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postoffice","hash":{},"data":data}) : helper)))
    + ".<br><br><br>\n  <button id=\"hidefirst\" onclick=\"about();\" name=\"About\" value=\"About\">About</button>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.home,depth0,{"name":"home","data":data,"indent":" ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div id=\"last-child\">\n    <h4>This is the last div of this "
    + alias4(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"file","hash":{},"data":data}) : helper)))
    + " file.</h4>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.last,depth0,{"name":"last","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});