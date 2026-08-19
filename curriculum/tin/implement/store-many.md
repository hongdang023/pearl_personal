# Module 3.3 · Store many things (Lưu nhiều dữ liệu) 

Thuộc [Package 3 · Implement](/curriculum/tin/implement/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi chọn được cách lưu dữ liệu phù hợp với câu hỏi mà chương trình sẽ phải trả lời nhiều nhất.

:::
**Unit**4**Mastery level**6 tới 12**Lớp (VN)**7 tới 12**Key concept chính**Form (Hình thái) · Function (Chức năng)

## Unit 1 · A list of things (Danh sách) 

**Tôi sẽ làm được** lưu nhiều giá trị cùng loại trong một biến và duyệt qua chúng.

**Mastery level 6-10 · Lớp 7-11 · Form (Hình thái)**
BậcLearner làm được gì**Đang hình thành**Tạo nhiều biến riêng lẻ cho từng giá trị**Đạt**Dùng danh sách, truy cập theo chỉ số, duyệt bằng vòng lặp**Vững**Thêm, xoá, tìm trong danh sách và biết mỗi thao tác tốn bao nhiêu

**Bằng chứng đạt.** Learner xử lý được danh sách mà số phần tử chỉ biết lúc chạy.

**Hiểu lầm thường gặp.** Danh sách chỉ để đỡ phải khai báo nhiều biến. Giá trị thật là nó cho phép xử lý dữ liệu **chưa biết trước số lượng**, thứ mà nhiều biến rời không bao giờ làm được.

**Knowledge node.** Mảng · Danh sách · Chỉ số · Duyệt mảng · Độ dài

## Unit 2 · Text is data too (Chuỗi cũng là dữ liệu) 

**Tôi sẽ làm được** xử lý chuỗi ký tự như một dãy dữ liệu, không phải một khối liền.

**Mastery level 7-11 · Lớp 8-12 · Form (Hình thái)**
BậcLearner làm được gì**Đang hình thành**Coi chuỗi là một thứ không tách ra được**Đạt**Cắt, nối, tìm, đếm, đổi hoa thường trên chuỗi**Vững**Xử lý được các trường hợp khó: dấu tiếng Việt, khoảng trắng thừa, chuỗi rỗng

**Bằng chứng đạt.** Learner viết chương trình đếm từ và xử lý đúng cả trường hợp có hai dấu cách liền nhau.

**Hiểu lầm thường gặp.** Một ký tự luôn chiếm một đơn vị. Với tiếng Việt có dấu, chuyện này không còn đúng trong nhiều ngôn ngữ lập trình, và đó là nguồn lỗi rất hay gặp với dữ liệu tiếng Việt.

**Knowledge node.** Chuỗi ký tự · Cắt chuỗi · Tìm trong chuỗi · Mã hoá ký tự · Unicode

## Unit 3 · Look up by key (Tra cứu theo khoá) 

**Tôi sẽ làm được** dùng từ điển để tra thông tin theo tên thay vì theo vị trí.

**Mastery level 9-12 · Lớp 10-12 · Relationships (Quan hệ)**
BậcLearner làm được gì**Đang hình thành**Duyệt cả danh sách mỗi lần cần tìm một mục**Đạt**Dùng từ điển để tra trực tiếp theo khoá**Vững**Nhận ra tra theo khoá **nhanh hơn hẳn** duyệt tuần tự, và giải thích được vì sao

**Bằng chứng đạt.** Learner chuyển một chương trình từ duyệt danh sách sang dùng từ điển và đo được tốc độ cải thiện.

**Hiểu lầm thường gặp.** Từ điển chỉ là một cách viết khác của danh sách. Khác biệt nằm ở **chi phí tra cứu**: danh sách phải duyệt, từ điển thì đi thẳng, và với dữ liệu lớn khác biệt đó quyết định chương trình chạy được hay treo.

**Knowledge node.** Từ điển · Cặp khoá và giá trị · Tập hợp · Chi phí tra cứu

## Unit 4 · Choose the right structure (Chọn đúng cấu trúc dữ liệu) 

**Tôi sẽ làm được** chọn cấu trúc dữ liệu dựa trên thao tác tôi sẽ làm nhiều nhất.

**Mastery level 10-12 · Lớp 11-12 · Function (Chức năng) · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Luôn dùng danh sách cho mọi việc**Đạt**Chọn giữa danh sách, từ điển, tập hợp theo nhu cầu**Vững**Cân được **cái được và cái mất** của từng lựa chọn với bài toán cụ thể

**Bằng chứng đạt.** Learner giải thích được vì sao chọn tập hợp thay vì danh sách cho một bài kiểm tra trùng lặp.

**Hiểu lầm thường gặp.** Có một cấu trúc dữ liệu tốt nhất. Lựa chọn phụ thuộc vào thao tác nào chạy nhiều nhất, đúng như ý ở [Module 1.3](/curriculum/tin/decompose/abstract): không có cách biểu diễn tốt nhất tuyệt đối, chỉ có cách phù hợp với câu hỏi mình hay hỏi.

**Knowledge node.** Lựa chọn cấu trúc dữ liệu · Đánh đổi · Chi phí thao tác

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Function*: cấu trúc dữ liệu là công cụ, và chọn công cụ phụ thuộc vào việc mình sẽ làm gì nhiều nhất.

**Inquiry.** Khuôn danh bạ lớp:
text`Bài toán: lưu số điện thoại của 40 bạn trong lớp
     ↓
Vòng 1: lưu bằng danh sách. "Tìm số của bạn Lan mất bao nhiêu bước?"
     ↓
Learner tự đếm: trung bình 20 bước, xấu nhất 40
     ↓
Vòng 2: lưu bằng từ điển, khoá là tên. "Giờ mất bao nhiêu bước?"
     ↓
"Nếu cả trường 2000 học sinh thì chênh nhau bao nhiêu?"`

Việc learner **tự đếm số bước** ở cả hai cách biến lựa chọn cấu trúc dữ liệu thành một quyết định có căn cứ số, thay vì một quy tắc phải nhớ.

[Module 3.4 · Functions →](/curriculum/tin/implement/functions)
