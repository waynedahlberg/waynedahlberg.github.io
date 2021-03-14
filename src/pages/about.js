import Link from 'next/link'
import Head from 'next/head'
import avatar from '@/img/about-banner.jpg'

export default function About() {
  return (
    <div className="pb-8">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@waynedahlberg" />
        <meta name="twitter:creator" content="@waynedahlberg" />
        <meta name="twitter:title" content="Blog – Wayne Dahlberg" />
        <meta
          name="twitter:description"
          content="Articles and thoughts on product design, user experience and software development."
        />
        <meta property="og:url" content="https://wayne.work" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Wayne Dahlberg" />
        <meta
          property="og:description"
          content="Articles and thoughts on product design, user experience and software development."
        />
        <title>Wayne Dahlberg</title>
        <meta
          name="description"
          content="Articles and thoughts on product design, user experience and software development."
        />
      </Head>

      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-xl leading-9 font-bold text-gray-900 tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          About
        </h1>
      </div>

      <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
        <div class="relative h-0 pb-2/3 sm:pt-2/3">
          <img
            class="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg"
            src={avatar}
            alt="profile-image"
          />
        </div>
        <div class="sm:col-span-2">
          <div class="space-y-4">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h4>Wayne Dahlberg</h4>
              <p className="text-sm text-gray-400 pb-6">UTAH, USA</p>
              <p class="text-teal-400">
                Product Design at{' '}
                <a href="https://chatbooks.com" className="text-teal-400 hover:underline">
                  Chatbooks↗
                </a>
              </p>
            </div>
            <div class="text-lg leading-7">
              <p class="pt-2 text-gray-500">
                Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus
                mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
              </p>
              <p class="pt-2 text-gray-500">
                Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus
                mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
