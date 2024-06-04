export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer);

  // check if the position outside range
  if (position >= length) throw new Error('Position outside range');
  // set the new value
  dataview.setInt8(position, value);

  return dataview;
}
