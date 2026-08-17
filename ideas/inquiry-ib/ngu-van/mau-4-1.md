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
<!-- VERSION 2: STUDENT-FACING VIEW (INTERACTIVE DEMO) -->
<!-- ========================================== -->
<div v-if="currentPOV === 'student'" class="pov-content">

# 🚀 Mẫu 4.1: Nếu Đồ Vật & Con Vật Biết Nói? (Interactive UI Demo)

> 💡 **Bí mật hôm nay:** Đồ vật xung quanh em không hề "im lặng"! Hãy chạm, bấm nghe và thử tráo từ ngữ dưới đây để giải mã "mật mã ngôn từ"!

---

### 1. 🥊 Trải Nghiệm "Âm Thanh & Nhập Vai Phá Vỡ" (10 Phút)

Đọc câu chuyện ngắn này:
> *"Chiếc cặp sách cũ bị rách quai nằm ở góc bàn. Nam mua một chiếc cặp mới đẹp hơn và quên chiếc cặp cũ đi."*

<div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 12px; margin: 16px 0;">
  <p style="margin-top: 0; font-weight: bold; color: #166534;">🔊 Trải nghiệm Âm Thanh Thực Tế (Audio Trigger):</p>
  <button style="background: #22c55e; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px;" onclick="alert('🔊 [System Audio]: Tiếng dây kéo cặp rách xoẹt xoẹt & tiếng sách vở rơi cót két...')">
    ▶️ Bấm nghe Âm thanh thực tế của Dây Kéo Rách & Khóa Cặp Cũ
  </button>
</div>


👉 **Nhiệm vụ của em (3 câu):**
Hãy nhập vai **Chiếc Cặp Cũ** (xưng *"Tôi"*) và gõ câu trả lời của em vào ô bên dưới:
<textarea placeholder="Ví dụ: Tôi nằm rách quai ở góc bàn, nhìn Nam hân hoan ôm chiếc cặp mới..." style="width: 100%; height: 80px; padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1; margin-top: 8px;"></textarea>

---

### 2. 🔍 Thám Tử Văn Học — Thử Thách Tráo Từ Real-time (Word Swap Widget)

> [!TIP]
> **👨‍💻 DEV UI SPEC — CƠ CHẾ "THỬ NGHIỆM PHÁ VỠ" (DESTRUCTIVE TESTING)**:
> Widget bên dưới không phải trò chơi giải trí, mà dùng phương pháp **Tước đoạt từ vựng**: Khi học sinh click/drag-and-drop tráo từ nhân hóa thành từ trần trụi, thanh chỉ số **Attitude Meter** sụt giảm lập tức giúp học sinh **tự vấp phải sự mất mát cảm xúc**, từ đó ngộ ra cơ chế ngôn từ mà không cần học thuộc văn mẫu!


<div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 16px; border-radius: 12px; margin: 16px 0;">
  <p style="margin-top: 0; font-weight: bold; color: #1e40af;">🔄 Thử Thách Tráo Từ real-time (Interactive Text Swap):</p>
  
  <div style="background: white; padding: 12px; border-radius: 8px; font-size: 16px; line-height: 1.6; border: 1px dashed #3b82f6;">
    <b>Cách A (Có Nhân hóa):</b> <span style="background: #fef08a; padding: 2px 6px; border-radius: 4px;">Chú</span> vẹt nghiêng đầu, nhìn <span style="background: #fef08a; padding: 2px 6px; border-radius: 4px;">Anh</span> bằng đôi mắt tròn xoe. <span style="background: #fef08a; padding: 2px 6px; border-radius: 4px;">Chú</span> nói: "Anh ơi, nắng lên rồi!"
  </div>

  <div style="margin-top: 12px; background: white; padding: 12px; border-radius: 8px; font-size: 16px; line-height: 1.6; border: 1px dashed #94a3b8;">
    <b>Cách B (Tráo từ trần trụi):</b> <span style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">Con chim</span> vẹt kêu vẹt vẹt khi thấy nắng lên.
  </div>

  <div style="margin-top: 12px; font-size: 13px; color: #1e3a8a;">
    👉 <b>Chỉ số khoảng cách thái độ (Attitude Distance Meter):</b>
    <div style="background: #e2e8f0; height: 10px; border-radius: 5px; margin-top: 4px; overflow: hidden;">
      <div style="background: #3b82f6; width: 85%; height: 100%;"></div>
    </div>
    <span style="font-size: 11px; color: #64748b;">Cách A làm khoảng cách ngắn lại (Gần gũi: 85%) vs Cách B làm khoảng cách xa ra (Xa cách: 15%)</span>
  </div>
</div>

🔍 **Manh mối thám tử:**
1. Những từ ngữ nào (`Chú` / `Anh ơi` / `Nghiêng đầu`) đã làm thay đổi khoảng cách giữa người nói và con vẹt?
2. Khi tráo sang Cách B, em thấy thái độ của người đọc với con vẹt biến đổi thế nào?

---

### 3. 💬 Tranh Luận & Thử Thách Thu Âm (Voice Record Widget)

🤔 **Góc tranh luận:**
*Theo em, loài vật và đồ vật có thực sự có cảm xúc không, hay chỉ do con người tự tưởng tượng ra rồi gán cho chúng?*

🚀 **Thử thách Thực tế (Em chọn 1 trong 2):**
- **Option A (Ghi âm giọng nói 🎙️)**: Bấm nút bên dưới và thu âm 30s lời tâm sự của **Cục Tẩy nhỏ** khi bị dùng để xóa vết mực sai:
  <div style="margin-top: 8px;">
    <button style="background: #ef4444; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer;" onclick="alert('🎙️ [Voice Recorder Active]: Đang thu âm giọng nói của học sinh...')">🎙️ Bấm để Thu Âm Giọng Nói Nhân Hóa (30s)</button>
  </div>
- **Option B (Chụp ảnh & Dán nhãn 📸)**: Chụp ảnh một chiếc cây ngoài sân trường và gán "nhãn dán thông điệp" cho cây!

</div>
