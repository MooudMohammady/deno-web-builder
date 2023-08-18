const postHtml = (req, res) => {
     // Recieved data from the request
     const html = req.body.data;

     // File name to be saved into ./files
     const fileName = Date.now();
 
     // Path for the file to be saved in. formatted into html
     const path = `./files/${fileName}.html`;
 
     // Path to access the file by requesting it from the server
     const serverPath = `/${fileName}.html`
 
     // Save the file into the path given above and then send the response
     fs.writeFile(path, html ,(err) => {
 
         //check for erros
         if(err) res.status(400).json({error: err});
 
         //send the response
         res.status(200).json({file_name: `${fileName}.html`, path: serverPath, host: req.get('host'), data_recieved:html})
     })
};

module.exports = {postHtml}