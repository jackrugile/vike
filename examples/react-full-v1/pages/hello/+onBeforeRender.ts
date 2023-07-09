export default onBeforeRender

import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import { renderErrorPage } from 'vite-plugin-ssr/abort'

import { names } from './names'

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const { name } = pageContext.routeParams
  if (name !== 'anonymous' && !names.includes(name)) {
    throw renderErrorPage(404, `Unknown name: ${name}.`)
  }
  const pageProps = { name }
  return {
    pageContext: {
      pageProps
    }
  }
}