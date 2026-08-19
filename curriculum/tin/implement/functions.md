# Module 3.4 · Functions (Hàm) 

Thuộc [Package 3 · Implement](/curriculum/tin/implement/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi đặt tên cho một đoạn xử lý và dùng lại nó, nên chương trình của tôi ngắn hơn và dễ sửa hơn.

:::
**Unit**4**Mastery level**7 tới 12**Lớp (VN)**8 tới 12**Key concept chính**Communication (Giao tiếp) · Development (Phát triển)

Hàm là chỗ [Package 1](/curriculum/tin/decompose/) trả lãi: phân rã bài toán trên giấy giờ có một công cụ để thể hiện thành code.

## Unit 1 · Name a piece of logic (Đặt tên cho một đoạn xử lý) 

**Tôi sẽ làm được** gom một đoạn code thành hàm có tên nói lên việc nó làm.

**Mastery level 7-11 · Lớp 8-12 · Communication (Giao tiếp)**
BậcLearner làm được gì**Đang hình thành**Viết tất cả trong một khối dài**Đạt**Tách được các đoạn thành hàm có tên rõ ràng**Vững**Tên hàm **nói được nó làm gì mà không cần đọc thân hàm**

**Bằng chứng đạt.** Người khác đọc danh sách tên hàm của learner và hiểu được chương trình làm gì.

**Hiểu lầm thường gặp.** Chỉ nên tách hàm khi đoạn code dùng lại nhiều lần. Đặt tên cho một đoạn dùng đúng một lần vẫn có giá trị, vì cái tên chính là lời giải thích, và nó thay được một dòng chú thích.

**Knowledge node.** Hàm · Đặt tên hàm · Phân rã thành hàm

## Unit 2 · Arguments and return (Tham số và giá trị trả về) 

**Tôi sẽ làm được** truyền dữ liệu vào hàm và nhận kết quả trả ra.

**Mastery level 8-12 · Lớp 9-12 · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Lẫn giữa in ra và trả về**Đạt**Dùng đúng tham số và giá trị trả về**Vững**Hiểu **phạm vi của biến**, và vì sao biến trong hàm không ảnh hưởng ra ngoài

**Bằng chứng đạt.** Learner giải thích được vì sao hàm in ra kết quả thì không dùng lại kết quả đó được, còn hàm trả về thì được.

**Hiểu lầm thường gặp.** In ra và trả về là như nhau vì đều thấy kết quả. In ra gửi cho **người xem**, trả về gửi cho **phần code tiếp theo**. Lẫn hai thứ này là lỗi phổ biến nhất khi learner mới học hàm.

**Knowledge node.** Tham số · Giá trị trả về · Phạm vi biến · Biến cục bộ và toàn cục

## Unit 3 · One function, one job (Một hàm, một việc) 

**Tôi sẽ làm được** viết hàm chỉ làm một việc, để nó dễ hiểu và dễ kiểm thử.

**Mastery level 9-12 · Lớp 10-12 · Development (Phát triển)**
BậcLearner làm được gì**Đang hình thành**Viết một hàm khổng lồ làm mọi thứ**Đạt**Mỗi hàm làm một việc rõ ràng**Vững**Nhận ra hàm **khó đặt tên** là dấu hiệu nó đang làm quá nhiều việc

**Bằng chứng đạt.** Learner tách một hàm dài thành ba hàm nhỏ, và ba cái tên đều đặt được dễ dàng.

**Hiểu lầm thường gặp.** Ít hàm thì chương trình gọn hơn. Một hàm 200 dòng không gọn, nó chỉ **giấu độ phức tạp đi**, và nó không kiểm thử riêng được, điều sẽ thành vấn đề ở [Package 4](/curriculum/tin/debug/).

**Knowledge node.** Trách nhiệm đơn lẻ · Độ dài hàm · Khả năng kiểm thử

## Unit 4 · Use a library (Dùng thư viện có sẵn) 

**Tôi sẽ làm được** tìm và dùng code người khác đã viết, thay vì viết lại từ đầu.

**Mastery level 9-12 · Lớp 10-12 · Communities (Cộng đồng)**
BậcLearner làm được gì**Đang hình thành**Tự viết lại mọi thứ, kể cả thứ đã có sẵn**Đạt**Đọc tài liệu và dùng được hàm thư viện**Vững**Đánh giá được **có nên dùng thư viện không**, dựa trên kích thước và độ tin cậy

**Bằng chứng đạt.** Learner đọc tài liệu một hàm chưa từng gặp và dùng đúng ngay lần đầu.

**Hiểu lầm thường gặp.** Dùng thư viện là lười, tự viết mới giỏi. Trong nghề, viết lại thứ đã có và đã được kiểm nghiệm kỹ thường là quyết định tệ. Nhưng dùng thư viện mà không hiểu nó làm gì cũng là quyết định tệ, và cân giữa hai điều đó là kỹ năng thật.

**Knowledge node.** Thư viện · Đọc tài liệu · Phụ thuộc bên ngoài · Mã nguồn mở

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Communication*: một hàm được đặt tên tốt là một câu giải thích mà máy cũng chạy được.

**Inquiry.** Khuôn tái cấu trúc code dài:
text`Đưa một chương trình 80 dòng CHẠY ĐÚNG nhưng viết liền một mạch
     ↓
"Chương trình này làm gì?"  (learner đọc rất lâu mới trả lời được)
     ↓
"Hãy tách thành các hàm, KHÔNG đổi hành vi"
     ↓
Chạy lại, kết quả phải y hệt
     ↓
Đưa bản đã tách cho nhóm khác: "chương trình này làm gì?"  (trả lời trong 30 giây)`

So sánh **thời gian hiểu** của hai phiên bản cùng hành vi là bằng chứng thuyết phục nhất cho việc tách hàm. Nó cũng giới thiệu ý niệm tái cấu trúc: đổi cấu trúc mà không đổi hành vi.

[Module 3.5 · Code people can read →](/curriculum/tin/implement/readable-code)
