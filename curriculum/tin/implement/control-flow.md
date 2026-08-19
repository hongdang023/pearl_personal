# Module 3.2 · Control flow (Điều khiển luồng) 

Thuộc [Package 3 · Implement](/curriculum/tin/implement/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi điều khiển được chương trình rẽ nhánh theo điều kiện và lặp lại cho tới khi xong việc.

:::
**Unit**4**Mastery level**5 tới 12**Lớp (VN)**6 tới 12**Key concept chính**Systems (Hệ thống) · Patterns (Quy luật)

## Unit 1 · If this, then that (Nếu thế này thì thế kia) 

**Tôi sẽ làm được** cho chương trình làm việc khác nhau tuỳ theo điều kiện.

**Mastery level 5-9 · Lớp 6-10 · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Viết điều kiện sai, hoặc quên nhánh còn lại**Đạt**Dùng đúng rẽ nhánh có và không có nhánh phụ**Vững**Bảo đảm các nhánh **phủ hết mọi khả năng** và không chồng lấn

**Bằng chứng đạt.** Learner kiểm tra chương trình phân loại điểm và chứng minh không có điểm nào rơi ra ngoài mọi nhánh.

**Hiểu lầm thường gặp.** Chỉ cần xử lý các trường hợp thường gặp. Trường hợp bị bỏ sót không báo lỗi, nó chỉ **âm thầm không làm gì**, và đó là loại lỗi khó phát hiện nhất.

**Knowledge node.** Câu lệnh điều kiện · Biểu thức logic · Nhánh else · Phủ hết trường hợp

## Unit 2 · Repeat until done (Lặp cho tới khi xong) 

**Tôi sẽ làm được** dùng vòng lặp để làm một việc nhiều lần mà không chép code nhiều lần.

**Mastery level 6-10 · Lớp 7-11 · Patterns (Quy luật)**
BậcLearner làm được gì**Đang hình thành**Chép dán đoạn code nhiều lần**Đạt**Dùng được vòng lặp với số lần biết trước và chưa biết trước**Vững**Chọn đúng loại vòng lặp cho từng tình huống, và tránh lặp vô hạn

**Bằng chứng đạt.** Learner viết vòng lặp đọc dữ liệu cho tới khi người dùng nhập tín hiệu dừng.

**Hiểu lầm thường gặp.** Vòng lặp là để tiết kiệm gõ phím. Nó cho phép xử lý dữ liệu mà **ta chưa biết trước có bao nhiêu**, và đó mới là năng lực thật nó mang lại.

**Knowledge node.** Vòng lặp · Biến đếm · Điều kiện dừng · Vòng lặp vô hạn

## Unit 3 · Loops inside loops (Vòng lặp lồng nhau) 

**Tôi sẽ làm được** dùng vòng lặp trong vòng lặp để xử lý dữ liệu hai chiều.

**Mastery level 8-12 · Lớp 9-12 · Systems (Hệ thống) · Patterns (Quy luật)**
BậcLearner làm được gì**Đang hình thành**Lẫn biến đếm giữa hai vòng**Đạt**Viết đúng vòng lặp lồng cho bảng hai chiều**Vững**Nhận ra vòng lồng làm số phép tăng theo **tích**, và cân nhắc cái giá đó

**Bằng chứng đạt.** Learner in được bảng cửu chương đúng định dạng, và nói được nó chạy bao nhiêu lần.

**Hiểu lầm thường gặp.** Lồng thêm một vòng chỉ chậm thêm một chút. Lồng đôi trên n phần tử là n nhân n lần, và đây chính là chỗ [Module 2.3](/curriculum/tin/design/cost) trở nên rất cụ thể.

**Knowledge node.** Vòng lặp lồng nhau · Duyệt bảng hai chiều · Biến đếm độc lập

## Unit 4 · Off by one (Lỗi lệch một đơn vị) 

**Tôi sẽ làm được** kiểm tra kỹ điểm đầu và điểm cuối của vòng lặp, vì đó là chỗ hay sai nhất.

**Mastery level 7-12 · Lớp 8-12 · Evidence (Bằng chứng)**
BậcLearner làm được gì**Đang hình thành**Vòng lặp chạy thiếu hoặc thừa một lần mà không nhận ra**Đạt**Kiểm tra phần tử đầu và phần tử cuối mỗi khi viết vòng lặp**Vững**Biết chỉ số bắt đầu từ 0 dẫn tới những lỗi nào, và tự phòng trước

**Bằng chứng đạt.** Learner thử ngay với danh sách một phần tử và bắt được lỗi lệch của mình.

**Hiểu lầm thường gặp.** Lỗi lệch một đơn vị là do bất cẩn. Nó phổ biến tới mức có tên riêng trong ngành, và nó xuất hiện với cả lập trình viên rất nhiều kinh nghiệm. Cách phòng không phải cẩn thận hơn mà là **luôn thử với trường hợp biên**, đúng như [Module 2.4](/curriculum/tin/design/always-work) đã dựng.

**Knowledge node.** Lỗi lệch một đơn vị · Chỉ số mảng · Cận đầu và cận cuối · Kiểm thử biên

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Systems*: rẽ nhánh và lặp là hai cách duy nhất để một dãy lệnh cố định xử lý được dữ liệu không cố định.

**Inquiry.** Khuôn trò chơi đoán số, dựng dần:
text`Bước 1: chương trình cho người chơi đoán ĐÚNG MỘT lần
     ↓
"Chưa đoán đúng thì sao?"  →  learner tự thấy cần vòng lặp
     ↓
Bước 2: thêm vòng lặp, cho đoán mãi
     ↓
"Đoán mãi thì chán, cho tối đa 5 lần"  →  cần biến đếm
     ↓
Bước 3: gợi ý cao hơn hay thấp hơn  →  cần rẽ nhánh`

Xây dần từ một chương trình thiếu sót rõ ràng khiến mỗi cấu trúc mới xuất hiện như **câu trả lời cho một vấn đề learner vừa tự cảm thấy**, chứ không phải một mục trong sách phải học tới.

[Module 3.3 · Store many things →](/curriculum/tin/implement/store-many)
