(function () {
  function loadjson(file,callback){
    var rawFile=new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET",file,true);
    rawFile.onreadystatechange = function(){
      if(rawFile.readyState === 4 & rawFile.status =="200"){
        callback(rawFile.responseText);

      }

    }
    rawFile.send(null);

  }
  loadjson("Resume.json",function (text) {
  var data=JSON.parse(text);
  console.log(data);
  leftData(data.profile);
  rightData(data.Education);
  skills(data.skills);
});
var left=document.querySelector(".leftDiv");
var right=document.querySelector(".rightDiv");

function leftData(leftdetails) {

  var image=document.createElement("img");
  image.src=leftdetails.image;
  image.alt="profile image";
  left.appendChild(image);

  var name=document.createElement("h2");
  name.textContent=leftdetails.name;
  left.appendChild(name);

  var comname=document.createElement("h3");
  comname.textContent=leftdetails.comname;
  left.appendChild( comname);


 var mob=document.createElement("h5");
  mob.textContent=leftdetails.number;
  left.appendChild( mob);

  var email=document.createElement("h5");
   email.textContent=leftdetails.mail;
   left.appendChild(email);

   //rightDiv data

var co=document.createElement("h1");
co.textContent="career Object";
right.appendChild(co);
right.appendChild(document.createElement("hr"));

let p=document.createElement("p");
p.textContent=leftdetails.career;
right.appendChild(p);
}
//rightDiv creation
// create Educational leftdetails
function rightData(edu){
  var Education=document.createElement("h1");
   Education.textContent="Educational Information";
right.appendChild(Education);

right.appendChild(document.createElement("hr"));
for (i in edu) {
  let h3=document.createElement("h3");
  h3.textContent=edu[i].degree;
  right.appendChild(h3);
  let ul=document.createElement("ul");
  right.appendChild(ul);
  // create list's (li1, li2 & li3)
  let li1=document.createElement("li");
  li1.textContent="college: "+edu[i].college;
  ul.appendChild(li1);

  let li2=document.createElement("li");
  li2.textContent="Branch: "+edu[i].branch;
  ul.appendChild(li2);

  let li3=document.createElement("li");
  li3.textContent="Marks: "+edu[i].marks;
  ul.appendChild(li3);

  let li4=document.createElement("li");
  li4.textContent="Education Completion: "+edu[i].endDate;
  ul.appendChild(li4);

}
}
function skills(skill){
  var sk=document.createElement("h1");
  sk.textContent="skills";
  right.appendChild(sk);
  var p=document.createElement("p");
  p.textContent=skill.OS;
  right.appendChild(p);


    var p1=document.createElement("p1");
    p1.textContent=skill.PS;
    right.appendChild(p1);
}
}) ()
