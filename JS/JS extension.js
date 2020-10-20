function checkFile(){
    var filename;
    filename = document.getElementById('file').value;
    console.log(filename);
    var ext = filename.split('.')[1];
    console.log(ext);  
    var selExt = document.getElementById('selectOpt').value;
    console.log(selExt);
    if(ext == selExt)
    {
        alert('File selection over');
    }
    else{
        alert('You selected a wrong file');
    }
}
