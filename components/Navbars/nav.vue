<template>
  <div class="container-fluid px-0">
    <nav class="navbar navbar-light bg-white row sticky-top justify-content-center mx-0">
      <a href="/" class="navbar-brand"><img src="/Ocasio2018_Logo_Purple.png" /></a>
        <span class="navbar-toggler" data-toggle="collapse" data-target="#navbarToggleExternalContent"><svg class="lnr lnr-menu"><use xlink:href="#lnr-menu"></use></svg></span>
      <NavLinks/>
    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
      <NavLinks/>
    </div>
  </div>
</template>

<script>
import NavLinks from '~/components/Navbars/nav-links.vue'

export default {
  components: {
    NavLinks
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main';
@import '~assets/scss/mixins';
@import 'node_modules/bootstrap/scss/mixins';

.navbar {
  height: 120px;
  border-bottom: 1px solid $gray-lightest;
  margin-right:-15px;
  margin-left: -15px;

  .navbar-brand {
    padding-left: 0;
    display: block;

    img {
      max-height: 90px;
    }
  }

  .navbar-toggler {
    align-self: flex-end;
  }

  span[aria-expanded="true"] {
    background-color: $gray-lightest;
  }

  &.navbar-light .navbar-toggler {
    border-color: $gray-lightest;
  }

  .lnr {
    display: inline-block;
    fill: $brand-primary;
    width: 1em;
    height: 1em;
    vertical-align: -0.05em;
  }

  @include media-breakpoint-down(md) {
    .justify-content-between {
      height: auto;
      //justify-content: center !important;
    }

    .links {
      display: none;
    }

  }

  @include media-breakpoint-up(md) {
    .navbar-toggler {
      display: none;
    }

  }

}

.collapse {
  margin: 0em -30px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: white;
  @include dropdown-shadow;

  @include media-breakpoint-up(md) {
    &.show {

      margin: 0em -30px;
      padding-right: 15px;
      padding-left: 15px;
      display: none !important;
    }
  }
}

</style>
