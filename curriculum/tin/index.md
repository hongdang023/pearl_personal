# Computer Science (Tin học), lớp 1 tới lớp 12 

Năm Learning Package dựng cùng cách với các môn khác trong khu vực này. Xương sống là **năng lực kiểu Building 21**, tầng khái niệm lấy từ **IB**.

::: pearl-bigidea
**Ý xuyên suốt cả môn**

Máy tính làm đúng cái ta bảo nó làm, không phải cái ta muốn nó làm. Toàn bộ môn học này là việc thu hẹp khoảng cách giữa hai thứ đó.

:::
**Cũng quan trọng, nhưng không phải ý lớn nhất**

- **Gỡ lỗi không phải tai nạn, nó là công việc chính.** Người mới tưởng viết đúng ngay là bình thường; người làm nghề biết phần lớn thời gian nằm ở chỗ tìm ra vì sao nó chưa chạy.
- Cùng một bài toán luôn có nhiều lời giải đúng, khác nhau ở cái giá phải trả: thời gian, bộ nhớ, công sức bảo trì.
- Code được viết cho người đọc trước, cho máy chạy sau. Máy nào cũng chạy được code xấu; người thì không đọc nổi.

## Cây này quan hệ thế nào với cây nội dung đang chạy 

Nemo12 đã có một cây Tin học **tổ chức theo chủ đề** (SRC-185): Lập trình cơ bản, Cấu trúc dữ liệu, Thuật toán nền tảng, Kỹ thuật giải thuật, Máy tính và dữ liệu, Ứng dụng và sản phẩm. Cây đó đang chạy trong hệ thống.

Cây trên trang này **không thay thế cây đó**, giống hệt cách xử lý ở [Vật lý](/curriculum/ly/) và [Hoá học](/curriculum/hoa/):
text`Trục kiến thức  (đang chạy)   Lập trình · Cấu trúc dữ liệu · Thuật toán · Kỹ thuật · Máy tính · Ứng dụng
Trục năng lực   (trang này)   Decompose · Design · Implement · Debug · Build`

## Năm package 
text`Decompose → Design → Implement → Debug → Build`[**1 · Decompose**Phân rã bài toán. 3 module, 10 unit.](/curriculum/tin/decompose/)[**2 · Design an Algorithm**Thiết kế thuật toán. 4 module, 13 unit.](/curriculum/tin/design/)[**3 · Implement**Viết thành chương trình. 5 module, 19 unit.](/curriculum/tin/implement/)[**4 · Debug & Verify**Gỡ lỗi và kiểm chứng. 4 module, 12 unit.](/curriculum/tin/debug/)[**5 · Build & Judge**Làm sản phẩm và đánh giá. 3 module, 9 unit.](/curriculum/tin/build/)PackageTôi sẽ làm được gìCấp 1-2Cấp 3**1 · Decompose** (Phân rã bài toán)Chia một bài lớn thành các phần tôi giải đượcchia việc, tìm quy luậttrừu tượng hoá, mô hình dữ liệu**2 · Design an Algorithm** (Thiết kế thuật toán)Nghĩ ra cách giải trước khi viết dòng code nàocác bước, sơ đồchọn thuật toán, độ phức tạp**3 · Implement** (Viết thành chương trình)Biến ý tưởng thành chương trình chạy đượcbiến, lặp, điều kiệncấu trúc dữ liệu, hàm, thư viện**4 · Debug & Verify** (Gỡ lỗi và kiểm chứng)Tìm ra vì sao nó sai, và chứng minh nó đúngđọc lỗi, thử lạica kiểm thử, biên, chứng minh đúng**5 · Build & Judge** (Làm sản phẩm và đánh giá)Làm ra thứ người khác dùng được, và đánh giá tác độngdự án nhỏdữ liệu, an toàn, đạo đức, AI

## Vì sao dùng khung Design của IB, không dùng khung Sciences 

Bốn môn khoa học trước dùng bốn tiêu chí A tới D của nhóm **Sciences**. Tin học thì hợp với nhóm **Design** hơn, vì sản phẩm cuối là một thứ được **tạo ra**, không phải một hiện tượng được giải thích:
Tiêu chí Design của IBPackage tương ứng**A · Inquiring and analysing**Package 1**B · Developing ideas**Package 2**C · Creating the solution**Package 3**D · Evaluating**Package 4 và 5

**Key concepts:** Communication (Giao tiếp) · Communities (Cộng đồng) · Development (Phát triển) · Systems (Hệ thống)

## Lớp trong chương trình trong nước 

Tin học là môn có mặt **sớm hơn các môn khoa học khác**: từ lớp 3 trong Tin học và Công nghệ, rồi thành môn riêng từ lớp 6 tới lớp 12. Nhưng nội dung ở cấp 1 chủ yếu là sử dụng máy tính, còn tư duy thuật toán mới là thứ Package 1 và 2 nhắm tới, và nó bắt đầu được từ rất sớm mà không cần máy tính nào.

## Coverage chương trình trong nước 
Mạch nội dung (cây đang chạy)Chủ yếu rơi vàoLập trình cơ bảnPackage 3Cấu trúc dữ liệuPackage 3Thuật toán nền tảngPackage 2Kỹ thuật giải thuậtPackage 2Máy tính và dữ liệuPackage 5Ứng dụng và sản phẩmPackage 5

Bảng này lộ ra chỗ trống rõ nhất: **Package 1 và Package 4 gần như không có mạch nội dung nào tương ứng.** Phân rã bài toán và gỡ lỗi là hai việc chiếm nhiều thời gian nhất của một lập trình viên thật, và cả hai đều không có chương riêng trong bất kỳ sách giáo khoa nào.

::: warning custom-block

Trạng thái

Đây là **thiết kế curriculum**, chưa chạy trong hệ thống. Cây nội dung theo chủ đề (SRC-185) mới là cây đang chạy. Việc còn lại: dựng bảng đối chiếu hai chiều giữa hai cây.

:::

## Xem ba tiết học thật của môn này 

Curriculum nói learner phải chứng minh được gì. Việc **dạy một unit bằng cách nào** là quyết định riêng, và [ba bài học inquiry theo IB](/ideas/inquiry-ib/tin-hoc) cho thấy nó diễn ra thế nào trong một tiết học cụ thể.

Tự phát minh thuật toán sắp xếp · Nén dữ liệu · Thuật toán xếp hàng

Mỗi bài có bảng đối chiếu ngược lại, chỉ rõ nó rơi vào package và module nào của trang này.

## Nguồn 

- Building 21: [Competencies and Learning Progressions](https://building21.org/resources/student-competencies/)
- IB: [Design in the MYP](https://www.ibo.org/programmes/middle-years-programme/curriculum/design/)

Giải được 500 bài trên trang chấm tự động và tự làm được một sản phẩm người khác dùng là hai năng lực khác nhau. Chỉ một trong hai có bảng xếp hạng.

[Biology (Sinh học) →](/curriculum/sinh/)
