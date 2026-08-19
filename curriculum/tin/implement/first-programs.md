# Module 3.1 · First programs (Chương trình đầu tiên) 

Thuộc [Package 3 · Implement](/curriculum/tin/implement/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi viết được chương trình nhận dữ liệu vào, xử lý, và in kết quả ra.

:::
**Unit**4**Mastery level**3 tới 11**Lớp (VN)**3 tới 12**Key concept chính**Systems (Hệ thống) · Models (Mô hình)

## Unit 1 · Give the computer an instruction (Ra lệnh cho máy) 

**Tôi sẽ làm được** viết một lệnh đúng cú pháp và thấy máy thực hiện nó.

**Mastery level 3-7 · Lớp 3-8 · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Gõ theo mẫu, chưa biết dòng nào làm gì**Đạt**Viết và chạy được lệnh đơn giản, hiểu từng phần**Vững**Sửa lệnh theo ý mình và dự đoán đúng kết quả trước khi chạy

**Bằng chứng đạt.** Learner đoán đúng chương trình sẽ in ra gì, trước khi bấm chạy.

**Hiểu lầm thường gặp.** Máy hiểu ý mình muốn làm gì. Máy khớp chuỗi ký tự với quy tắc cú pháp, không hề suy đoán. Đây là ý lớn nhất của cả môn và nó bắt đầu ngay từ unit này.

**Knowledge node.** Câu lệnh · Cú pháp · Trình thông dịch · Chạy chương trình

## Unit 2 · Variables hold values (Biến giữ giá trị) 

**Tôi sẽ làm được** dùng biến để lưu một giá trị và dùng lại nó về sau.

**Mastery level 4-8 · Lớp 5-9 · Models (Mô hình)**
BậcLearner làm được gì**Đang hình thành**Lẫn giữa tên biến và giá trị của nó**Đạt**Gán, đọc, cập nhật được biến**Vững**Theo dõi được giá trị của biến **thay đổi qua từng dòng**

**Bằng chứng đạt.** Learner lập được bảng giá trị các biến sau mỗi dòng của một đoạn code ngắn.

**Hiểu lầm thường gặp.** Dấu bằng trong lập trình nghĩa là bằng nhau như trong toán. Câu lệnh `x = x + 1` vô nghĩa trong toán học nhưng hoàn toàn hợp lệ trong lập trình, vì nó là **phép gán**: tính vế phải rồi cất vào vế trái.

**Knowledge node.** Biến · Phép gán · Giá trị · Cập nhật biến

## Unit 3 · Types matter (Kiểu dữ liệu có ý nghĩa) 

**Tôi sẽ làm được** phân biệt số với chuỗi, và hiểu vì sao máy đối xử khác nhau với chúng.

**Mastery level 5-10 · Lớp 6-11 · Form (Hình thái)**
BậcLearner làm được gì**Đang hình thành**Không phân biệt được `5` với `"5"`**Đạt**Biết kiểu của từng biến và chuyển đổi khi cần**Vững**Dự đoán đúng kết quả của phép toán **giữa hai kiểu khác nhau**

**Bằng chứng đạt.** Learner giải thích được vì sao cộng hai giá trị nhập vào lại ra `"12"` thay vì `3`.

**Hiểu lầm thường gặp.** Số nhập từ bàn phím là số. Nó vào chương trình dưới dạng chuỗi ký tự, và quên chuyển kiểu là lỗi đầu tiên mà gần như learner nào cũng gặp.

**Knowledge node.** Kiểu dữ liệu · Số nguyên và số thực · Chuỗi · Chuyển kiểu

## Unit 4 · Input and output (Nhập và xuất) 

**Tôi sẽ làm được** viết chương trình nhận dữ liệu từ người dùng và trả lời lại.

**Mastery level 5-9 · Lớp 6-10 · Communication (Giao tiếp)**
BậcLearner làm được gì**Đang hình thành**Gán cứng dữ liệu vào trong code**Đạt**Nhận được dữ liệu từ người dùng và in kết quả rõ ràng**Vững**Thiết kế thông báo sao cho **người dùng biết phải nhập gì**

**Bằng chứng đạt.** Người khác chạy chương trình của learner mà không cần hỏi phải làm gì.

**Hiểu lầm thường gặp.** In ra được đáp án là xong. Người dùng không đọc được kết quả trần trụi; một dòng nhãn kèm theo là khác biệt giữa một bài tập và một chương trình dùng được, và ý này sẽ trở lại ở [Package 5](/curriculum/tin/build/).

**Knowledge node.** Nhập dữ liệu · Xuất dữ liệu · Định dạng kết quả · Thông báo cho người dùng

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Systems*: chương trình là một hệ nhận vào, biến đổi, và trả ra.

**Inquiry.** Khuôn dự đoán trước khi chạy:
text`Đưa một đoạn code ngắn, KHÔNG cho chạy
     ↓
"Chương trình này sẽ in ra gì?"  Mỗi learner viết dự đoán ra giấy
     ↓
Chạy thật
     ↓
"Ai đoán sai? Chỗ nào trong đầu em khác với chỗ máy làm?"`

Bắt viết dự đoán ra giấy trước là bước quan trọng nhất, và cũng là bước hay bị bỏ. Không viết ra thì learner sẽ nhớ lại rằng mình đã đoán đúng, và mất đúng cái khoảnh khắc lộ ra mô hình sai trong đầu. Đây là cùng một nguyên tắc với [Module 1.1 môn Vật lý](/curriculum/ly/observe/observe-carefully).

[Module 3.2 · Control flow →](/curriculum/tin/implement/control-flow)
