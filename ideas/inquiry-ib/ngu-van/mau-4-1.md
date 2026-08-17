# Mẫu 4.1 — Biện Pháp Tu Từ Nhân Hóa: Nếu Đồ Vật & Con Vật Biết Nói?

<script setup>
import { ref } from 'vue'
const currentPOV = ref('teacher')
function setPOV(pov) {
  currentPOV.value = pov
}
</script>

<!-- Nút chuyển đổi Góc nhìn (Pill Button Component) -->
<div class="pov-switcher" style="display: flex; gap: 10px; margin-bottom: 25px; padding: 12px; background: #f3f4f6; border-radius: 12px;">
  <button :class="['pill-btn', currentPOV === 'teacher' ? 'active' : '']" @click="setPOV('teacher')" style="padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">👨‍🏫 Dành cho Giáo viên & Quản lý</button>
  <button :class="['pill-btn', currentPOV === 'student' ? 'active' : '']" @click="setPOV('student')" style="padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">🎒 Dành cho Học sinh</button>
  <button :class="['pill-btn', currentPOV === 'parent' ? 'active' : '']" @click="setPOV('parent')" style="padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">🏠 Dành cho Phụ huynh</button>
</div>

<!-- ========================================== -->
<!-- VERSION 1: TEACHER & PARENT VIEW           -->
<!-- ========================================== -->
<div v-if="currentPOV === 'teacher' || currentPOV === 'parent'" class="pov-content">

> [!TIP]
> ### ⚡ Quick Guide — Tóm Tắt Bài Học Trong 1 Phút
> * **Bài học SGK KTTTCS**: Bài 2: *Con vẹt xanh* & *Quả bầu tiên* (SGK Ngữ văn 4, Tập 1 - Bộ Kết nối tri thức).
> * **Thông điệp cốt lõi (SOI)**: *"Cho đồ vật/con vật cất lời suy nghĩ của con người giúp ta thấu cảm thế giới xung quanh theo cách mà lời kể trần trụi không làm được."*
> * **Flow tiết học 45 phút trong 4 bước đơn giản**:
>   1. **Thử thách 10p (Provocation)**: Đóng vai "Chiếc cặp sách cũ rách quai" để học sinh tự nhận ra việc cho vật cất lời khiến người đọc thương nó hơn hẳn.
>   2. **Khám phá 15p (Inquiry)**: Soi đoạn trích *Con vẹt xanh* để tự rút ra 3 cơ chế nhân hóa (từ xưng hô người, cử chỉ người, lời thoại người).
>   3. **Tranh luận 10p (Debatable)**: *"Nếu một ngày con người dừng nhân hóa cây cối sông hồ, thế giới sẽ ra sao?"*
>   4. **Thực hành (Transfer)**: Nhìn vết xước bàn học hoặc cây rụng lá ngoài sân và giải mã "thông điệp nhân hóa" của nó.
> * **Về nhà hỏi con (Home Connection)**: *"Nếu chiếc bàn học này biết nói, con đoán xem hôm nay nó sẽ bảo gì với con?"*

---

### 1. Khung Khái Niệm IB (IB Setup)

#### A. Khung Cấu Phần IB
| Thành tố IB | Nội dung |
| :--- | :--- |
| **Key Concept** | **Perspective** (Góc nhìn) |
| **Related Concept** | **Character** (Nhân vật), **Purpose** (Mục đích sáng tạo) |
| **Global Context** | **Personal and cultural expression** (Bộc lộ cá nhân và văn hóa) |
| **Statement of Inquiry (SOI)** | *"Việc trao cho đồ vật/con vật suy nghĩ và góc nhìn của con người (Nhân hóa) giúp ta thấu cảm thế giới xung quanh theo những cách mà lời kể trần trụi không làm được."* |

#### B. Bộ 3 Câu Hỏi Truy Vấn (Inquiry Questions)
- **Factual (Thực tế)**: Biện pháp nhân hóa là gì? Có những cách nhân hóa nào trong bài *Con vẹt xanh* (gọi bằng từ chỉ người, tả cử chỉ người, cho nói lời người)?
- **Conceptual (Cơ chế)**: Khi con vật/đồ vật cất lời như con người, khoảng cách và cảm xúc của em đối với nó thay đổi thế nào so với khi xem nó là vật vô giác?
- **Debatable (Tranh luận)**: Loài vật và đồ vật thực sự có "tiếng nói riêng", hay nhân hóa chỉ là sự tưởng tượng do con người tự gán cho chúng?

---

### 2. Tiến Trình Tiết Học (Lesson Flow)

#### Bước 1 — Thử thách Gây tò mò (Provocation) (15 phút)
- **Tình huống**:
  > *"Chiếc cặp sách cũ bị rách quai nằm ở góc bàn. Nam mua một chiếc cặp mới đẹp hơn và quên chiếc cặp cũ đi."*
- **Hoạt động HS**: Đóng vai **Chiếc Cặp Cũ** kể lại đoạn trên trong 3 câu (xưng *"Tôi"*).
- **Mục tiêu**: Học sinh tự nhận ra: *Không cần thêm sự việc mới, chỉ cần cho đồ vật cất lời là cảm xúc thấu cảm lập tức xuất hiện.*

#### Bước 2 — Khám phá Cơ chế Nhân hóa trong SGK (15 phút)
Đọc đoạn trích bài *Con vẹt xanh* (SGK Ngữ văn 4 KTTTCS):
> *"Chú vẹt nghiêng đầu, nhìn Anh bằng đôi mắt tròn xoe sáng quắc. Chú nói: 'Anh ơi, nắng lên rồi!'"*

- **Câu hỏi gợi mở**:
  1. *Nếu thay bằng: "Con vẹt kêu khi thấy nắng", em thấy tình bạn trong câu văn thay đổi thế nào?*
  2. *Những từ nào (`Chú`, `nghiêng đầu`, `Anh ơi`) đã biến con chim nuôi thành một người bạn?*
- **Học sinh rút ra quy luật**: *Nhân hóa = Gọi vật như người + Tả cử chỉ người + Cho vật cất lời.*

#### Bước 3 — Gợi mở Lớp học (Scaffolding Prompts - Không mớm lời)
> [!WARNING]
> **Không mớm lời**: Tuyệt đối không hỏi: *"Em có thấy thân thiết không?"*. Hãy dùng câu hỏi so sánh hoặc lật ngược vấn đề.

- **Khi HS trả lời thuộc lòng văn mẫu ("cho hay, cho sinh động")**:
  - GV hỏi: *"Nếu cô thay chữ 'Chú vẹt' thành 'Con chim đó', em thấy khoảng cách giữa người nói với con chim trong hai cách gọi này khác nhau thế nào?"*
- **Khi HS bị bí ý không biết nhập vai chiếc cặp**:
  - GV hỏi: *"Nếu chiếc cặp cũ ghé tai nói chuyện với quyển vở bên trong nó, nó sẽ phàn nàn hay cảm ơn Nam điều gì?"*

#### Bước 4 — Tranh luận & Bài tập Thực tế (Debatable & Transfer) (10 phút)
- **Tranh luận (Debatable)**: *"Nếu một ngày con người dừng nhân hóa, không coi cây cối hay sông hồ như có cảm xúc nữa, thế giới của chúng ta sẽ ra sao?"*
- **Bài tập Thực tế (Transfer Task)**: Quan sát một vết xước trên chiếc bàn học hoặc một cây bàng rụng lá ngoài sân trường, hãy giải mã "thông điệp" mà đối tượng đó đang muốn nhắn gửi tới em bằng 3 câu nhân hóa.

---

### 3. Đánh Giá Đầu Ra & Rubric

#### Đề bài Đánh giá (Assessment Task)
> **Đề bài**: Chọn 1 đồ vật trên bàn học (bút chì cùn, thước kẻ sứt mép, cục tẩy nhỏ). Viết đoạn văn 5 câu nhân hóa đồ vật đó để kể về một ngày làm việc của mình.

#### Tiêu chí Phát triển PYP
- **Inquirer (Truy vấn)**: Biết tự đặt câu hỏi *"Nếu đồ vật này biết nói, nó sẽ nhắn gì với mình?"*.
- **Communicator (Giao tiếp)**: Dùng từ ngữ nhân hóa (xưng hô, lời thoại) tự nhiên.
- **Reflective (Thấu cảm)**: Thể hiện sự trân trọng với đồ vật xung quanh.
- **Language Usage (Dùng từ)**: Đặt câu đúng ngữ pháp, từ ngữ miêu tả sinh động.

---

### 4. 💡 Gợi Ý Cho Cha Mẹ Đồng Hành (Home Connection)
> - **Câu hỏi trò chuyện (3 phút)**: *"Nếu chiếc bàn học này biết nói, con đoán xem hôm nay nó sẽ bảo gì với con?"*
> - **Hoạt động thực tế (5 phút)**: Cha mẹ và con cùng đóng vai 2 đồ vật trong bếp (Chiếc chảo & Chiếc nồi cơm) trò chuyện với nhau trong 3 phút.

</div>

<!-- ========================================== -->
<!-- VERSION 2: STUDENT-FACING VIEW             -->
<!-- ========================================== -->
<div v-if="currentPOV === 'student'" class="pov-content">

# 🚀 Mẫu 4.1: Nếu Đồ Vật & Con Vật Biết Nói?

> 💡 **Bí mật hôm nay:** Đồ vật xung quanh em không hề "im lặng"! Nếu chúng biết cất lời, thế giới sẽ biến thành một cuộc phiêu lưu cực kỳ thú vị!

---

### 1. 🥊 Trải Nghiệm "Nhập Vai Phá Vỡ" (10 Phút)

Đọc câu chuyện ngắn này:
> *"Chiếc cặp sách cũ bị rách quai nằm ở góc bàn. Nam mua một chiếc cặp mới đẹp hơn và quên chiếc cặp cũ đi."*

👉 **Nhiệm vụ của em (3 câu):**
Hãy "biến hình" thành **Chiếc Cặp Cũ** (xưng *"Tôi"*) để kể lại câu chuyện trên!

---

### 2. 🔍 Thám Tử Văn Học (SGK KTTTCS)

Soi đoạn trích trong bài *Con vẹt xanh* (SGK Ngữ văn 4 Kết nối tri thức với cuộc sống):
> *"Chú vẹt nghiêng đầu, nhìn Anh bằng đôi mắt tròn xoe sáng quắc. Chú nói: 'Anh ơi, nắng lên rồi!'"*

🔍 **Manh mối thám tử:**
1. Những từ nào (`Chú` / `Anh ơi` / `nghiêng đầu`) đã biến con vẹt thành một người bạn?
2. Nếu thay thành: *"Con chim vẹt kêu khi thấy nắng"*, em thấy tình bạn trong câu văn còn ấm áp nữa không? Tại sao?

---

### 3. 💬 Tranh Luận & Thử Thách Thực Tế (Transfer Challenge)

🤔 **Góc tranh luận:**
*Theo em, đồ vật có thực sự có cảm xúc không, hay chỉ do con người tự tưởng tượng ra?*

🚀 **Thử thách Thực tế (Chọn 1 trong 2):**
- **Option A**: Viết 5 câu tâm sự của **Cục Tẩy nhỏ** mỗi khi bị dùng để xóa vết mực sai.
- **Option B**: Nhìn một chiếc cây rụng lá ngoài sân trường và viết 3 câu nhân hóa lời nhắn gửi của chiếc cây đó tới các bạn học sinh!

</div>
