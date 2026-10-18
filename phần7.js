user_dung = "admin"
pass_dung = "1234"

user_nhap = input("Nhập tên đăng nhập: ")
pass_nhap = input("Nhập mật khẩu: ")

if user_nhap == user_dung and pass_nhap == pass_dung:
    print("Đăng nhập thành công!")
    so_tay = {}
    
    while True:
        print("\n--- MENU SỔ TAY ---")
        print("1. Thêm ghi chú mới")
        print("2. Xem ghi chú")
        print("3. Thoát")
        
        chon = input("Bạn chọn số mấy (1, 2, 3)? ")
        
        if chon == "1":
            tieu_de = input("Nhập tên/tiêu đề ghi chú: ")
            noi_dung = input("Nhập nội dung ghi chú: ")
            so_tay[tieu_de] = noi_dung
            print("-> Đã lưu ghi chú thành công!")
            
        elif chon == "2":
            tieu_de = input("Bạn muốn xem ghi chú nào? Nhập tên: ")
            if tieu_de in so_tay:
                print(so_tay[tieu_de])
            else:
                print("Không tìm thấy ghi chú này!")
                
        elif chon == "3":
            print("Tạm biệt bạn 👋!")
            break
            
        else:
            print("Lựa chọn không hợp lệ, vui lòng chọn lại!")

else:
    print("Sai tên đăng nhập hoặc mật khẩu!")
