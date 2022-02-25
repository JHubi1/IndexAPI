//Don't use beta features if you don't know what you're doing! Beta functions are usually not ready yet.
var IndexAPI = {
    version: "1.0 Eagle",
    author: "Jakob Hubert",
    log: {
        info: function(error){
            console.log("JH-Web IndexAPI: " + error);
        },
        error: function(error){
            console.error("JH-Web IndexAPI: " + error);
        },
        warn: function(error){
            console.warn("JH-Web IndexAPI: " + error);
        },
        confirm: {
            run: function(question){
                var input = confirm("Question:\n" + question);
                if (input == true){
                    var input = confirm("Sure?");
                    if (input == true){
                        alert("OK!");
                        return true;
                    }else{
                        alert("OK!");
                        return false;
                    }
                }else{
                    alert("OK!");
                    return false;
                }
            },
            extreme: function(question){
                var input = confirm("Question:\n" + question);
                if (input == true){
                    var input = confirm("Sure?");
                    if (input == true){
                        var input = confirm("Really?");
                        if (input == false){alert("Lucky..."); return false;}
                        var input = confirm("Are you sure?");
                        if (input == false){alert("Just yet..."); return false;};
                        var input = confirm("100%?");
                        if (input == false){alert("That was close..."); return false;};
                        alert("OK! You wanted it that way...");
                        return true;
                    }else{alert("OK!"); return false;};
                }else{
                    alert("What a pity...");
                    return false;
                }
            }
        }
    },
    info: {
        print: function(){
            alert("JH-Web IndexAPI is online!\nThank you for running and showing this dialogue!\nXOXO Jakob");
        }
    },
    lockSite: {
        run: function(message){
            do{
                alert("Site is locked:\n" + message);
            }while(true);
        },
        password: function(password){
            alert("This page has been locked!\nPlease enter the password on the next page.");
            var input = prompt("Enter password");
            if (input == password){
                alert("Correct password! Now you can enter the site.");
            }else{
                do{
                    alert("Site is locked: Wrong password! You have another try if you reload this page.")
                }while(true);
            }
        }
    },
    site: {
        title: {
            //Beta
            set: function(newTitle){
                document.title = newTitle;
            },
            //Beta End
        },
    },
}