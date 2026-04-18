<script setup>

</script>
<template>
  <section id="Primary">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid justify-content-between">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="../../public/Logo_new.png" class="logo" alt="">
          <span>我的筆記應用</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
  .logo{
    width: 50px;
  }
</style>