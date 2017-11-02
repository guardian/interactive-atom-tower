const requireUncached = require('require-uncached');
import rp from 'request-promise'
import mainTemplate from './src/templates/main.html!text'
import 'svelte/ssr/register'

const Page = requireUncached('../src/components/page/render.html')

export async function render() {
  const data = await rp({
      uri: 'https://interactive.guim.co.uk/docsdata-test/1k_q21NP5tb2YJmghHmO9WSa_0hLOcJn9BcB0jJHg6Ok.json',
      json: true
  });

  const html = Page.render({
      serverside: true, 
      blocks: data.blocks
  });

  return html;
}
