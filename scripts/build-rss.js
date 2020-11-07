import fs from 'fs'
import RSS from 'rss'
import getAllPostPreviews from '../src/getAllPostPreviews'

const feed = new RSS({
  title: 'Blog – Wayne Dahlberg',
  site_url: 'https://blog.tailwindcss.com',
  feed_url: 'https://blog.tailwindcss.com/feed.xml',
})

getAllPostPreviews().forEach(({ link, module: { meta } }) => {
  feed.item({
    title: meta.title,
    guid: link,
    url: `https://blog.tailwindcss.com${link}`,
    date: meta.date,
    description: meta.description,
    custom_elements: [].concat(meta.authors.map((author) => ({ author: [{ name: author.name }] }))),
  })
})

fs.writeFileSync('./out/feed.xml', feed.xml({ indent: true }))
