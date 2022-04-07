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


window.onload = function(){
    IndexAPI.log.info('"IndexAPI" is initialized!');
    //favicon.js initialized?
    if(typeof favicon.animate != 'undefined' && typeof favicon.animate == 'function'){
        IndexAPI.log.info('"favicon.js" is initialized!');
    } else {
        IndexAPI.log.error('"favicon.js" is not initialized yet! Some functions will not work properly as a result. Please enter the following code before initializing this code: \n <script src="https://unpkg.com/favicon.js/dist/favicon.min.js"></script> <!-- Documentation at: https://github.com/dlom/favicon.js -->');
    };
    //SweetAlerts initialized?
    if(typeof swal != 'undefined' && typeof swal == 'function'){
        IndexAPI.log.info('"SweetAlerts" is initialized!');
    } else {
        IndexAPI.log.error('"SweetAlerts" is not initialized yet! Some functions will not work properly as a result. Please enter the following code before initializing this code: \n <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Documentation at: https://sweetalert.js.org/guides/ -->');
    };
    //Is your onLoad-funktion initialized?
    if(typeof onLoad != 'undefined' && typeof onLoad == 'function'){
        onLoad();
    };
}

//!!! CODE !!!
//Don't use alpha or beta features if you don't know what you're doing! This functions are usually not ready yet. You could also use deprecated functions, but that is not recommended!
const IndexAPI = {
    version: "0.1 Alpha",
    author: "JH-Web",
    configure: {
        isConfigurationFileSetted: false,
        file: function(sourceUrl){
            var js;
            var jsComment;
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
            IndexAPI.configure.isConfigurationFileSetted = true;
        }
    },
    plugins: {
        isPluginFileSetted: false,
        path: "",
        configure: {
            plugins: [],
            path: function(path){
                var pluginJs;
                var pluginJsComment;
                pluginJs = document.createElement('script');
                pluginJs.setAttribute('src', path + '/configuration.js');
                pluginJsComment = document.createComment(' Documentation and examples at: https://github.com/JHubi1/IndexAPI ');
                pluginJs.appendChild(pluginJsComment);
                document.getElementsByTagName('head')[0].appendChild(pluginJs);
                IndexAPI.plugins.isPluginFileSetted = true;
                IndexAPI.plugins.path = path;
            },
            activate: function(verificationCode){
                if(IndexAPI.plugins.isPluginFileSetted == true){
                    var authId;
                    var element;
                    if(pluginConfiguration.verificationConfigurations(verificationCode) == true){
                        for(var i = 0; i < pluginConfiguration.activatedPlugins.length; i++){
                            authId = pluginConfiguration.activatedPlugins[i];
                            if(pluginConfiguration.plugins[authId] != undefined){
                                for(var ia = 0; ia < pluginConfiguration.plugins.length; ia++){
                                    if(pluginConfiguration.plugins[ia].id == authId){
                                        IndexAPI.plugins.configure.plugins.push(pluginConfiguration.plugins[ia].command);
                                        //
                                        element = document.createElement("script");
                                        element.setAttribute("src", IndexAPI.plugins.path + "/" + pluginConfiguration.plugins[ia].mainPath);
                                        elementComment = document.createComment(' Documentation and examples at: https://github.com/JHubi1/IndexAPI ');
                                        element.appendChild(elementComment);
                                        document.getElementsByTagName('head')[0].appendChild(element);
                                    }
                                };
                            }
                        };
                    }else{
                        IndexAPI.log.error("A plugin-configuration file is needed for this command! Please add it with this command: IndexAPI.plugins.configure.path([PATH TO YOUR FILE])")
                        return "error";
                    }
                }else{
                    IndexAPI.log.error("A plugin-configuration file is needed for this command! Please add it with this command: IndexAPI.plugins.configure.path([PATH TO YOUR FILE])")
                    return "error";
                }
            },
        },
        get: {
            name: function(id){
                return pluginConfiguration.plugins[id].name
            },
            author: function(id){
                return pluginConfiguration.plugins[id].author
            },
            mainPath: function(id){
                return pluginConfiguration.plugins[id].mainPath
            },
            command: function(id){
                return pluginConfiguration.plugins[id].command
            },
        }
    },
    console: {
        element: "",
        add: function(id){
            if(typeof id != undefined && document.getElementById(id) != undefined){
                var css;
                var cssComment;
                var cssContent;
                var errortext;

                //Remove
                if(document.getElementById('indexapi-style') != undefined){
                    css = document.getElementById('indexapi-style');
                    css.remove();
                };
                //Add
                css = document.createElement('style');
                css.setAttribute('id', 'indexapi-style');
                cssContent = document.createTextNode('#' + id + '{background-color: darkgray; color: white; font-family: Terminal, monospace; border-style: solid; border-color: black; border-radius: 5px; overflow-y: scroll;}');
                css.appendChild(cssContent);
                cssComment = document.createComment(' Documentation and examples at: https://github.com/JHubi1/IndexAPI ');
                css.appendChild(cssComment);
                document.getElementsByTagName('head')[0].appendChild(css);

                IndexAPI.console.element = id;
                
                errortext = document.getElementById(id + '_errortext');
                errortext.remove();

                //Infotext...
                IndexAPI.console.addItem("IndexAPI: Version " + IndexAPI.version + "; by " + IndexAPI.author);
                IndexAPI.console.addItem("IndexAPI (c) 2022 by " + IndexAPI.author + " is licensed under CC BY-ND 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/4.0/");
                if(IndexAPI.configure.isConfigurationFileSetted == true){
                    IndexAPI.console.addItem("This version of IndexAPI was changed by " + IndexAPIConfigurations.modifier + " in our configuration file! New license: '" + IndexAPIConfigurations.license + "'");
                };
                //...until here.
                return true;
            }else{
                IndexAPI.log.error("'IndexAPI.console.add([ID])': 'id' is not set or an object with the name does not exist!")
                return false;
            }
        },
        //Add with: 'IndexAPI.console.add("console");'
        //Add with: 'IndexAPI.console.addItem("Test", "console-test");'
        //Easyer: 'IndexAPI.console.addItem("Test");'
        addItem: function(text, div){
            if(IndexAPI.console.element != ""){
                var element;
                var id = IndexAPI.console.element
                element = document.getElementById(id);
                var elementAdd = document.createElement("div");
                if(div != undefined){
                    elementAdd.setAttribute('id', div);
                }
                var elementAddContent = document.createTextNode(text)
                elementAdd.appendChild(elementAddContent)
                var elementAddComment = document.createComment("");
                elementAdd.appendChild(elementAddComment);
                var elementAdd2 = document.createElement("br");
                element.appendChild(elementAdd);
                element.appendChild(elementAdd2);
            }else{
                console.error("Error: Please set with the function 'IndexAPI.console.add([ID OF CONSOLE ELEMENT]);' the element that represents the console!\nHere is your Info: \n" + text)
            }
        },
        addItemIndexAPI: function(text){
            IndexAPI.console.addItem(IndexAPI.author + " IndexAPI: " + text);
        },
    },
    log: {
        info: function(error){
            console.log(IndexAPI.author + " IndexAPI: " + error);
        },
        error: function(error){
            console.error(IndexAPI.author + " IndexAPI: " + error);
        },
        warn: function(error){
            console.warn(IndexAPI.author + " IndexAPI: " + error);
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
            if(IndexAPI.configure.isConfigurationFileSetted == true && IndexAPIConfigurations.modifier != ""){
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
                favicon.change("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=16&url=http://" + iconUrl);
            },
        },
        tag: {
            set: function(id, newText){
                var element;
                element = document.getElementById(id);
                element.innerHTML = newText;
            },
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
                IndexAPI.log.error("'allowedDomains' is not correctly set!");
            };
        },
        key: function(key){
            if(IndexAPI.configure.isConfigurationFileSetted == true){
                for(var i = 0;i < IndexAPIConfigurations.licenseKeys.length; i++){
                    if(IndexAPIConfigurations.licenseKeys[i].id == key){
                        if(IndexAPIConfigurations.licenseKeys[i].rank != undefined && IndexAPIConfigurations.licenseKeys[i].rank == "admin"){
                            return "admin";
                        }else{
                            return true;
                        }
                    }
                };
                return false;
            }else{
                IndexAPI.log.error("A configuration file is needed for this command! Please add it with this command: IndexAPI.configure.file([PATH TO YOUR FILE])")
                return "error";
            }
        }
    }
}