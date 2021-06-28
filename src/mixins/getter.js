export const getPosition = {
  methods: {
    getPositionName(label) {
      let g = {
        defender: 'Защитник',
        goalkeeper: 'Вратарь',
        forward: 'Нападающий',
      };

      if(g[label]) return g[label];
      return '';
    }
  }
};