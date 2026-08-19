# Module 4.3 · Test it properly (Kiểm thử đúng cách) 

Thuộc [Package 4 · Debug & Verify](/curriculum/tin/debug/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi thử chương trình bằng những trường hợp có khả năng làm nó sai, không phải những trường hợp tôi biết nó đúng.

:::
**Unit**3**Mastery level**6 tới 12**Lớp (VN)**7 tới 12**Key concept chính**Evidence (Bằng chứng) · Development (Phát triển)

## Unit 1 · Try it with real cases (Thử với dữ liệu thật) 

**Tôi sẽ làm được** thử chương trình với dữ liệu thật, không chỉ với ví dụ trong đề.

**Mastery level 6-11 · Lớp 7-12 · Evidence (Bằng chứng)**
BậcLearner làm được gì**Đang hình thành**Chỉ chạy đúng bộ dữ liệu mẫu rồi nộp**Đạt**Tự nghĩ thêm vài bộ dữ liệu khác nhau để thử**Vững**Thử với dữ liệu **lộn xộn như thực tế**: thiếu trường, sai định dạng, quá dài

**Bằng chứng đạt.** Chương trình của learner xử lý được một dòng dữ liệu bị thiếu mà không sập.

**Hiểu lầm thường gặp.** Dữ liệu vào sẽ đúng định dạng như đề bài mô tả. Dữ liệu thật luôn lộn xộn, và phần lớn code trong hệ thống thật là code xử lý các trường hợp bất thường.

**Knowledge node.** Ca kiểm thử · Dữ liệu thật · Xử lý dữ liệu bất thường

## Unit 2 · Test the edges (Kiểm tra trường hợp biên) 

**Tôi sẽ làm được** thử ngay các trường hợp biên, vì đó là chỗ lỗi tập trung nhiều nhất.

**Mastery level 8-12 · Lớp 9-12 · Evidence (Bằng chứng)**
BậcLearner làm được gì**Đang hình thành**Chỉ thử với dữ liệu ở giữa khoảng**Đạt**Thử với giá trị nhỏ nhất, lớn nhất, rỗng, và ngay sát ngưỡng**Vững**Tự liệt kê được **danh sách biên đặc thù** cho bài toán của mình

**Bằng chứng đạt.** Learner tìm ra lỗi bằng cách thử đúng giá trị nằm trên ngưỡng phân loại.

**Hiểu lầm thường gặp.** Trường hợp biên hiếm gặp nên ít quan trọng. Lỗi tập trung ở biên vì đó là chỗ điều kiện đổi trạng thái, và [lỗi lệch một đơn vị](/curriculum/tin/implement/control-flow) chỉ lộ ra ở đúng đó.

**Knowledge node.** Trường hợp biên · Giá trị ngưỡng · Phân vùng dữ liệu kiểm thử

## Unit 3 · Write tests before code (Viết ca kiểm thử trước) 

**Tôi sẽ làm được** viết ra các ca kiểm thử trước, rồi mới viết code để chúng chạy qua.

**Mastery level 10-12 · Lớp 11-12 · Development (Phát triển)**
BậcLearner làm được gì**Đang hình thành**Viết code xong mới nghĩ tới việc thử**Đạt**Viết trước danh sách ca kiểm thử với kết quả mong đợi**Vững**Dùng chính các ca đó để **bảo vệ code khi sửa về sau**

**Bằng chứng đạt.** Learner sửa một phần chương trình và chạy lại bộ kiểm thử để chắc chắn phần khác không hỏng theo.

**Hiểu lầm thường gặp.** Viết kiểm thử trước là làm ngược và mất thời gian. Viết trước buộc learner phải **nói rõ chương trình phải làm gì**, và đó thường là lúc phát hiện mình chưa hiểu rõ yêu cầu. Nó cũng loại bỏ việc viết ca kiểm thử vừa khớp với code đã lỡ viết sai.

**Knowledge node.** Kiểm thử tự động · Viết kiểm thử trước · Kiểm thử hồi quy

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Evidence*: mục đích của kiểm thử không phải chứng minh code đúng, mà là cố làm nó sai.

**Inquiry.** Khuôn viết đề bài cho nhau:
text`Nhóm A viết một chương trình. Nhóm B viết BỘ CA KIỂM THỬ cho cùng đề bài đó.
     ↓
Hai nhóm làm độc lập, không nhìn nhau
     ↓
Chạy code của A qua bộ kiểm thử của B
     ↓
"Ca nào A trượt? A đã bỏ sót tình huống nào?"
     ↓
Đổi vai`

Tách người viết code khỏi người viết kiểm thử là cách duy nhất phá được điểm mù. Người viết code luôn thử đúng những trường hợp mình đã nghĩ tới khi viết, nên bộ kiểm thử của chính họ mù đúng ở chỗ code của họ hỏng.

[Module 4.4 · Show that it is correct →](/curriculum/tin/debug/show-correct)
