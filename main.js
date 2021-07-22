Webcam.set({ width: 350, height: 300, dest_width: 350, dest_height: 300, image_format: 'png', png_quality: 90 });
 camera = document.getElementById("cam"); 
 Webcam.attach('#cam');

function take_snapshot() 
{ Webcam.snap(function (data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'; }); }

console.log('ml5_version : ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5H1RWP1cu/model.json', modelLoaded);
function modelLoaded()
{
    console.log('modelLoaded!');
} 

function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results)
{
  if(error){
      console.log(error);
  } else{
      console.log(results);
      document.getElementById("object").innerHTML=results[0].label;
      document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}