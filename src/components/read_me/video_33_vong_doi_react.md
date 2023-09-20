- Trong file DisplayInfo ta sẽ tạo ra hàm componentDidMount, và thêm console.log(">>> call me componentDidMount"), tương tự thế, trong hàm constructor và render ta sẽ có một dòng console.log call me với cái tên của hàm

- Hàm componentDidMount không cần tham số đầu vào

- Ta mở tab console, ta sẽ thấy thứ tự tạo. Đầu tiên nó sẽ chạy vào hàm constructor, để ta có thể khởi tạo state, tiếp theo ta sẽ chạy vào hàm render và cuối cùng ta chạy vào hàm didMount. Vậy thì vì sao hàm didMount lại chạy theo hàm render, hàm didMount sao này ta sẽ thường gọi API ở bên trong hàm didMount này, cũng như rằng là ta thao tác với cây DOM ấy, muốn thao tác tới những phần tử HTML này, thì ta cần chờ xem React đã nhúng vào cho chúng ta chưa, tức là những phần tử ấy có sẵn hay chưa thì ta mới thao tác. Đấy là lí do tại sao ta có hàm didMount chạy sao hàm render. Việc chạy hàm render sẽ giúp tất cả đống code HTML của ta vào cây DOM của React, như vậy web của ta mới có dữ liệu
- Giờ ta muốn khi web site chạy rồi, tiêu đề của web site sẽ thay đổi
  componentDidMount(){
  console.log('>> Call me didMont')
  setTimeout(() => {
  document.title = "Tim Hudson"
  }, 3000)
  }
- Ở đây nếu ta muốn vào từng trang website sẽ hiển thị tiêu đề theo từng trang thì ta cần chờ cho website load xong đã rồi sau đó ta thay đổi tiêu đề. Như ở trên ta setTimeout trong hàm componentDidMount để khi hàm chạy xong thì 3 giây sau tiêu đề trang web sẽ thay đổi. Vì hàm componentDidMount chạy sau hàm render, nên ta setTimeout trong hàm này
- Thì sau nay ta sẽ dùng hàm componentDidMount này để ta có thể gọi API, sau khi ta gọi được API ta sẽ cập nhật lại biến state, props, thì ngay lập tức giao diện của ta sẽ được cập nhật theo. Hàm componentDidMount sẽ được chạy khi ta có dữ liệu trong DOM

  2). componentDidUpdate

- componentDidUpdate cần được truyền tham số đầu vào, nếu ta không truyền tham số thì hàm này chả có tác dụng gì cho chúng ta cả
  componentDidUpdate(){
  console.log('>> Call me didUpdate')
  }
- Ta console và xem trong tap Console, ta sẽ thấy ko có dòng Call me didUpdate, lí do là vì cái hàm didUpdate chạy khi và chỉ khi cái componet của ta nhận được cái props mới hoặc nó cập nhật lại state
- Trong file DisplayComponent có 2 props là, handleDeleteUser và user,
  để cho 2 cái props này chạy vào didUpdate. Ví dụ ta làm ẩn user trên trang web để thay đổi state của component nó cũng chạy vào hàm didUpdate thôi

componentDidUpdate(prevProps, prevState, snapshot) {
console.log('>> Call me didUpdate')
}

- Ta truyền 3 tham số vào hàm componentsDidUpdate, prevProps(quá khứ ta có cái gì) tương tự với prevState
- Giờ ta sẽ thêm user hoặc ẩn user, thì hàm componentDidUpdate của ta sẽ chạy
- Hàm cpmponentDidUpdate có tác dụng sau này nếu component ta update tới một thời điểm nào đấy ta sẽ làm một cái gì đấy. Ví dụ ở đây ta sẽ check một điều kiện, nếu ta có 5 user thì sẽ hiện lên bản thông báo bạn có 5 user

componentDidUpdate(prevProps, prevState, snapshot) {
console.log('>> Call me didUpdate', this.props, prevProps)

}

- This.props là cái hiện tại ta đang có, prevProps là cái quá khứ, prevProps là của React cho ta. Giá trị quá khứ sẽ đưa lại cho chúng ta dùng, giá trị hiện tại ta sẽ lấy thông qua key word

  componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('>> Call me didUpdate', this.props, prevProps)
  if(this.props.user !== prevProps.user) {
  if(this.props.user.length === 5){
  alert("You got 5 user")
  }
  }
  }

- Vòng if đầu tiên là ta check nếu số lượng user hiện tại khác số lượng user quá khứ
- Hàm componetDidUpdate này cho ta biết component một khi đã được cập nhật rồi thì sẽ có những dữ liệu nào và ta muốn làm gì những dữ liệu đấy
