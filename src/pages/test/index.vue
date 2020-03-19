<template>
  <div>
    <div class="add"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.add {
  border: 1px solid;
  width: 100px;
  height: 100px;
  color: #ccc;
  transition: color 0.25s;
  position: relative;
}

.add::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  transform: translate(-50%, -50%);
  border-top: 10px solid;
}

.add::after {
  content: "";
  position: absolute;
  left: 50%;
  right: 0;
  top: 50%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
