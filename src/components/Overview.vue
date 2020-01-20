<template>
  <div class="overview">
    <h3>Current Bytes</h3>
    <div class="bytes">{{ bytes }}</div>
    <div class="bps">Bytes Per Second: {{ bps }}</div>
    <div class="level">Current Level: {{ level }}</div>
    <div class="next-level">Bytes Until Next Level: {{ bytesUntilLevelUp }}</div>
  </div>
</template>

<script>
export default {
  name: "overview",
  computed: {
    bytes() {
      return Math.round(this.$store.state.bytes);
    },
    bps() {
      return this.$store.state.bps.toFixed(1);
    },
    level() {
      return this.$store.state.player.level;
    },
    bytesUntilLevelUp() {
      return this.$store.getters.bytesUntilLevelUp;
    }
  }
};
</script>

<style lang="scss">
@import "../style/variables.scss";

.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  h3 {
    color: $dark-gray-font;
    font-size: 24px;
    font-weight: map-get($font-weights, normal);
    margin-bottom: 15px;
  }

  .bytes {
    width: 100%;
    min-width: 200px;
    max-width: fit-content;
    padding: 15px 25px;
    background-color: $startup-bg;
    border-radius: 8px;

    color: #fff;
    font-size: 60px;
    font-weight: map-get($font-weights, boldest);
    text-align: center;
    margin-bottom: 30px;
  }

  .bps,
  .level,
  .next-level {
    margin-bottom: 15px;

    color: $dark-gray-font;
    font-size: 18px;
    font-weight: map-get($font-weights, medium);
    font-style: italic;
    text-align: center;
  }
}
</style>