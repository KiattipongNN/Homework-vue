<template>
          <div class="topnav">
            <router-link  :to="{ name:'detail'}">Contact</router-link>
            <router-link class="active" :to="{ name:'home'}">Profile</router-link>
          </div>
  <div class="container">
    <div class="row">
      <h1 class="header">MY PROFILE</h1>
    </div>
    <div class="row">
      <div class="col">
        <img
          width="100%"
          class="rounded mx-auto d-block"
          alt=""
          src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/272447015_1922841307924397_2606914527055504934_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFtKEev1EJrcJ2VU0CUauw6D-jppFUyQdUP6OmkVTJB1UOZIutfC0JZHtwrX3WAO1NBUNrjFFQnjDWeeOLBHCOf&_nc_ohc=32ZM78WQ2CwAX-gX9f2&_nc_oc=AQlESNK8dZ2dqJHU8zuMnYRMyZQB--tNOutVb25F-ZGUNf2kX_di2j86a4fraK0a9YhxS3V08CTiM2ywcsDTTLe9&tn=ORE2m6BGFGLACpZc&_nc_ht=scontent.fbkk22-1.fna&oh=00_AT_lugiBIA6_GxqUFiNCwN85CNowM5zfhDjlOMqoeavTrg&oe=61F2B7A9"
        />
      </div>
      <div class="col-8">
        <div class="" align="left">
          <h1>Hello</h1>
          <p>Here's who I am & what I do</p>
          <h3>About Me</h3>
          <p>
            My name is Kiattipong Nunngam. <br />
            My nickname is Jame.<br />
            I study at Bangkok University. Faculty of Information Technology and
            Innovation.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascipt</li>
            <li>WordPress</li>
            <li>Bootstrap</li>
            <li>Vuejs</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style>
.header {
  background-color: purple;
  color: white;
}
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 16px;
    text-decoration: none;
    font-size: 12px;
}

.topnav a:hover {
    background-color: #ddd;
    color: black;
}

.topnav a.active {
    background-color: #0066FF;
    color: white;
}
</style>
