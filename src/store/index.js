import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bytes: 0,
    totalBytes: 0,
    bps: 0,
    bpk: 1,
    player: {
      name: "",
      level: 0,
      nextLevel: 100,
      increase: 3
    },
    power_ups: [],
    upgrades: [
      {
        name: "Intern",
        cost: 50,
        increase: 1.15,
        bps: 0.1,
        quantity: 0,
        unlocksAt: 0
      },
      {
        name: "Junior Developer",
        cost: 100,
        increase: 1.2,
        bps: 0.5,
        quantity: 0,
        unlocksAt: 1
      },
      {
        name: "Web Developer",
        cost: 300,
        increase: 1.4,
        bps: 1,
        quantity: 0,
        unlocksAt: 2
      }
    ]
  },
  mutations: {
    incrementBytes: (state, increment) => {
      state.bytes += increment;
      state.totalBytes += increment;
    },
    levelUp: state => {
      state.player.level++;
      state.player.nextLevel *= state.player.increase;
    },
    buyUpgrade: (state, {index, amount}) => {
      if (state.bytes >= state.upgrades[index].cost) {
        state.bytes -= state.upgrades[index].cost;
        state.upgrades[index].quantity += amount;
        state.upgrades[index].cost = Math.round(state.upgrades[index].cost * state.upgrades[index].increase);
      } else {
        alert('You need more Bytes');
      }
    },
    bytesPerSecond: state => {
      state.bps = 0;
      state.upgrades.forEach(upgrade => {
        state.bps += (upgrade.bps * upgrade.quantity);
        state.bytes += (upgrade.bps * upgrade.quantity) / 60;
        state.totalBytes += (upgrade.bps * upgrade.quantity) / 60;
      });
    }
  },
  getters: {
    bytesUntilLevelUp: state => {
      return Math.round(state.player.nextLevel - state.totalBytes);
    },
    availableUpgrades: state => {
      return state.upgrades.filter(upgrade => {
        if (upgrade.unlocksAt <= state.player.level) {
          upgrade.disabled = false;
          return upgrade;
        } else if (upgrade.unlocksAt - 1 == state.player.level) {
          upgrade.disabled = true;
          return upgrade;
        }
      });
    }
  }
})
