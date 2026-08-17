# Confidence Score

Trên trang này# Confidence Score [​](#confidence-score)
Confidence không đo learner. Nó đo **hệ thống**: mức độ Nemo12 tin vào chính kết luận của mình về learner.
Đây có lẽ là con số bị hiểu nhầm nhiều nhất, nên nói rõ ngay: confidence **không phải** mức tự tin của con bạn, và cũng **không phải** một cách nói khác của điểm số. Nó là câu trả lời cho *"tôi đã thấy đủ để nói câu này chưa?"*
## Vì sao cần một con số riêng cho việc đó [​](#vi-sao-can-mot-con-so-rieng-cho-viec-đo)
Hãy so hai learner cùng có mức vững 0.85 ở một mảng kiến thức:
Learner ALearner BSố bằng chứng214Loại bàicùng một dạng5 dạng khác nhauThời điểmđều trong một buổirải ra 6 tuầnKết quảnhất quánnhất quán**Confidence****0.20****0.90**Cùng một con số 0.85, hai tình huống hoàn toàn khác. Với A, câu đúng nên nói là *"có vẻ con ổn, nhưng tôi chưa dám chắc"*. Với B: *"con vững phần này"*.
Một hệ thống chỉ lưu mỗi mastery sẽ đối xử với hai em này y hệt nhau — và đó là nguồn gốc của rất nhiều quyết định sai: bắt B học lại thứ đã chắc, hoặc để A đi tiếp trên một nền chưa được kiểm chứng.
## Confidence được tính từ đâu [​](#confidence-đuoc-tinh-tu-đau)
Bốn yếu tố, và cả bốn đều phải có:
**Số lượng bằng chứng.** Nhiều quan sát thì chắc hơn ít quan sát. Nhưng lợi ích giảm dần rất nhanh — từ 2 lên 6 bằng chứng tạo khác biệt lớn; từ 20 lên 24 thì gần như không.
**Đa dạng nguồn.** Bằng chứng từ bài luyện tập, bài đo, và nhận xét của thầy cô — cùng chỉ về một hướng — mạnh hơn nhiều so với 10 bằng chứng cùng một nguồn.
**Độ phủ.** Mảng kiến thức này đã được thăm dò ở nhiều góc chưa, hay chỉ ở đúng một dạng bài quen thuộc?
**Tính nhất quán.** Kết quả có ổn định không? Learner lúc đúng lúc sai thất thường sẽ có confidence thấp — và điều đó **đúng**: sự thất thường tự nó là thứ chưa hiểu được, không nên làm tròn thành trung bình.
Con số ví dụ: mười câu đúng liên tiếp *cùng một dạng* cho mastery 0.85 nhưng confidence chỉ khoảng 0.48. Cũng mười câu đó nhưng trải qua nhiều dạng và nhiều buổi → confidence 0.88.
## Confidence thấp dẫn tới hành động khác hẳn [​](#confidence-thap-dan-toi-hanh-đong-khac-han)
Đây là chỗ con số này trở nên hữu ích chứ không chỉ là chi tiết kỹ thuật:
- **Mastery thấp, confidence cao** → đã rõ là con còn hụt. Đi học phần đó.
- **Mastery thấp, confidence thấp** → **chưa biết**. Đo thêm 1–3 câu trước khi kết luận. Rất thường xuyên, hoá ra con vẫn ổn — và ta vừa tiết kiệm được một buổi học lại không cần thiết.
- **Mastery cao, confidence thấp** → có vẻ ổn nhưng chưa chắc. Đo xác nhận, đừng vội cho là xong.
- **Mastery cao, confidence cao** → đi tiếp.
Ô thứ hai là chỗ Nemo12 tiết kiệm được nhiều thời gian nhất cho learner. Phản xạ thông thường khi thấy một chỉ số thấp là *bắt học lại*. Phản xạ đúng là *đo cho chắc trước đã*.
## Confidence cũng mờ đi theo thời gian [​](#confidence-cung-mo-đi-theo-thoi-gian)
Một kết luận dựa trên bằng chứng ba tháng trước không đáng tin bằng kết luận dựa trên bằng chứng tuần trước — kể cả khi bằng chứng lúc đó rất mạnh. Trẻ con thay đổi.
Lưu ý đây là chuyện khác với việc quên: confidence là *độ tin của ước lượng*, còn retention là *trạng thái trí nhớ hiện tại của learner*. Hai chiều đo độc lập. [Xem retention →](/decisions/retention)
## Vì sao gia đình nên quan tâm [​](#vi-sao-gia-đinh-nen-quan-tam)
Vì nó cho bạn một câu hỏi mới, tốt hơn hẳn câu hỏi cũ.
Thay vì *"con được mấy điểm phần này?"*, câu đáng hỏi là: **"cái này biết chắc chưa, hay mới chỉ là phỏng đoán?"**
Một hệ thống dám nói "tôi chưa biết" đáng tin hơn nhiều một hệ thống lúc nào cũng có sẵn con số cho mọi ô. Trong giáo dục, sự tự tin giả là thứ tốn kém: nó dẫn tới quyết định lớn — chọn trường, chọn lớp, chọn lộ trình ôn thi — dựa trên dữ liệu mỏng mà không ai biết là nó mỏng.
Cùng một kết luận, nhưng "chắc chắn" và "phỏng đoán" phải dẫn tới hai hành động khác nhau. Confidence là thứ giữ cho sự phân biệt đó không bị mất.
[Vì sao một bài test không đủ →](/learner/mot-bai-test-khong-du)