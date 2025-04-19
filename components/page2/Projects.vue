<template>
    <div class="projects-page2">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <!-- Tabs -->
                    <ul class="tabs my-4">
                        <li :class="{ active: activeTab === 'all' }" @click="setTab('all')">كل الدورات</li>
                        <li :class="{ active: activeTab === 'forex' }" @click="setTab('forex')">تداول الفوركس</li>
                        <li :class="{ active: activeTab === 'web' }" @click="setTab('web')">ويب</li>
                    </ul>

                    <div class="text-right topHeader">
                        <h2 class="fw-bold">دورات تطوير تطبيقات الويب</h2>
                        <p>
                            نص يصف الكورس بشكل ايجازي وبسيط يعطى الشخص فكرة مبسطة <br />
                            عما تقدمه حزمة الكورسات ىهذه
                        </p>
                    </div>

                    <!-- Items -->
                    <div class="items mb-3">
                        <div class="row">
                            <div class="col-md-4 item" v-for="(item, index) in filteredItems" :key="index" v-show="true">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="image">
                                            <img :src="item.image" alt="" />
                                            <span class="badge bg-light heart"><i
                                                    class="fas fa-heart text-danger"></i></span>
                                            <div class="left-item-icon">
                                                <span class="badge bg-warning">20% OFF</span>
                                                <span class="badge bg-danger">Best Seller</span>
                                            </div>
                                        </div>
                                        <h5>{{ item.title }}</h5>
                                        <span class="instructor-name"><i class="far fa-user"></i> {{ item.instructor
                                            }}</span>
                                        <p>{{ item.description }}</p>
                                        <div class="price-rating d-flex justify-content-between">
                                            <div class="rating d-flex">
                                                <span style="color: gold;">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star-half-alt"></i>
                                                </span>
                                                <small class="text-muted ms-1">(1.2K)</small>
                                            </div>
                                            <div class="price-item">
                                                <span>{{ item.discountPrice }}</span>
                                                <span>{{ item.originalPrice }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

// Active tab state
const activeTab = ref('all')

// List of items
const items = ref([
    {
        title: 'كورس تطوير تطبيقات الويب',
        instructor: 'احمد قراسين',
        description: 'تعلم تطوير تطبيقات الويب باحترافية مع دورة شاملة، واكتسب المهارات اللازمة لتصبح مطور ويب محترف',
        category: 'forex',
        image: 'https://placehold.co/600x400',
        discountPrice: '$24.92',
        originalPrice: '$32.90'
    },
    {
        title: 'كورس تطوير تطبيقات الويب 2',
        instructor: 'احمد قراسين',
        description: 'تعلم تطوير تطبيقات الويب باحترافية مع دورة شاملة، واكتسب المهارات اللازمة لتصبح مطور ويب محترف',
        category: 'web',
        image: 'https://placehold.co/600x400',
        discountPrice: '$24.92',
        originalPrice: '$32.90'
    }
])

// Function to change tab
function setTab(tab) {
    activeTab.value = tab
}

// Computed filter
const filteredItems = computed(() => {
    if (activeTab.value === 'all') return items.value
    return items.value.filter(item => item.category === activeTab.value)
})
</script>

<style scoped>
.tabs li {
    display: inline-block;
    cursor: pointer;
    margin-left: 15px;
    padding: 8px 12px;
    border-radius: 5px;
    background: #f2f2f2;
}


</style>