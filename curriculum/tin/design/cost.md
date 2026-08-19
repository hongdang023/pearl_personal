# Module 2.3 · Cost of a solution (Cái giá của lời giải) 

Thuộc [Package 2 · Design an Algorithm](/curriculum/tin/design/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi ước lượng được lời giải của mình sẽ chậm đi thế nào khi dữ liệu lớn lên.

:::
**Unit**3**Mastery level**8 tới 12**Lớp (VN)**9 tới 12**Key concept chính**Relationships (Quan hệ)

## Unit 1 · Count the steps (Đếm số bước) 

**Tôi sẽ làm được** đếm xem thuật toán của tôi làm bao nhiêu phép so sánh hay phép gán.

**Mastery level 8-12 · Lớp 9-12 · Relationships (Quan hệ)**
BậcLearner làm được gì**Đang hình thành**Đánh giá nhanh chậm bằng cảm giác**Đạt**Đếm được số phép cơ bản với một cỡ dữ liệu cụ thể**Vững**Đếm được **theo biến n**, không chỉ theo một con số cụ thể

**Bằng chứng đạt.** Learner nói được vòng lặp lồng đôi trên n phần tử chạy khoảng n nhân n lần.

**Hiểu lầm thường gặp.** Đo bằng đồng hồ là đủ. Thời gian chạy phụ thuộc vào máy, ngôn ngữ, và cả việc máy đang bận gì. Đếm số phép cho một đại lượng **không phụ thuộc máy**, nên so sánh được.

**Knowledge node.** Đếm phép toán · Phép cơ bản · Phân tích thuật toán

## Unit 2 · How it grows with input (Nó lớn lên thế nào theo dữ liệu) 

**Tôi sẽ làm được** nói được khi dữ liệu tăng gấp mười thì chương trình chậm đi bao nhiêu lần.

**Mastery level 9-12 · Lớp 10-12 · Relationships (Quan hệ) · Patterns (Quy luật)**
BậcLearner làm được gì**Đang hình thành**Nghĩ dữ liệu tăng gấp mười thì chậm đi gấp mười**Đạt**Phân biệt được tăng tuyến tính, tăng bình phương, tăng theo loga**Vững**Dự đoán được chương trình **sẽ treo ở cỡ dữ liệu nào** trước khi chạy thử

**Bằng chứng đạt.** Learner nhìn code và nói được nó chạy tốt tới cỡ nào, rồi chạy thử và đúng.

**Hiểu lầm thường gặp.** Chương trình chạy tốt với dữ liệu mẫu thì sẽ chạy tốt với dữ liệu thật. Một thuật toán bình phương chạy trong nháy mắt với 100 phần tử và mất hàng giờ với 100 nghìn. Đây không phải chương trình chậm mà là **chương trình sai về độ phức tạp**.

**Knowledge node.** Độ phức tạp thời gian · Tăng tuyến tính · Tăng bình phương · Tăng theo loga

## Unit 3 · Time against memory (Đánh đổi thời gian và bộ nhớ) 

**Tôi sẽ làm được** nhận ra tôi có thể chạy nhanh hơn bằng cách dùng nhiều bộ nhớ hơn, và ngược lại.

**Mastery level 10-12 · Lớp 11-12 · Development (Phát triển)**
BậcLearner làm được gì**Đang hình thành**Chỉ nghĩ tới tốc độ**Đạt**Nhận ra lưu sẵn kết quả giúp chạy nhanh hơn nhưng tốn bộ nhớ**Vững**Chọn được điểm cân bằng **phù hợp với ràng buộc thật** của bài

**Bằng chứng đạt.** Learner tăng tốc chương trình bằng cách lưu lại kết quả đã tính, và nói rõ mình đã đánh đổi cái gì.

**Hiểu lầm thường gặp.** Tối ưu nghĩa là làm cho nhanh hơn. Tối ưu là **dịch chuyển cái giá** sang chỗ mình chịu được. Trên điện thoại bộ nhớ có thể là ràng buộc chặt hơn tốc độ, và khi đó lựa chọn đảo chiều.

**Knowledge node.** Đánh đổi thời gian và bộ nhớ · Lưu đệm kết quả · Ràng buộc tài nguyên

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Relationships*: điều đáng quan tâm không phải chương trình chạy bao lâu, mà thời gian đó thay đổi thế nào khi dữ liệu lớn lên.

**Inquiry.** Khuôn đo thật rồi ngoại suy:
text`Cùng một chương trình, chạy với n = 1000, 2000, 4000, 8000
     ↓
Ghi thời gian thật, lập bảng
     ↓
"Gấp đôi n thì thời gian gấp mấy?"  (learner tự tìm ra hệ số)
     ↓
"Vậy n = 1 triệu thì mất bao lâu?"  (ngoại suy trên giấy)
     ↓
Chạy thử ở cỡ lớn để kiểm dự đoán`

Việc **ngoại suy rồi kiểm chứng** biến độ phức tạp từ một ký hiệu toán học thành một dự đoán kiểm được. Đây cũng là đúng phương pháp mà learner đã dùng ở [Module 4.1 môn Vật lý](/curriculum/ly/reason/graphs-patterns): đo, vẽ, tìm quy luật, ngoại suy.

[Module 2.4 · Will it always work →](/curriculum/tin/design/always-work)
