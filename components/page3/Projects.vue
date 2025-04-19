<template>
    <div class="projects">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center topHeader">
            <h2>مشاريعنا</h2>
            <p>
              عملنا منذ عام 2012 مع أكثر من 120 عميل من مختلف البلدان العربية
              <br />
              على مدار أكثر من 8 سنوات بأعلى جودة وذلك بشهادة عملائنا
            </p>
          </div>
  
          <div class="col-12">
            <ul class="tabs">
              <li
                v-for="tab in tabs"
                :key="tab.value"
                :class="{ active: selectedTab === tab.value }"
                @click="selectedTab = tab.value"
              >
                {{ tab.label }}
              </li>
            </ul>
  
            <div class="items">
              <div class="row">
                <div
                  v-for="course in filteredItems"
                  :key="course.title"
                  class="col-md-4 item"
                  :data-category="course.category"
                >
                  <img :src="course.image" alt="" />
                  <h5>{{ course.title }}</h5>
                  <p>{{ course.description }}</p>
                  <a href="">
                    التفاصيل <i class="fa-solid fa-arrow-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Define tab values
  const tabs = [
    { label: 'كل الدورات', value: 'all' },
    { label: 'تداول الفوركس', value: 'forex' },
    { label: 'تحليل البيانات المالية للشركات', value: 'financial-analysis' },
    { label: 'تحديد نقاط الدخول والخروج', value: 'entry-exit' },
    { label: 'تعلم قراءة الرسوم البيانية والشارتات', value: 'charts' },
    { label: 'تعلم أساسيات الأسواق المالية', value: 'basics' }
  ]
  
  // Active tab state
  const selectedTab = ref('all')
  
  // Course items
  const items = [
    {
      title: 'مقدمة في تداول الفوركس',
      description: 'تعلم أساسيات سوق الفوركس وكيفية التداول فيه.',
      image: '/assets/images/Group 1000014986 6.png',
      category: 'forex'
    },
    {
      title: 'استراتيجيات متقدمة في الفوركس',
      description: 'استراتيجيات تداول متقدمة لزيادة فرص الربح في سوق الفوركس.',
      image: '/assets/images/Group 1000014986 6.png',
      category: 'forex'
    },
    {
      title: 'تحليل القوائم المالية',
      description: 'استراتيجيات تداول متقدمة لزيادة فرص الربح في سوق الفوركس.',
      image: '/assets/images/Group 1000014986 6.png',
      category: 'financial-analysis'
    },
    {
      title: 'تحديد نقاط الدخول والخروج',
      description: 'تقنيات لتحديد أفضل الأوقات للدخول والخروج من الصفقات.',
      image: '/assets/images/Group 1000014986 6.png',
      category: 'entry-exit'
    },
    {
      title: 'قراءة الشارتات والرسوم البيانية',
      description: 'فهم كيفية قراءة وتفسير الرسوم البيانية لتحليل حركة الأسعار.',
      image: '/assets/images/Group 1000014986 6.png',
      category: 'charts'
    },
    {
      title: 'مقدمة في الأسواق المالية',
      description: 'تعرف على أساسيات الأسواق المالية وأنواعها المختلفة.',
      image: '/assets/images/Group 1000014986 6.png',
      category: 'basics'
    }
  ]
  
  // Filtered items based on selected tab
  const filteredItems = computed(() => {
    if (selectedTab.value === 'all') return items
    return items.filter((item) => item.category === selectedTab.value)
  })
  </script>
  
  <style scoped>
  .tabs {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
  }
  .tabs li {
    cursor: pointer;
    padding: 8px 16px;
    background: #eee;
    border-radius: 5px;
    transition: 0.3s;
  }
  .tabs li.active {
    color: white;
  }
  .item {
    margin-bottom: 20px;
  }
  </style>
  