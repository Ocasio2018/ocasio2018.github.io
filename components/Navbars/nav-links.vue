<template>
  <div class="links row justify-content-end">
    <a class="nav-link btn action"  href="//secure.actblue.com/donate/ocasio2018">Contribute</a>
    <a class="nav-link" href="//ocasio2018.com/about">About</a>
    <a class="nav-link" href="h//ocasio2018.com/issues">Issues</a>
    <a class="nav-link" href="//ocasio2018.com/#chunk-events">Events</a>
    <a class="nav-link" href="//ocasio2018.com/#chunk-news">News</a>
    <a class="nav-link" href="ocasio2018.com/#chunk-endorsements">Endorsements</a>
    <a class="nav-link" href="//store.fiimarketing.com/ocasio2018/shop/home" target="_blank">Store</a>
    <a class="nav-link btn primary" href="//ocasio2018.com/#chunk-volunteer">Volunteer</a>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/variables';
@import '~assets/scss/mixins';
@import 'node_modules/bootstrap/scss/mixins';

  .nav-link {
    margin: 0;
    border: none;
    font-weight: 600;
    font-size: .85em;
    color: $brand-primary;
    text-transform: uppercase;
    letter-spacing: $btn-letter-spacing;
    line-height: 0;
    padding: 1.5em;

    &:hover {
      color: $purple;
    }

    &.btn {
      font-weight: 600;

      &.primary {
        background-color: $brand-primary;
        color: white;

        &:hover {
          background-color: $purple;
        }
      }

      &.action {
        background-color: $brand-action;
        color: white;

        &:hover {
          background-color: lighten($brand-action, 25%)
        }
      }
    }
  }
  @include media-breakpoint-down(xs) {
    .collapse {
      @include dropdown-shadow;
    }
    #navbarToggleExternalContent{
      .nav-link {
        width: 100%;
        border-bottom: 1px solid $gray-lightest;
        text-align: center;
      }
    }
  }

  .navbar .links {
    margin: 0;
  }
</style>
