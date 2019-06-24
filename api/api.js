const api ="https://qx.mohennet.xyz";
var  Pushlist = api +" /publish_list/?category_type=";
var  Login = api +"/wx_login/";
var  Registered = api + "/registered/"


module.exports = {
  Pushlist: Pushlist,
  Registered: Registered,
  Login: Login
}