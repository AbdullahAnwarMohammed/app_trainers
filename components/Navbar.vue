<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="@/assets/images/nav-logo.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">الصفحة الرئيسية</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">الدورات التدربية</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">مشاريعنا</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">عملاؤنا</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">مكتبنا</a>
            </li>
          </ul>
          <form class="d-flex form-search-nav" role="search">
            <input class="form-control me-2 input-form-search-nav" type="search" placeholder="البحث"
              aria-label="Search">
          </form>
          <a href="#" class="btn btn-contact-us">تواصل معنا</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>