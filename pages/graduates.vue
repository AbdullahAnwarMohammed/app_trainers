<template>
    <div>
        <section class="hero-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 hero-content text-center">
                        <h1 class="hero-title">خريجينا</h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- Filters Section -->
        <section class="filters-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <button class="filter-btn" :class="{ active: activeFilter === 'all' }"
                            @click="filterStudents('all')">
                            All
                        </button>
                        <button class="filter-btn" :class="{ active: activeFilter === 'fullstack' }"
                            @click="filterStudents('fullstack')">
                            Full Stack Developers
                        </button>
                        <button class="filter-btn" :class="{ active: activeFilter === 'backend' }"
                            @click="filterStudents('backend')">
                            BackEnd Developers
                        </button>
                        <button class="filter-btn" :class="{ active: activeFilter === 'flutter' }"
                            @click="filterStudents('flutter')">
                            Flutter Developers
                        </button>
                        <button class="filter-btn" :class="{ active: activeFilter === 'datascience' }"
                            @click="filterStudents('datascience')">
                            Data Science Developers
                        </button>
                        <button class="filter-btn" :class="{ active: activeFilter === 'frontend' }"
                            @click="filterStudents('frontend')">
                            FrontEnd Developers
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Students Grid -->
        <section class="students-grid">
            <div class="container">
                <div class="row" id="students-container">
                    <div class="col-lg-3 col-md-4 col-sm-6" v-for="student in paginatedStudents" :key="student.id">
                        <div class="student-card">
                            <img :src="student.image" :alt="student.name" class="student-image" />
                            <div class="student-info">
                                <h5 class="student-name" @click="goToDetails(student.id)">
                                    {{ student.name }}
                                </h5>
                                <div class="student-details">
                                    <p><i class="fas fa-envelope"></i> {{ student.email }}</p>
                                    <p><i class="fas fa-phone"></i> {{ student.phone }}</p>
                                </div>
                                <div class="social-links">
                                    <a :href="student.linkedin" class="social-link" target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                    <a :href="student.linkedin" class="social-link" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a :href="student.linkedin" class="social-link" target="_blank">
                                        <i class="fab fa-google"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <nav aria-label="Page navigation">
                    <ul class="pagination" id="pagination">
                        <li v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }"
                            class="page-item">
                            <button class="page-link" @click="changePage(page)">
                                {{ page }}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: [
                { id: 1, name: "أحمد محمد", specialization: "fullstack", image: "https://placehold.co/400", email: "ahmed@example.com", phone: "0798888888", linkedin: "https://linkedin.com/in/ahmed" },
                { id: 2, name: "سارة أحمد", specialization: "frontend", image: "https://placehold.co/400", email: "sara@example.com", phone: "0797777777", linkedin: "https://linkedin.com/in/sara" },
                { id: 3, name: "محمد خالد", specialization: "backend", image: "https://placehold.co/400", email: "mohammed@example.com", phone: "0796666666", linkedin: "https://linkedin.com/in/mohammed" },
                { id: 4, name: "نورا علي", specialization: "flutter", image: "https://placehold.co/400", email: "nora@example.com", phone: "0795555555", linkedin: "https://linkedin.com/in/nora" },
                { id: 5, name: "علي حسن", specialization: "datascience", image: "https://placehold.co/400", email: "ali@example.com", phone: "0794444444", linkedin: "https://linkedin.com/in/ali" },
                { id: 6, name: "ريم سامي", specialization: "fullstack", image: "https://placehold.co/400", email: "reem@example.com", phone: "0793333333", linkedin: "https://linkedin.com/in/reem" },
                { id: 7, name: "ياسر عمر", specialization: "frontend", image: "https://placehold.co/400", email: "yasser@example.com", phone: "0792222222", linkedin: "https://linkedin.com/in/yasser" },
                { id: 8, name: "لينا أحمد", specialization: "backend", image: "https://placehold.co/400", email: "lina@example.com", phone: "0791111111", linkedin: "https://linkedin.com/in/lina" },
                { id: 9, name: "خالد سعيد", specialization: "flutter", image: "https://placehold.co/400", email: "khaled@example.com", phone: "0790000000", linkedin: "https://linkedin.com/in/khaled" },
                { id: 10, name: "هبة محمد", specialization: "datascience", image: "https://placehold.co/400", email: "heba@example.com", phone: "0799999999", linkedin: "https://linkedin.com/in/heba" },
                { id: 11, name: "محمود علي", specialization: "fullstack", image: "https://placehold.co/400", email: "mahmoud@example.com", phone: "0798888887", linkedin: "https://linkedin.com/in/mahmoud" },
                { id: 12, name: "فاطمة خالد", specialization: "frontend", image: "https://placehold.co/400", email: "fatima@example.com", phone: "0797777776", linkedin: "https://linkedin.com/in/fatima" }
            ],
            currentFilteredStudents: [],
            currentPage: 1,
            itemsPerPage: 8,
            activeFilter: 'all'
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.currentFilteredStudents.length / this.itemsPerPage);
        },
        paginatedStudents() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.currentFilteredStudents.slice(startIndex, startIndex + this.itemsPerPage);
        }
    },
    methods: {
        filterStudents(filter) {
            this.activeFilter = filter;
            if (filter === 'all') {
                this.currentFilteredStudents = this.students;
            } else {
                this.currentFilteredStudents = this.students.filter(student => student.specialization === filter);
            }
            this.currentPage = 1;
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        createStudentCard(student) {
            return `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="student-card">
                        <img src="${student.image}" alt="${student.name}" class="student-image">
                        <div class="student-info">
                            <h3 class="student-name" @click="goToDetails(${student.id})">${student.name}</h3>
                            <div class="student-details">
                                <p><i class="fas fa-envelope"></i> ${student.email}</p>
                                <p><i class="fas fa-phone"></i> ${student.phone}</p>
                            </div>
                            <div class="social-links">
                                <a :href="${student.linkedin}" class="social-link" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        goToDetails(id) {
            this.$router.push({ path: `/student-details`, query: { id } });
        }
    },
    mounted() {
        this.filterStudents('all');
    }
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, var(--primary-color), var(--dark-main-color));
    padding: 60px 0 40px;
    color: var(--white-color);
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('assets/images/pattern.png');
    opacity: 0.1;
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
}

/* Filters Section */
.filters-section {
    background: var(--white-color);
    padding: 15px 0;
    margin-bottom: 5px;
    box-shadow: var(--box-shadow);
}

.filter-btn {
    background: var(--light-gray);
    color: var(--text-dark);
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    margin: 5px;
    transition: var(--transition);
    font-size: 13px;
    color:var(--dark-main-color);
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--primary-color);
    color: var(--white-color);
}

/* Students Grid */
.students-grid {
    padding: 50px 0;
}

.student-card {
    background: var(--white-color);
    border-radius: var(--border-radius);
    overflow: hidden;
    margin-bottom: 30px;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.student-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(239, 64, 80, 0.15);
}

.student-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.student-info {
    padding: 20px;
}

.student-name {
    color: var(--dark-main-color);
    font-weight: 700;
    margin-bottom: 10px;
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
}

.student-name:hover {
    color: var(--primary-color);
}

.student-details {
    color: var(--text-light);
    margin-bottom: 5px;
    margin-top: 15px;
    font-size: 13px;
}

.student-details i {
    color: var(--primary-color);
    margin-left: 5px;
}

.social-links {
    display: flex;
    gap: 10px;
    justify-content: center;
    border-top: 1px solid rgb(233, 233, 233);
    padding-top: 10px;
}

.social-link {
    color: var(--text-light);
    transition: var(--transition);
}

.social-link:hover {
    color: var(--primary-color);
}
.social-link i {
    font-size: 20px;
}
.social-link i:hover{
    color: var(--primary-color);
}

/* Pagination */
.pagination {
    justify-content: center;
    margin-top: 30px;
}

.page-link {
    color: var(--primary-color);
    border: none;
    margin: 0 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.page-link:hover,
.page-link.active {
    background: var(--primary-color);
    color: var(--white-color);
}

/* Responsive Design */
@media (max-width: 991px) {
    .hero-title {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .hero-section {
        padding: 80px 0 40px;
    }

    .student-card {
        margin-bottom: 20px;
    }
}

@media (max-width: 576px) {
    .hero-title {
        font-size: 1.5rem;
    }

    .filter-btn {
        padding: 8px 15px;
        font-size: 0.9rem;
    }
}
</style>