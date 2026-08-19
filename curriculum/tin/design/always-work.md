# Module 2.4 · Will it always work (Nó có luôn đúng không) 

Thuộc [Package 2 · Design an Algorithm](/curriculum/tin/design/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi kiểm được thuật toán của mình trên những trường hợp khó nhất, không chỉ trường hợp dễ.

:::
**Unit**3**Mastery level**7 tới 12**Lớp (VN)**8 tới 12**Key concept chính**Evidence (Bằng chứng) · Systems (Hệ thống)

## Unit 1 · The empty and the huge case (Trường hợp rỗng và trường hợp khổng lồ) 

**Tôi sẽ làm được** thử thuật toán với dữ liệu rỗng, dữ liệu một phần tử, và dữ liệu rất lớn.

**Mastery level 7-12 · Lớp 8-12 · Evidence (Bằng chứng)**
BậcLearner làm được gì**Đang hình thành**Chỉ thử với dữ liệu mẫu trong đề**Đạt**Thử thêm các trường hợp biên: rỗng, một phần tử, toàn phần tử giống nhau**Vững**Tự nghĩ ra được trường hợp biên **đặc thù cho bài này**

**Bằng chứng đạt.** Learner tìm ra lỗi của chính mình bằng cách thử với danh sách rỗng.

**Hiểu lầm thường gặp.** Dữ liệu rỗng là trường hợp hiếm, không đáng lo. Nó xảy ra thường xuyên trong thực tế, và nó là nguồn lỗi phổ biến nhất khi chương trình gặp dữ liệu thật lần đầu.

**Knowledge node.** Trường hợp biên · Dữ liệu rỗng · Kiểm thử biên

## Unit 2 · Worst case, not lucky case (Trường hợp xấu nhất, không phải may mắn) 

**Tôi sẽ làm được** đánh giá thuật toán bằng trường hợp tệ nhất, không bằng trường hợp thuận lợi.

**Mastery level 9-12 · Lớp 10-12 · Evidence (Bằng chứng)**
BậcLearner làm được gì**Đang hình thành**Đánh giá dựa trên lần chạy thử may mắn**Đạt**Nghĩ ra được dữ liệu làm thuật toán chạy chậm nhất**Vững**Phân biệt trường hợp xấu nhất với **trường hợp trung bình**, và biết khi nào dùng cái nào

**Bằng chứng đạt.** Learner tự tạo ra bộ dữ liệu làm thuật toán của mình bộc lộ điểm yếu.

**Hiểu lầm thường gặp.** Nếu chạy nhanh trong các lần thử thì thuật toán nhanh. Dữ liệu ngẫu nhiên hiếm khi rơi vào trường hợp xấu nhất, còn dữ liệu thật thì thường có cấu trúc, và cấu trúc đó có thể chính là trường hợp xấu nhất.

**Knowledge node.** Trường hợp xấu nhất · Trường hợp trung bình · Dữ liệu đối kháng

## Unit 3 · Argue that it terminates (Lập luận rằng nó dừng) 

**Tôi sẽ làm được** giải thích vì sao vòng lặp hoặc đệ quy của tôi chắc chắn sẽ dừng.

**Mastery level 10-12 · Lớp 11-12 · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Không nghĩ tới khả năng chương trình chạy mãi**Đạt**Chỉ ra được đại lượng nào giảm dần sau mỗi vòng**Vững**Nhận ra vòng lặp có thể **không dừng với một số dữ liệu nhất định**

**Bằng chứng đạt.** Learner chỉ ra một vòng lặp trông vô hại nhưng sẽ chạy mãi khi gặp một dữ liệu cụ thể.

**Hiểu lầm thường gặp.** Vòng lặp có điều kiện dừng thì sẽ dừng. Điều kiện dừng chỉ có tác dụng nếu có thứ gì đó **tiến về phía nó** sau mỗi vòng. Một vòng lặp giảm biến trong nhánh này mà tăng trong nhánh kia hoàn toàn có thể chạy mãi.

**Knowledge node.** Tính dừng · Đại lượng giảm dần · Vòng lặp vô hạn · Bất biến vòng lặp

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Evidence*: chạy đúng vài lần không phải bằng chứng cho việc luôn đúng.

**Inquiry.** Khuôn phá code của bạn:
text`Mỗi nhóm viết một chương trình nhỏ, tự tin là đúng
     ↓
ĐỔI code cho nhóm khác
     ↓
Nhiệm vụ nhóm nhận: tìm ra một bộ dữ liệu làm code này SAI hoặc TREO
     ↓
Nhóm nào phá được code của người khác thì thắng
     ↓
Trả code về, sửa, đổi lại lần hai`

Đảo chiều động cơ là điểm mấu chốt. Khi được thưởng vì tìm ra lỗi thay vì vì viết đúng, learner đột nhiên nghĩ ra rất nhiều trường hợp biên mà chính mình chưa bao giờ thử với code của bản thân. Đó cũng là lý do trong nghề, người kiểm thử và người viết thường không nên là một người.

## Kết thúc Package 2 
text`Steps that work    chỉ dẫn không mơ hồ, kiểm được trên giấy
Choose a strategy  nhiều cách đúng, khác nhau ở cái giá
Cost of a solution nó chậm đi thế nào khi dữ liệu lớn lên
Will it always work trường hợp xấu nhất, không phải may mắn`

[Package 3 · Implement →](/curriculum/tin/implement/)
