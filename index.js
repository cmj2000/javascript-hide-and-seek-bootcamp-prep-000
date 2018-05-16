function getFirstSelector(selector){
  const x = document.querySelector(selector)
  return x
}

function nestedTarget(){
  const x = document.querySelector("#nested .target")
  return x
}

function increaseRankBy(n){
   var x = document.querySelectorAll(".ranked-list")
  
  for(var i = 0; i < x.length; i++){
    var y = x[i].querySelectorAll("li")
    for(var j = 0; j<y.length; j++){
      y[j].innerHTML = parseInt(y[j].innerHTML) + n
      
    }
  }
}

function deepestChild(){
  //var x = document.querySelector('#grand-node div div div div')
  
  var x = document.querySelector("div#grand-node")
  console.log(x)
 return x
}