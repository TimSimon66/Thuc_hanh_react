Video 26, giờ ta sẽ cập nhật lại ô input your name và your age, ta muốn khi người dùng nhập vào
thì nó sẽ hiện thị xuống bên dưới. Giờ ta sẽ phân tích việc này, bản chất của vấn đề thêm dánh sách của người dùng thì chúng ta cần cập nhật lại biến listUSer bên MyComponent, và ta cũng thấy listUser của ta đang được quản lí thông qua state của MyComponent và nó đang có 3 phần tử cố định, id 1, id 2, id 3. NẾu ta muốn khi ta ấn nút submit thì cái listUser bên dưới ta sẽ được cập nhật, nó giống như là ta sẽ thao tác được với mảng listUser, khi ta thêm mới một user ở ô input, thì ta sẽ đẩy thêm một phần tử nữa vào trong mảng listUser.

- Để làm được điều đấy, giờ ta sẽ truyền một funtion như một props, định nghĩa một hàm handleNewUser ở trong MyComponent, làm sao để truyền một function như một props, cũng dễ thôi
  <AddUserInfo handleNewUser={this.handleNewUser}></AddUserInfo>
  cái tên handleNewUser ta muốn đổi cũng đc, ta đặt trùng tên với hàm cho tiện thôi, có this vì ta đang thao tác bên trong component, this để tham chiếu tới hàm, nhưng sẽ ko phải là this.handleNewUser(), vì sao ta lại không có dấu đóng mở ngoặt, khi ko có dấu (), nó sẽ hiểu là ta tham chiếu tới hàm handleNewUser, nếu ta thêm (), nó sẽ hiểu là ta đang gọi hàm handleNewUser, khi ta gọi hàm, thì ngay tại đây
  <AddUserInfo handleNewUser={this.handleNewUser()}></AddUserInfo>
  nó sẽ fail, nếu ta thêm dấu (), nó sẽ hiểu rằng là ta sẽ sử dụng hàm đó ngay tại đây chứ không phải nó truyền từ thằng này sang thằng kia
- Giờ ta muốn khi ấn nút submit, thì list user ta sẽ đc cập nhật, ta vào file AddUserInfo, ở trong hàm handOnSubmit. ta thêm this.props chấm tới tên props ta tạo ra ở bên MyComponent this.props.handleNewUser({ })
  bên này hadleNewUser ta truyền dấu (), vì ta muốn thực thi nó, hay nói rằng ta sẽ chạy nó
- Bên MyComponet, ở hàm handleNewUser ta truyền một tham số, rồi console tham số đó  
  handleNewUser = (userObject) => {
  console.log(userObject);
  }
- Giờ ta sẽ truyền data đầu vào cho thằng con thông qua đối số và sẽ gọi ngược lên function handleNewUser ở thằng cha
- Ở AdduserInfor, hàm handleOnSubmit

handOnSubmit = (event) => {
event.preventDefault();
console.log(this.state);

    this.props.handleNewUser({
    // giờ ta sẽ truyền data đầu vào cho hàm handleNewUser, để bên thằng MyComponent, hàm handleNewUser sẽ nhận đc data từ AddUserInfor
    id : "hardcode",
    name : "Tim",
    age : 26
    // Tham số đầu vào của ta là một object
    })

};

- Giờ ta sẽ sửa lại một chút bên trong hàm handOnSubmit, ta muốn khi nhập user mới, id của ta sẽ là ngẫu nhiên, để tránh bị trùng id của những user bên trong state của MyComponent

handOnSubmit = (event) => {
event.preventDefault();
console.log(this.state);

    this.props.handleNewUser({
    id : Math.floor((Math.random() * 100)+ 1) + "random", + random ở đây để không phải bị trùng id với user của MyComponent
    name : this.state.name  // name ở đây ta sẽ lấy từ ô input user, nghĩa là khi user nhập tên như thế nào, thì ta sẽ đẩy xuống list với tên user như thế đó. Ta sẽ thấy rằng name và age của ta đang dựa vào state của react ở bên file addUserInfor
    age : this.state.age
    // Tham số đầu vào của ta là một object
    })

};

- Tới bước này, ta thử nhập tên và tuổi từ ô input sau đó ấn submit, ta sẽ thấy trong bảng cosole với tên và tuổi ta vừa nhập và id ngẫu nhiên. Lưu ý, ở đây ta phải console dữ liệu userObject ra mới thấy được
  handleNewUser = (userObject) => {
  console.log(userObject);
  }

- Giờ ta sẽ cập nhật lại list user ở dưới, ta cần phải nhớ, khi ta đổi state của react thì hàm render sẽ được gọi lại, khi hàm render gọi lại thì sẽ tạo cho ta cảm giác giao diện đc cập nhật lại. Vậy thì giờ ta cần cập nhật lại biến state lưu trữ array chứa những phần tử
  state = {
  listUser : [
  {id : 1, name : "TimSimon66", age : "16"},
  {id : 2, name : "Eniqueen", age : "30"},
  {id : 3, name : "VanTin", age : "69"},

  ]
  }

- Chúng ta sẽ thêm những object đc tạo ra từ ô input từ dữ liệu của người dùng vào bên trong mảng listUser ở trên
- Ta quay lại file MyComponent, ta sẽ setState của thằng listUser
  class MyComponent extends React.Component {
  //JSX
  state = {
  listUser : [
  {id : 1, name : "TimSimon66", age : "16"},
  {id : 2, name : "Eniqueen", age : "30"},
  {id : 3, name : "VanTin", age : "69"},

      ]

  }

  handleNewUser = (userObject) => {
  // console.log(userObject);
  this.setState({
  listUser: [userObject, ...this.state.listUser], // ta muốn thêm một phần tử bên trong mảng listUser, ta sẽ copy lại listUser của ta ...this.state.listUser, giờ ta sẽ thêm phần tử ta vào đầu mảng, khi làm vậy phần tử ta muốn cập nhật sẽ hiện lên trên cùng. Thế nên userObject ở đây ta đặt ở đầu mảng. userObject là biến ta muốn cập nhật, còn ...this.state.listUser là state ta muốn cập nhật lại
  })
  }
  }

- Ta sẽ không thao tác trực tiếp với state của react mà ta phải clone nó ra
  Tới bước này ta sẽ xóa cái name và age trong state của file AddUserInfor, ta sẽ ko để mặc định như vậy mà để một chuỗi rỗng
