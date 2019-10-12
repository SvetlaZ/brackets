module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false; 
  }

  let check = true;

  while (check) {
    check = false;
    for (let i = 0; i < bracketsConfig.length; i++) {
      let bracket = bracketsConfig[i][0] + bracketsConfig[i][1];
      let length = str.length;
      str = str.replace(bracket, '');
        if (str.length !== length) {
          check = true;
        }
    }
  }
  return str.length ? false : true;
}
