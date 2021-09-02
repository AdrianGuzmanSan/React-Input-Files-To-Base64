
function App() {

  const convertirABase64 = (archivo) => {
    //Las siguientes líneas son para convertir varios archivos a Base64
  // const convertirABase64 = (archivos) => {
    // Array.from(archivos).forEach(archivo =>{
      var reader = new FileReader();
      // Archivo debe estar en el índice [0] para que no aparezca el error: 
      // TypeError: FileReader.readAsDataURL: Argument 1 does not implement interface Blob.
      // files property is a FileList (an array like structure), 
      // you need to access and pass the individual file objects in that list, eg readAsDataURL(files[0])
      reader.readAsDataURL(archivo[0]);
      reader.onload=function(){
        var arrayAuxiliar=[];
        var base64 = reader.result;
        console.log(base64);
        // Cortar el string a partir de la coma
        arrayAuxiliar=base64.split(',');
        console.log(arrayAuxiliar[1]);
      }
    // })
  }

  return (
    <div className='App'>
      <input type='file' onChange={(e) => convertirABase64(e.target.files)}/>
    </div>
  );
}

export default App;
