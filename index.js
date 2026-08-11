function gen(){
  const allChars = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];
  let pass1 = document.getElementById("pass1");
  let pass2 = document.getElementById("pass2");
  pass1.textContent= "";
  pass2.textContent= "";
  for (let i = 0;i<15;i++){
    let randomnum = Math.floor(Math.random()*allChars.length)
    pass1.textContent+=allChars[randomnum];
  }
  for (let i = 0;i<15;i++){
    let randomnum = Math.floor(Math.random()*allChars.length)
    pass2.textContent+=allChars[randomnum];
  }
}
