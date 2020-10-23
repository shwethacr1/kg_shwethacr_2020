var name = 'enterastring'
function checkforunique(){
  var toArray = name.split('')
  toArray = toArray.sort()
  for(var i=0;i<toArray.length;i++){
    if(toArray[i] === toArray[i+1]) {
      return false
    }
    else {
      continue
    }
  }
  return true

}