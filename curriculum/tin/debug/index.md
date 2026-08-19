# Package 4 · Debug & Verify (Gỡ lỗi và kiểm chứng) 

Thuộc [Curriculum Computer Science](/curriculum/tin/). Package chiếm nhiều thời gian nhất của nghề, và không có chương nào trong sách.

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi tìm ra được vì sao chương trình chạy sai, một cách có hệ thống, thay vì sửa mò.

:::
**Module**4**Unit**12**Mastery level**4 tới 12**Lớp (VN)**4 tới 12**Key concept chính**Evidence (Bằng chứng) · Systems (Hệ thống)

Người mới coi lỗi là dấu hiệu mình kém. Người làm nghề coi lỗi là **trạng thái mặc định**, và kỹ năng thật nằm ở tốc độ thu hẹp vùng nghi ngờ.

## Module trong package 
ModuleNội dungUnit[4.1 · Read the error](/curriculum/tin/debug/read-error) (Đọc thông báo lỗi)Máy đang nói cho ta biết, chỉ là bằng ngôn ngữ lạ3[4.2 · Narrow it down](/curriculum/tin/debug/narrow-down) (Thu hẹp vùng nghi ngờ)Tìm lỗi có hệ thống, không sửa mò3[4.3 · Test it properly](/curriculum/tin/debug/test-properly) (Kiểm thử đúng cách)Ca kiểm thử, biên, và ca xấu3[4.4 · Show that it is correct](/curriculum/tin/debug/show-correct) (Chứng minh nó đúng)Từ chạy được tới đúng trong mọi trường hợp3

## Toàn bộ unit 
UnitMastery level (B21)Lớp (VN)Key concept4.1.1 Errors are normal (Lỗi là chuyện bình thường)4-84-9Development4.1.2 What the message says (Thông báo lỗi đang nói gì)5-106-11Communication4.1.3 Syntax, runtime, logic (Ba loại lỗi khác nhau)7-128-12Systems4.2.1 Where does it stop working (Nó hỏng từ chỗ nào)6-117-12Evidence4.2.2 Cut the problem in half (Chia đôi vùng nghi ngờ)8-129-12Systems · Patterns4.2.3 Change one thing at a time (Mỗi lần sửa một chỗ)7-128-12Evidence4.3.1 Try it with real cases (Thử với dữ liệu thật)6-117-12Evidence4.3.2 Test the edges (Kiểm tra trường hợp biên)8-129-12Evidence4.3.3 Write tests before code (Viết ca kiểm thử trước)10-1211-12Development4.4.1 It ran is not it is right (Chạy được không phải là đúng)7-128-12Evidence4.4.2 Reason about correctness (Lập luận về tính đúng đắn)10-1211-12Systems4.4.3 Explain your bug to someone (Giải thích lỗi cho người khác)6-127-12Communication

## Chỗ hay bị bỏ qua 

Unit **4.4.1** là ranh giới quan trọng nhất của package. Chương trình chạy xong không báo lỗi và in ra một con số, điều đó **không nói gì** về việc con số đó có đúng không. Learner quen với trang chấm tự động thường lẫn hai chuyện này, vì với các em chạy được và được chấp nhận là một.

Unit **4.4.3** trông kỳ quặc nhưng có căn cứ vững: giải thích lỗi thành lời cho người khác nghe khiến learner tự tìm ra lỗi ngay giữa chừng, thường xuyên tới mức ngành đặt tên riêng cho hiện tượng này. Nó hiệu quả vì buộc learner **nói ra các giả định ngầm** mà mình chưa từng kiểm.

Unit **4.2.2** là chỗ tư duy chia để trị ở [Package 2](/curriculum/tin/design/) quay lại làm công cụ. Thay vì đọc lại toàn bộ chương trình, learner cắt đôi và hỏi lỗi nằm nửa nào, rồi lặp lại. Mười lần cắt đôi thu hẹp một nghìn dòng xuống còn một.

[Package 5 · Build & Judge →](/curriculum/tin/build/)
