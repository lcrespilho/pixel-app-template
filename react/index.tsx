import { canUseDOM } from 'vtex.render-runtime'

import type { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  // eslint-disable-next-line no-console
  console.log('>> handleEvents:', e)
  switch (e.data.eventName) {
    case 'vtex:pageView': {
      break
    }

    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
