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
  var x = document.querySelectorAll('#grand-node')
  console.log(x)
  for(var i = 0; i < x.length; i++){
    
    
  }
}