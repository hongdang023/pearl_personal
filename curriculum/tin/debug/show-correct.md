# Module 4.4 · Show that it is correct (Chứng minh nó đúng) 

Thuộc [Package 4 · Debug & Verify](/curriculum/tin/debug/).

::: pearl-bigidea
**Tôi sẽ làm được gì**

Tôi phân biệt được chương trình chạy xong với chương trình cho kết quả đúng.

:::
**Unit**3**Mastery level**6 tới 12**Lớp (VN)**7 tới 12**Key concept chính**Evidence (Bằng chứng) · Communication (Giao tiếp)

## Unit 1 · It ran is not it is right (Chạy được không phải là đúng) 

**Tôi sẽ làm được** kiểm tra kết quả có đúng không, chứ không chỉ kiểm chương trình có chạy không.

**Mastery level 7-12 · Lớp 8-12 · Evidence (Bằng chứng)**
BậcLearner làm được gì**Đang hình thành**Thấy chương trình chạy xong là coi như xong**Đạt**Tự tính tay kết quả mong đợi và so với kết quả chương trình**Vững**Kiểm được **tính hợp lý của kết quả** ngay cả khi không tính tay được

**Bằng chứng đạt.** Learner phát hiện chương trình tính điểm trung bình cho ra 15 trên thang 10, và biết ngay là sai.

**Hiểu lầm thường gặp.** Không báo lỗi nghĩa là đúng. Lỗi logic chạy hoàn hảo và trả về đáp án sai. Đây chính là ý ở [Module 4.1 môn Vật lý](/curriculum/ly/reason/graphs-patterns) và [Module 4.3 môn Hoá học](/curriculum/hoa/quantify/calculate): kiểm tính hợp lý của đáp án là một bước riêng, không bỏ được.

**Knowledge node.** Kết quả mong đợi · Kiểm tính hợp lý · Lỗi logic

## Unit 2 · Reason about correctness (Lập luận về tính đúng đắn) 

**Tôi sẽ làm được** lập luận vì sao thuật toán của tôi đúng với mọi dữ liệu, không chỉ với dữ liệu đã thử.

**Mastery level 10-12 · Lớp 11-12 · Systems (Hệ thống)**
BậcLearner làm được gì**Đang hình thành**Tin là đúng vì đã thử nhiều lần**Đạt**Giải thích được vì sao mỗi bước giữ nguyên tính đúng**Vững**Nêu được **bất biến của vòng lặp**: điều luôn đúng sau mỗi vòng

**Bằng chứng đạt.** Learner giải thích được vì sao sau vòng lặp thứ k, phần đầu của mảng chắc chắn đã được sắp xếp.

**Hiểu lầm thường gặp.** Thử đủ nhiều thì chứng minh được đúng. Kiểm thử chỉ chứng minh được có lỗi, không bao giờ chứng minh được không có lỗi. Chỉ lập luận mới phủ được mọi dữ liệu, và đây là chỗ Tin học gặp lại kiểu suy luận của môn Toán.

**Knowledge node.** Tính đúng đắn · Bất biến vòng lặp · Chứng minh thuật toán

## Unit 3 · Explain your bug to someone (Giải thích lỗi cho người khác) 

**Tôi sẽ làm được** giải thích lỗi của mình thành lời, và thường tự tìm ra đáp án ngay giữa chừng.

**Mastery level 6-12 · Lớp 7-12 · Communication (Giao tiếp)**
BậcLearner làm được gì**Đang hình thành**Chỉ nói *"nó không chạy"* rồi chờ được giúp**Đạt**Mô tả được đã làm gì, mong đợi gì, nhận được gì**Vững**Thường **tự tìm ra lỗi trong lúc đang giải thích**, trước khi người kia kịp trả lời

**Bằng chứng đạt.** Learner đang trình bày lỗi thì dừng lại và nói *"à em biết rồi"*.

**Hiểu lầm thường gặp.** Nói ra chỉ để nhờ giúp. Hiện tượng tự tìm ra lỗi khi giải thích phổ biến tới mức ngành đặt tên riêng cho nó, và nó hiệu quả vì buộc learner **nói ra các giả định ngầm** mà mình chưa từng kiểm.

Việc người nghe có hiểu gì về lập trình hay không gần như không quan trọng. Lợi ích nằm ở phía người nói.

**Knowledge node.** Giải thích lỗi · Giả định ngầm · Diễn đạt vấn đề · Nhờ giúp đúng cách

## Dạy module này theo kiểu IB 

**Concept-based.** Khái niệm dẫn dắt là *Evidence*: chạy được là một quan sát, đúng là một kết luận, và giữa hai thứ đó cần lập luận.

**Inquiry.** Khuôn chương trình chạy đúng mà sai:
text`Đưa một chương trình KHÔNG hề báo lỗi và chạy trơn tru
     ↓
Nó tính điểm trung bình, và luôn cho kết quả lệch một chút
     ↓
"Chương trình này có lỗi không?"  (nhiều learner nói không, vì nó chạy)
     ↓
Tự tính tay một trường hợp, so lại
     ↓
"Nếu không ai tính tay thì bao lâu nữa mới có người phát hiện?"`

Câu cuối là câu đáng nhớ nhất của cả package. Lỗi logic có thể tồn tại nhiều năm trong một hệ thống đang chạy, và nó chỉ lộ ra khi có người chịu kiểm chứng kết quả thay vì tin vào việc chương trình không báo lỗi.

## Kết thúc Package 4 
text`Read the error    thông báo lỗi là manh mối, không phải lời chê
Narrow it down    thu hẹp có hệ thống, không sửa mò
Test it properly  cố làm nó sai, không cố chứng minh nó đúng
Show correctness  chạy được không phải là đúng`

[Package 5 · Build & Judge →](/curriculum/tin/build/)
