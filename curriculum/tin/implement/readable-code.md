# Module 3.5 · Code people can read (Code người khác đọc được) 

Thuộc [Package 3 · Implement](/curriculum/tin/implement/). Module hiếm khi được chấm điểm, và đó là lý do nó bị bỏ.

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi viết code cho người đọc trước, cho máy chạy sau, vì người đọc lại nhiều nhất là chính tôi ba tuần nữa.

:::
**Unit**3**Mastery level**6 tới 12**Lớp (VN)**7 tới 12**Key concept chính**Communication (Giao tiếp) · Communities (Cộng đồng)

## Unit 1 · Names that explain themselves (Tên tự giải thích) 

**Tôi sẽ làm được** đặt tên biến và tên hàm sao cho người đọc hiểu ngay, không cần chú thích.

**Mastery level 6-12 · Lớp 7-12 · Communication (Giao tiếp)**
BậcLearner làm được gì**Đang hình thành**Dùng `a`, `b`, `tmp`, `data1`**Đạt**Tên nói lên nội dung và đơn vị: `soPhutConLai`**Vững**Tên nhất quán trong cả chương trình, và **đổi tên khi ý nghĩa đã đổi**

**Bằng chứng đạt.** Learner đọc lại code của mình sau hai tuần và hiểu ngay mà không phải lần lại.

**Hiểu lầm thường gặp.** Tên ngắn thì gõ nhanh nên tốt hơn. Thời gian gõ không đáng kể so với thời gian đọc lại, và tên `t` có thể là thời gian, nhiệt độ, hay một biến tạm, không ai đoán được.

**Knowledge node.** Đặt tên · Quy ước · Tính nhất quán · Khả năng đọc

## Unit 2 · Comment why, not what (Chú thích vì sao, không phải cái gì) 

**Tôi sẽ làm được** viết chú thích giải thích lý do, chứ không lặp lại điều code đã nói.

**Mastery level 9-12 · Lớp 10-12 · Communication (Giao tiếp)**
BậcLearner làm được gì**Đang hình thành**Chú thích lặp lại code: *"tăng i lên 1"***Đạt**Chú thích giải thích mục đích của một đoạn**Vững**Chú thích ghi lại **quyết định và lý do bỏ phương án khác**

**Bằng chứng đạt.** Trong code của learner có một chú thích kiểu *"dùng cách này vì cách kia sai khi danh sách rỗng"*.

**Hiểu lầm thường gặp.** Càng nhiều chú thích càng tốt. Chú thích lặp lại code là gánh nặng: khi code đổi mà chú thích không đổi, nó thành **thông tin sai** và còn tệ hơn không có gì.

**Knowledge node.** Chú thích · Ghi lại quyết định · Tài liệu trong code

## Unit 3 · Read someone else's code (Đọc code của người khác) 

**Tôi sẽ làm được** đọc hiểu code do người khác viết, kể cả khi họ viết khác cách tôi.

**Mastery level 9-12 · Lớp 10-12 · Communities (Cộng đồng) · Communication (Giao tiếp)**
BậcLearner làm được gì**Đang hình thành**Bỏ cuộc khi gặp code lạ, muốn viết lại từ đầu**Đạt**Đọc và mô tả được code người khác làm gì**Vững**Sửa được một lỗi nhỏ trong code lạ mà **không phá vỡ phần còn lại**

**Bằng chứng đạt.** Learner nhận một chương trình lạ, tìm ra chỗ cần sửa, và sửa đúng mà không viết lại.

**Hiểu lầm thường gặp.** Viết lại từ đầu nhanh hơn hiểu code cũ. Cảm giác này rất mạnh và gần như luôn sai: code cũ chứa nhiều xử lý trường hợp đặc biệt mà người viết lại sẽ phát hiện ra dần, sau khi đã mất nhiều thời gian.

**Knowledge node.** Đọc code · Bảo trì · Phong cách lập trình · Làm việc với code có sẵn

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Communication*: code là văn bản gửi cho hai đối tượng cùng lúc, và chỉ một trong hai biết đoán ý.

**Inquiry.** Khuôn đọc lại code của chính mình:
text`Thu code learner đã viết TỪ 3 TUẦN TRƯỚC, cất đi từ lúc đó
     ↓
Trả lại. "Đoạn này làm gì? Vì sao em viết dòng này?"
     ↓
Phần lớn learner không nhớ nổi
     ↓
"Nếu lúc đó em đặt tên khác đi thì bây giờ có dễ hơn không?"
     ↓
Sửa lại tên và chú thích cho bản thân trong tương lai`

Không lời khuyên nào về khả năng đọc có sức thuyết phục bằng việc learner **không hiểu nổi code của chính mình**. Khuôn này đòi giáo viên chuẩn bị trước ba tuần, và chính độ trễ đó là thứ làm nó hiệu quả.

## Kết thúc Package 3 
text`First programs    nhận vào, xử lý, in ra
Control flow      rẽ nhánh và lặp
Store many things chọn cấu trúc theo việc mình làm nhiều nhất
Functions         đặt tên cho một ý rồi dùng lại
Readable code     viết cho người đọc trước`

[Package 4 · Debug & Verify →](/curriculum/tin/debug/)
