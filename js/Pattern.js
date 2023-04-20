function ktraTen() {
    let ten = document.getElementById("txtHoTen").value.trim();
    if (ten.length == 0) {
      document.getElementById("rqsName").innerHTML = "Vui lòng nhập tên của bạn";
      return false;
    } else if (ten.split(/\s+/).length < 2) {
      document.getElementById("rqsName").innerHTML = "Tên phải bao gồm ít nhất hai từ";
      return false;
    } else if (ten.length > 100) {
      document.getElementById("rqsName").innerHTML = "Tên quá dài";
      return false;
    } else if (!/^(([a-zA-Z]+) +)+[a-zA-Z]+$/.test(ten)) {
      document.getElementById("rqsName").innerHTML = "Tên không được chứa kí tự đặc biệt";
      return false;
    } else {
      document.getElementById("rqsName").innerHTML = "";
      return true;
    }
  }


  function ktraEmail(){
    let email = document.getElementById("txtEmail").value.trim();
    let pattern = /^[\w-\.]+@(gmail|yahoo|student\.iuh\.edu\.vn)\.com$/;
    if(email.length == 0){
        document.getElementById("rqsEmail").innerHTML = "Vui lòng nhập email của bạn";
        return false;
    }else if(!pattern.test(email)){
        document.getElementById("rqsEmail").innerHTML = "Email không hợp lệ";
        return false;
    }else{
        document.getElementById("rqsEmail").innerHTML = "";
        return true;
    }
  }

  function ktraMK(){
    const mk = document.getElementById("psw").value.trim();
    const pattern = /^(?=.*[a-zA-Z])(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{6,}$/;
  
    if (mk.length === 0) {
      document.getElementById("rqsMK").innerHTML = "Vui lòng nhập mật khẩu";
      return false;
    }
  
    if (mk.length < 6) {
      document.getElementById("rqsMK").innerHTML = "Mật khẩu phải có ít nhất 6 kí tự";
      return false;
    }
  
    if (!pattern.test(mk)) {
      document.getElementById("rqsMK").innerHTML = "Mật khẩu phải chứa ít nhất 1 chữ cái và 1 kí tự đặc biệt";
      return false;
    }else{
        document.getElementById("rqsMK").innerHTML = "";
        return true;
    }
  }

  function ketQua() {
    if(ktraTen()&&ktraMK()&&ktraEmail()){
      $('#myModal').modal('hide');
      let modal = document.getElementById('register-modal');
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
    }
  }

  function dongModal(){
    $("#register-modal").remove();
  }
