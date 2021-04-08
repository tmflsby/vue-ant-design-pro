<template>
  <div>
    <a-button type="primary">dashboard</a-button>
  </div>
</template>

<script>
import { getInfo } from '@/api/login'
export default {
  name: 'Dashboard',
  mounted() {
    getInfo().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
button {
  margin: 20px;
}
</style>
