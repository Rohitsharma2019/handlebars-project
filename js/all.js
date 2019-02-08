this["JST"] = this["JST"] || {};

this["JST"]["templates/about.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"info\">\n   <h1>ABOUT ROHIT SHARMA</h1>\n      Welcome sir..this is Rohit sharma\n</div>\n\n<!--<div id=\"wrapper\">\n  	<div id=\"object\">Hello Sir</div>\n</div>-->\n";
},"useData":true});

this["JST"]["templates/footer.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n   <div class=\"section-1\">\n    <div class=\"first-container\">\n      <div class=\"content-1\">\n        <h4>Get connected with us on social networks!</h4>\n      </div>\n      <div class=\"content-2\">\n        <div class=\"imagesfolder\">\n                   <img src=\"./images/fbicon3.png\" alt=\"facebook icon\">\n                    <img src=\"./images/tweticon2.png\" alt=\"facebook icon\">\n                    <img src=\"./images/glgicon.png\" alt=\"facebook icon\">\n                    <img src=\"./images/inicon2.png\" alt=\"facebook icon\">\n                    <img src=\"./images/insta.png\" alt=\"facebook icon\">\n               </div>\n      </div>\n    </div>\n   </div>\n   <div class=\"section-2\">\n    <div class=\"second-container\">\n          <div class=\"list-content1\">\n            <ul>\n                <li>company name</li>\n                <li class=\"blue-color\">Vidya Mantra Edusystem Pvt.Ltd.</li>\n              </ul>\n          </div>\n          <div class=\"list-content1\">\n            <ul>\n               <li>Services</li>\n               <li class=\"blue-color\">Laundary</li>\n               <li class=\"blue-color\">Food</li>\n               <li class=\"blue-color\">Vegitable & grecory</li>\n               <li class=\"blue-color\">Handyman Services</li>\n              </ul>\n          </div>\n          <div class=\"list-content1\">\n            <ul>\n               <li>Useful links</li>\n               <li class=\"blue-color\">Your Account</li>\n               <li class=\"blue-color\">Become an Affiliate</li>\n               <li class=\"blue-color\">Shipping Rates</li>\n               <li class=\"blue-color\">Help</li>\n              </ul>\n          </div>\n          <div class=\"list-content1\">\n            <ul>\n                <li>Contact</li>\n               <li class=\"adrs\">H-46,Khanpur,Gr.noida(U.P)</li>\n               <li class=\"mail\">rohit.sharma@vidyamantra.com</li>\n               <li class=\"contact\">+91 9953497117</li>\n               <li class=\"print\">1200 44557123</li>\n              </ul>\n          </div>\n        </div>\n   </div>\n   <div class=\"section-3\">\n    <div class=\"content-3\">\n           <p>&copy;2019 Copyright:Truebuddy</p>\n    </div>\n   </div>\n\n</footer>\n";
},"useData":true});

this["JST"]["templates/header.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["JST"]["templates/home.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"information\">\n	<h1>About Rohit Sharma</h1>\n	    Hello, this is "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " .I blong to khanpur(gr.noida) and i am "
    + alias4(((helper = (helper = helpers.occupation || (depth0 != null ? depth0.occupation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"occupation","hash":{},"data":data}) : helper)))
    + ". All Information about me comming soon...please wait.<br><br>\n    <button id=\"hellobutton\" onclick=\"addbutton();\">Add</button>\n</div>\n";
},"useData":true});

this["JST"]["templates/last.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"last-div\">\n    <p>Hello sir this is a last div of last file. and this is also partial files.</p>\n</div>\n";
},"useData":true});

this["JST"]["templates/main.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n"
    + ((stack1 = container.invokePartial(partials.sidebar,depth0,{"name":"sidebar","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div id=\"address-template\">\n  <h3>Address</h3>\n      You can find me in "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ". My address is "
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.street || (depth0 != null ? depth0.street : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data}) : helper)))
    + ".\n      My post-office is "
    + alias4(((helper = (helper = helpers.postoffice || (depth0 != null ? depth0.postoffice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postoffice","hash":{},"data":data}) : helper)))
    + ".<br><br><br>\n  <button id=\"hidefirst\" onclick=\"about();\" name=\"About\" value=\"About\">About</button>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.home,depth0,{"name":"home","data":data,"indent":" ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div id=\"last-child\">\n    <h4>Hello..This is the last div of this "
    + alias4(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"file","hash":{},"data":data}) : helper)))
    + " file.</h4>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.last,depth0,{"name":"last","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<br><br><br>\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["templates/sidebar.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"sidebars\">\n  <aside>\n      <ul>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#about\">Services</a></li>\n        <li><a href=\"#about\">Clients</a></li>\n        <li><a href=\"#about\">Contact</a></li>\n      </ul>\n  </aside>\n</div>\n";
},"useData":true});