const BaseComponent = require("../common/base.component");

class SpecialistCard extends BaseComponent {
  constructor(id) {
    super(`#Specialist_${id}`);
  }

  get name() {
    return this.rootEl.$(".name");
  }

  get education() {
    return this.rootEl.$(".education");
  }

  get designation() {
    return this.rootEl.$(".specialization-text");
  }
}

module.exports = SpecialistCard;
