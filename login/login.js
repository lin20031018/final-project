function chkPwd() {
    var thePwd = document.getElementById("password").value;
    var thePwd01 = document.getElementById("password_check").value;
    var flag1 = false, flag2 = false;
    if (thePwd == "" || thePwd01 == "")
    alert("不可空白");

    else if(thePwd.length>=6){

        for (i = 0; i < thePwd.length; i++) {

            var theChar = thePwd.substr(i, 1).toUpperCase();

            //var theChar = thePwd[i].toUpperCase();

            if ("A" <= theChar && theChar <= "Z")

                flag1 = true;

            else if (0<= theChar && theChar<=9)

                flag2 = true;

            if (flag1 == true && flag2 == true)

                break;

        }
        if ( thePwd != thePwd01)
        alert("密碼不一致")

        if (flag1 && flag2 && thePwd == thePwd01){
            alert("可以使用");
        }
        if (!flag1 || !flag2)
            alert("密碼須包含至少一個字母與一個數字")
    }
    else{
        alert("長度不正確")
    }
    



}

function login_in() {
    var id = document.getElementById("id").value;
    var pwd = document.getElementById("password").value;
    if (id=="" || pwd=="")
        alert("不可空白");
}