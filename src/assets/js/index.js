class LeSwan {
  constructor() {}
  getContent(type, isWine) {
    $.ajax({
      type: "GET",
      url: `https://the-black-hoof.firebaseio.com/le_swan_${type}.json`,
      success: data => {
        this.buildMenu(type, data, isWine);
      }
    });
  }
  buildMenu(type, data, isWine) {
    const $menuList = $(`.le-swan-menu__${type}`).find(".le-swan-menu__list");
    for (const val of data) {
      $menuList.append(
        `<li class='le-swan-menu__list-item'><span class="le-swan-menu__list-item-name">${
          val.name
        }${
          isWine ? `<span>${val.location}</span>` : ""
        }</span><span class="le-swan-menu__list-item-price">${
          val.price
        }</span></li>`
      );
    }
  }
}

const leSwan = new LeSwan();

leSwan.getContent("dinner");
leSwan.getContent("dessert");
leSwan.getContent("milkshakes");
leSwan.getContent("white-wine", true);
leSwan.getContent("red-wine", true);
leSwan.getContent("rose-wine", true);
leSwan.getContent("orange-wine", true);
leSwan.getContent("sparkling-wine", true);
