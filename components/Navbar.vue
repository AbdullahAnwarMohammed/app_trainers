<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/images/nav-logo.png" alt="">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>الصفحة الرئيسية</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/courses">الدورات التدربية</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">مشاريعنا</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/clients">عملاؤنا</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/office">مكتبنا</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/graduates">خريجنا</router-link>
          </li>
        </ul>

        <form class="d-flex form-search-nav" role="search">
          <input class="form-control me-2 input-form-search-nav" type="search" placeholder="البحث"
            aria-label="Search">
        </form>

        <router-link to="/contact" class="btn btn-contact-us">تواصل معنا</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
