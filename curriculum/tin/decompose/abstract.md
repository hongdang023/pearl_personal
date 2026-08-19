# Module 1.3 · Abstract away detail (Trừu tượng hoá) 

Thuộc [Package 1 · Decompose](/curriculum/tin/decompose/). Module quyết định phần lớn bài toán thật, trước khi có dòng code nào.

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi bỏ đi được những chi tiết không liên quan, và giữ lại đúng thứ bài toán thật sự cần.

:::
**Unit**4**Mastery level**5 tới 12**Lớp (VN)**6 tới 12**Key concept chính**Systems (Hệ thống) · Models (Mô hình)

## Unit 1 · What matters, what does not (Cái gì quan trọng, cái gì không) 

**Tôi sẽ làm được** nhìn một tình huống thật và chọn ra đúng thông tin bài toán cần.

**Mastery level 5-10 · Lớp 6-11 · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Giữ lại mọi chi tiết, hoặc bỏ nhầm chi tiết quan trọng**Đạt**Chọn được thông tin liên quan tới câu hỏi đang giải**Vững**Giải thích được **vì sao** một chi tiết bị bỏ là bỏ được

**Bằng chứng đạt.** Learner mô tả bài toán tìm đường đi mà không nhắc gì tới màu sơn của các con đường.

**Hiểu lầm thường gặp.** Giữ càng nhiều thông tin càng an toàn. Thông tin thừa làm mô hình phức tạp lên và che mất cấu trúc thật của bài toán. Bản đồ tàu điện ngầm bỏ hết tỉ lệ và địa hình, và chính vì thế nó dùng được.

**Knowledge node.** Trừu tượng hoá · Thông tin liên quan · Mô hình đơn giản hoá

## Unit 2 · Name things well (Đặt tên cho đúng) 

**Tôi sẽ làm được** đặt tên cho các thành phần sao cho người đọc hiểu ngay chúng là gì.

**Mastery level 6-11 · Lớp 7-12 · Communication (Giao tiếp)**
BậcLearner làm được gì**Đang hình thành**Đặt tên tuỳ tiện: `a`, `b`, `temp`, `x1`**Đạt**Tên nói lên nội dung: `soHocSinh`, `diemTrungBinh`**Vững**Tên phản ánh đúng **khái niệm trong bài toán**, không phải kiểu dữ liệu

**Bằng chứng đạt.** Người khác đọc code của learner và hiểu được ý mà không cần hỏi.

**Hiểu lầm thường gặp.** Tên biến là chuyện hình thức vì máy chạy như nhau. Máy chạy như nhau, người thì không. Và người đọc lại nhiều nhất chính là learner ba tuần sau, lúc đã quên hết ngữ cảnh.

**Knowledge node.** Quy ước đặt tên · Tính đọc được của code · Khái niệm trong bài toán

## Unit 3 · Decide what data you need (Quyết định cần dữ liệu gì) 

**Tôi sẽ làm được** xác định chương trình của tôi cần lưu những thông tin nào.

**Mastery level 8-12 · Lớp 9-12 · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Vừa viết vừa nghĩ ra cần lưu thêm gì**Đạt**Liệt kê được các thông tin cần lưu trước khi viết**Vững**Nhận ra thông tin nào **suy ra được** từ thông tin khác, nên không cần lưu

**Bằng chứng đạt.** Learner nhận ra không cần lưu cả tuổi lẫn năm sinh, vì một cái suy ra được từ cái kia.

**Hiểu lầm thường gặp.** Lưu thêm cho chắc thì không hại gì. Lưu hai bản của cùng một thông tin nghĩa là chúng có thể **lệch nhau**, và đó là nguồn lỗi kinh điển trong mọi hệ thống dữ liệu.

**Knowledge node.** Dữ liệu cần thiết · Dữ liệu suy ra được · Trùng lặp dữ liệu

## Unit 4 · Model the problem (Mô hình hoá bài toán) 

**Tôi sẽ làm được** chọn cách biểu diễn bài toán sao cho phần còn lại trở nên dễ.

**Mastery level 9-12 · Lớp 10-12 · Models (Mô hình) · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Dùng cách biểu diễn đầu tiên nghĩ ra**Đạt**Cân nhắc vài cách biểu diễn trước khi chọn**Vững**Nhận ra chọn mô hình đúng làm bài toán **sụp xuống thành đơn giản**

**Bằng chứng đạt.** Learner giải một bài rất khó bằng cách biểu diễn nó thành đồ thị, sau khi cách biểu diễn ban đầu dẫn tới ngõ cụt.

**Hiểu lầm thường gặp.** Mô hình hoá là bước hình thức, phần khó nằm ở thuật toán. Ngược lại: rất nhiều bài toán khó trở thành bài quen thuộc ngay khi được biểu diễn đúng cách, và người có kinh nghiệm dành phần lớn thời gian ở đúng bước này.

**Knowledge node.** Mô hình hoá bài toán · Biểu diễn dữ liệu · Quy về bài toán quen thuộc

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Models*: mô hình là việc chọn cái gì được giữ lại, và chọn tốt thì bài toán tự dễ đi.

**Inquiry.** Khuôn ba cách biểu diễn cùng một bài:
text`Bài toán: xếp lịch học sao cho không lớp nào trùng phòng
     ↓
Nhóm 1 biểu diễn bằng bảng. Nhóm 2 bằng danh sách. Nhóm 3 bằng đồ thị.
     ↓
Cả ba cùng thử trả lời: "phòng nào rảnh lúc 9 giờ?"
     ↓
"Cách nào trả lời nhanh nhất? Cách nào chậm nhất?"
     ↓
"Nếu câu hỏi đổi thành 'lớp nào chưa có phòng' thì cách nào thắng?"`

Câu cuối là câu đắt nhất: nó cho thấy **không có cách biểu diễn tốt nhất tuyệt đối**, chỉ có cách phù hợp với câu hỏi mình sẽ hỏi nhiều nhất. Đó là ý mà learner sẽ dùng lại suốt ở [Module 3.3](/curriculum/tin/implement/) khi chọn cấu trúc dữ liệu.

## Kết thúc Package 1 
text`Break it down     chia tới mức làm được từng bước
Find the pattern  chỗ lặp là chỗ rút gọn được
Abstract          bỏ cái không cần, giữ cái bài toán cần`

[Package 2 · Design an Algorithm →](/curriculum/tin/design/)
