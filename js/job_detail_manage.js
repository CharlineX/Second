/**
 * Created by Administrator on 2017/6/5 0005.
 */
//职位详情页福利待遇按钮点击事件
var welfare_btn = $(".welfare_btn");
welfare_btn.click(function () {
    if(!$(this).hasClass("btn-primary")){
        $(this).addClass("btn-primary");
    }
    else{
        $(this).removeClass("btn-primary");
    }
})