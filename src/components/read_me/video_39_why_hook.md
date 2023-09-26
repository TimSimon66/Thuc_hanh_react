- Tại sao ta phải dùng hook trong khi ta có class component rồi
- Có một vấn đề như này, công nghệ thì nó thay đổi liên tục. Câu chuyện ngày xưa ấy, thằng Facebook nó không nghĩ rằng tương lai có cả tỷ người dùng đâu, ban đầu thì mình nghĩ rằng là nó chỉ đặt mục tiêu vài triệu thôi sau này đến hàng trăm triệu là quá chi là tuyệt vời rồi.
- Tuy nhiên sau này nó có cả tỷ người dùng, việc mà React hook ra đời là giúp khắc phục một vài nhược điểm mà class nó tồn động
- Một vài nhược điểm tồn động của class mà React cần giải quyết
- Ví dụ, với React class ta cần phải khai báo state, ta cần hình dung là một biến state sẽ bao gồm tất cả thông tin của component đấy, tuy nhiên rằng có một vấn đề, khi component của ta lớn lên ấy.
- Trong thực tế khi ta đi làm thì không phải một component nó sẽ chứa 3 state vd

      State = {
      name : "",
      address : "",
      age : "",

  }

- Trong thực tế, sẽ có một component chứa 150 thuộc tính, vd ta điền form chẳng hạn, mỗi một form là một thuột tính. Và ta muốn sử dụng tất cả thuộc tính đấy để gọi API, gọi sang các màn hình khác nhau. Đôi khi ta có một form trên 100 thuộc tính chẳng hạn, sẽ khá cồng kềnh. Một component của ta sẽ code 3000 hoặc 4000 dòng là bình thường
- Khi code của ta tính hàng nghìn dòng rồi thì ko ai muốn đọc code của ta nữa, vậy nên nó sẽ lòi ra vấn đề không ai có thể đảm bảo hiệu năng của nó, chúng ta không thể bảo trì được nếu sau này ta muốn phát triển thêm
- React hook ra đời để nó đi ngược lại tư duy đó, nếu như Facebook không chia nhỏ component ra, không tái sử dụng code ấy. Thì với sức tải cả tỷ người dùng thì gần như là ta muốn tối ưu mọi thứ nhất có thể, đấy là lí do tại sao Facebook chia nhỏ ra
- Vd ta có một cái thuộc tính avatar trong một state

      State = {
      name : "",
      avatar : "",
      address : "",
      age : "",

  }

- Nếu như avatar của ta trong state đó thì nó sẽ gắn liền với component AddUserInfor, chúng ta không thể tách được
- Tuy nhiên với hook thì mọi thứ sẽ tách nhỏ ra

  const[hideShowUser, setHideShowUser] = useState(true);

- Việc ta gộp chung hay tách nhỏ thì đều là ưu nhược điểm của nó thôi, nhưng bài toán mà Facebook gặp phải là nó cần phải tách nhỏ ra thì nó mới tái sử dụng được
- Với việc ta tách nhỏ ra bằng cách sử dụng hook thì nó mang lại nhiều lợi ích hơn. Đấy là lí do vì sao Facebook chuyển sang dùng hook, giúp ta code ít đi, tái sử dụng code, nâng cao hiệu năng ứng dụng
- Hiện tại version React ta đang xài là 18.2.0, tuy nhiên sự ra đời của hook là phiên bản lớn hơn hoặc bằng 16.8, version 16.8. ra đời vào cuối 2018
- Sẽ có vài công ty sử dụng version nhỏ hơn 16.8, có 2 lý do
  Lí do 1: Công ty bảo trì các dự án trước năm 2018, bắt buộc phải dùng react class
  Lí do 2: Công ty phát triển product, tuy nhiên để tiết kiệm chi phí thì nó lại base(dựa vào) những code mà đã có sẵn rồi, công ty không muốn code lại. Lấy sản phẩm cũ đập vào sản phẩm mới
- Tại sao chúng ta lại chuyển dịch theo React, bởi vì Facebook thay đổi, nên ta phải thay đổi theo. Nếu ta không thay đổi theo thì sẽ đến một lúc nào đấy nó ngừng hỗ trợ class hay rằng là hook có chức năng gì siêu việt xảy ra, như vậy thì chúng ta là người bị thiệt
- Các công ty sử dụng hook không phải rằng hook code siêu việt hơn class, mà bởi vì rằng Facebook chuyển dịch nên ta phải chuyển dịch theo
- Hook chính là một móc câu, khi ta dùng function component, bản chất componet của chúng ta chỉ là function thôi, khi nó là function thì nó chỉ chạy từng dòng một thôi, chạy từ trên xuống dưới. Nhưng khi ta dùng React thì ta để ý hàm render() được gọi nhiều lần, cũng như ta có lifecycle, là mỗi một lần ta thay đổi thuộc tính của nó, thì nó muốn thay đổi theo. Làm sao ta có thể làm được điều đấy, đấy là lí do hook ra đời, hook sẽ là móc câu và móc vào componet cho chúng ta.
- Hook ở đây chỉ có một nhiệm vụ duy nhất thôi là cắm vào componet của ta, khi nào ta cần thì hook sẽ gọi tới
