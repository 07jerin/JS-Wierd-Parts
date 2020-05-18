/*
(function(window, $){
    this.sayHi = function(name){
        console.log("Hello " + name)
    }
    window.G$ = this;
}(window, $));
*/


(function (global, $) {
    
        var Greeter = function (fName, lName, lang) {
            return new Greeter.init(fName, lName, lang);
        }
        
        var greetings = {
            en : "Hello : ",
            es : "Hola :",
            fr : "Bonjour"
        }
        
        
        Greeter.prototype = {
            fullName: function () {
                return this.fName + " " + this.lName;
            }, 
            _greet : function(){
              return  greetings[this.lang] + "  " + this.fullName()
            },
            greet: function () {
                console.log(this._greet());
                return this; // Return this to enable chaining
            },
            setLang: function (lang) {
                this.lang = lang;
                return this;
            },
            HTMLGreet :function(selector){
                if(!selector){
                    throw ("Selector missinh")
                }else if(!$){
                    throw ("JQuery missinh")
                }
                
                $(selector).html(this._greet());
            }
        };
    
        Greeter.init = function(fName, lName, lang){
          var self = this;
            self.fName = fName || "";
            self.lName = lName || "";
            self.lang = lang || "en";
              
        }
        
        Greeter.init.prototype = Greeter.prototype;
    
        global.G$ = global.Greeter =  Greeter;
    
    }(window, $));