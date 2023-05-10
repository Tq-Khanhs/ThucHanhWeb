
    // Lấy tất cả các button "Thêm vào giỏ" trên trang
    var addToCartButtons = document.querySelectorAll('.chiTietSP input[value="Đặt ngay"]');
    
    
    // Đặt sự kiện click cho từng nút "Thêm vào giỏ"
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Lấy thông tin sản phẩm
            var productContainer = button.closest('.chiTietSP');
            var productImage = productContainer.querySelector('img').src;
            var productName = productContainer.querySelector('.nameSP').textContent;
            var productPrice = productContainer.querySelector('.gia').textContent;
            // Thêm sản phẩm vào giỏ hàng
            addToCart(productImage, productName, productPrice);
        });
    });
    
    // Hàm thêm sản phẩm vào giỏ hàng
    function addToCart(image, name, price) {
        // Thêm sản phẩm vào bảng giỏ hàng
        
        var addtr = document.createElement("tr");
        var trContent = '<tr><td><img src="'+image+'" alt=""></td><td>'+name+'</td><td><input type="button" value="-" onclick="decreaseValue(this)"><input type="text" value="1" class="quantityInput"><input type="button" name="" id="" value="+" onclick="increaseValue(this)"></td><td>'+price+'</td><td>'+price+'</td></tr>';
        addtr.innerHTML = trContent;
        var newWindow = window.open("thanhtoan.html");
        newWindow.onload = function() {
            // Select đến phần tử table bằng id "cartTable"
            var cartTable = newWindow.document.querySelector("#cartTable tbody");
            // Thực hiện các thao tác cần thiết trên phần tử này
            cartTable.innerHTML = "";
            cartTable.append(addtr);
            var ThanhTien = newWindow.document.querySelector("#ThanhTien");
            ThanhTien.innerHTML = price;
            var TongCong = newWindow.document.querySelector("#TongCong");
            TongCong.innerHTML = price;
          };
        ;
          
    }
    
   

    function decreaseValue(button) {
        var input = button.nextElementSibling; // Lấy ô input kế tiếp của nút -
        var value = parseInt(input.value); // Lấy giá trị hiện tại của ô input và chuyển đổi thành số nguyên
      
        if (value > 1) {
          value--; // Giảm giá trị nếu lớn hơn 1
        }
      
        input.value = value; // Gán giá trị mới cho ô input
        calculateTotal();
        calculateTotal1();
      }
      
      function increaseValue(button) {
        var input = button.previousElementSibling; // Lấy ô input trước đó của nút +
        var value = parseInt(input.value); // Lấy giá trị hiện tại của ô input và chuyển đổi thành số nguyên
      
        value++; // Tăng giá trị
      
        input.value = value; // Gán giá trị mới cho ô input
        calculateTotal();
        calculateTotal1();
      }


    function calculateTotal() {
        var rows = document.querySelectorAll("#GioHangTable tbody tr");
        rows.forEach(function(row) {
            var quantityInput = row.querySelector(".quantityInput");
            var quantity = parseInt(quantityInput.value);
            var priceCell = row.querySelector("td:nth-child(4)");
            var price = parseInt(priceCell.innerText.replace(/[^0-9]/g, ""));
            var totalCell = row.querySelector("td:nth-child(5)");
            var total = quantity * price;
            totalCell.innerText = total.toLocaleString() + " VNĐ";
        });
    }

    function calculateTotal1() {
        var rows = document.querySelectorAll("#cartTable tbody tr");
        var totalAmount = 0;
        rows.forEach(function(row) {
            var quantityInput = row.querySelector(".quantityInput");
            var quantity = parseInt(quantityInput.value);
            var priceCell = row.querySelector("td:nth-child(4)");
            var price = parseInt(priceCell.innerText.replace(/[^0-9]/g, ""));
            var totalCell = row.querySelector("td:nth-child(5)");
            var total = quantity * price;
            totalCell.innerText = total.toLocaleString() + " VNĐ";
            totalAmount += total;

        });
        var ThanhTien = document.getElementById("ThanhTien");
        var TongCong = document.getElementById("TongCong");
        ThanhTien.innerText = totalAmount.toLocaleString() + " VNĐ";
        TongCong.innerText = totalAmount.toLocaleString() + " VNĐ";
    }

    
      
    
