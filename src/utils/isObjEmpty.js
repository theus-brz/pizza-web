export default function isObjEmpty(obj) {
  try {
    const props = Object.keys(obj);

    return props.length <= 0;
  } catch (error) {
    return true;
  }
}
