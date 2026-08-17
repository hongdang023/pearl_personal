# Recommendation Engine hoạt động ra sao

Trên trang này# Recommendation Engine hoạt động ra sao [​](#recommendation-engine-hoat-đong-ra-sao)
Mỗi khi learner mở Nemo12, hệ thống phải trả lời một câu: **việc gì là việc đáng làm nhất ngay bây giờ?** Trang này giải thích cách nó tính, và vì sao câu trả lời đôi khi rất khác trực giác.
## Tám lựa chọn, không phải một [​](#tam-lua-chon-khong-phai-mot)
Hệ thống không chỉ chọn "học bài nào". Nó cân nhắc tám loại hành động:
Hành độngKhi nào**Học phần X**Có lỗ hổng rõ, đã sẵn sàng để học**Ôn phần Y**Từng vững, đang mờ dần**Đo phần Z**Chưa đủ dữ liệu để quyết định gì**Bỏ qua**Đã đủ vững, đi tiếp là hợp lý**Luyện tập**Hiểu rồi, cần thành thục**Hỏi mentor**Đã kẹt nhiều lần, cần người thật**Nghỉ**Đang quá tải hoặc lợi ích thêm quá thấp**Ôn thi**Sắp thi, chuyển sang chế độ khácViệc "nghỉ" nằm trong danh sách là có chủ đích. Một hệ thống chỉ biết đề xuất học thêm sẽ luôn đề xuất học thêm, kể cả khi đó là điều tệ nhất có thể làm lúc đó.
## Công thức [​](#cong-thuc)
textMức ưu tiên =
Tác động kỳ vọng        — làm việc này thì cải thiện được bao nhiêu
× Liên quan tới mục tiêu   — có phục vụ điều learner đang hướng tới không
× Mức khẩn                 — còn bao nhiêu thời gian
× Tầm quan trọng nền       — phần này chặn bao nhiêu thứ phía sau
× Xác suất thành công      — learner làm được không, hay sẽ nản
÷ Chi phí                  — thời gian, sức, tải nhận thức
(+ Nhu cầu thông tin, khi hệ thống chưa biết đủ)Sáu yếu tố, nhân và chia với nhau. Điểm quan trọng: **không yếu tố nào một mình quyết định được**. Một phần kiến thức rất yếu nhưng không liên quan mục tiêu nào và cũng không chặn gì phía sau sẽ có ưu tiên thấp. Một phần chỉ hơi yếu nhưng đang chặn hàng chục bài khác sẽ lên đầu.
## Ví dụ thật [​](#vi-du-that)
Learner lớp 8, hai lựa chọn:
Phân số (lớp 5)Chương mới trên lớpMức vững hiện tại0.550.30Chặn bao nhiêu phần khác342Liên quan mục tiêucao (nền cho mọi thứ)trung bìnhXác suất thành côngcaothấp — thiếu nền**Ưu tiên tính ra****0.91****0.43**Hệ thống đề xuất **phân số**, dù đó là kiến thức lớp 5 và learner đang học lớp 8.
Với nhiều gia đình, đề xuất này trông sai — con đang phải theo bài trên lớp cơ mà. Nhưng chương mới có xác suất thành công thấp *chính vì* phân số chưa vững. Học nó trước là cách nhanh nhất để chương mới trở nên khả thi.
Đây cũng là lý do nhiều buổi học thêm không tạo ra kết quả: chúng dạy đúng nội dung trên lớp, trong khi mắt xích đứt nằm ở chỗ khác.
## Mọi gợi ý đều lưu lý do [​](#moi-goi-y-đeu-luu-ly-do)
Mỗi recommendation được lưu kèm: lý do, phiên bản dữ liệu về learner tại thời điểm đó, phiên bản mục tiêu, phiên bản hoàn cảnh, và phiên bản thuật toán.
Nghĩa là hệ thống luôn trả lời được:
*"Hôm nay khác hôm qua vì: có thêm lịch thi học kỳ, có ghi nhận con ốm, thời gian rảnh tuần này giảm 60 phút, và mức sẵn sàng phần Hình học vừa được tính lại."*
Một hệ thống không giải thích được lời khuyên của mình là hệ thống bạn không có cách nào kiểm tra. Với những quyết định ảnh hưởng tới nhiều năm của một đứa trẻ, đó là điều không chấp nhận được.
## Năm trang tiếp theo [​](#nam-trang-tiep-theo)
[**Vì sao lúc "học", lúc "test", lúc "nghỉ"**Ba loại đề xuất trông rất khác nhau, nhưng đến từ cùng một phép tính.](/decisions/hoc-test-nghi)[**Một node, nhiều cách dạy**Hệ thống không chỉ chọn học phần nào, mà còn chọn phần đó nên được dạy theo cách nào.](/decisions/cach-day)[**Vì sao hai bạn cùng tuổi nhận gợi ý khác nhau**Tuổi và lớp gần như không xuất hiện trong công thức. Đây là lý do.](/decisions/khac-goi-y)[**Readiness khác Mastery thế nào**"Toán khá" nhưng "chưa sẵn sàng thi chuyên" — hai câu không hề mâu thuẫn.](/decisions/readiness-vs-mastery)[**Quên và ôn tập ảnh hưởng gợi ý ra sao**Từng vững và hiện còn nhớ là hai con số riêng biệt. Đây là chỗ nhiều thời gian được tiết kiệm.](/decisions/retention)Câu hỏi của Recommendation Engine không phải "learner còn thiếu gì" — luôn thiếu rất nhiều. Mà là: "trong tất cả những thứ có thể làm giờ này, cái nào đáng nhất?"