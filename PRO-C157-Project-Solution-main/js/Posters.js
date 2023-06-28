AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function() {
    const postersRef = [
      {
        id: "superman",
        url: "./assets/posters/superman-poster.jpg"
      },
      {
        id: "spiderman",
        url: "./assets/posters/spiderman-poster.jpg"
      },
      {
        id: "captain-aero",
        url: "./assets/posters/captain-aero-poster.jpg"
      },
      {
        id: "outer-space",
        url: "./assets/posters/outer-space-poster.jpg"
      }
    ];
    let prevXPos = -60;
    for (var item of postersRef) {
      const posX = prevXPos + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevXPos = posX;

      const bEl = this.createB(position, item.id);
      const poster = this.createP(item);
      bEl.appendChild(poster);
      this.postersContainer.appendChild(bEl);
    }
  },
  createB: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });
    return entityEl
  },
  createP: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });
    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });
    return entityEl;
  }
});
