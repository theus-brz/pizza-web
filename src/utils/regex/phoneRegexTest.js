export default function phoneRegexTest(stringToTest) {
  const regex = new RegExp(
    /\(?([(]{0,1}[0-9]{0,2}[)])\)?([ .-]?)([0-9]{5})\2([0-9]{4})/
  );
  return regex.test(stringToTest);
}
