import Script from 'next/script'
import {
  getFubPixelId,
  getFubPixelScriptUrl,
  isFubPixelEnabled,
} from '@/lib/fub-pixel-config'

type FubPixelScriptProps = {
  strategy?: 'afterInteractive' | 'lazyOnload'
}

/** Official FUB Widget Tracker (widgetbe.com). One pixel per team account. */
export default function FubPixelScript({
  strategy = 'lazyOnload',
}: FubPixelScriptProps) {
  if (!isFubPixelEnabled()) {
    return null
  }

  const pixelId = getFubPixelId()
  if (!pixelId) {
    return null
  }

  const scriptUrl = getFubPixelScriptUrl()

  return (
    <Script id="fub-pixel" strategy={strategy}>
      {`(function(w,i,d,g){
  w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments);};
  w[g].ds=1*new Date();
  var t=d.createElement('script');
  var f=d.getElementsByTagName('script')[0];
  t.async=1;t.src=i;f.parentNode.insertBefore(t,f);
})(window,'${scriptUrl}',document,'widgetTracker');
window.widgetTracker('create','${pixelId}');
window.widgetTracker('send','pageview');`}
    </Script>
  )
}
