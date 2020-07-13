export default function nameRegexTest(stringToTest) {
  const regex = new RegExp(/^[a-zA-Z]+(([_ )(:][a-zA-Z_ ])?[a-zA-Z_ .]*)*$/);

  return regex.test(stringToTest);
}
