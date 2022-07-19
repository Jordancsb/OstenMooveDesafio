<template>
    <div class="loading-box">
      <div class="lds-facebook">
        <div> </div>
        <div> </div>
        <div> </div>
      </div>
      <div>{{ text }}</div>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      required: false,
      type: String,
      default: 'Loading'
    }
  }
}
</script>

<style scoped>
.loading-box {
  position: fixed;
  top: 30%;
  width: 25%;
  margin: auto;
  background: #fff;
  box-shadow: 0px 0px 9px -2px #000;
  z-index: 999;
  left: 0px;
  right: 0px;
  text-align: center;
  padding: 10px;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #33bcff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
</style>
