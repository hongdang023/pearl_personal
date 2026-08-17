# D5 - Cấu Trúc Khung Mẫu Chuẩn Cho Bài Học Ngữ Văn IB (Lesson Template 2-POV)

Tài liệu này quy định **Cấu trúc 2 Góc nhìn (Dual Point of View)** cho các bài học Ngữ Văn tiếp cận IB (Lớp 4 -> Lớp 9):
- **Version 1 (👨‍🏫 Dành cho Giáo viên & Phụ huynh)**: Có phần **Quick Guide (Tóm tắt 1 phút)** giúp hiểu ngay flow dạy trong 30 giây, đi kèm kịch bản chi tiết và Rubric tiêu chí bên dưới.
- **Version 2 (🎒 Dành cho Học sinh)**: Ngôn ngữ sinh động, thử thách tương tác và bài tập thực tế.

> [!NOTE]
> Giao diện Web (VitePress) sẽ hiển thị dạng nút bấm chuyển đổi:
> `[ 👨‍🏫 Dành cho Giáo viên & Phụ huynh ]` `[ 🎒 Dành cho Học sinh ]`

---

## Mẫu Cấu Trúc Chuẩn (Lesson Template Code Spec)

```html
<!-- Nút chuyển đổi Góc nhìn -->
<div class="pov-switcher">
  <button class="pill-btn active" onclick="switchPOV('teacher')">👨‍🏫 Dành cho Giáo viên & Phụ huynh</button>
  <button class="pill-btn" onclick="switchPOV('student')">🎒 Dành cho Học sinh</button>
</div>

<!-- ========================================== -->
<!-- VERSION 1: TEACHER & PARENT VIEW           -->
<!-- ========================================== -->
<div id="pov-teacher" class="pov-content">

# Mẫu [Số Mẫu] — [Tên Bài Học]

> [!TIP]
> ### ⚡ Quick Guide — Tóm Tắt Bài Học Trong 1 Phút
> * **Bài học SGK KTTTCS**: [Tên bài & Tác phẩm trong SGK Kết nối tri thức với cuộc sống - Lớp X]
> * **Thông điệp cốt lõi (SOI)**: *"[1 câu thông điệp ngắn gọn học sinh sẽ rút ra]"*
> * **Flow tiết học 45 phút trong 4 bước đơn giản**:
>   1. **Thử thách 10p (Provocation)**: [HS làm thử thách nhập vai/thay đổi văn bản để tự vấp phải phát hiện].
>   2. **Khám phá 15p (Inquiry)**: [Soi văn bản SGK để HS tự rút ra quy luật nghệ thuật].
>   3. **Tranh luận 10p (Debatable)**: [Thảo luận 1 câu hỏi mở liên hệ thực tế].
>   4. **Thực hành (Transfer)**: [Vận dụng bài học giải mã 1 tình huống/văn bản mới ngoài đời].
> * **Về nhà hỏi con (Home Connection)**: *"[1 câu hỏi ngắn cha mẹ hỏi con khi ở nhà]"*

---

### 1. Khung Khái Niệm IB (IB Setup)

#### A. Khung Cấu Phần IB
| Thành tố IB | Nội dung |
| :--- | :--- |
| **Key Concept** | [Khái niệm chính: Perspective / Connections / Creativity / Form...] |
| **Related Concept** | [Khái niệm liên quan: Point of view / Purpose / Theme / Imagery / Tone...] |
| **Global Context** | [Bối cảnh toàn cầu: Personal and cultural expression / ...] |
| **Statement of Inquiry (SOI)** | *"[1 câu thông điệp cốt lõi ghép từ Key Concept + Related Concept + Global Context]"* |

#### B. Phân Hệ Câu Hỏi Truy Vấn (Essential vs Guiding Questions)
- **Essential Question (EQ - Câu hỏi Cốt lõi / Khái niệm)**: *[Câu hỏi lớn xuyên suốt, không dính tên tác phẩm: "Cách chọn từ ngữ gọi tên một vật định hình khoảng cách và thái độ của ta với vật đó như thế nào?"]*
- **Guiding Questions (GQ - Câu hỏi Dẫn dắt bóc tách văn bản)**:
  - *GQ1 (Factual - Nhận diện)*: *[Chỉ ra các chi tiết/lựa chọn nghệ thuật cụ thể trong văn bản SGK]*
  - *GQ2 (Conceptual - So sánh trung tính)*: *[So sánh 2 phương án: "Khi thay X bằng Y, vị trí và khoảng cách giữa người nói và đối tượng biến đổi ra sao?" (Không dùng từ mớm cảm xúc như "thân thiết/sinh động/ấm áp")]*
  - *GQ3 (Debatable - Tranh luận mở)*: *[Câu hỏi mở kết nối góc nhìn phản biện với đời sống]*

---

### 2. Tiến Trình Tiết Học (Lesson Flow)

#### Bước 1 — Thử thách Gây tò mò (Provocation) (15 phút)
- **Hoạt động HS**: [Thử thách ngắn: đổi ngôi kể, xóa từ tu từ, đóng vai 4 góc nhìn...]
- **Mục tiêu**: Học sinh tự vấp phải phát hiện/biến đổi thái độ trước khi nghe giảng.

#### Bước 2 — Khám phá Cơ chế Văn bản qua Guiding Questions (15 phút)
- **Đọc văn bản SGK**: [Trích đoạn tác phẩm trong SGK KTTTCS (Tầng 1 - Phương tiện)]
- **Câu hỏi dẫn dắt (Guiding Questions)**: [Đặt hệ thống câu hỏi so sánh/trung tính hoàn toàn không mớm đáp án]

#### Bước 3 — Gợi mở Lớp học (Scaffolding Prompts - Tuyệt đối không mớm lời)
> [!WARNING]
> **Quy tắc sinh tử**: Không dùng các từ định hướng cảm xúc có sẵn như *"thấy thương"*, *"tình bạn"*, *"thân thiết"*, *"sinh động"*. Bắt buộc dùng câu hỏi so sánh vị trí/khoảng cách/thái độ trung tính.

- **Khi HS trả lời thuộc lòng văn mẫu ("cho hay, cho sinh động")**: Giáo viên hỏi: *"[Câu hỏi lật ngược vấn đề: 'Nếu đổi từ X thành Y, thông tin gì còn, cảm giác gì mất?']"*
- **Khi HS bị bí ý tưởng**: Giáo viên hỏi: *"[Câu hỏi gợi mở nấc thang 1 - so sánh trực quan]"*


#### Bước 4 — Tranh luận & Bài tập Thực tế (Debatable & Transfer) (10 phút)
- **Tranh luận (Debatable)**: [Thảo luận câu hỏi mở]
- **Bài tập Thực tế (Transfer Task)**: [Vận dụng bài học để giải mã một văn bản/hiện tượng mới ngoài SGK]

---

### 3. Đánh Giá Đầu Ra & Rubric

#### Đề bài Đánh giá (Assessment Task)
[Đề bài ngắn đòi hỏi học sinh phân tích và đưa ra góc nhìn cá nhân có dẫn chứng]

#### A. Dành cho Lớp 6 -> 9: Rubric Tiêu chí MYP
| Tiêu chí | Mức Đạt (3-6 điểm) | Mức Xuất sắc (7-8 điểm) |
| :--- | :--- | :--- |
| **Criterion A - Analysing** | Chỉ ra được từ ngữ và tác dụng cơ bản. | Phân tích sâu sắc, bảo vệ góc đọc bằng bằng chứng văn bản. |
| **Criterion B - Organizing** | Bài viết mạch lạc, đủ mở - thân - kết. | Bố cục chặt chẽ, lập luận sắc bén. |
| **Criterion C - Producing Text**| Thể hiện được góc nhìn cá nhân. | Sáng tạo vượt trội, giọng văn có dấu ấn riêng. |
| **Criterion D - Using Language** | Dùng từ đúng ngữ pháp, đúng thuật ngữ. | Ngôn từ nghệ thuật, diễn đạt tinh tế. |

#### B. Dành cho Lớp 4 -> 5: Tiêu chí Phát triển PYP
- **Inquirer (Truy vấn)**: Biết tự đặt câu hỏi khám phá văn bản.
- **Communicator (Giao tiếp)**: Bộc lộ ý kiến tự tin, diễn đạt rõ ràng.
- **Reflective (Thấu cảm)**: Biết đặt mình vào vị trí nhân vật/vật thể.
- **Language Usage (Dùng từ)**: Dùng từ miêu tả sinh động, đúng ngữ pháp.

---

### 4. 💡 Gợi Ý Cho Cha Mẹ Đồng Hành (Home Connection)
> - **Câu hỏi trò chuyện (3 phút)**: [1 câu hỏi ngắn cha mẹ hỏi con sau giờ học]
> - **Hoạt động thực tế (5 phút)**: [Trải nghiệm nhỏ cùng con ở nhà]

</div>


<!-- ========================================== -->
<!-- VERSION 2: STUDENT-FACING VIEW (INTERACTIVE UX/UI SPEC FOR DEVS) -->
<!-- ========================================== -->
<div id="pov-student" class="pov-content" style="display: none;">

# 🚀 Mẫu [Số Mẫu] — [Tên Bài Học Dành Cho Học Sinh]

> 💡 **Thử thách hôm nay:** [1 câu slogan ngắn gọn, gây tò mò]

---

### 1. 🥊 Trải Nghiệm "Phá Vỡ" (Thử Thách Đa Giác Quan 10 Phút)

> [!NOTE]
> **👨‍💻 DEV SPEC - WIDGET 1: Audio/Visual Provocation Widget**
> - **Chức năng**: Cho phép học sinh tương tác âm thanh & hình ảnh trực quan trước khi đọc bài.
> - **UI Component**: `<AudioSoundboard :sounds="['tieng_chim_hot.mp3', 'tieng_gio_thoi.mp3']" />` hoặc `<PerspectiveSlider />`.
> - **Hành vi**: Click vào nút âm thanh để nghe tiếng kêu thật, kéo slider để thay đổi góc nhìn/vận tốc câu chuyện.

- **Nhiệm vụ Đa giác quan dành cho em**: 
  - 🔊 *Bấm nút nghe thử:* `<button onclick="playAudio('bird_sound')">🔊 Nghe Tiếng Con Vẹt Kêu Thực Tế</button>`
  - ✍️ *Thử thách 3 câu:* [Nhập vai, thay đổi ngôi kể hoặc thử xóa từ tu từ trực tiếp vào ô input tương tác].

---

### 2. 🔍 Thám Tử Văn Học & Thử Thách Tráo Từ (Interactive Text Swap)

> [!NOTE]
> **👨‍💻 DEV SPEC - WIDGET 2: Drag & Drop Word Swap & Inversion Widget**
> - **Chức năng**: Cho phép học sinh kéo thả tráo đổi vị trí từ vựng (ngữ pháp đảo ngữ) hoặc thay đổi từ tu từ để thấy ngay câu văn thay đổi sắc thái real-time.
> - **UI Component**: `<InteractiveTextSwap :originalText="textA" :modifiedText="textB" @onSwap="handleSwap" />`.
> - **Hành vi**: Kéo từ "Chú" thả đè lên từ "Con chim" -> Hệ thống tự đổi màu và hiển thị chỉ số khoảng cách thái độ (Attitude Distance Indicator).

- **Đoạn trích tương tác (SGK KTTTCS)**:
  > `<InteractiveTextSwap original="Chú vẹt nghiêng đầu... Chú nói: Anh ơi..." alt="Con chim vẹt kêu vẹt vẹt khi thấy nắng" />`

- **Manh mối thám tử**:
  1. *[Tráo từ để thử nghiệm]*: Kéo thả các từ ngữ chỉ người (`Chú`, `Anh ơi`) ra khỏi câu văn để xem hiệu ứng biến đổi ra sao.
  2. *[Câu hỏi tự phát hiện]*: *Khi tráo từ, khoảng cách giữa nhân vật và con chim thay đổi thế nào?*

---

### 3. 💬 Tranh Luận & Thử Thách Thực Tế (Audio Record / Drawing Widget)

> [!NOTE]
> **👨‍💻 DEV SPEC - WIDGET 3: Voice Recorder & Interactive Canvas Widget**
> - **Chức năng**: Học sinh thu âm giọng nói nhân hóa của mình hoặc vẽ/tải ảnh đồ vật thực tế xung quanh.
> - **UI Component**: `<VoiceRecorder maxDuration="60" />` hoặc `<InteractiveCanvas />`.

- **Góc tranh luận**: *[Câu hỏi mở kích thích ý kiến riêng]*
- **Thử thách Thực tế**:
  - 🎙️ *Thu âm giọng nói:* `<button onclick="startRecord()">🎙️ Thu âm 30s giọng nhân hóa của em</button>`
  - 📸 *Tải ảnh thực tế:* Tải ảnh 1 đồ vật trên bàn học và dán "nhãn dán thông điệp" cho đối tượng đó.

</div>

```


