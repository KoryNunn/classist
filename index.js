var flatten = require('flatten');

module.exports = function(element){
    var lastClasses = [];

    return function(classes){
        if(!arguments.length){
            return lastClasses.join(' ');
        }


        if(!classes){
            classes = [];
        }



        if(!Array.isArray(classes)){
            classes = [classes];
        }

        classes = flatten(classes).join(' ').split(' ').filter(function(x){
            return x != null && x != '';
        });

        var currentClasses = element.className ? element.className.split(' ') : [];

        lastClasses.map(function(className){
            if(!className){
                return;
            }

            var index = currentClasses.indexOf(className);

            currentClasses.splice(index, 1);
        });


        currentClasses = currentClasses.concat(classes);
        lastClasses = classes;


        element.className = currentClasses.join(' ');
    };
};