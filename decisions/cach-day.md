# Một node, nhiều cách dạy

Trên trang này# Một node, nhiều cách dạy [​](#mot-node-nhieu-cach-day)
Hệ thống không chỉ quyết định learner nên học **phần kiến thức nào** tiếp theo. Nó còn quyết định phần đó nên được dạy **theo cách nào** — và với hai learner khác nhau, câu trả lời thường khác nhau.
## Kiến thức và cách dạy là hai thứ tách rời [​](#kien-thuc-va-cach-day-la-hai-thu-tach-roi)
Đây là một trong những quyết định kiến trúc quan trọng nhất của Nemo12:
Knowledge Node **không** chứa cách dạy.
Một node chỉ lưu những gì đúng bất kể ai đang học:
textKN-ALG-FACTOR-001 · Đặt nhân tử chung
Kiến thức nền cần có:
phép nhân · tính chất phân phối · ước số · biểu thức đại số
Nội dung:
ab + ac = a(b + c)Không có một chữ nào về việc nên giải thích trước hay cho bài toán trước, nên mất 15 phút hay 40 phút, nên có gợi ý hay không.
Vì những thứ đó **không thuộc về kiến thức** — chúng thuộc về learner đang đứng trước kiến thức đó.
## Bốn gói học cho cùng một node [​](#bon-goi-hoc-cho-cung-mot-node)
Phía trên mỗi Knowledge Node có thể tồn tại nhiều Learning Experience khác nhau. Cùng node "đặt nhân tử chung" ở trên:
### Gói A — Thành thục [​](#goi-a-—-thanh-thuc)
**Cho learner:** còn ba ngày nữa thi.
textKhoảng 15 phút. Mục tiêu là làm đúng và làm nhanh. Đây chính là điểm mạnh của lối luyện dạng truyền thống, và trong hoàn cảnh này nó là lựa chọn đúng.
### Gói B — Khám phá [​](#goi-b-—-kham-pha)
**Cho learner:** có thời gian, và cần hiểu bản chất.
textBài toán thách thức → tự thử → gợi ý → phát hiện
→ giải thích → tổng quát hoá → bài chuyển dạngKhoảng 40 phút. Đây là [tinh thần AoPS](/ideas/aops): công thức xuất hiện ở cuối, như thứ learner vừa tìm ra.
### Gói C — Vá nền [​](#goi-c-—-va-nen)
**Cho learner:** chưa nắm tính chất phân phối.
Hệ thống **không dạy tiếp** phần phân tích nhân tử. Nó lùi xuống mắt xích nền, xây lại từ  rồi mới quay lên.
Đây là [mastery learning](/ideas/mastery-learning) đúng nghĩa: không xây tiếp trên nền đang nứt.
### Gói D — Thi đấu [​](#goi-d-—-thi-đau)
**Cho learner:** đã vững node cơ bản.
Đưa thẳng  và **không** kèm câu "hãy phân tích bằng phương pháp đặt nhân tử chung" — vì [câu đó đã tiết lộ chiến lược](/ideas/aops). Learner phải tự nhận ra rằng cần nhóm lại:
text
## Hệ thống chọn gói nào, dựa trên cái gì [​](#he-thong-chon-goi-nao-dua-tren-cai-gi)
Đây là chỗ [Learner Model](/learner/learner-model) trở nên thật sự có giá trị. Hai chiều đo khác nhau, và chúng có thể lệch nhau rất xa:
Learner đang ở đâuGói phù hợpHiểu bản chất tốt, nhưng làm chậm và hay sai vặt**A** — luyện cho thành thụcLàm nhanh và chính xác, nhưng gặp bài lạ thì đứng hình**B** — bài không theo dạng, tự chọn phương phápCả hai đều tốt**D** — bài thi đấuChưa nắm khái niệm**C** — quay xuống nền, dùng hình ảnh và vật cụ thểDòng thứ hai là dòng đáng chú ý nhất. Một learner làm đúng 200 bài cùng dạng trông rất giỏi trên bảng điểm — nhưng nếu em ấy chưa bao giờ phải tự chọn công cụ, thì **thêm 200 bài nữa cũng không sửa được** khoảng trống đó. Cần đổi loại trải nghiệm, không phải tăng số lượng.
Và ngược lại: một learner hiểu rất sâu nhưng chưa thành thục thì không cần thêm bài khám phá — em ấy cần luyện cho quen tay. Cho gói B lúc này là lãng phí thời gian của một đứa trẻ.
## Vì sao phải tách như vậy [​](#vi-sao-phai-tach-nhu-vay)
Nếu cách dạy bị gắn cứng vào kiến thức, mỗi node chỉ có đúng một con đường đi qua nó. Khi đó hệ thống chỉ còn hai lựa chọn: cho learner đi qua, hoặc không cho.
Tách ra thì mỗi node có nhiều con đường, và câu hỏi đổi từ *"learner đã đủ trình độ học phần này chưa?"* thành một câu hữu ích hơn nhiều:
*"Với learner này, lúc này, phần này nên được dạy theo cách nào?"*
Nó cũng có một hệ quả thực tế: khi Nemo12 tìm ra một cách dạy tốt hơn cho một node, **kiến thức không cần sửa gì cả**. Chỉ có gói học được thêm vào. Ngược lại, khi chương trình thay đổi, các gói học vẫn dùng lại được.
## Nguyên tắc [​](#nguyen-tac)
textCoral            quản lý  → CÁI GÌ cần được học
Learning Engine  quyết định → learner NÀY nên học nó THẾ NÀO, LÚC NÀYKiến thức thì tương đối ổn định. Cách dạy thì phải thích ứng.
Đây cũng là lý do Pearl không xếp hạng các trường phái giáo dục. [Mỗi trường phái giải một bài toán khác nhau](/ideas/) — và trong một hệ thống cá nhân hoá, chúng không phải các phe để chọn, mà là **các gói học để chọn đúng lúc**.
[Quay lại: Nemo12 ra quyết định thế nào →](/decisions/)