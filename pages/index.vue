<script>
  // if (process.BROWSER_BUILD) {
  // }

  import Nav from '~/components/Navbars/Nav.vue'
  import Footer from '~/components/Footers/FooterBar.vue'

  export default {
    layout: 'default',
    head: {
      title: 'Ocasio2018 Phonebanking',
      meta: [
        { vmid: 'description', name: 'description', content: 'Make calls for Ocasio2018' },
        { property: 'og:title', content: 'Make Calls for Ocasio2018' },
        { property: 'og:image', content: 'https://ocasio2018.netlify.com/Ocasio2018_meta_img.png' },
        { property: 'og:url', content: 'https://ocasio2018.github.io' },
        { property: 'og:type', content: 'website' },
      ]
    },
    components: {
      Nav, Footer
    }
  }

</script>
<template>
    <main>
    <Nav/>
    <section class="container-fluid header">
      <div class="row justify-content-center">
        <h1>Make Calls for Alexandria Ocasio-Cortez</h1>
      </div>
    </section>
    <section class="container content">
      <div class="row">
        <div class="col-md-4">
          <a type="button" class="btn btn-outline-primary fluid" href="https://docs.google.com/document/d/13PglZGs0pGkpTy3BWZbbUdhla63nJhTIHpYtq_X0A8M/edit?usp=sharing" target="_blank">Learn How to Make Calls</a>
          <a type="button" class="btn btn-outline-primary fluid" href="https://desktop.justicedialer.com/candidate/Alexandria-Ocasio-Cortez" target="_blank">View the Calling Script</a>
          <hr>
        </div>
        <div class="col-md-8">
          <div class="alert alert-primary" role="alert">
            The dialer for Alexandria Ocasio-Cortez is closes at 9:00PM ET. It re-opens in the morning at <strong>10 AM ET</strong>. Sign Up for a Call Shift!
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        <h2><span class="step">1</span> Claim Your Login</h2>
        <iframe src="https://justicedialer.com/login-iframe/jd?post_sign=https://ocasio2018.com/" style="width:100%;height:550px;"></iframe>
        </div>
        <div class="col-md-8">
          <h2><span class="step">2</span> Log into the dialer and call</h2>
          <p><strong>REMEMBER: You need to turn off your popup blocker to use our Dialer</strong> (click on the name of your browser to see the fullsize animation)</p>
          <p>Change before you log in: Safari, Edge</p>
          <p>Change while you log in:  Chrome, Firefox</p>
          <iframe src="https://portal.na4.livevox.com/BrandNewCampaign/AgentLogin?wmode=opaque" style="width:100%;height:550px;"></iframe>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-4">
          <h2>Questions</h2>
          <p>Please email <a href="mailto:us@ocasio2018.com">us@ocasio2018.com</a> , or call (845) 605-2742.</p>
        </div>
        <div class="col-md-8">
          <h2>Calling Hours</h2>
          <p>We make calls from <strong>10AM - 9PM</strong> on <strong>Monday</strong> through <strong>Saturday</strong> and <strong>12PM - 9PM</strong> on <strong>Sundays</strong> in our candidates' local time zones</strong>, so check back anytime you want to make calls.</p>
          <p>However, your login information will change each day, so you'll need to reclaim it.</p>
        </div>
      </div>
    </section>
    <section class="container-fluid footer">
      <Footer/>
    </section>
  </main>
</template>

<style lang="scss">
@import '~assets/scss/buttons';
@import '~assets/scss/variables';
@import '~assets/scss/mixins';
@import 'node_modules/bootstrap/scss/mixins';
@import 'node_modules/bootstrap/scss/variables';


//Header
.header {
  padding: 2.5em 1.5em;
  background-color: $yellow;

  h1 {
    text-transform: uppercase;
    font-size: 1.5em;
    letter-spacing: $btn-letter-spacing;
    font-weight: 800;
    color: white;
    text-align: center;
  }
}

//Content
.content{
  padding: 2.5em 1em;

  .row {
    margin-bottom: 1.5em;
  }

  hr {
    margin: 1.5em 0;
  }

  a {
    color: $purple;
  }

  h2 {
    font-size: 1.25em;
    letter-spacing: $btn-letter-spacing;
    font-weight:500;
    color: $brand-primary;
    margin-bottom: 1.5em;
  }

  .step {
    background-color: #3c2d82;
    display: inline-block;
    width: 25px;
    height: 25px;
    font-size: 15px;
    line-height: 27px;
    color: white;
    text-align: center;
    border-radius: 100%;
    font-weight: 700;

  }

  .alert {
    border: 2px solid rgba($yellow, .5);
    padding: 1.5em;
    margin-top: .5em;
  }
}

//iframes
iframe {
  border: none;

  iframe {
    border:none;
  }
}

</style>
