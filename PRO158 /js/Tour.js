AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "cpt-aero",
        url: "./assets/thumbnails/captain-aero-poster.jpg",
      },
      {
        id: "outer-space",
        url: "./assets/thumbnails/outer-space-poster.jpg",
      },

      {
        id: "spiderman",
        url: "./assets/thumbnails/spiderman-poster.jpg",
      },
      {
        id: "superman",
        url: "./assets/thumbnails/superman-poster.jpg",
      },
    ];
    let prevoiusXPosition = -62.5;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbnail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position,item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function(position,id){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width:20,
      height:25
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material",{
      color: '#000000',
    });
    entityEl.setAttribute("cursor-listener",{});

    return entityEl;
  },

  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:18,
      height:23
    });
    entityEl.setAttribute("position",{x:0, y:0, z:0.1});
    entityEl.setAttribute("material",{src:item.url});

    return entityEl;
  },

  createTitleEl: function(position,item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text",{
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position",elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },

});
