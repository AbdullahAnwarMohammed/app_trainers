<template>

    <section class="newsletter">
        <div class="container-fluid  ">
            <div class="app-newsletter">
                <div class="text">
                    <h2 class="fw-bold text-danger mb-3">لا تتردد في التواصل
                        <br />
                        معنا
                    </h2>
                    <p class="text-muted mb-4">
                        انضم إلى نشرتنا الإخبارية واحصل على آخر الأخبار والرؤى والإصدارات الجديدة!
                    </p>

                    <form class="row">
                        <div class="col-10">
                            <div class="input-group mb-3">


                                <input type="email" class="form-control form-control-lg border-start-0"
                                    placeholder="ادخل بريدك الإلكتروني هنا..." />
                                <button class="btn btn-danger" type="submit">اشترك</button>

                            </div>
                        </div>
                    </form>

                    <p class="text-muted small mt-3">
                        بالاشتراك، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على استلام التحديثات من شركتنا.
                    </p>
                </div>

                <img src="assets/images/img-4 1.png" alt="">
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="app-footer">
            <div class="item">
                <img src="assets/images/nav-logo.png" alt="">
                <p>تبدأ رحلتك نحو تعاون سلس مع EpicSync. انضم إلينا اليوم!</p>
            </div>

            <ul class="item">
                <li><a href="#">الرئيسية</a></li>
                <li><a href="#">ميزة</a></li>
                <li><a href="#">التسعير</a></li>
                <li><a href="#">اتصل بنا</a></li>
            </ul>

            <ul class="item">
                <li><a href="#">شروط الخدمات</a></li>
                <li><a href="#">سياسة الخصوصية</a></li>
            </ul>

            <ul class="item">
                <li><a href="#">support@epicsync.com</a></li>
                <li><a href="#">+1 (123) 456-7890</a></li>
            </ul>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'Footer'
}
</script>