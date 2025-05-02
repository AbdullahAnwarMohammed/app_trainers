<template>
    <div>
        <div class="container">
            <div class="row">
                <!-- Course Details -->
                <div class="col-lg-8">
                    <div class="course-details">
                        <div class="course-info">
                            <div class="course-info-item">
                                <i class="fas fa-clock"></i>
                                <span>المدة: 12 أسبوع</span>
                            </div>
                            <div class="course-info-item">
                                <i class="fas fa-video"></i>
                                <span>عدد الدروس: 24 درس</span>
                            </div>
                            <div class="course-info-item">
                                <i class="fas fa-users"></i>
                                <span>عدد الطلاب: 150</span>
                            </div>
                            <div class="course-info-item">
                                <i class="fas fa-star"></i>
                                <span>التقييم: 4.8</span>
                            </div>
                        </div>

                        <div class="course-content">
                            <h3>وصف الدورة</h3>
                            <p>هذه الدورة مصممة لتعليمك كيفية بناء تطبيقات ويب حديثة وتفاعلية باستخدام أحدث التقنيات
                                والأدوات. ستتعلم كيفية استخدام HTML5 و CSS3 و JavaScript وإطار العمل Bootstrap لإنشاء
                                واجهات مستخدم جذابة وسريعة الاستجابة.</p>
                        </div>

                        <div class="course-curriculum">
                            <h3>محتوى الدورة</h3>
                            <div class="curriculum-item">
                                <i class="fas fa-check-circle"></i>
                                <div>
                                    <h5>الوحدة 1: مقدمة في تطوير الويب</h5>
                                    <p>أساسيات HTML5 و CSS3</p>
                                </div>
                            </div>
                            <div class="curriculum-item">
                                <i class="fas fa-check-circle"></i>
                                <div>
                                    <h5>الوحدة 2: JavaScript المتقدمة</h5>
                                    <p>DOM و Events و AJAX</p>
                                </div>
                            </div>
                            <div class="curriculum-item">
                                <i class="fas fa-check-circle"></i>
                                <div>
                                    <h5>الوحدة 3: إطار العمل Bootstrap</h5>
                                    <p>تصميم واجهات المستخدم المتجاوبة</p>
                                </div>
                            </div>
                        </div>

                        <!-- Features Section -->
                        <div class="features-grid">
                            <div class="feature-item">
                                <i class="fas fa-certificate feature-icon"></i>
                                <h5>شهادة معتمدة</h5>
                                <p>احصل على شهادة معتمدة بعد إتمام الدورة</p>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-headset feature-icon"></i>
                                <h5>دعم فني</h5>
                                <p>دعم فني متواصل طوال فترة الدورة</p>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-book feature-icon"></i>
                                <h5>مواد تعليمية</h5>
                                <p>مواد تعليمية شاملة ومحدثة</p>
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Section -->
                    <div class="faq-section">
                        <h3>الأسئلة الشائعة</h3>
                        <ul class="faq-list">
                            <li class="faq-item">
                                <div class="faq-question">
                                    ما هي متطلبات الدورة؟
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                                <div class="faq-answer">
                                    <p>لا يوجد متطلبات مسبقة للدورة، ولكن يفضل أن يكون لديك معرفة أساسية باستخدام
                                        الحاسوب والإنترنت. سنبدأ من الأساسيات وننتقل تدريجياً إلى المستويات المتقدمة.
                                    </p>
                                </div>
                            </li>
                            <li class="faq-item">
                                <div class="faq-question">
                                    هل سأحصل على شهادة بعد إتمام الدورة؟
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                                <div class="faq-answer">
                                    <p>نعم، ستحصل على شهادة معتمدة بعد إكمال جميع متطلبات الدورة والاختبارات النهائية.
                                        الشهادة قابلة للتحميل والمشاركة على منصات التواصل المهني.</p>
                                </div>
                            </li>
                            <li class="faq-item">
                                <div class="faq-question">
                                    كم من الوقت يستغرق إكمال الدورة؟
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                                <div class="faq-answer">
                                    <p>مدة الدورة 12 أسبوع، بمعدل 2-3 ساعات أسبوعياً. يمكنك التعلم بالسرعة التي تناسبك،
                                        حيث تبقى المواد متاحة لك بشكل دائم.</p>
                                </div>
                            </li>
                            <li class="faq-item">
                                <div class="faq-question">
                                    هل يوجد دعم فني خلال الدورة؟
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                                <div class="faq-answer">
                                    <p>نعم، نوفر دعم فني متواصل من خلال منتدى خاص بالدورة ونظام تذاكر الدعم. يمكنك طرح
                                        أسئلتك في أي وقت وسيتم الرد عليها في أقرب وقت ممكن.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="col-lg-4">
                    <div class="price-section">
                        <h4>سعر الدورة</h4>
                        <div class="price">$199</div>
                        <button class="enroll-btn">سجل الآن</button>
                        <div class="mt-4">
                            <p><i class="fas fa-check-circle text-success"></i> شهادة معتمدة</p>
                            <p><i class="fas fa-check-circle text-success"></i> دعم فني مستمر</p>
                            <p><i class="fas fa-check-circle text-success"></i> مصادر تعليمية</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(() => {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');

                    // Close all FAQ items
                    faqItems.forEach(faqItem => {
                        faqItem.classList.remove('active');
                    });

                    // Open clicked item if it wasn't active
                    if (!isActive) {
                        item.classList.add('active');
                        // Add small delay for the paragraph animation
                        setTimeout(() => {
                            const answerParagraph = item.querySelector('.faq-answer p');
                            if (answerParagraph) {
                                answerParagraph.style.opacity = '1';
                                answerParagraph.style.transform = 'translateY(0)';
                            }
                        }, 100);
                    }
                });
            });
        });
    }
};
</script>


<style scoped>


/* Course Details */
.course-details {
    background-color: var(--white-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 30px;
    margin: 30px 0;
    transition: var(--transition);
    border: 1px solid rgba(239, 64, 80, 0.1);
}

.course-details:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(239, 64, 80, 0.15);
}

.course-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
    background: var(--white-color);
    padding: 25px;
    border-radius: var(--border-radius);
    border: 1px solid rgba(239, 64, 80, 0.1);
}

.course-info-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: var(--border-radius);
    background: var(--light-gray);
    box-shadow: 0 2px 4px rgba(239, 64, 80, 0.05);
    transition: var(--transition);
}

.course-info-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(239, 64, 80, 0.1);
    background: var(--white-color);
}

.course-info-item i {
    color: var(--primary-color);
    margin-left: 10px;
    font-size: 1.2em;
}

.course-info-item span {
    color: var(--text-dark);
    font-weight: 500;
}

.course-content h3 {
    color: var(--dark-main-color);
    font-size: 1.8rem;
    margin-bottom: 20px;
    position: relative;
    padding-right: 15px;
    font-weight: 700;
}

.course-content h3::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 25px;
    background: var(--primary-color);
    border-radius: 2px;
}

.course-content p {
    color: var(--text-light);
    line-height: 1.8;
    font-size: 1.1rem;
}

.curriculum-item {
    background-color: var(--white-color);
    padding: 20px;
    border-radius: var(--border-radius);
    margin-bottom: 15px;
    transition: var(--transition);
    border: 1px solid rgba(239, 64, 80, 0.1);
    display: flex;
    align-items: center;
    gap: 15px;
}

.curriculum-item:hover {
    transform: translateX(-10px);
    box-shadow: 0 5px 15px rgba(239, 64, 80, 0.1);
    border-color: var(--primary-color);
}

.curriculum-item i {
    color: var(--primary-color);
    font-size: 1.2em;
}

.curriculum-item h5 {
    color: var(--dark-main-color);
    margin-bottom: 5px;
    font-weight: 600;
}

.curriculum-item p {
    color: var(--text-light);
    margin: 0;
    font-size: 0.9rem;
}

.course-curriculum h3 {
    color: var(--dark-main-color);
    font-weight: 600;
    margin-bottom: 10px;
}

/* Price Section */
.price-section {
    background: var(--white-color);
    border-radius: var(--border-radius);
    padding: 30px;
    text-align: center;
    position: sticky;
    top: 100px;
    box-shadow: var(--box-shadow);
}

.price-section h4 {
    color: var(--dark-main-color);
    font-weight: 600;
    margin-bottom: 10px;
}

.price {
    color: var(--primary-color);
    font-size: 2.5rem;
    font-weight: bold;
    margin: 20px 0;
}

.enroll-btn {
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 15px 30px;
    border-radius: 30px;
    border: none;
    font-weight: bold;
    transition: var(--transition);
    width: 100%;
    margin-top: 20px;
    font-size: 1.1rem;
}

.enroll-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(239, 64, 80, 0.3);
    background-color: var(--dark-main-color);
}

/* Features Section */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.feature-item {
    background: var(--white-color);
    padding: 25px;
    border-radius: var(--border-radius);
    text-align: center;
    transition: var(--transition);
    border: 1px solid rgba(239, 64, 80, 0.1);
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(239, 64, 80, 0.1);
    border-color: var(--primary-color);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.feature-item h5 {
    color: var(--dark-main-color);
    font-weight: 600;
    margin-bottom: 10px;
}

.feature-item p {
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.6;
}

.feature-item h3 {
    color: var(--dark-main-color);
    font-weight: 600;
    margin-bottom: 10px;
}




.social-links a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin-left: 10px;
    transition: var(--transition);
    color: var(--white-color);
}

.social-links a:hover {
    background: var(--accent-color);
    transform: translateY(-5px);
    color: var(--dark-main-color);
}


@media (max-width: 991px) {
    .course-info {
        grid-template-columns: repeat(2, 1fr);
    }

    .price-section {
        position: static;
        margin-top: 30px;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .course-content h3 {
        font-size: 1.5rem;
    }

    .course-content p {
        font-size: 1rem;
    }

    .instructor-img {
        width: 120px;
        height: 120px;
    }

    .course-info {
        grid-template-columns: 1fr;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) {
    .course-details {
        padding: 20px;
    }

    .price {
        font-size: 2rem;
    }

    .enroll-btn {
        padding: 12px 25px;
        font-size: 1rem;
    }

    .instructor-section {
        text-align: center;
    }

    .instructor-social {
        justify-content: center;
        margin-top: 15px;
    }
}

/* FAQ Section */
.faq-section {
    background: var(--white-color);
    border-radius: var(--border-radius);
    padding: 30px;
    margin-top: 30px;
    box-shadow: var(--box-shadow);
    border: 1px solid rgba(239, 64, 80, 0.1);
}

.faq-section h3 {
    color: var(--dark-main-color);
    margin-bottom: 25px;
    font-weight: 700;
    position: relative;
    padding-right: 15px;
}

.faq-section h3::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 25px;
    background: var(--primary-color);
    border-radius: 2px;
}

.faq-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.faq-item {
    margin-bottom: 15px;
    border-radius: var(--border-radius);
    background: var(--white-color);
    border: 1px solid rgba(239, 64, 80, 0.1);
    overflow: hidden;
    transition: var(--transition);
}

.faq-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(239, 64, 80, 0.1);
}

.faq-question {
    padding: 20px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--dark-main-color);
    font-weight: 600;
    background: var(--light-gray);
    transition: var(--transition);
}

.faq-item.active .faq-question {
    background: var(--primary-color);
    color: var(--white-color);
}

.faq-question i {
    font-size: 1.2em;
    transition: transform 0.3s ease;
    color: inherit;
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s ease;
    background: var(--white-color);
    padding: 0 20px;
    color: var(--text-light);
    line-height: 1.6;
}

.faq-item.active .faq-answer {
    max-height: 300px;
    padding: 20px;
    border-top: 1px solid rgba(239, 64, 80, 0.1);
}

.faq-answer p {
    margin: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
}

.faq-item.active .faq-answer p {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .faq-section {
        padding: 20px;
    }

    .faq-question {
        padding: 15px;
        font-size: 0.95rem;
    }

    .faq-item.active .faq-answer {
        padding: 15px;
    }
}

@media (max-width: 576px) {
    .faq-section h3 {
        font-size: 1.3rem;
    }

    .faq-question {
        font-size: 0.9rem;
    }
}
</style>
