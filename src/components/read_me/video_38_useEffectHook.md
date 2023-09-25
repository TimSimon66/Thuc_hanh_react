- Giờ ta xài function componet thì làm sao ta xài những hàm như là componentDidMount, componentDidUpdate
- Giờ ta sẽ làm một ví dụ đơn giản, khi ta vào website của ta thì website ta sẽ đổi tên thành tên ta muốn
- Bản chất của một component là một function, thế nên trước khi chạy return thì nó sẽ chạy cái bên ngoài return trước, ta sẽ check code trước lúc nó chạy vào return

console.log(">> Call me render")

    return (
      <div className="display-infor-container">

      <div>
        <span onClick={() => handlShowHideListUser()}>{hideShowUser ? "Hide user" : "Show user"}</span>
      </div>

)

- Dòng console sẽ chạy trước return, code ta chạy theo thứ tự vì, vì component của ta là function, nên bản chất của function là chạy từ trên xuống dưới
- Khi ta bật web lên, ta xóa một user, thì sẽ xuất hiện dòng console >> Call me render. Chứng tỏ mỗi lần ta thao tác với user thì component ta sẽ chạy lại, chạy từ trên xuống dưới
- Bây giờ ta muốn sau khi đống HTML này chèn vào DOM, ta sẽ cần thao tác với đống HTML này. Ta sử dụng hook thứ 2, hook này có tên là useEffect().
- Tất cả những gì ảnh hưởng đến ứng dụng của ta sẽ chạy vào cái useEffect() này
- Đầu tiên ta khai báo useEffect();

  useEffect();

- Sau đó ta sẽ cho nó một cái dòng console.log, bằng cách truyền cho nó một cái arrow functiona.

  useEffect(() => {
  console.log(">> Call me useEffect")
  });

- Khi ta vào web, thì hàm useEffect này sẽ chạy sau dòng console >> Call me render
- Nếu như ta để ý thì hàm componentDidMount nó cũng chạy sau khi render ra DOM, thì cái hàm useEffect nó cũng tác dụng tương tự như vậy. Việc ta dùng React hook thì cái hàm useEffect này nó đã bao gồm hàm componetDidMount của React class. Sau này nếu ta muốn xử lí cái gì liên qua tới DOM thì ta sẽ viết hàm componentDidMount
- Hàm useEffect() luôn được chạy khi ta render lại giao diện, ta có 3 cách để render lại giao diện nhưng trong thực tế thì ta có 2 cách thôi
- Cách 1: Ta thay đổi props, từ cha truyền xuống
- Cách 2: setState()

- Sau khi ta thấy rằng hàm useEffect() luôn được chạy, ta muốn sử dụng giống hàm componentDidMount vì hàm này chỉ chạy một lần thôi. Tức là render một cái thì chạy một lần thôi. Nếu như hàm useEffect() lúc nào cũng được chạy, thì đôi khi ta muốn check một trường hợp như kiểm tra user có chiều dài = 1 thì ta mới làm j đấy, hay khi ta load ra dữ liệu rồi gọi API chẳng hạn, thì ta chỉ làm một lần thôi để tối ưu hóa hiệu năng. Nếu như lần nào mà ta thay đổi một cái gọi API rồi làm mọi thứ, thì hiệu ứng ứng dụng ta không cao. Ta cần hàm chạy một lần thôi, chạy nhiều lần thì hiệu năng về ứng dụng của ta không cao, nó sẽ tốn tài nguyên máy tính của ta thì làm gì có chuyện tối ưu được

- Để hàm ta chạy một lần thì React giới thiệu ta một thằng thứ hai trong hàm useEffect(), trong hàm useEffect() có 2 tham số, tham số đầu tiên sẽ là một hàm hoặc effect (effect ở đây là những cái gì đấy ảnh hưởng đến ứng dụng React của ta), tham số thứ 2 là một dependency, là cái dấu [], nếu ta không viết cái gì vào dấu [], thì useEffect() sẽ hiểu rằng là nó sẽ chạy một lần thôi, như vậy là nó giống hàm componetDidMount rồi đấy.

  useEffect(
  () => {
  setTimeout(() => {
  document.title = "Eric & Hoi Dan IT"
  }, 3000)
  console.log(">> Call me useEffect")

  }, []
  );

- Giờ tới hàm componetDidUpdate, nếu như sau này ta xóa hết list user rồi, thì sẽ hiện lên một cái alert. Nếu ta dùng hàm componetDidUpdate thì ta sẽ so sánh được giá trị hiện tại và giá trị quá khứ của state hoặc props. Nhưng đối với React hook thì ta không thể lấy được giá trị quá khứ của nó. Ở đây nó đã cũng cấp sẵn công cụ cho ta, nếu như ta muốn so sánh sự thay đổi của một biến số, ta có thể truyền trực tiếp vào cái mảng dependency []

  useEffect(
  () => {
  // setTimeout(() => {
  // document.title = "Eric & Hoi Dan IT"
  // }, 3000)

  if(user.length === 0){
  alert("You deleted all the user");
  }

  console.log(">> Call me useEffect")

  }, [user]
  );

- Ví dụ ta có props là user, lấy qua prop user ở dòng 39 của file DisplayInfo, ta truyền user vào [], ta muốn React theo dõi biến này của chúng ta. Ta có một điều kiện nếu
  if(user.length === 0){
  alert("You deleted all the user");
  }
- Vậy thì mỗi lần khi user thay đổi thì dòng console.log(">> Call me useEffect"), hàm useEffect() sẽ thực thi, như là nó đang giám sát cái biến ta truyền vào dependency [] vậy

- Vậy là React hook useEffect() nó sẽ bằng hai hàm trong React class là hàm componentDidMount và componentDidUpdate
- Trong code của ta có thể có nhiều hàm useEffect()
