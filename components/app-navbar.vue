<template>
  <nav class="navbar mb-2" role="navigation" aria-label="main navigation">
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

        <nuxt-link class="navbar-item" to="/practice/problems" active-class="is-active">
          Problems
        </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">
            Contests
          </div>

          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/contests" active-class="is-active">
              All contests
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div v-if="!auth.token" class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button" to="/profile/login">
              Log in
            </nuxt-link>
          </div>
        </div>
        <div  v-else class="navbar-item has-dropdown is-hoverable is-right">
          <div class="navbar-link">
            {{ auth.user.username }}
          </div>
          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/profile">
              <mdi name="account" class="mr-2"></mdi>
              Profile
            </nuxt-link>
            <div class="navbar-divider"></div>
            <a class="navbar-item has-text-danger" @click.prevent="logout">
              <mdi name="logout" class="mr-2"></mdi>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {useAuth, logout} from '~/api/auth'

const auth = useAuth()

const expanded = ref(false)
const toggleExpanded = () => expanded.value ^= 1
</script>
