class sixth_super_hero {
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
  }
  
  module.exports = new sixth_super_hero("Batman");
  
  
  
  // module.exports = sixth_super_hero;