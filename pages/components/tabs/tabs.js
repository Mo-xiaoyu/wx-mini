Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },
  data: {
    
  },
  methods: {
    bindItemTap(e) {
      const {index} = e.currentTarget.dataset;
      this.triggerEvent("itemTap", {index})
    }
  }
})
