export const GA_TRACKING_ID = 'GTM-54HCX9H'

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
  console.log('pageview at:', url)
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
  console.log('event at:', action, category, label)
}
