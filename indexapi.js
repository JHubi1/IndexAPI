////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                    //
//  IndexAPI (c) 2022 by JH-Web is licensed under CC BY-ND 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/4.0/  //
//                                                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var js;
var jsComment;

//favicon.js is initializing...
js = document.createElement('script');
js.setAttribute('src', 'https://unpkg.com/favicon.js/dist/favicon.min.js');
jsComment = document.createComment(' Documentation at: https://github.com/dlom/favicon.js ');
js.appendChild(jsComment);
document.getElementsByTagName('head')[0].appendChild(js);

//SweetAlerts is initializing...
js = document.createElement('script');
js.setAttribute('src', 'https://unpkg.com/sweetalert/dist/sweetalert.min.js');
jsComment = document.createComment(' Documentation at: https://sweetalert.js.org/guides/ ');
js.appendChild(jsComment);
document.getElementsByTagName('head')[0].appendChild(js);


console.log('JH-Web IndexAPI: "IndexAPI" is initialized!');

window.onload = function(){
    //favicon.js initialized?
    if(typeof favicon.animate != 'undefined' && typeof favicon.animate == 'function'){
        console.log('JH-Web IndexAPI: "favicon.js" is initialized!');
    } else {
        console.error('JH-Web IndexAPI: favicon.js is not initialized yet! Some functions will not work properly as a result. Please enter the following code before initializing this code: \n <script src="https://unpkg.com/favicon.js/dist/favicon.min.js"></script> <!-- Documentation at: https://github.com/dlom/favicon.js -->');
    }
    //SweetAlerts initialized?
    if(typeof swal != 'undefined' && typeof swal == 'function'){
        console.log('JH-Web IndexAPI: "SweetAlerts" is initialized!');
    } else {
        console.error('JH-Web IndexAPI: SweetAlerts is not initialized yet! Some functions will not work properly as a result. Please enter the following code before initializing this code: \n <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Documentation at: https://sweetalert.js.org/guides/ -->');
    }
}

//!!! CODE !!!
//Don't use alpha or beta features if you don't know what you're doing! This functions are usually not ready yet. You could also use deprecated functions, but that is not recommended!
const IndexAPI = {
    version: "0.1 Alpha",
    author: "Jakob Hubert",
    configure: {
        isFileSetted: false,
        file: function(sourceUrl){
            var js;
            //Remove
            if(document.getElementById('indexapi-configure') != undefined){
                js = document.getElementById('indexapi-configure');
                js.remove();
            };
            //Add
            js = document.createElement('script');
            js.setAttribute('src', sourceUrl);
            js.setAttribute('id', 'indexapi-configure');
            jsComment = document.createComment(' Documentation and examples at: https://github.com/JHubi1/IndexAPI ');
            js.appendChild(jsComment);
            document.getElementsByTagName('head')[0].appendChild(js);
            IndexAPI.configure.isFileSetted = true;
        }
    },
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
        title: "JH-Web IndexAPI is online!",
        text: "Thank you for running and showing this dialogue!\nXOXO Jakob\n",
        print: function(){
            alert(IndexAPI.info.title + "\n" + IndexAPI.info.text);
            if(IndexAPI.configure.isFileSetted == true && IndexAPIConfigurations.modifier != ""){
                alert("Info:\nThis version of IndexAPI has been modified (in our configuration file).\nModifier: " + IndexAPIConfigurations.modifier);
            };
        },
        printFine: function(){ //Not finished!
            swal(IndexAPI.info.title, IndexAPI.info.text, "info");
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
        icon: {
            set: function(newIcon){
                favicon.change(newIcon);
            },
            url: function(iconUrl){
                favicon.change("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=16&url=" + iconUrl);
            }
        },
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
        //ALPHA ; Don't use!
        licenseKeys: {
            $74543253679257248329: true
        },
        key: function(key){
            var path = "this.licenseKeys.$" + key;
            if(path){
                swal("True!")
            }else{
                swal("False!")
            }
        }
        //ALPHA END
    }
}