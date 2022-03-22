////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                    //
//  IndexAPI (c) 2022 by JH-Web is licensed under CC BY-ND 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/4.0/  //
//                                                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//favicon.js initialized?
if(typeof favicon.change != 'undefined' && typeof favicon.change == 'function'){
//if(typeof favicon.change != 'undefined' && typeof favicon.change == 'function'){
    console.log('JH-Web IndexAPI: favicon.js is initialized!');
} else {
    console.error('JH-Web IndexAPI: favicon.js is not initialized yet! Some functions will not work properly as a result. Please enter the following code before initializing this code: \n <script src="https://unpkg.com/favicon.js/dist/favicon.min.js"></script> <!-- Documentation at: https://github.com/dlom/favicon.js -->');
}
//SweetAlerts
if(typeof swal != 'undefined' && typeof swal == 'function'){
    console.log('JH-Web IndexAPI: SweetAlerts is initialized!');
} else {
    console.error('JH-Web IndexAPI: SweetAlerts is not initialized yet! Some functions will not work properly as a result. Please enter the following code before initializing this code: \n <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Documentation at: https://sweetalert.js.org/guides/ -->');
}

//Don't use alpha or beta features if you don't know what you're doing! This functions are usually not ready yet. You could also use deprecated functions, but that is not recommended!
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
    },
    confirm: {
        run: function(question){
            var input = confirm("Question:\n" + question);
            if(input == true){
                var input = confirm("Sure?");
                if(input == true){
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
            if(input == true){
                var input = confirm("Sure?");
                if(input == true){
                    var input = confirm("Really?");
                    if(input == false){alert("Lucky..."); return false;}
                    var input = confirm("Are you sure?");
                    if(input == false){alert("Just yet..."); return false;};
                    var input = confirm("100%?");
                    if(input == false){alert("That was close..."); return false;};
                    alert("OK! You wanted it that way...");
                    return true;
                }else{alert("OK!"); return false;};
            }else{
                alert("What a pity...");
                return false;
            }
        }
    },
    info: {
        print: function(){
            alert("JH-Web IndexAPI is online!\nThank you for running and showing this dialogue!\nXOXO Jakob");
        },
        printFine: function(){
            swal("JH-Web IndexAPI is online!", "Thank you for running and showing this dialogue!\nXOXO Jakob", "info")
        },
    },
    lockSite: {
        run: function(message){
            do{
                alert("Site is locked:\n" + message);
            }while(true);
        },
        password: function(password){ //Password is openly visible! Do not use your own passwords!
            alert("This page has been locked!\nPlease enter the password on the next page.");
            var input = prompt("Enter password");
            if(input == password){
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
            set: function(newTitle){
                document.title = newTitle;
            },
        },
        //ALPHA
        icon: {
            set: function(newIcon){
                favicon.change(newIcon);
            },
            url: function(iconUrl){
                favicon.change("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=16&url=" + iconUrl);
            }
        },
        //ALPHA END
    },
    license: {
        domain: function(allowedDomains, block){
            if(allowedDomains != null && Array.isArray(allowedDomains)){
                var domain = window.location.host;
                if(allowedDomains.includes(domain) == true){
                    return true;
                }else{
                    if(block != false | block != ""){
                        window.location.replace("https://jh-web.xyz/api/v2/index-api/errors/license/domain/block.html");
                    }else{
                        return false;
                    };
                };
            }else{
                console.error("JH-Web IndexAPI: 'allowedDomains' is not correctly set!");
            };
        },
        //BETA
        licenseKeys: {
                $74543253679257248329: true
            },
            key: function(key){
            var path = "this.licenseKeys.$" + key;
            if(path + key == true){
                document.write("<br>");
                document.write("True!")
            }else{
                document.write("<br>");
                document.write("False!")
            }
        }
        //BETA END
    }
}