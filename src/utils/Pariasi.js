export const PariasiHilangKeKiri = {
  hilang: {
    x: -50,
    opacity: 0,
  },
  ada: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const PariasiHilangKeKanan = {
  hilang: {
    x: 50,
    opacity: 0,
  },
  ada: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const PariasiHilangKeAtas = {
  hilang: {
    y: -50,
    opacity: 0,
  },
  ada: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const PariasiHilangKeBawah = {
  hilang: {
    y: 50,
    opacity: 0,
  },
  ada: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const PariasiGeserKeKiri = {
  hilang: {
    x: "-100vh",
    opacity: 0,
  },
  ada: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  keluar: {
    opacity: 0,
    x: "-100vh",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
