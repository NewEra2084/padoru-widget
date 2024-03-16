function initSakanaWidget() {

  const padoru = SakanaWidget.getCharacter('hisoka');
  padoru.image = `https://i.redd.it/h4bav3qm1q361.png`; // setting an image
  padoru.initialState = {
    ...padoru.initialState,
    i: .008, // inertia
    s: .6, //stickiness
    d: 0.99, //decay
    r: 1, //angle
    y: 4,  //height
    t: 0, //vertical speed
    w: 0 //horizontal speed
  };

  SakanaWidget.registerCharacter('padoru', padoru); //new character creation
  new SakanaWidget({ character: 'padoru' }).mount('#sakana-widget');
}
//default properties
const z = { size: 300, autoFit: 0, character: "hisoka", controls: !0, rod: !0, draggable: !0, stroke: { color: "#b4b4b4", width: 10 }, threshold: 0.1, rotate: 0, title: !1 };