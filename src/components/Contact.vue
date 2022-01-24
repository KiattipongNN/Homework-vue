<template>
          <div class="topnav">
            <router-link class="active" :to="{ name:'detail'}">Contact</router-link>
            <router-link :to="{ name:'home'}">Profile</router-link>
          </div>
  <div class="container">
    <div class="row">
      <h1 class="header">CONTACT</h1>
    </div>
    <div class="row">
      <div class="col">
        <ul>
          <br><li><p>Tel : 098-2700301</p></li>
          <li><p>Email : Kiattipong.nunn@bumail.net </p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
};
</script>

<style>
</style>
