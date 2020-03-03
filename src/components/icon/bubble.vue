<template>
  <div
    class="b-container"
    :style="{width:width, height:height, borderRadius:borderRadius, backgroundColor:backgroundColor, color:fontColor, fontSize:fontSize}"
  >
    <text>{{text}}</text>
  </div>
</template>

<script>
export default {
  props: [
    "width",
    "height",
    "text",
    "backgroundColor",
    "borderRadius",
    "fontColor",
    "fontSize"
  ]
};
</script>

<style scoped>
.b-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>