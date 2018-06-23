<template>
  <div class="links row justify-content-end">
    <a class="nav-link btn action"  href="https://secure.actblue.com/donate/ocasio2018" target="_blank">Contribute</a>
    <a class="nav-link" href="https://ocasio2018.com/about" target="_blank">About</a>
    <a class="nav-link" href="https://ocasio2018.com/.com/issues" target="_blank">Issues</a>
    <a class="nav-link" href="https://ocasio2018.com//#chunk-events target="_blank"">Events</a>
    <a class="nav-link" href="https://ocasio2018.com//#chunk-news" target="_blank">News</a>
    <a class="nav-link" href="https://ocasio2018.com//#chunk-endorsements" target="_blank">Endorsements</a>
    <a class="nav-link" href="https://store.fiimarketing.com/ocasio2018/shop/home" target="_blank">Store</a>
    <a class="nav-link btn primary" href="https://ocasio2018.com/#chunk-volunteer" target="_blank">Volunteer</a>
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
