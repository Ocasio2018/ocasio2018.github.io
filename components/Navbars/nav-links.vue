<template>
  <div class="links row justify-content-end">
    <a href="/portfolio" class="nav-link btn action">Contribute</a>
    <a href="/portfolio" class="nav-link">About</a>
    <a href="/resume" class="nav-link">Issues</a>
    <a href="/contact" class="nav-link">Events</a>
    <a href="/contact" class="nav-link">News</a>
    <a href="/contact" class="nav-link">Endorsements</a>
    <a href="/contact" class="nav-link">Store</a>
    <a href="/contact" class="nav-link btn primary">Volunteer</a>
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
