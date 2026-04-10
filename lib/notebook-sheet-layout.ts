const SHEET_ROTATIONS = [-1.15, -0.82, 0.72, 1.08, -0.58, 0.92, -0.95, 0.68];
const SHEET_X = [-8, -4, 6, 10, -6, 3, 7, -5];

export function getNotebookSheetLayout(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(h) % SHEET_ROTATIONS.length;
  const marginShift = ((Math.abs(h) % 5) - 2) * 5;
  return {
    rotate: SHEET_ROTATIONS[idx],
    translateX: SHEET_X[idx],
    translateY: SHEET_X[(idx + 3) % SHEET_X.length] * 0.25,
    marginInlineStart: marginShift,
  };
}
