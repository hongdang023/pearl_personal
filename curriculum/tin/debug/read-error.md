# Module 4.1 · Read the error (Đọc thông báo lỗi) 

Thuộc [Package 4 · Debug & Verify](/curriculum/tin/debug/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi đọc thông báo lỗi như một manh mối, không như một lời chê.

:::
**Unit**3**Mastery level**4 tới 12**Lớp (VN)**4 tới 12**Key concept chính**Communication (Giao tiếp) · Development (Phát triển)

## Unit 1 · Errors are normal (Lỗi là chuyện bình thường) 

**Tôi sẽ làm được** coi lỗi là một phần bình thường của việc lập trình, không phải dấu hiệu tôi kém.

**Mastery level 4-8 · Lớp 4-9 · Development (Phát triển)**
BậcLearner làm được gì**Đang hình thành**Thấy màn hình đỏ là hoảng, gọi giáo viên ngay**Đạt**Bình tĩnh đọc lỗi và thử tự xử lý trước**Vững**Coi lỗi là **thông tin**, và đôi khi cố ý tạo lỗi để hiểu hệ thống

**Bằng chứng đạt.** Learner gặp lỗi và phản ứng đầu tiên là đọc dòng thông báo, không phải xoá code đi viết lại.

**Hiểu lầm thường gặp.** Người giỏi lập trình thì ít gặp lỗi. Người có kinh nghiệm gặp lỗi thường xuyên như người mới; khác biệt nằm ở **tốc độ hiểu và xử lý**, không ở tần suất gặp.

**Knowledge node.** Lỗi chương trình · Thái độ với lỗi · Quy trình gỡ lỗi

## Unit 2 · What the message says (Thông báo lỗi đang nói gì) 

**Tôi sẽ làm được** đọc được dòng nào bị lỗi và lỗi thuộc loại gì.

**Mastery level 5-10 · Lớp 6-11 · Communication (Giao tiếp)**
BậcLearner làm được gì**Đang hình thành**Chỉ nhìn thấy một khối chữ đỏ không hiểu gì**Đạt**Tìm được số dòng và tên loại lỗi trong thông báo**Vững**Hiểu dòng báo lỗi có thể **không phải dòng gây ra lỗi**, mà là dòng phát hiện ra nó

**Bằng chứng đạt.** Learner sửa được lỗi ở dòng 12 dù thông báo chỉ vào dòng 15.

**Hiểu lầm thường gặp.** Lỗi nằm đúng ở dòng thông báo chỉ ra. Với lỗi thiếu dấu đóng ngoặc, máy chỉ phát hiện ra ở dòng sau đó, đôi khi rất xa. Thông báo cho biết nơi máy **bị chặn lại**, không phải nơi ta viết sai.

**Knowledge node.** Thông báo lỗi · Số dòng · Vết gọi hàm · Loại lỗi

## Unit 3 · Syntax, runtime, logic (Ba loại lỗi khác nhau) 

**Tôi sẽ làm được** phân biệt lỗi cú pháp, lỗi lúc chạy, và lỗi logic, vì mỗi loại cần cách xử lý khác.

**Mastery level 7-12 · Lớp 8-12 · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Coi mọi lỗi là cùng một loại**Đạt**Phân biệt được ba loại và biết mỗi loại xuất hiện lúc nào**Vững**Nhận ra **lỗi logic nguy hiểm nhất** vì chương trình không hề báo gì

**Bằng chứng đạt.** Learner phát hiện chương trình chạy trơn tru nhưng cho kết quả sai, và gọi đúng tên loại lỗi đó.

**Hiểu lầm thường gặp.** Không có thông báo lỗi nghĩa là chương trình đúng. Lỗi logic không bao giờ báo gì: chương trình chạy hoàn hảo và trả về đáp án sai. Đây chính là ranh giới ở [Module 4.4](/curriculum/tin/debug/show-correct): chạy được không phải là đúng.

**Knowledge node.** Lỗi cú pháp · Lỗi lúc chạy · Lỗi logic · Ngoại lệ

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Communication*: thông báo lỗi là máy đang cố nói cho ta biết, bằng một thứ ngôn ngữ cần học để đọc.

**Inquiry.** Khuôn sưu tầm lỗi:
text`"Hãy CỐ Ý làm hỏng chương trình đang chạy đúng, bằng 5 cách khác nhau"
     ↓
Với mỗi cách: ghi lại thông báo lỗi nhận được
     ↓
Cả lớp lập một bảng tra: thông báo này  →  nguyên nhân thường gặp
     ↓
Bảng tra đó dán lên tường, dùng cho cả năm học`

Chủ động tạo lỗi đảo ngược quan hệ của learner với màn hình đỏ: từ chỗ bị lỗi tấn công sang chỗ **điều khiển được lỗi**. Bảng tra do chính lớp lập ra cũng dùng được hơn nhiều so với danh sách chép từ sách.

[Module 4.2 · Narrow it down →](/curriculum/tin/debug/narrow-down)
