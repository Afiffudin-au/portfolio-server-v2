const { parseTopicUrl, parseLanguageUrl } = require('.')
test('topic with ilegal url', () => {
  expect(
    parseTopicUrl('https://github.com/Afiffudin-au///storezz-server///')
  ).toBe('https://api.github.com/repos/Afiffudin-au/storezz-server/topics')
})
test('topic with valid url', () => {
  expect(parseTopicUrl('https://github.com/Afiffudin-au/storezz-server')).toBe(
    'https://api.github.com/repos/Afiffudin-au/storezz-server/topics'
  )
})

test('languages with ilegal url', () => {
  expect(
    parseLanguageUrl('https://github.com/Afiffudin-au///storezz-server///')
  ).toBe('https://api.github.com/repos/Afiffudin-au/storezz-server/languages')
})
test('languages with valid url', () => {
  expect(
    parseLanguageUrl('https://github.com/Afiffudin-au/storezz-server')
  ).toBe('https://api.github.com/repos/Afiffudin-au/storezz-server/languages')
})
