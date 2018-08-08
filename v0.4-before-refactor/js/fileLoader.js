function loadFile(path){
    let file;
	$.getJSON(path, function(data){
        console.log("Loading " + path);
        file = data;
    }).fail(function(){
        console.log("Failed to load " + path + "!");
    }).done(function(){
        console.log(path + " Loaded!");
    });
    return file;
}