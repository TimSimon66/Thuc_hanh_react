- Giờ ta sẽ làm chức năng xóa, trong mỗi user sẽ có một nút delete
- Vào file MyComponent, tạo một hàm có tên là handleDeleteUser
- Đầu tiên ta clone listUser ra

  handleDeleteUser = (userId) => {
  let listUserClone = this.state.listUser
  }

- Sau khi clone, ta cần lọc ra

handleDeleteUser = (userId) => {
let listUserClone = this.state.listUser
listUserClone = listUserClone.filter(item => item.id !== userId)
this.state({
listUser : listUserClone
})
}

- Ở đây ta dùng hàm filter để lọc, filter sẽ trả ra cho ta một mảng mới, và mảng mới sẽ thỏa mãn những điều kiện ta truyền vào . Điều kiện của ta là: item.id !== userId
- Điều kiện này có nghĩa là ta chỉ muốn lọc những phần tử nào khác với id ta muốn xóa, điều này vô hình chung cái mà bằng với id ta truyền vào thì sẽ bị xóa. Giờ ta sẽ lọc những user có id khác, vậy thì mảng mới của ta chỉ chứa những thằng khác thôi. User có id trùng sẽ bị xóa

- Sau đó ta truyền vào này thành props trong component DisplayInfor, vào file DisplayInfor ta sẽ tạo ra nút button tên là Delete và truyền props handleDelete vào nút button

<button onClick={() => this.props.handleDeleteUser()}>Delete</button>

- Ở đây ta dùng arrow function, ta truyền vào đối số user.id

<button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>

- Sở dĩ ta truyền vào user.id vì ta đang map ra, và ta đang truyền hai tham số user và index

  {this.state.changeListUser && <>
  {user.map((item, index) => {
  console.log(index);

          return (

            <div key={item.id} className= {+item.age > 18 ? "green" : "red"}>
              <div>My name's {item.name}</div>
              <div>My age {item.age}</div>

            <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
              <hr />
            </div>

          );
        })}
      </>}
