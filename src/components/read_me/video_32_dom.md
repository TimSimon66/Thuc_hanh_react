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

- Còn khi chúng ta là người mới bắt đầu ấy, chúng ta không nên đi mổ xẻ từng tí một, vì cái khó họ dadx làm cho chúng ta rồi, còn chúng ta đang làm với cái dễ

- React có một khái niệm Virtual DOM, giúp ta cập nhật các thay đổi nhanh hơn cho trang web, nó là một cây DOM ảo. Cây DOM ở trang Element là cây DOM thật vì ta có thể nhìn và sờ nó. Còn cây DOM ảo là cây DOM mà React tạo ra khi mà nó chạy ứng dụng ta lên, thuộc tính Key được dùng trong cây DOM ảo.

- Cây DOM ảo sẽ clone lại cây DOM thật, tuy nhiên rằng mỗi một lần ta thay đổi nội dung, cây DOME ảo của React cần biết chính xác ta thay đổi nội dung ở chỗ nào để từ đó nó sẽ phát hiện ra và cập nhật vào cây DOM thật, đây là cách mà React hoạt động. Tức rằng nó sẽ chạy hai cây DOM song song với nhau, nó giữ cây DOM ảo, ta dùng cây DOM thật. Mỗi một lần ta thao tác code trên màn hình thì sẽ chạy qua cây DOM ảo trước để làm cho ứng dụng ta nhanh thì nó cần biết ta thay đổi ở đâu. Sau khi nó phát hiện được thay đổi thì nó sẽ cập nhật lại, nó sẽ có 2 mảnh ghép và update lại với nhau thì như vậy nó sẽ cực kì nhanh và làm cho web ta cực kì mượt. Đấy là lí do tại sao React có hiệu năng cao như vậy
