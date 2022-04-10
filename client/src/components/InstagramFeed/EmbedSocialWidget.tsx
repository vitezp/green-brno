import React, { useEffect } from 'react'
import {Typography} from "@material-ui/core";

export const EmbedSocialWidget = ({ refId, title, subtitle }: any) => {
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
      <div>
        <Typography style={{
          margin: '80px 10px 20px 15px'
        }} variant="h3">{title}</Typography>
        <Typography style={{
          margin: '20px 10px 20px 15px'
        }} variant="h6">{subtitle}</Typography>
        <div className="embedsocial-hashtag" data-ref={refId}/>
      </div>
  )
}
