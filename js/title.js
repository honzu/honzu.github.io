var myVar = setInterval(change_name, 450);
var names = [" ","h","ho","hon","honz","honzu","honzuw","honzuwu","honzuwu.","honzuwu.w","honzuwu.wt","honzuwu.wtf","honzuwu.wt","honzuwu.w","honzuwu.","honzuwu","honzuw","honzu","honz","hon","ho","h"];
var names_length = names.length;
var i = 0;
function change_name() {
  document.title = names[i];
  i++;
  if (i == names_length) {
    i=0;
  }
}