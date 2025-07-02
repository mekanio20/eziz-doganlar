<template>
  <div class="w-full h-full">
    <!-- <Loader :loading="loading" /> -->
    <RouterView />
  </div>
</template>

<script>
import { ref } from "vue"
import { RouterView, useRouter } from 'vue-router'
import Loader from '@/components/Loader.vue'
export default {
  name: "App",
  components: {
    RouterView,
    Loader
  },
  setup() {
    const loading = ref(false)
    const router = useRouter()

    router.beforeEach((to, from, next) => {
      loading.value = true
      next()
    })

    router.afterEach(() => {
      loading.value = false
    })

    return {
      loading
    }
  }
}
</script>