
  var firebaseConfig = {
    apiKey: "AIzaSyBRsiJcZQMNyuZA7PZaF76ZcvZ7uejnuBc",
    authDomain: "lmsp-55cd1.firebaseapp.com",
    databaseURL: "https://lmsp-55cd1.firebaseio.com",
    projectId: "lmsp-55cd1",
    storageBucket: "lmsp-55cd1.appspot.com",
    messagingSenderId: "756308246821",
    appId: "1:756308246821:web:f4289bbf21e28759c29acc",
    measurementId: "G-F6D9DG5P1D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);








var data_json = {}


function loaddata(){

firebase.firestore().collection("clg_data").doc(getdata['col']).get().then((doc)=>{

if(doc.exists){

data_json = doc.data()
usedata()
}else{

toast("No data found");

}

})

}


function usedata(){

var allcs = Object.keys(data_json);
var ed ="",mj=0;
for(x in allcs){

if(mj ==0){
ed += "<option value='select'>select course</option>"
}

ed += "<option value='"+allcs[x]+"'>"+allcs[x]+"</option>"
mj++
}

$("#ttgroup").html(ed)

$("#ttyear").hide()
$("#ttsection").hide()

}




async function toUpperClass(grp,ysec){

return await new Promise((resolve,reject)=>{


firebase.firestore().collection("time_table").doc(getdata['col']).collection(grp).doc(ysec).get().then((doc)=>{

 if (doc.exists) {

resolve({status:true,data:doc.data()})

}else{
resolve({status:false,reason:"Section not found"})
}

}).catch((err)=>{

console.log(err)

})


})


}