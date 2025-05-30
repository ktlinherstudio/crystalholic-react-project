// utils/generateBraceletLayout.js

// 統一壓縮係數，控制珠子之間間距（越大越疏鬆）
const compressionRatio = 1;

export function generateBraceletLayout(crystalSize = 8, wristSize = 16) {
  const metalSize = 3;
  const unitLength = (metalSize + crystalSize) * compressionRatio;
  const wristLengthMM = wristSize * 10;

  const pairCount = Math.floor(wristLengthMM / unitLength);


  const layout = [];
  for (let i = 0; i < pairCount; i++) {
    layout.push("metal");
    layout.push("crystal");
  }

  return layout;
}

export function calculateRadius(wristSize) {
  const wristLengthMM = wristSize * 10;
  const radius = wristLengthMM / (2 * Math.PI);
  return radius;
}

export function calculateBeadAngles(beads, crystalSize) {
  const metalSize = 3;

  // 根據水晶尺寸給不同的比例微調，確保各尺寸對齊視覺
  const adjustmentMap = {
    8: { metalRatio: 2.1, crystalRatio: 0.8 },
    10: { metalRatio: 2.5, crystalRatio: 0.76 },
  };

  // 若找不到對應尺寸則 fallback
  const { metalRatio, crystalRatio } = adjustmentMap[crystalSize] || {
    metalRatio: 2,
    crystalRatio: 1,
  };

  const beadDistances = beads.map((bead) =>
    (bead === "metal"
      ? metalSize * metalRatio
      : crystalSize * crystalRatio) * compressionRatio
  );

  const totalLength = beadDistances.reduce((sum, d) => sum + d, 0);

  return beadDistances.map((d) => (d / totalLength) * 360);
}
