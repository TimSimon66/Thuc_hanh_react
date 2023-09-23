- Giờ ta sẽ học hook useState đối với function conponent, lần trước ta đã chuyển đổi cái componet của chúng ta sang dạng stateList conponent , tuy nhiên khi chuyển đổi qua dạng này thì ta đang bị nhược điểm là không sử dụng được State, thế nên react hook ra đời để giải quyết vấn đề này

- Giờ ta sẽ làm lại cái chức năng ẩn, hiện user, bằng cách sử dụng state của hook.
- Ta tạo ra thẻ span với nội dung bên dưới trong hàm DisplayInfo

const DisplayInfo = (props) => {
const { user } = props;

    return (
      <div className="display-infor-container">

      <div>
        <span>Show List user</span>
      </div>
    )

}

- Khi ta dùng function component ta không thể khai báo biến state hoặc dùng this trong function. Tuy nhiên ta sẽ dùng một hook có tên là useState. Khi ta gõ useState trong function của ta thì nó sẽ tự động import vào

const DisplayInfo = (props) => {

    useState

const { user } = props;

    return (
      <div className="display-infor-container">

      <div>
        <span>Show List user</span>
      </div>
    )

}

- Sau đó ta tạo ra hook useState;

const DisplayInfo = (props) => {

     const[hideShowUser, setHideShowUser] = useState;

const { user } = props;

    return (
      <div className="display-infor-container">

      <div>
        <span>Show List user</span>
      </div>
    )

}

- Giờ ta sẽ làm một sự kiện, khi ta nhấn vào dòng chữ Show List user thì user sẽ ẩn và hiện ra.

- Ta tạo một hàm handlShowHideListUser

  const handlShowHideListUser = () => {
  alert("Click me")
  }

  return (
  <div className="display-infor-container">

      <div>
        <span onClick={() => handlShowHideListUser()}>Show List user</span>
      </div>

  )

- Giờ bên trong hàm handlShowHideListUser, ta sẽ cập nhật lại giá trị của hideShowUser

  const handlShowHideListUser = () => {
  setHideShowUser(!hideShowUser);
  }

- Giờ code của ta sẽ như này;
  const DisplayInfo = (props) => {
  const { user } = props;

  const[hideShowUser, setHideShowUser] = useState(true);

  const handlShowHideListUser = () => {
  setHideShowUser(!hideShowUser);
  }

      return (
        <div className="display-infor-container">

        <div>
          <span onClick={() => handlShowHideListUser()}>{hideShowUser ? "Hide user" : "Show user"}</span>
        </div>

        {hideShowUser &&
         <>
          {user.map((item, index) => {
            {/* console.log(user); */}

            return (

              <div key={item.id} className= {+item.age > 18 ? "green" : "red"}>
                <div>My name's {item.name}</div>
                <div>My age {item.age}</div>

                <button onClick={() => props.handleDeleteUser(item.id)}>Delete</button>
                <hr />
              </div>

            );
          })}
        </>}
        </div>
      );

}

- Tại sao ta lại code như này  
  const [hideShowUser, setHideShowUser] = useState(true);

- Ở đây ta dùng dấu [], vì hàm useState sẽ trả về cho ta 2 tham số, tham số đầu tiên là state ta khai báo hideShowUser, tham số thứ hai là setHideShowUser hàm giúp ta cập nhật lại giá trị state ta khai báo.
- Ta cho giá trị là const , thì cái biến state hideShowUser chỉ được thay đổi khi và chỉ khi ta gọi thông qua hàm react setHideShowUser.
- Việc React bắt ta gọi qua hàm của nó để tránh tình trạng  
   hideShowUser = false;
- Nó sẽ báo lỗi vì ta đang khai báo là const
- Nó muốn tất cả những gì thông qua React quản lí, thì phải do thằng React cập nhật, chứ không phải ta muốn cập nhật là cập nhật
- Việc ta dùng cú pháp [] như này
  const [hideShowUser, setHideShowUser]
- Thì đó là destructuring assigment
