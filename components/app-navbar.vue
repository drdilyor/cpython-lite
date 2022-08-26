<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="~/assets/logo.png" width="32">
      </nuxt-link>

      <nuxt-link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="appNavbar"
        @click="toggleExpanded" :class="{'is-active': expanded}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </nuxt-link>
    </div>

    <div id="appNavbar" class="navbar-menu" :class="{'is-active': expanded}">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/" active-class="is-active">
          Home
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/problems" active-class="is-active">
          Problems
        </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <nuxt-link class="navbar-link" to="/contests" active-class="is-active">
            Contests
          </nuxt-link>

          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/contests" active-class="is-active">
              All contests
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-primary">
              <strong>Sign up</strong>
            </nuxt-link>
            <nuxt-link class="button">
              Log in
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const expanded = ref(false);
const toggleExpanded = () => expanded.value ^= 1;
</script>