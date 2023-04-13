<script lang="ts" setup>
  import { ref } from 'vue';

  const footExtended = ref(true);
  const footExtend = () => {
    footExtended.value = !footExtended.value;
  };
</script>

<template>
  <div :class="['foot-info', footExtended ? 'h-[130px]' : 'h-[500px]']" absolute ref="footInfo">
    <div frb mt style="font-weight: 400; font-size: 14px">
      <div flex>
        <div ml mr-2 cursor-pointer>全部</div>
        <div mr-2 cursor-pointer>终端</div>
        <div cursor-pointer>告警</div>
      </div>
      <div mr cursor-pointer @click="footExtend">
        <span v-if="footExtended">展开</span>
        <span v-if="!footExtended">收回</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .foot-info {
    bottom: 2rem;
    left: 35%;
    z-index: 2;
    width: 40%;
    background-color: #fff;
    transition: height 0.5s ease 0.1s;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.08), 0px 5px 9px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  }
</style>
