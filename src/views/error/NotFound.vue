<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>404</h1>
      </div>
      <h2>We are sorry, Page not found!</h2>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <router-link to="/" class="link">Back To Homepage</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#notfound {
  position: relative;
  height: 100vh;
  .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.notfound {
  max-width: 920px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  .notfound-404 {
    position: absolute;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    h1 {
      font-family: maven pro, sans-serif;
      color: #ececec;
      font-weight: 900;
      font-size: 276px;
      margin: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      @media only screen and (max-width: 480px) {
        font-size: 162px;
      }
    }
    h2 {
      font-family: maven pro, sans-serif;
      font-size: 46px;
      color: #000;
      font-weight: 900;
      text-transform: uppercase;
      margin: 0;
      @media only screen and (max-width: 480px) {
        font-size: 26px;
      }
    }
    p {
      font-family: maven pro, sans-serif;
      font-size: 16px;
      color: #000;
      font-weight: 400;
      text-transform: uppercase;
      margin-top: 15px;
    }
  }
  a {
    font-family: maven pro, sans-serif;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    background: #189cf0;
    display: inline-block;
    padding: 16px 38px;
    border: 2px solid transparent;
    border-radius: 40px;
    color: #fff;
    font-weight: 400;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    &:hover {
      background-color: #fff;
      border-color: #189cf0;
      color: #189cf0;
    }
  }
}
// @media only screen and (max-width: 480px) {
//   .notfound .notfound-404 h1 {
//     font-size: 162px;
//   }
//   .notfound h2 {
//     font-size: 26px;
//   }
// }
</style>

<script setup></script>