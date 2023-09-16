- DOM viết tắt của Document Object Model

- Bản chất của một trang web nếu nói về HTML, nó phải
  được gọi là một Document mới đúng, nó sẽ là một cái tài liệu có thể hiện thị được data cho chúng ta

- Lâu nay ta code ở dưới bậc thấp, chúng ta lo code thẻ title thẻ head.

- Tất cả những thứ ta thấy trong tab element của ta thì nó là DOM

- Mỗi lần ta nhắc tới DOM là ta nhắc tới khung HTML ta thấy trên màn hình

- Khi ta làm việc với web ấy, bản chất ta toàn làm việc với những thằng thấp hơn như Element, head, ta chưa bao giờ làm việc với Document cả

Cấp bậc của web:

1. Document
2. Root element <html>
3. Element <head> -> 4. Element <title> -> 5. Text "My title"
4. Element <body>

Trong Element <body> 4. Attibute 'href' 4. Element <a> -> 5. Text "My link" 4. Element <h1> -> 5. Text "My header"

- Ví dụ ta có cái event.target.value, ta có được biến event là do thằng DOM với web API, nó đã trả ra cho chúng ta rồi đấy. Khi ta làm những cái sự kiện như hover, onClick, ... thì ta tự động có biến event rồi. Sao lại nó cho ấy vì những người làm ra ngôn ngữ lập trình đã viết những cái bậc cao như DOCUMENT và ROOT, còn ta chỉ cần xử lí những cái bậc thấp thôi
