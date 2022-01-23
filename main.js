//https://teachablemachine.withgoogle.com/models/OWAiZn-4L/
function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OWAiZn-4L/', {
        probabilityThreshold: 0.7
    }, modelReady);
}
function modelReady() {
    classifier.classify(gotResults)
}
Dog=0; Cat=0; 
function gotResults(error, results) {
if(error){
    console.error(error);
}
else{
    console.log (results);
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
          document.getElementById("result_confidence").innerHTML='Accuarcy'+(results[0].confidence*100).toFixed(2)+" %";
          document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
          document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
          Img=document.getElementById('Cat');
          Img1=document.getElementById('Dog');
          Img2=document.getElementById('Horse');
          Img3=document.getElementById('Crow');
          if(results[0].label=="meow"){
            Img.src='Cat.gif';
            Img1.src='Crow.jpg';
            Img2.src='Dog.jpg';
            Img3.src='Horse.jpg';
        }
        else if(results[0].label=="Caw"){
          Img.src='Cat.jpg';
          Img1.src='Crow.gif';
          Img2.src='Dog.jpg';
          Img3.src='Horse.jpg';
      }
     else if(results[0].label=="bark"){
          Img.src='Cat.jpg';
          Img1.src='Crow.jpg';
          Img2.src='Dog.gif';
          Img3.src='Horse.jpg';
      }
      else{
          Img.src='Cat.jpg';
          Img1.src='Crow.jpg';
          Img2.src='Dog.jpg';
          Img3.src='Horse.gif';
      }
}
}