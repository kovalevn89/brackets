module.exports = function check(str, bracketsConfig, index = 0) {
  let array = str.split('');

  if(array.length == 0 )
    return true;

  const configIndex = bracketsConfig.flat().indexOf(array[index]);

  if(configIndex % 2 ==0){
    if(array[index + 1] == bracketsConfig.flat()[configIndex + 1]){
        array.splice(index, 2);
        return check(array.join(''), bracketsConfig, 0);    
    } else {
        return check(array.join(''), bracketsConfig, index + 1); 
    }
  }

  return false;
}