<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    name: 'app',
  };

  $(() => {
    $('.nav-toggle').click(() => {
      $('.nav-toggle, .nav-menu').toggleClass('is-active');
    });
  });
</script>
