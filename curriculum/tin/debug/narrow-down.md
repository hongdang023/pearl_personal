# Module 4.2 · Narrow it down (Thu hẹp vùng nghi ngờ) 

Thuộc [Package 4 · Debug & Verify](/curriculum/tin/debug/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi tìm lỗi bằng cách thu hẹp vùng nghi ngờ có hệ thống, thay vì sửa mò cho tới khi may mắn chạy được.

:::
**Unit**3**Mastery level**6 tới 12**Lớp (VN)**7 tới 12**Key concept chính**Evidence (Bằng chứng) · Systems (Hệ thống)

## Unit 1 · Where does it stop working (Nó hỏng từ chỗ nào) 

**Tôi sẽ làm được** xác định chương trình còn chạy đúng tới dòng nào.

**Mastery level 6-11 · Lớp 7-12 · Evidence (Bằng chứng)**
BậcLearner làm được gì**Đang hình thành**Đọc lại toàn bộ code từ đầu, hy vọng thấy lỗi**Đạt**In giá trị biến ở vài chỗ để xem chúng còn đúng không**Vững**Đặt điểm kiểm tra ở **chỗ chia đôi vùng nghi ngờ**, không phải chỗ ngẫu nhiên

**Bằng chứng đạt.** Learner khoanh vùng lỗi vào ba dòng, từ một chương trình dài trăm dòng.

**Hiểu lầm thường gặp.** Đọc kỹ lại code sẽ tìm ra lỗi. Ta đọc code của mình theo cái mình **định viết**, không theo cái đã viết, nên đọc lại nhiều lần vẫn có thể không thấy. In giá trị ra là bằng chứng, còn đọc lại chỉ là trí nhớ.

**Knowledge node.** In giá trị để gỡ lỗi · Điểm kiểm tra · Khoanh vùng lỗi

## Unit 2 · Cut the problem in half (Chia đôi vùng nghi ngờ) 

**Tôi sẽ làm được** chia đôi vùng nghi ngờ liên tục, thay vì dò tuần tự.

**Mastery level 8-12 · Lớp 9-12 · Systems (Hệ thống) · Patterns (Quy luật)**
BậcLearner làm được gì**Đang hình thành**Kiểm tra lần lượt từ dòng đầu**Đạt**Kiểm tra ở giữa, rồi bỏ đi nửa không có lỗi**Vững**Áp dụng cách này cả cho **lịch sử thay đổi code**: phiên bản nào bắt đầu hỏng

**Bằng chứng đạt.** Learner tìm ra dòng gây lỗi trong một trăm dòng bằng khoảng bảy lần kiểm tra.

**Hiểu lầm thường gặp.** Gỡ lỗi phụ thuộc vào kinh nghiệm và trực giác. Phần lớn công việc gỡ lỗi là một **thủ tục có thể học được**, và nó chính là chia để trị ở [Module 2.2](/curriculum/tin/design/choose-strategy) áp dụng vào một bài toán khác.

**Knowledge node.** Chia đôi để tìm lỗi · Tìm kiếm nhị phân trong gỡ lỗi · Truy vết phiên bản

## Unit 3 · Change one thing at a time (Mỗi lần sửa một chỗ) 

**Tôi sẽ làm được** sửa từng thứ một và chạy lại, để biết cái gì thật sự có tác dụng.

**Mastery level 7-12 · Lớp 8-12 · Evidence (Bằng chứng)**
BậcLearner làm được gì**Đang hình thành**Sửa năm chỗ cùng lúc rồi chạy**Đạt**Sửa một chỗ, chạy, ghi kết quả, rồi mới sửa tiếp**Vững**Hoàn tác được các thay đổi không có tác dụng, giữ code sạch

**Bằng chứng đạt.** Learner nói được chính xác thay đổi nào đã sửa được lỗi.

**Hiểu lầm thường gặp.** Sửa nhiều chỗ cùng lúc thì nhanh hơn. Nếu chương trình chạy được, learner không biết chỗ nào đã sửa và bốn chỗ kia có gây hại gì không. Đây đúng là **kiểm soát biến** ở [Module 2.2 môn Vật lý](/curriculum/ly/investigate/control-variables), áp dụng vào code.

**Knowledge node.** Thay đổi có kiểm soát · Hoàn tác · Ghi lại thử nghiệm

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Evidence*: gỡ lỗi là một cuộc điều tra, và sửa mò là đoán mà không có bằng chứng.

**Inquiry.** Khuôn tìm lỗi cài sẵn, có đếm số lần:
text`Đưa một chương trình 60 dòng, GV đã cài đúng 1 lỗi
     ↓
Luật: mỗi lần learner được in ra giá trị ở MỘT chỗ, tính là một lượt
     ↓
Ai tìm ra lỗi với ít lượt nhất thì thắng
     ↓
Sau đó: "bạn thắng đã đặt điểm kiểm tra đầu tiên ở đâu? Vì sao?"`

Ràng buộc đếm lượt biến gỡ lỗi thành một bài toán chiến lược. Learner tự phát hiện ra rằng đặt điểm kiểm tra **ở giữa** luôn tốt hơn đặt ở đầu, và đó chính là chia đôi vùng nghi ngờ mà không cần ai giảng.

[Module 4.3 · Test it properly →](/curriculum/tin/debug/test-properly)
