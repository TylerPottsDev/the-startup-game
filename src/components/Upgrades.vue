<template>
  <div class="upgrades">
    <div v-for="(upgrade, index) in upgrades" :key="index" class="upgrade">
      <button
        :class="`button ${upgrade.disabled ? 'disabled' : ''}`"
        @click="buyUpgrade($event, index)"
      >
        {{ upgrade.name }}
        {{ upgrade.disabled ? `(lvl: ${upgrade.unlocksAt})` : '' }}
      </button>
      <div class="details">
        <div class="cost">Cost: {{ upgrade.cost }}</div>
        <div class="quantity">Quantity: {{ upgrade.quantity }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upgrades',
  computed: {
    upgrades() {
      return this.$store.getters.availableUpgrades;
    }
  },
  methods: {
    buyUpgrade(event, index) {
      // console.log(event); // shows that event is a MouseEvent
      if (event.screenX > 0) {
        this.$store.commit('buyUpgrade', {
          index,
          amount: 1
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import '../style/variables.scss';

.upgrades {
  background-color: #222;
  padding: 25px;

  .upgrade {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px -15px 15px;

    .button,
    .cost,
    .quantity {
      color: #fff;
      margin: 0 15px;
    }

    .details {
      flex: 1 1 100%;
    }

    .button {
      appearance: none;
      border: none;
      outline: none;
      background: none;

      display: inline-block;
      min-width: 300px;
      padding: 15px 25px;
      background-color: $startup-bg;

      color: #fff;
      font-size: 20px;
      font-weight: map-get($font-weights, bold);
      text-align: center;
      text-transform: uppercase;

      cursor: pointer;

      &.disabled {
        color: $dark-gray-font;
        background-color: $disabled;
        pointer-events: none;
      }
    }
  }
}
</style>
