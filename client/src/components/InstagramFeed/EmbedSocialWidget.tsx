import React, { useEffect } from 'react'

export const EmbedSocialWidget = ({ refId }: any) => {
  useEffect(() => {
    const scriptik = (d: any, s: any, id: any) => {
      const js: any = d.createElement(s)
      js.id = id
      js.src = 'https://embedsocial.com/cdn/ht.js'
      d.getElementsByTagName('head')[0].appendChild(js)
    }

    scriptik(document, 'script', 'EmbedSocialHashtagScript')
  }, [])

  return (
    <>
      <div className="embedsocial-hashtag" data-ref={refId}></div>
    </>
  )
}
