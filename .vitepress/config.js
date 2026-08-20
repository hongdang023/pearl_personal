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
      { text: 'Curriculum', link: '/curriculum/', activeMatch: '/curriculum/' },
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
      "/learning/": [
            {
                  "text": "Học",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/learning/"
                        },
                        {
                              "text": "Learning Experience",
                              "link": "/learning/learning-experience"
                        },
                        {
                              "text": "Assessment Experience",
                              "link": "/learning/assessment-experience"
                        },
                        {
                              "text": "Assessment ≠ Learning",
                              "link": "/learning/assessment-khac-learning"
                        },
                        {
                              "text": "Học kỹ tới đâu",
                              "link": "/learning/hoc-ky"
                        }
                  ]
            },
            {
                  "text": "Kỹ thuật",
                  "items": [
                        {
                              "text": "Scaffolding",
                              "link": "/learning/scaffolding"
                        },
                        {
                              "text": "Retrieval Practice",
                              "link": "/learning/retrieval-practice"
                        },
                        {
                              "text": "Worked Examples",
                              "link": "/learning/worked-examples"
                        },
                        {
                              "text": "Spaced Practice",
                              "link": "/learning/spaced-practice"
                        }
                  ]
            }
      ],
      "/learner/": [
            {
                  "text": "Hiểu",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/learner/"
                        },
                        {
                              "text": "Learner Model",
                              "link": "/learner/learner-model"
                        },
                        {
                              "text": "Context Model",
                              "link": "/learner/context-model"
                        },
                        {
                              "text": "Evidence",
                              "link": "/learner/evidence"
                        },
                        {
                              "text": "Confidence Score",
                              "link": "/learner/confidence"
                        },
                        {
                              "text": "Một bài test không đủ",
                              "link": "/learner/mot-bai-test-khong-du"
                        },
                        {
                              "text": "Cập nhật liên tục",
                              "link": "/learner/cap-nhat"
                        }
                  ]
            }
      ],
      "/portrait/": [
            {
                  "text": "Chân dung",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/portrait/"
                        },
                        {
                              "text": "Khác gì điểm số",
                              "link": "/portrait/khac-diem-so"
                        },
                        {
                              "text": "Vì sao cần",
                              "link": "/portrait/vi-sao-can"
                        },
                        {
                              "text": "Milestone",
                              "link": "/portrait/milestone"
                        },
                        {
                              "text": "Ba ví dụ",
                              "link": "/portrait/vi-du"
                        }
                  ]
            }
      ],
      "/ideas/": [
            {
                  "text": "Trường phái",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/ideas/"
                        },
                        {
                              "text": "IB",
                              "link": "/ideas/ib"
                        },
                        {
                              "text": "AoPS",
                              "link": "/ideas/aops"
                        },
                        {
                              "text": "Inquiry-based",
                              "link": "/ideas/inquiry-based"
                        },
                        {
                              "text": "Competency-based",
                              "link": "/ideas/competency-based"
                        },
                        {
                              "text": "Mastery Learning",
                              "link": "/ideas/mastery-learning"
                        },
                        {
                              "text": "Constructivism",
                              "link": "/ideas/constructivism"
                        },
                        {
                              "text": "Direct Instruction",
                              "link": "/ideas/direct-instruction"
                        },
                        {
                              "text": "Project-based",
                              "link": "/ideas/project-based"
                        },
                        {
                              "text": "Montessori · Reggio · Classical",
                              "link": "/ideas/montessori-reggio-classical"
                        }
                  ]
            },
            {
                  "text": "Demo IB",
                  "items": [
                        {
                              "text": "Khung IB",
                              "link": "/ideas/inquiry-ib/"
                        },
                        {
                              "text": "Toán",
                              "link": "/ideas/inquiry-ib/toan"
                        },
                        {
                              "text": "Vật lý",
                              "link": "/ideas/inquiry-ib/vat-ly"
                        },
                        {
                              "text": "Hoá học",
                              "link": "/ideas/inquiry-ib/hoa-hoc"
                        },
                        {
                              "text": "Sinh học",
                              "link": "/ideas/inquiry-ib/sinh-hoc"
                        },
                        {
                              "text": "Ngữ văn",
                              "link": "/ideas/inquiry-ib/ngu-van"
                        },
                        {
                              "text": "Tiếng Anh",
                              "link": "/ideas/inquiry-ib/tieng-anh"
                        },
                        {
                              "text": "Lịch sử · Địa lý",
                              "link": "/ideas/inquiry-ib/lich-su-dia-ly"
                        },
                        {
                              "text": "Nghệ thuật · Thiết kế",
                              "link": "/ideas/inquiry-ib/nghe-thuat-thiet-ke"
                        },
                        {
                              "text": "Tin học",
                              "link": "/ideas/inquiry-ib/tin-hoc"
                        }
                  ]
            }
      ],
      "/curriculum/": [
            {
                  "text": "Curriculum",
                  "items": [
                        {
                              "text": "Cách dựng",
                              "link": "/curriculum/"
                        }
                  ]
            },
            {
                  "text": "Mathematics (Toán)",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/curriculum/toan/"
                        },
                        {
                              "text": "1 · Represent Quantity",
                              "link": "/curriculum/toan/represent/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "1.1 Number sense",
                                          "link": "/curriculum/toan/represent/number-sense"
                                    },
                                    {
                                          "text": "1.2 Equivalent forms",
                                          "link": "/curriculum/toan/represent/equivalent-forms"
                                    },
                                    {
                                          "text": "1.3 Shape and space",
                                          "link": "/curriculum/toan/represent/shape-and-space"
                                    },
                                    {
                                          "text": "1.4 Words to symbols",
                                          "link": "/curriculum/toan/represent/words-to-symbols"
                                    },
                                    {
                                          "text": "1.5 Estimate and round",
                                          "link": "/curriculum/toan/represent/estimate-and-round"
                                    }
                              ]
                        },
                        {
                              "text": "2 · Compute Fluently",
                              "link": "/curriculum/toan/compute/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "2.1 The four operations",
                                          "link": "/curriculum/toan/compute/four-operations"
                                    },
                                    {
                                          "text": "2.2 Basic algebra",
                                          "link": "/curriculum/toan/compute/basic-algebra"
                                    },
                                    {
                                          "text": "2.3 Self-checking",
                                          "link": "/curriculum/toan/compute/self-checking"
                                    },
                                    {
                                          "text": "2.4 Explain your method",
                                          "link": "/curriculum/toan/compute/explain-your-method"
                                    },
                                    {
                                          "text": "2.5 Calculus fluency",
                                          "link": "/curriculum/toan/compute/calculus-fluency"
                                    },
                                    {
                                          "text": "2.6 Mental and efficient computation",
                                          "link": "/curriculum/toan/compute/mental-and-efficient-computation"
                                    }
                              ]
                        },
                        {
                              "text": "3 · Reason & Prove",
                              "link": "/curriculum/toan/reason/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "3.1 Find the pattern",
                                          "link": "/curriculum/toan/reason/find-the-pattern"
                                    },
                                    {
                                          "text": "3.2 Why this step works",
                                          "link": "/curriculum/toan/reason/why-this-step-works"
                                    },
                                    {
                                          "text": "3.3 When the rule breaks",
                                          "link": "/curriculum/toan/reason/when-the-rule-breaks"
                                    },
                                    {
                                          "text": "3.4 Proof",
                                          "link": "/curriculum/toan/reason/proof"
                                    },
                                    {
                                          "text": "3.5 Logic and sets",
                                          "link": "/curriculum/toan/reason/logic-and-sets"
                                    },
                                    {
                                          "text": "3.6 Examples and counterexamples",
                                          "link": "/curriculum/toan/reason/examples-and-counterexamples"
                                    }
                              ]
                        },
                        {
                              "text": "4 · Model with Mathematics",
                              "link": "/curriculum/toan/model/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "4.1 Situation to mathematics",
                                          "link": "/curriculum/toan/model/situation-to-mathematics"
                                    },
                                    {
                                          "text": "4.2 Choose a model",
                                          "link": "/curriculum/toan/model/choose-a-model"
                                    },
                                    {
                                          "text": "4.3 Data and chance",
                                          "link": "/curriculum/toan/model/data-and-chance"
                                    },
                                    {
                                          "text": "4.4 Is the answer reasonable",
                                          "link": "/curriculum/toan/model/is-the-answer-reasonable"
                                    },
                                    {
                                          "text": "4.5 Numbers in the wild",
                                          "link": "/curriculum/toan/model/numbers-in-the-wild"
                                    }
                              ]
                        },
                        {
                              "text": "5 · Solve Non-routine Problems",
                              "link": "/curriculum/toan/solve/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "5.1 Understand the problem",
                                          "link": "/curriculum/toan/solve/understand-the-problem"
                                    },
                                    {
                                          "text": "5.2 Choose a strategy",
                                          "link": "/curriculum/toan/solve/choose-a-strategy"
                                    },
                                    {
                                          "text": "5.3 Look back",
                                          "link": "/curriculum/toan/solve/look-back"
                                    },
                                    {
                                          "text": "5.4 Persist when stuck",
                                          "link": "/curriculum/toan/solve/persist-when-stuck"
                                    },
                                    {
                                          "text": "5.5 Open-ended problems",
                                          "link": "/curriculum/toan/solve/open-ended-problems"
                                    }
                              ]
                        }
                  ]
            },
            {
                  "text": "English (Tiếng Anh)",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/curriculum/tieng-anh/"
                        },
                        {
                              "text": "1 · Listen & Decode",
                              "link": "/curriculum/tieng-anh/listen/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "1.1 Sounds and spelling",
                                          "link": "/curriculum/tieng-anh/listen/sounds-and-spelling"
                                    },
                                    {
                                          "text": "1.2 Listen for meaning",
                                          "link": "/curriculum/tieng-anh/listen/listen-for-meaning"
                                    },
                                    {
                                          "text": "1.3 Listen in real conditions",
                                          "link": "/curriculum/tieng-anh/listen/real-conditions"
                                    },
                                    {
                                          "text": "1.4 Pronounce to be understood",
                                          "link": "/curriculum/tieng-anh/listen/pronounce"
                                    }
                              ]
                        },
                        {
                              "text": "2 · Build Language",
                              "link": "/curriculum/tieng-anh/build/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "2.1 Vocabulary that sticks",
                                          "link": "/curriculum/tieng-anh/build/vocabulary"
                                    },
                                    {
                                          "text": "2.2 Grammar as meaning",
                                          "link": "/curriculum/tieng-anh/build/grammar-as-meaning"
                                    },
                                    {
                                          "text": "2.3 Fix your own errors",
                                          "link": "/curriculum/tieng-anh/build/fix-your-errors"
                                    },
                                    {
                                          "text": "2.4 Language in use",
                                          "link": "/curriculum/tieng-anh/build/language-in-use"
                                    }
                              ]
                        },
                        {
                              "text": "3 · Read & Interpret",
                              "link": "/curriculum/tieng-anh/read/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "3.1 Read for meaning",
                                          "link": "/curriculum/tieng-anh/read/read-for-meaning"
                                    },
                                    {
                                          "text": "3.2 Read between the lines",
                                          "link": "/curriculum/tieng-anh/read/between-the-lines"
                                    },
                                    {
                                          "text": "3.3 Text types in English",
                                          "link": "/curriculum/tieng-anh/read/text-types"
                                    },
                                    {
                                          "text": "3.4 Read critically",
                                          "link": "/curriculum/tieng-anh/read/read-critically"
                                    }
                              ]
                        },
                        {
                              "text": "4 · Speak & Write",
                              "link": "/curriculum/tieng-anh/produce/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "4.1 Speak to be understood",
                                          "link": "/curriculum/tieng-anh/produce/speak"
                                    },
                                    {
                                          "text": "4.2 Write for a reader",
                                          "link": "/curriculum/tieng-anh/produce/write"
                                    },
                                    {
                                          "text": "4.3 Register and audience",
                                          "link": "/curriculum/tieng-anh/produce/register"
                                    },
                                    {
                                          "text": "4.4 Draft and revise",
                                          "link": "/curriculum/tieng-anh/produce/revise"
                                    }
                              ]
                        },
                        {
                              "text": "5 · Use English in the World",
                              "link": "/curriculum/tieng-anh/use/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "5.1 Culture and meaning",
                                          "link": "/curriculum/tieng-anh/use/culture"
                                    },
                                    {
                                          "text": "5.2 Learn from real input",
                                          "link": "/curriculum/tieng-anh/use/real-input"
                                    },
                                    {
                                          "text": "5.3 Use English to learn something else",
                                          "link": "/curriculum/tieng-anh/use/learn-something-else"
                                    }
                              ]
                        }
                  ]
            },
            {
                  "text": "Vietnamese (Tiếng Việt)",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/curriculum/van/"
                        },
                        {
                              "text": "1 · Decode & Build Vocabulary",
                              "link": "/curriculum/van/decode/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "1.1 Read aloud",
                                          "link": "/curriculum/van/decode/read-aloud"
                                    },
                                    {
                                          "text": "1.2 Word meaning",
                                          "link": "/curriculum/van/decode/word-meaning"
                                    },
                                    {
                                          "text": "1.3 Sentences",
                                          "link": "/curriculum/van/decode/sentences"
                                    },
                                    {
                                          "text": "1.4 Spelling and punctuation",
                                          "link": "/curriculum/van/decode/spelling-and-punctuation"
                                    },
                                    {
                                          "text": "1.5 Growing vocabulary",
                                          "link": "/curriculum/van/decode/growing-vocabulary"
                                    }
                              ]
                        },
                        {
                              "text": "2 · Comprehend Text",
                              "link": "/curriculum/van/comprehend/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "2.1 Stated information",
                                          "link": "/curriculum/van/comprehend/stated-information"
                                    },
                                    {
                                          "text": "2.2 Text structure",
                                          "link": "/curriculum/van/comprehend/text-structure"
                                    },
                                    {
                                          "text": "2.3 Unstated information",
                                          "link": "/curriculum/van/comprehend/unstated-information"
                                    },
                                    {
                                          "text": "2.4 Main idea and summary",
                                          "link": "/curriculum/van/comprehend/main-idea-and-summary"
                                    },
                                    {
                                          "text": "2.5 Reading tables and diagrams",
                                          "link": "/curriculum/van/comprehend/reading-tables-and-diagrams"
                                    }
                              ]
                        },
                        {
                              "text": "3 · Interpret Meaning",
                              "link": "/curriculum/van/interpret/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "3.1 Figurative language",
                                          "link": "/curriculum/van/interpret/figurative-language"
                                    },
                                    {
                                          "text": "3.2 Who is speaking",
                                          "link": "/curriculum/van/interpret/who-is-speaking"
                                    },
                                    {
                                          "text": "3.3 The writer's choices",
                                          "link": "/curriculum/van/interpret/the-writers-choices"
                                    },
                                    {
                                          "text": "3.4 Evidence in the text",
                                          "link": "/curriculum/van/interpret/evidence-in-the-text"
                                    },
                                    {
                                          "text": "3.5 Attitude and tone",
                                          "link": "/curriculum/van/interpret/attitude-and-tone"
                                    }
                              ]
                        },
                        {
                              "text": "4 · Compose & Communicate",
                              "link": "/curriculum/van/compose/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "4.1 Sentences and paragraphs",
                                          "link": "/curriculum/van/compose/sentences-and-paragraphs"
                                    },
                                    {
                                          "text": "4.2 Text types",
                                          "link": "/curriculum/van/compose/text-types"
                                    },
                                    {
                                          "text": "4.3 Writing for a reader",
                                          "link": "/curriculum/van/compose/writing-for-a-reader"
                                    },
                                    {
                                          "text": "4.4 Revising",
                                          "link": "/curriculum/van/compose/revising"
                                    },
                                    {
                                          "text": "4.5 Argue and persuade",
                                          "link": "/curriculum/van/compose/argue-and-persuade"
                                    }
                              ]
                        },
                        {
                              "text": "5 · Engage with Complex Texts",
                              "link": "/curriculum/van/engage/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "5.1 Difficult texts",
                                          "link": "/curriculum/van/engage/difficult-texts"
                                    },
                                    {
                                          "text": "5.2 Connecting texts",
                                          "link": "/curriculum/van/engage/connecting-texts"
                                    },
                                    {
                                          "text": "5.3 Your own reading",
                                          "link": "/curriculum/van/engage/your-own-reading"
                                    },
                                    {
                                          "text": "5.4 Independent inquiry",
                                          "link": "/curriculum/van/engage/independent-inquiry"
                                    },
                                    {
                                          "text": "5.5 Reading to do something",
                                          "link": "/curriculum/van/engage/reading-to-do-something"
                                    },
                                    {
                                          "text": "5.6 Reading critically",
                                          "link": "/curriculum/van/engage/reading-critically"
                                    }
                              ]
                        }
                  ]
            },
            {
                  "text": "Physics (Vật lý)",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/curriculum/ly/"
                        },
                        {
                              "text": "1 · Observe & Measure",
                              "link": "/curriculum/ly/observe/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "1.1 Observe carefully",
                                          "link": "/curriculum/ly/observe/observe-carefully"
                                    },
                                    {
                                          "text": "1.2 Measure",
                                          "link": "/curriculum/ly/observe/measure"
                                    },
                                    {
                                          "text": "1.3 Uncertainty",
                                          "link": "/curriculum/ly/observe/uncertainty"
                                    }
                              ]
                        },
                        {
                              "text": "2 · Investigate",
                              "link": "/curriculum/ly/investigate/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "2.1 Testable question",
                                          "link": "/curriculum/ly/investigate/testable-question"
                                    },
                                    {
                                          "text": "2.2 Control variables",
                                          "link": "/curriculum/ly/investigate/control-variables"
                                    },
                                    {
                                          "text": "2.3 Collect data",
                                          "link": "/curriculum/ly/investigate/collect-data"
                                    },
                                    {
                                          "text": "2.4 Safety and technique",
                                          "link": "/curriculum/ly/investigate/safety-technique"
                                    }
                              ]
                        },
                        {
                              "text": "3 · Explain with Models",
                              "link": "/curriculum/ly/explain/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "3.1 Forces and motion",
                                          "link": "/curriculum/ly/explain/forces-motion"
                                    },
                                    {
                                          "text": "3.2 Energy",
                                          "link": "/curriculum/ly/explain/energy"
                                    },
                                    {
                                          "text": "3.3 Particles, heat and pressure",
                                          "link": "/curriculum/ly/explain/particles-heat"
                                    },
                                    {
                                          "text": "3.4 Waves: sound and light",
                                          "link": "/curriculum/ly/explain/waves"
                                    },
                                    {
                                          "text": "3.5 Electricity and magnetism",
                                          "link": "/curriculum/ly/explain/electricity"
                                    }
                              ]
                        },
                        {
                              "text": "4 · Reason with Evidence",
                              "link": "/curriculum/ly/reason/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "4.1 Graphs and patterns",
                                          "link": "/curriculum/ly/reason/graphs-patterns"
                                    },
                                    {
                                          "text": "4.2 Data to conclusion",
                                          "link": "/curriculum/ly/reason/data-to-conclusion"
                                    },
                                    {
                                          "text": "4.3 When results disagree",
                                          "link": "/curriculum/ly/reason/results-disagree"
                                    },
                                    {
                                          "text": "4.4 Limits of a model",
                                          "link": "/curriculum/ly/reason/model-limits"
                                    }
                              ]
                        },
                        {
                              "text": "5 · Apply in the World",
                              "link": "/curriculum/ly/apply/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "5.1 Physics in technology",
                                          "link": "/curriculum/ly/apply/in-technology"
                                    },
                                    {
                                          "text": "5.2 Evaluate claims",
                                          "link": "/curriculum/ly/apply/evaluate-claims"
                                    },
                                    {
                                          "text": "5.3 Impacts and choices",
                                          "link": "/curriculum/ly/apply/impacts-choices"
                                    }
                              ]
                        }
                  ]
            },
            {
                  "text": "Chemistry (Hoá học)",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/curriculum/hoa/"
                        },
                        {
                              "text": "1 · Observe & Measure",
                              "link": "/curriculum/hoa/observe/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "1.1 Properties of matter",
                                          "link": "/curriculum/hoa/observe/properties-of-matter"
                                    },
                                    {
                                          "text": "1.2 Physical or chemical change",
                                          "link": "/curriculum/hoa/observe/change-type"
                                    },
                                    {
                                          "text": "1.3 Measure in the lab",
                                          "link": "/curriculum/hoa/observe/measure-lab"
                                    }
                              ]
                        },
                        {
                              "text": "2 · Investigate Safely",
                              "link": "/curriculum/hoa/investigate/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "2.1 Safety first",
                                          "link": "/curriculum/hoa/investigate/safety-first"
                                    },
                                    {
                                          "text": "2.2 Handle and separate",
                                          "link": "/curriculum/hoa/investigate/handle-separate"
                                    },
                                    {
                                          "text": "2.3 Control conditions",
                                          "link": "/curriculum/hoa/investigate/control-conditions"
                                    },
                                    {
                                          "text": "2.4 Design an investigation",
                                          "link": "/curriculum/hoa/investigate/design-investigation"
                                    }
                              ]
                        },
                        {
                              "text": "3 · Explain with Particles",
                              "link": "/curriculum/hoa/explain/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "3.1 Particles explain everything",
                                          "link": "/curriculum/hoa/explain/particles"
                                    },
                                    {
                                          "text": "3.2 Inside the atom",
                                          "link": "/curriculum/hoa/explain/inside-atom"
                                    },
                                    {
                                          "text": "3.3 Periodic patterns",
                                          "link": "/curriculum/hoa/explain/periodic-patterns"
                                    },
                                    {
                                          "text": "3.4 Why atoms bond",
                                          "link": "/curriculum/hoa/explain/why-bond"
                                    },
                                    {
                                          "text": "3.5 Structure explains property",
                                          "link": "/curriculum/hoa/explain/structure-property"
                                    }
                              ]
                        },
                        {
                              "text": "4 · Quantify Change",
                              "link": "/curriculum/hoa/quantify/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "4.1 Equations that balance",
                                          "link": "/curriculum/hoa/quantify/equations"
                                    },
                                    {
                                          "text": "4.2 The mole",
                                          "link": "/curriculum/hoa/quantify/the-mole"
                                    },
                                    {
                                          "text": "4.3 Calculate from equations",
                                          "link": "/curriculum/hoa/quantify/calculate"
                                    },
                                    {
                                          "text": "4.4 Solutions and gases",
                                          "link": "/curriculum/hoa/quantify/solutions-gases"
                                    }
                              ]
                        },
                        {
                              "text": "5 · Apply & Evaluate",
                              "link": "/curriculum/hoa/apply/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "5.1 Chemistry around you",
                                          "link": "/curriculum/hoa/apply/around-you"
                                    },
                                    {
                                          "text": "5.2 Evaluate a chemical claim",
                                          "link": "/curriculum/hoa/apply/evaluate-claim"
                                    },
                                    {
                                          "text": "5.3 Chemistry and the environment",
                                          "link": "/curriculum/hoa/apply/environment"
                                    }
                              ]
                        }
                  ]
            },
            {
                  "text": "Biology (Sinh học)",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/curriculum/sinh/"
                        },
                        {
                              "text": "1 · Observe & Classify",
                              "link": "/curriculum/sinh/observe/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "1.1 Look closely",
                                          "link": "/curriculum/sinh/observe/look-closely"
                                    },
                                    {
                                          "text": "1.2 Group by criteria",
                                          "link": "/curriculum/sinh/observe/group-by-criteria"
                                    },
                                    {
                                          "text": "1.3 Change of scale",
                                          "link": "/curriculum/sinh/observe/change-of-scale"
                                    }
                              ]
                        },
                        {
                              "text": "2 · Investigate Living Things",
                              "link": "/curriculum/sinh/investigate/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "2.1 Ask about living things",
                                          "link": "/curriculum/sinh/investigate/ask-about-living"
                                    },
                                    {
                                          "text": "2.2 Control and compare",
                                          "link": "/curriculum/sinh/investigate/control-compare"
                                    },
                                    {
                                          "text": "2.3 How many is enough",
                                          "link": "/curriculum/sinh/investigate/how-many"
                                    },
                                    {
                                          "text": "2.4 Ethics in biology",
                                          "link": "/curriculum/sinh/investigate/ethics"
                                    }
                              ]
                        },
                        {
                              "text": "3 · Explain with Systems",
                              "link": "/curriculum/sinh/explain/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "3.1 The cell",
                                          "link": "/curriculum/sinh/explain/the-cell"
                                    },
                                    {
                                          "text": "3.2 Structure fits function",
                                          "link": "/curriculum/sinh/explain/structure-function"
                                    },
                                    {
                                          "text": "3.3 Energy and matter in life",
                                          "link": "/curriculum/sinh/explain/energy-matter"
                                    },
                                    {
                                          "text": "3.4 Information and inheritance",
                                          "link": "/curriculum/sinh/explain/inheritance"
                                    },
                                    {
                                          "text": "3.5 Ecosystems",
                                          "link": "/curriculum/sinh/explain/ecosystems"
                                    }
                              ]
                        },
                        {
                              "text": "4 · Reason with Variation",
                              "link": "/curriculum/sinh/reason/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "4.1 Variation is normal",
                                          "link": "/curriculum/sinh/reason/variation-normal"
                                    },
                                    {
                                          "text": "4.2 Compare two groups",
                                          "link": "/curriculum/sinh/reason/compare-groups"
                                    },
                                    {
                                          "text": "4.3 Chance and inheritance",
                                          "link": "/curriculum/sinh/reason/chance-inheritance"
                                    },
                                    {
                                          "text": "4.4 Evolution as reasoning",
                                          "link": "/curriculum/sinh/reason/evolution"
                                    }
                              ]
                        },
                        {
                              "text": "5 · Apply to Life",
                              "link": "/curriculum/sinh/apply/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "5.1 My own body",
                                          "link": "/curriculum/sinh/apply/my-body"
                                    },
                                    {
                                          "text": "5.2 Evaluate a health claim",
                                          "link": "/curriculum/sinh/apply/health-claims"
                                    },
                                    {
                                          "text": "5.3 People and ecosystems",
                                          "link": "/curriculum/sinh/apply/people-ecosystems"
                                    }
                              ]
                        }
                  ]
            },
            {
                  "text": "Computer Science (Tin học)",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/curriculum/tin/"
                        },
                        {
                              "text": "1 · Decompose",
                              "link": "/curriculum/tin/decompose/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "1.1 Break it down",
                                          "link": "/curriculum/tin/decompose/break-it-down"
                                    },
                                    {
                                          "text": "1.2 Find the pattern",
                                          "link": "/curriculum/tin/decompose/find-pattern"
                                    },
                                    {
                                          "text": "1.3 Abstract away detail",
                                          "link": "/curriculum/tin/decompose/abstract"
                                    }
                              ]
                        },
                        {
                              "text": "2 · Design an Algorithm",
                              "link": "/curriculum/tin/design/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "2.1 Steps that work",
                                          "link": "/curriculum/tin/design/steps-that-work"
                                    },
                                    {
                                          "text": "2.2 Choose a strategy",
                                          "link": "/curriculum/tin/design/choose-strategy"
                                    },
                                    {
                                          "text": "2.3 Cost of a solution",
                                          "link": "/curriculum/tin/design/cost"
                                    },
                                    {
                                          "text": "2.4 Will it always work",
                                          "link": "/curriculum/tin/design/always-work"
                                    }
                              ]
                        },
                        {
                              "text": "3 · Implement",
                              "link": "/curriculum/tin/implement/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "3.1 First programs",
                                          "link": "/curriculum/tin/implement/first-programs"
                                    },
                                    {
                                          "text": "3.2 Control flow",
                                          "link": "/curriculum/tin/implement/control-flow"
                                    },
                                    {
                                          "text": "3.3 Store many things",
                                          "link": "/curriculum/tin/implement/store-many"
                                    },
                                    {
                                          "text": "3.4 Functions",
                                          "link": "/curriculum/tin/implement/functions"
                                    },
                                    {
                                          "text": "3.5 Code people can read",
                                          "link": "/curriculum/tin/implement/readable-code"
                                    }
                              ]
                        },
                        {
                              "text": "4 · Debug & Verify",
                              "link": "/curriculum/tin/debug/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "4.1 Read the error",
                                          "link": "/curriculum/tin/debug/read-error"
                                    },
                                    {
                                          "text": "4.2 Narrow it down",
                                          "link": "/curriculum/tin/debug/narrow-down"
                                    },
                                    {
                                          "text": "4.3 Test it properly",
                                          "link": "/curriculum/tin/debug/test-properly"
                                    },
                                    {
                                          "text": "4.4 Show that it is correct",
                                          "link": "/curriculum/tin/debug/show-correct"
                                    }
                              ]
                        },
                        {
                              "text": "5 · Build & Judge",
                              "link": "/curriculum/tin/build/",
                              "collapsed": true,
                              "items": [
                                    {
                                          "text": "5.1 Make something real",
                                          "link": "/curriculum/tin/build/make-real"
                                    },
                                    {
                                          "text": "5.2 Data and safety",
                                          "link": "/curriculum/tin/build/data-safety"
                                    },
                                    {
                                          "text": "5.3 Judge the impact",
                                          "link": "/curriculum/tin/build/judge-impact"
                                    }
                              ]
                        }
                  ]
            }
      ],
      "/decisions/": [
            {
                  "text": "Quyết định",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/decisions/"
                        },
                        {
                              "text": "Học · đo · nghỉ",
                              "link": "/decisions/hoc-test-nghi"
                        },
                        {
                              "text": "Dạy cách nào",
                              "link": "/decisions/cach-day"
                        },
                        {
                              "text": "Cùng tuổi, khác gợi ý",
                              "link": "/decisions/khac-goi-y"
                        },
                        {
                              "text": "Readiness ≠ Mastery",
                              "link": "/decisions/readiness-vs-mastery"
                        },
                        {
                              "text": "Quên và ôn tập",
                              "link": "/decisions/retention"
                        }
                  ]
            }
      ],
      "/mental-models/": [
            {
                  "text": "Ngộ nhận",
                  "items": [
                        {
                              "text": "Tổng quan",
                              "link": "/mental-models/"
                        },
                        {
                              "text": "Điểm cao ≠ hiểu sâu",
                              "link": "/mental-models/diem-cao"
                        },
                        {
                              "text": "Nhiều bài ≠ học tốt",
                              "link": "/mental-models/lam-nhieu-bai"
                        },
                        {
                              "text": "Test không phán xét",
                              "link": "/mental-models/test-khong-phan-xet"
                        },
                        {
                              "text": "Luôn có uncertainty",
                              "link": "/mental-models/uncertainty"
                        },
                        {
                              "text": "Không phải cuộc thi nào",
                              "link": "/mental-models/cuoc-thi"
                        },
                        {
                              "text": "Không chỉ là thi đỗ",
                              "link": "/mental-models/muc-tieu-cuoi"
                        },
                        {
                              "text": "Portrait hơn KPI",
                              "link": "/mental-models/portrait-vs-kpi"
                        }
                  ]
            }
      ],
      "/": [
            {
                  "text": "Pearl",
                  "items": [
                        {
                              "text": "Từ điển",
                              "link": "/tu-dien"
                        }
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

