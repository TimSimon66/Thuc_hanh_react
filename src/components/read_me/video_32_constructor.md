Nếu lúc nào đó ta vào một công ty dùng class component kiểu React, nếu như code theo chuẩn oop thì ta code như này chưa chuẩn, file DisplayInfor

- Lý do chưa chuẩn bởi vì chúng ta không có hàm tạo constructor trong class, nếu ta muốn khởi tạo một biến objec hoặc class thì buộc ta phải có hàm constructor, tui nhiên rằng code ta ko có constructor mà vẫn chạy được, bởi vì phía sau nó, thư viện làm hết cho chúng ta rồi.

- Ở đây thì ta có babel compiler làm cho chúng ta rồi, còn ở đây ta không cày đặt nó thông qua terminal, bởi vì khi chúng ta tạo một ứng dụng với thư viện create react app, thì nó đã tự động cấu hình ta phần này rồi. Nếu sau này mà ta code react thuần ấy thì đôi khi nó sẽ bị lỗi vì ta không dùng công cụ để set up

class DisplayInfo extends React.Component {

state = {
changeListUser : true
}

render() {
const { user } = this.props;
// const user = this.props.user;
console.log(user);
return (

    );

}
}

- Theo chuẩn oop thì ta sẽ có hàm constructor như này, hàm constructor này sẽ chuẩn bị dữ liệu cho cái componet phía dưới, khi ta khai báo super(props) thì đảm bảo sẽ nhận được những props từ cha truyền xuống

- Hàm constructor sẽ chạy trước hàm render()

class DisplayInfo extends React.Component {

constructor(props) {
super(props) có tác dụng kế thừa những props từ cha truyền xuống
this.state = {
changeListUser : true
}
}

render() {
const { user } = this.props;
// const user = this.props.user;
console.log(user);
return (

    );

}
}
