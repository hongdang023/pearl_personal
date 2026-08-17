# Hệ thống cập nhật hiểu biết về learner ra sao

Trên trang này# Hệ thống cập nhật hiểu biết về learner ra sao [​](#he-thong-cap-nhat-hieu-biet-ve-learner-ra-sao)
Hiểu biết của Nemo12 về một learner không phải kết quả của một lần đánh giá. Nó là một vòng lặp chạy liên tục, và mỗi hoạt động của con đều đi vào vòng đó.
textBằng chứng mới
↓
Cập nhật Learner Model
↓
Đã đủ chắc chắn chưa?
├── Chưa → đo thêm để thu bằng chứng
└── Rồi → chọn việc nên làm tiếp
↓
Trải nghiệm học
↓
Bằng chứng mới  ↺
## Không phải sự kiện nào cũng đụng tới mọi thứ [​](#khong-phai-su-kien-nao-cung-đung-toi-moi-thu)
Đây là chi tiết quan trọng và hay bị làm sai: một hệ thống cập nhật *tất cả* sau *mỗi* sự kiện thì vừa chậm vừa sai. Nemo12 có quy tắc rõ ràng cho từng loại sự kiện:
Chuyện xảy raCập nhật cái gì**Không** đụng tớiCon làm bài luyện tậpMức vững, trạng thái trí nhớ, mức sẵn sàngMục tiêu, hoàn cảnhCon ôn lại và nhớ đượcTrạng thái trí nhớ, lịch ôn kế tiếpMức vững lịch sửPhụ huynh báo con ốmHoàn cảnh, kế hoạch tuần**Mức vững — tuyệt đối không**Con nói sợ môn HìnhHoàn cảnh (cảm xúc)Mức vững, mục tiêuLịch thi dờiHoàn cảnh, mục tiêu, mức khẩn, kế hoạchMức vữngGia đình đổi mục tiêuMục tiêu, mức sẵn sàng, kế hoạchMức vững, hoàn cảnhĐọc kỹ cột phải sẽ thấy nguyên tắc: **chỉ có bằng chứng về việc học mới được đụng vào mức vững**. Mọi thứ khác — ốm, lo lắng, lịch thi, đổi mục tiêu — chỉ đổi *việc nên làm hôm nay*.
## Thứ tự cập nhật cũng có luật [​](#thu-tu-cap-nhat-cung-co-luat)
Luôn theo một chiều: hoàn cảnh và mục tiêu được cập nhật **trước**, gợi ý được tính lại **sau cùng**.
Lý do đơn giản: gợi ý phụ thuộc vào mọi thứ khác. Tính gợi ý trước rồi mới cập nhật lịch thi thì gợi ý vừa sinh ra đã lỗi thời.
## Vì sao hôm nay khác hôm qua [​](#vi-sao-hom-nay-khac-hom-qua)
Vì mọi cập nhật đều được ghi kèm phiên bản, Nemo12 có thể trả lời chính xác câu này. Hệ thống so hai lần tính và quy về những sự kiện đã gây ra khác biệt:
*"Gợi ý hôm nay khác hôm qua vì: có thêm lịch thi học kỳ, có ghi nhận con ốm, thời gian rảnh trong tuần giảm 60 phút, và mức sẵn sàng phần Hình học vừa được tính lại."*
Đây là thứ một hệ thống "hộp đen" không làm được. Nếu bạn không giải thích được vì sao lời khuyên đổi, thì bạn cũng không kiểm tra được nó có hợp lý không — và bạn không có cơ sở nào để tin nó cả.
## Việc này không chạy trong lúc con bấm nút [​](#viec-nay-khong-chay-trong-luc-con-bam-nut)
Khi con nộp một bài, một chuỗi việc được kích hoạt: kiểm tra tính hợp lệ, lưu bằng chứng, cập nhật các mảng kiến thức liên quan, lan sang các mảng phụ thuộc, tính lại độ chắc chắn, phát hiện thay đổi đáng kể, sinh gợi ý mới, cập nhật hoàn cảnh, thông báo nếu cần.
Chuỗi này chạy ở hậu trường sau khi con đã thấy kết quả. Con không phải chờ hệ thống nghĩ.
## Lan truyền sang các mảng liên quan [​](#lan-truyen-sang-cac-mang-lien-quan)
Kiến thức là một mạng lưới, không phải danh sách. Khi bằng chứng về "phân số" thay đổi, các mảng phụ thuộc vào phân số cũng bị ảnh hưởng — không phải bị hạ thẳng, mà là **độ chắc chắn của chúng giảm đi**: nếu nền vừa lung lay, thì những kết luận xây trên nền đó cũng kém tin cậy hơn.
Đây là cách hệ thống phát hiện được những chuyện như: *"con làm sai bài lượng giác không phải vì lượng giác, mà vì phần biến đổi đại số cơ bản"*.
## Bạn thấy gì từ tất cả những điều này [​](#ban-thay-gi-tu-tat-ca-nhung-đieu-nay)
Không thấy phương trình nào cả. Cái gia đình thấy là những nhóm rất đơn giản:
- **Đang chắc** — vững, còn nhớ tốt.
- **Cần nhắc lại sớm** — vẫn ổn nhưng đang mờ dần.
- **Có nguy cơ quên** — từng vững, lâu không dùng.
- **Nên ôn lại** — đã rơi đáng kể.
- **Chưa đủ dữ liệu** — hệ thống chưa dám nói gì.
Toàn bộ phần tính toán bên dưới tồn tại để năm cái nhãn này nói đúng sự thật — chứ không phải để bạn phải đọc hiểu chúng.
Hiểu một đứa trẻ là việc làm liên tục, có sửa sai, có ghi lại lý do. Không phải một buổi đánh giá rồi kết luận.
[Sang nhóm: Student Portrait →](/portrait/)