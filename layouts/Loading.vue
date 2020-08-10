<template>
  <div class="loading" :style="{display: $store.state.load}">
    <h2 class="yazilar">
      <span>S</span>
      <span>E</span>
      <span>F</span>
      <span>A</span>
      <span></span>
      <span class="soyad">Ü</span>
      <span>N</span>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(64, 64, 64, 0.387);
  z-index: 10000000000000;
}

.yazilar {
  height: 100vh;
  color: white;
  font-family: "Courgette", cursive;
  font-size: 3em;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.soyad {
  margin-left: 15px;
}

@media only screen and (max-width: 960px) {
  .yazilar {
    font-size: 40px;
    letter-spacing: 10px;
  }
}

.yazilar span {
  display: inline-block;
  letter-spacing: 10px;
  animation: isim-loading 1s linear infinite;
}

@keyframes isim-loading {
  0% {
    scale: 1;
    filter: blur(0);
    text-shadow: 0 0 10px gray;
  }
  50% {
    scale: 0.8;
    filter: blur(2px);
    text-shadow: 10px 5px 10px gray;
  }
  100% {
    scale: 1;
    filter: blur(0);
    text-shadow: 0 0 10px gray;
  }
}
</style>