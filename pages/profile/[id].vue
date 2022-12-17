<template>
  <div>
    <api-view :url="`/users/${$route.params.id}`"
      v-slot="{data: user}">
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
      </div>
    </api-view>
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
