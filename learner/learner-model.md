# Learner Model

Trên trang này# Learner Model [​](#learner-model)
Learner Model là bức tranh có cấu trúc mà hệ thống dựng về một learner: con đang ở đâu trên từng mảng kiến thức, học theo kiểu nào, và — quan trọng không kém — hệ thống chắc chắn tới đâu về mỗi điều đó.
Nó **không phải** hồ sơ học bạ. Học bạ ghi lại quá khứ. Learner Model là **trạng thái được tính lại liên tục** từ toàn bộ bằng chứng hiện có, và nó thay đổi mỗi khi có bằng chứng mới.
## Trong đó có gì [​](#trong-đo-co-gi)
textLearner Model
├── Identity              — tuổi, lớp, trường, ngôn ngữ
├── Academic State        — từng mảng kiến thức: mức vững + độ chắc chắn + xu hướng
├── Capability State      — kỹ năng xuyên môn: lập luận, đọc hiểu, giải quyết vấn đề
├── Learning Characteristics — học nhanh hay chậm, cần bao nhiêu lần lặp, hợp cách nào
├── Behavioral Patterns   — bỏ cuộc khi nào, làm bài lúc nào, dùng gợi ý ra sao
├── Preferences           — thích dạng bài nào, tự chọn học gì khi được chọn
└── Goals                 — đang hướng tới điều gì (có thể để trống)Phần được dùng nhiều nhất là **Academic State**. Kiến thức được tổ chức thành một mạng lưới các node — "phân tích đa thức", "tam giác đồng dạng", "thì hiện tại hoàn thành" — và mỗi node mang một bộ số:
text{
mastery: 0.72          — mức vững quan sát được
confidence: 0.45       — hệ thống tin vào con số trên tới đâu
trajectory: đang lên   — xu hướng gần đây
last_evidence_at: 12 ngày trước
evidence_count: 7
}
## Mastery và confidence là hai chuyện khác nhau [​](#mastery-va-confidence-la-hai-chuyen-khac-nhau)
Đây là phân biệt quan trọng nhất trong cả Learner Model.
mastery 0.85 · confidence 0.20"Có vẻ con giỏi phần này, nhưng tôi mới thấy hai câu, cùng một dạng, làm cách đây một tháng. Tôi chưa dám chắc."
mastery 0.85 · confidence 0.90"Con vững phần này. Tôi đã thấy 14 bằng chứng, nhiều dạng khác nhau, nhiều thời điểm, kết quả nhất quán."
Hai learner có cùng con số 0.85 nhưng cần hai hành động hoàn toàn khác nhau: trường hợp đầu cần **đo thêm**, trường hợp sau có thể **đi tiếp**. Một hệ thống chỉ lưu mỗi mastery sẽ đối xử với hai em này giống hệt nhau.
[Đọc kỹ hơn về Confidence Score →](/learner/confidence)
## Một câu đúng không làm mức vững nhảy vọt [​](#mot-cau-đung-khong-lam-muc-vung-nhay-vot)
Mỗi bằng chứng mới đẩy mức vững đi một đoạn, và độ dài đoạn đó phụ thuộc vào **chất lượng của bằng chứng**:
textsức nặng của bằng chứng =
độ tin cậy của nguồn
× độ mới (bằng chứng cũ nhẹ hơn)
× độ khó của bài
× mức độ tự làm (có gợi ý thì nhẹ hơn)Ví dụ thật: learner đang ở 0.60, làm một bài khó và đúng hoàn toàn không gợi ý → mức vững lên 0.69. Không phải 0.90. Một lần làm tốt là bằng chứng thật, nhưng nó không xoá được mọi thứ hệ thống đã quan sát trước đó.
Chiều ngược lại cũng vậy: một câu sai không đánh sập một node đang vững. Nếu learner có 12 bằng chứng tốt rồi sai một câu, hệ thống ghi nhận nhưng không kết luận lại — nó chờ xem đó là dấu hiệu thật hay chỉ là một ngày tệ.
## Mastery không tự giảm theo thời gian [​](#mastery-khong-tu-giam-theo-thoi-gian)
Đây là quy tắc kiến trúc mà Nemo12 giữ nghiêm ngặt: **mức vững đã đạt thì không bị trừ dần vì lâu không dùng**.
Nếu learner từng đạt 0.90 và ba tháng không đụng tới, hệ thống **không** hạ nó xuống 0.64. Con số 0.90 giữ nguyên — vì nó là sự thật lịch sử: đã có lúc con làm được ở mức đó. Cái thay đổi là một con số **riêng biệt**: khả năng con còn nhớ và dùng được ngay lúc này.
Việc tách hai chiều đo này cho phép phân biệt hai tình huống mà bề ngoài giống hệt nhau:
- **Từng vững, giờ mờ** → cần đánh thức trí nhớ, một hai câu là đủ.
- **Chưa từng vững** → cần học lại thật sự, từ đầu.
Đối xử với trường hợp đầu như trường hợp sau là cách lãng phí thời gian phổ biến nhất trong việc ôn tập. [Đọc về retention →](/decisions/retention)
## Model có phiên bản [​](#model-co-phien-ban)
Mỗi lần Learner Model được tính lại, hệ thống ghi kèm: tính lúc nào, dựa trên bằng chứng tới đâu, bằng thuật toán phiên bản nào. Nhờ vậy khi một gợi ý hôm nay khác hôm qua, luôn trả lời được **vì sao khác** — và nếu thuật toán được cải tiến, toàn bộ lịch sử có thể tính lại từ bằng chứng gốc.
Learner Model là giả thuyết tốt nhất hiện có về một đứa trẻ, kèm mức độ tin cậy — không phải bản án về đứa trẻ đó.
[Learner Context Model →](/learner/context-model)