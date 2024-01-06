function chkPwd() {
    var theId = document.getElementById("id").value;
    var thePwd = document.getElementById("password").value;
    var thePwd01 = document.getElementById("password_check").value;
    var flag1 = false, flag2 = false;
    
    
    if (thePwd == "" || thePwd01 == "" || theId == ""){
        alert("不可空白");
        return false;
    }
    
    

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
        if ( thePwd != thePwd01){
            alert("密碼不一致");
            return false;
        }
        

        if (flag1 && flag2 && thePwd == thePwd01){
            return true;
        }
        if (!flag1 || !flag2){
            alert("密碼須包含至少一個大寫字母與一個數字");
            return false;
        }
    }
    else{
        alert("長度不正確需至少為6位數");
        return false;
    }
    
   
}

function login_in() {
    var id = document.getElementById("id").value;
    var pwd = document.getElementById("password").value;
    if (id=="" || pwd=="")
        alert("不可空白");
        return false;
}

function a123(){
    let yn=document.getElementsByName("personal");
    let ynchk = false; 
        
        for (var i=0;i<yn.length;i++) {
            if (yn[i].checked) {
                ynchk = true;
                break;
            }
        }

        if(ynchk){
            return true;
        }else{
            alert("請圈選是否蒐集個人資料");
            return false;
        }

}