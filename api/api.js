const api ="https://qx.mohennet.xyz";
var  Pushlist = api +"/publish_list/?category_type=";
var  Login = api +"/wx_login/";
var  Registered = api + "/registered/";
var  Detail=api+"/publish_list/";
var Publish = api +"/publish/";
var Banner = api +"/banners/";
var Items=api+"/teams_list/";
var Escort=api+"/escort_list/";
var Content=api+"/content/";
var Getuser = api +"/get_user/"


module.exports = {
  Pushlist: Pushlist,
  Registered: Registered,
  Login: Login,
  Detail: Detail,
  Publish: Publish,
  Banner:Banner,
  Items: Items,
  Escort: Escort,
  Content: Content,
  Getuser: Getuser
}