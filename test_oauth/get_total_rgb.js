function get_total_rgb(sta_rgb_res)

{

var total_rgb=new array();

for(var i = 0;i < sta_rgb_res.size();i++)
{
total_rgb[i]=sta_rgb_res[i].r+sta_rgb_res[i].g+sta_rgb_res[i].b;


}


return total_rgb;






}