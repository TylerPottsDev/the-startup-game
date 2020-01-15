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
  name: 'overview',
  computed: {
    bytes () {
      return Math.round(this.$store.state.bytes);
    },
    bps () {
      return (this.$store.state.bps).toFixed(1);
    },
    level () {
      return this.$store.state.player.level;
    },
    bytesUntilLevelUp () {
      return this.$store.getters.bytesUntilLevelUp;
    }
  }
}
</script>

<style lang="scss">
.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  h3 {
    color: #222;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  .bytes {
    width: 100%;
    min-width: 200px;
    max-width: fit-content;
    padding: 15px 25px;
    background-color: #28A484;
    border-radius: 8px;

    color: #FFF;
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 30px;
  }

  .bps,
  .level,
  .next-level {
    margin-bottom: 15px;

    color: #222;
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
    text-align: center;
  }
}
</style>