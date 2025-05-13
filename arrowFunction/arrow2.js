const wordHandler = (option)=>{
    return option.fname + " file handle with wordHandler..";
}

const pdfHandler = (option)=>{
    return option.fname + " file handle with pdfHandler..";
}

const docxHandler = (option)=>{
    return option.fname + " file handle with docxHandler..";
}

const jpgHandler = (option)=>{
    return option.fname + " file handle with jpgHandler..";
}

var fileName = "test.pdf";
var ans;

if(fileName.endsWith(".word")){
    ans = wordHandler({
        fname:fileName,
        size:"1000kb"
    })
}
else if(fileName.endsWith(".pdf")){
    ans= pdfHandler({fname:fileName,size:"2000kb"})
}
else if(fileName.endsWith(".docx")){

    ans = docxHandler({fname:fileName,size:"3000kb"})
}
else if(fileName.endsWith(".jpg")){
    ans= jpgHandler({fname:fileName,size:"4000kb"})
}
else{
    console.log("File type not supported")
}

console.log(ans);
