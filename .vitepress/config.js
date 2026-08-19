import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi-VN',
  title: 'Pearl',
  titleTemplate: ':title — Pearl · Nemo12',
  description: 'Nemo12 tin vào điều gì, hiểu learner như thế nào, và vì sao hệ thống lại dạy và đánh giá theo cách đó.',
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/pearl.svg',
    siteTitle: 'Pearl',
    nav: [
      { text: 'Học', link: '/learning/', activeMatch: '/learning/' },
      { text: 'Hiểu', link: '/learner/', activeMatch: '/learner/' },
      { text: 'Chân dung', link: '/portrait/', activeMatch: '/portrait/' },
      { text: 'Trường phái', link: '/ideas/', activeMatch: '/ideas/' },
      { text: 'Mentor', link: '/mentor-guidelines/', activeMatch: '/mentor-guidelines/' },
      { text: 'Quyết định', link: '/decisions/', activeMatch: '/decisions/' },
      { text: 'Ngộ nhận', link: '/mental-models/', activeMatch: '/mental-models/' },
      {
        text: 'Nemo12',
        items: [
          { text: 'Từ điển 10 khái niệm', link: '/tu-dien' },
          { text: 'Marlins là ai', link: '/marlins' },
          {
            items: [
              { text: 'Trang chính', link: 'https://nemo12.com' },
              { text: 'Vào học (learn)', link: 'https://learn.nemo12.com' },
              { text: 'Dành cho phụ huynh (marlins)', link: 'https://marlins.nemo12.com' }
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/mentor-guidelines/': [
        {
          text: 'Mentor Guidelines',
          items: [
            { text: 'Tổng quan', link: '/mentor-guidelines/' }
          ]
        },
        {
          text: '1 · Foundations & Mindset',
          items: [
            { text: '1.1 Why this guideline exists', link: '/mentor-guidelines/foundations/why-this-guideline-exists' },
            { text: '1.2 What good mentoring looks like', link: '/mentor-guidelines/foundations/what-good-mentoring-looks-like' },
            { text: '1.3 Learning vs. Product evidence', link: '/mentor-guidelines/foundations/learning-vs-product-evidence' }
          ]
        },
        {
          text: '2 · Decision & Intervention Framework',
          items: [
            { text: '2.1 The Decision Framework', link: '/mentor-guidelines/framework/decision-framework' },
            { text: '2.2 The Intervention Ladder (Levels 0-4)', link: '/mentor-guidelines/framework/intervention-ladder' },
            { text: '2.3 Student Agency & Step-back Rules', link: '/mentor-guidelines/framework/student-agency-step-back' }
          ]
        },
        {
          text: '3 · The 5E Mentor Playbook',
          items: [
            { text: '3.1 Engage · Create Need to Know', link: '/mentor-guidelines/playbook-5e/engage' },
            { text: '3.2 Explore · Allow Trial & Error', link: '/mentor-guidelines/playbook-5e/explore' },
            { text: '3.3 Explain · Goal → Attempt → Gap', link: '/mentor-guidelines/playbook-5e/explain' },
            { text: '3.4 Elaborate · Push Beyond Product', link: '/mentor-guidelines/playbook-5e/elaborate' },
            { text: '3.5 Evaluate · Measure Learning', link: '/mentor-guidelines/playbook-5e/evaluate' }
          ]
        },
        {
          text: '4 · Question Bank & Anti-patterns',
          items: [
            { text: '4.1 Question Bank by Diagnosis', link: '/mentor-guidelines/tools/question-bank' },
            { text: '4.2 Do / Don\'t: Anti-patterns', link: '/mentor-guidelines/tools/anti-patterns' },
            { text: '4.3 Diagnostic Matrix', link: '/mentor-guidelines/tools/diagnostic-matrix' }
          ]
        },
        {
          text: '5 · Common Situations (Playbook A-Z)',
          items: [
            { text: '5.1 Student no intent or silent', link: '/mentor-guidelines/situations/no-intent-silent' },
            { text: '5.2 Stuck with tools & Over-dependent', link: '/mentor-guidelines/situations/stuck-tools-dependent' },
            { text: '5.3 Fast finisher & Superficial reflection', link: '/mentor-guidelines/situations/fast-finisher-reflection' },
            { text: '5.4 Handling resistance', link: '/mentor-guidelines/situations/handling-resistance' }
          ]
        },
        {
          text: '6 · Operations & Quality Audit',
          items: [
            { text: '6.1 Before / During / After Checklist', link: '/mentor-guidelines/operations/class-checklist' },
            { text: '6.2 Mentor Quality Audit Framework', link: '/mentor-guidelines/operations/quality-audit' }
          ]
        }
      ],
      '/learning/': [
        {
          text: 'Học',
          items: [
            { text: 'Tổng quan', link: '/learning/' },
            { text: 'Learning Experience', link: '/learning/learning-experience' },
            { text: 'Assessment Experience', link: '/learning/assessment-experience' },
            { text: 'Assessment ≠ Learning', link: '/learning/assessment-khac-learning' },
            { text: 'Học kỹ tới đâu', link: '/learning/hoc-ky' }
          ]
        },
        {
          text: 'Kỹ thuật',
          items: [
            { text: 'Scaffolding', link: '/learning/scaffolding' },
            { text: 'Retrieval Practice', link: '/learning/retrieval-practice' },
            { text: 'Worked Examples', link: '/learning/worked-examples' },
            { text: 'Spaced Practice', link: '/learning/spaced-practice' }
          ]
        }
      ],
      '/learner/': [
        {
          text: 'Hiểu',
          items: [
            { text: 'Tổng quan', link: '/learner/' },
            { text: 'Learner Model', link: '/learner/learner-model' },
            { text: 'Context Model', link: '/learner/context-model' },
            { text: 'Evidence', link: '/learner/evidence' },
            { text: 'Confidence Score', link: '/learner/confidence' },
            { text: 'Một bài test không đủ', link: '/learner/mot-bai-test-khong-du' },
            { text: 'Cập nhật liên tục', link: '/learner/cap-nhat' }
          ]
        }
      ],
      '/portrait/': [
        {
          text: 'Chân dung',
          items: [
            { text: 'Tổng quan', link: '/portrait/' },
            { text: 'Khác gì điểm số', link: '/portrait/khac-diem-so' },
            { text: 'Vì sao cần', link: '/portrait/vi-sao-can' },
            { text: 'Milestone', link: '/portrait/milestone' },
            { text: 'Ba ví dụ', link: '/portrait/vi-du' }
          ]
        }
      ],
      '/ideas/': [
        {
          text: 'Trường phái',
          items: [
            { text: 'Tổng quan', link: '/ideas/' },
            { text: 'IB', link: '/ideas/ib' },
            { text: 'AoPS', link: '/ideas/aops' },
            { text: 'Inquiry-based', link: '/ideas/inquiry-based' },
            { text: 'Concept-based', link: '/ideas/concept-based' },
            { text: 'Competency-based', link: '/ideas/competency-based' },
            { text: 'Mastery Learning', link: '/ideas/mastery-learning' },
            { text: 'Constructivism', link: '/ideas/constructivism' },
            { text: 'Direct Instruction', link: '/ideas/direct-instruction' },
            { text: 'Project-based', link: '/ideas/project-based' },
            { text: 'Montessori · Reggio · Classical', link: '/ideas/montessori-reggio-classical' }
          ]
        },
        {
          text: 'Demo IB',
          items: [
            { text: 'Khung IB', link: '/ideas/inquiry-ib/' },
            { text: 'Toán', link: '/ideas/inquiry-ib/toan' },
            { text: 'Vật lý', link: '/ideas/inquiry-ib/vat-ly' },
            { text: 'Hoá học', link: '/ideas/inquiry-ib/hoa-hoc' },
            { text: 'Sinh học', link: '/ideas/inquiry-ib/sinh-hoc' },
            { text: 'Ngữ văn', link: '/ideas/inquiry-ib/ngu-van' },
            { text: 'Tiếng Anh', link: '/ideas/inquiry-ib/tieng-anh' },
            { text: 'Lịch sử · Địa lý', link: '/ideas/inquiry-ib/lich-su-dia-ly' },
            { text: 'Nghệ thuật · Thiết kế', link: '/ideas/inquiry-ib/nghe-thuat-thiet-ke' }
          ]
        }
      ],
      '/decisions/': [
        {
          text: 'Quyết định',
          items: [
            { text: 'Tổng quan', link: '/decisions/' },
            { text: 'Học · đo · nghỉ', link: '/decisions/hoc-test-nghi' },
            { text: 'Dạy cách nào', link: '/decisions/cach-day' },
            { text: 'Cùng tuổi, khác gợi ý', link: '/decisions/khac-goi-y' },
            { text: 'Readiness ≠ Mastery', link: '/decisions/readiness-vs-mastery' },
            { text: 'Quên và ôn tập', link: '/decisions/retention' }
          ]
        }
      ],
      '/mental-models/': [
        {
          text: 'Ngộ nhận',
          items: [
            { text: 'Tổng quan', link: '/mental-models/' },
            { text: 'Điểm cao ≠ hiểu sâu', link: '/mental-models/diem-cao' },
            { text: 'Nhiều bài ≠ học tốt', link: '/mental-models/lam-nhieu-bai' },
            { text: 'Test không phán xét', link: '/mental-models/test-khong-phan-xet' },
            { text: 'Luôn có uncertainty', link: '/mental-models/uncertainty' },
            { text: 'Không phải cuộc thi nào', link: '/mental-models/cuoc-thi' },
            { text: 'Không chỉ là thi đỗ', link: '/mental-models/muc-tieu-cuoi' },
            { text: 'Portrait hơn KPI', link: '/mental-models/portrait-vs-kpi' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: 'Trên trang này'
    },
    docFooter: {
      prev: 'Trang trước',
      next: 'Trang sau'
    },
    darkModeSwitchLabel: 'Giao diện',
    returnToTopLabel: 'Lên đầu trang',
    sidebarMenuLabel: 'Mục lục',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Tìm',
            buttonAriaLabel: 'Tìm trong Pearl'
          },
          modal: {
            noResultsText: 'Không tìm thấy',
            resetButtonTitle: 'Xoá tìm kiếm',
            footer: {
              selectText: 'chọn',
              navigateText: 'di chuyển',
              closeText: 'đóng'
            }
          }
        }
      }
    },
    footer: {
      copyright: 'Nemo12'
    }
  }
})

