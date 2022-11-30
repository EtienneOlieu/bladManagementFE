class About{

constructor(){

}

convertURL(){
    let urlToBeConverted = document.getElementById('url-input').value;
    //Get first half of url
    const urlToArray = urlToBeConverted.split("file");

    //Isolate the id og the img
    let getIdOfImg = urlToArray[1].split("/");
    urlToArray[1] = 'uc?export=view&id=' + getIdOfImg[2];

    //Make one array - merge!
    let converted = [urlToArray[0], urlToArray[1]].join('');
    console.log(converted);
}



}

var aboutClass = new About();