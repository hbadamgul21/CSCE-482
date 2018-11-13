var s = document.getElementById("Save");

/*Note that this is just a test phase so far, but hopefully this 
  will help us for saving mp3 files. 

  I am using a FileSaver.js library for doing this, as I couldn't find
  a better choice. 
  
  As of now it just downloads a empty mmp3 file, 
  going to work on improving this to fit our goal.
  
  Feel free to change or add your own find for saving files...
*/

s.onclick = function() {
    //console.log("Working");
    var file = new File([" "], " ", {type: "audio/mp3"});
    saveAs(file);
};
