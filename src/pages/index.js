import tinytime from 'tinytime'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.jpg'

const posts = getAllPostPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@waynedahlberg" />
        <meta name="twitter:creator" content="@waynedahlberg" />
        <meta name="twitter:title" content="Blog – Wayne Dahlberg" />
        <meta
          name="twitter:description"
          content="Articles and thoughts on product design, user experience and software development."
        />
        <meta name="twitter:image" content={`https://wayne.work${twitterCard}`} />
        <meta property="og:url" content="https://wayne.work" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Wayne Dahlberg" />
        <meta
          property="og:description"
          content="Articles and thoughts on product design, user experience and software development."
        />
        <meta property="og:image" content={`https://wayne.work${twitterCard}`} />
        <title>Blog - Wayne Dahlberg</title>
        <meta
          name="description"
          content="Articles and thoughts on product design, user experience and software development."
        />
      </Head>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 className="text-2xl leading-9 font-bold text-gray-900 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Recently...
        </h1>
        <p className="text-base font-regular leading-7 text-gray-400 tracking-wide">
          My thoughts on product design and development
        </p>
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-10">
              <article className="space-y-0 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-xs uppercase leading-6 font-medium text-gray-500 tracking-wide">
                    <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-3">
                    <h2 className="text-6xl leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900 text-3xl leading-6 font-bold">{meta.title}</a>
                      </Link>
                    </h2>
                    <div className="prose max-w-none text-gray-500">
                      <Component />
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link href={link}>
                      <a
                        className="text-teal-500 hover:text-teal-600"
                        aria-label={`Read "${meta.title}"`}
                      >
                        Read more &rarr;
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
