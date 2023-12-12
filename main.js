function startClassification(){

    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gcOJKTk90/model.json", modelRead)
}


    function modelRead(){
        classifier.classify(gotResult)
    }

    function gotResult(error,results){
        if(error){
            console.error(error)
        }
        console.log(results)
    }