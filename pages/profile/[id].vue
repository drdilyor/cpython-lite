<template>
  <div>
    <api-multi-view :url="[
        `/users/${$route.params.id}/`,
        `/users/${$route.params.id}/educations/`,
        `/users/${$route.params.id}/info/`,
        `/users/${$route.params.id}/ratings/`,
        `/users/${$route.params.id}/skills/`,
        `/users/${$route.params.id}/technologies/`,
        `/users/${$route.params.id}/work-experiences/`,
      ]"
      v-slot="{data: [user, educations, info, ratings, skills, techs, work]}">
      <figure class="profile-cover">
        <img :src="user.coverPhoto">
      </figure>
      <div class="px-6">
        <div class="columns">
          <div class="column">
            <!-- position relative to prevent image from going in front on mobile (idk why) -->
            <div class="box" style="position: relative">
              <div class="is-flex">
                <figure class="image is-96x96 mr-4">
                  <img :src="user.avatar">
                </figure>
                <div>
                  <h2 class="is-size-3">
                    {{ user.firstName }} {{ user.lastName }}
                    <span v-show="user.isOnline" class="circle-dot has-background-success"></span>
                  </h2>
                  <p>
                    @{{ user.username }}
                    <span v-if="user.username == 'admin'" class="tag">Odmin</span>
                    <span v-else-if="user.username == 'drdilyor'" class="tag">Udmeen</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-third">
            <div class="box">
              <h3 class="is-size-5 has-text-centered">Profile</h3>
            </div>
            <div class="box">
              <!-- rating -->
            </div>
          </div>
          <div class="column">
            <div class="box">
              <!-- skills -->
            </div>
          </div>
        </div>
      </div>
    </api-multi-view>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'marginless',
})
</script>

<style lang="scss">
.profile-cover {
  height: 16rem;
  > img {
    width: 100%;
    height: 150%;
    object-fit: cover;
  }
}
.circle-dot {
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}
</style>
