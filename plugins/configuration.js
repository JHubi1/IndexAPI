const pluginConfiguration = {
    configurationVerificationId: "82867", //Enter a random verification code. This should be 5 characters long! It is needed to use this file! We recommend to take numbers!

    //Do not edit the following! For verification purposes only!
    verificationConfigurations: function(code){
        if(code.toString() == pluginConfiguration.configurationVerificationId.toString()){
            return true;
        }else{
            return false;
        };
    },

    //Enter here the ID of the plugins you want to use.
    activatedPlugins: [
        '1',
    ],

    //Enter the configurations of the plugins.
    plugins: [
        {
            id: 1,
            name: "PermissionAPI",
            author: "Jakob Hubert",
            mainPath: "permission-api/main.js",
            command: "PermissionAPI",
        },
    ]
}