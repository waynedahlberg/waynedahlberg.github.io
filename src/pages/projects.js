import Link from 'next/link'
import Head from 'next/head'

export default function Projects() {
    return (
        <div className="divide-y divide-gray-200">
            <Head>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@waynedahlberg" />
                <meta name="twitter:creator" content="@waynedahlberg" />
                <meta name="twitter:title" content="Blog – Wayne Dahlberg" />
                <meta name="twitter:description" content="Articles and thoughts on product design, user experience and software development." />
                <meta property="og:url" content="https://wayne.work" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Blog – Wayne Dahlberg" />
                <meta property="og:description" content="Articles and thoughts on product design, user experience and software development." />
                <title>Blog - Wayne Dahlberg</title>
                <meta name="description" content="Articles and thoughts on product design, user experience and software development." />
            </Head>

            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1 className="text-3xl leading-9 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Projects
                </h1>
            </div>

            <div>
                <h2>Projects</h2>
                <p>This is a page for my projects</p>
            </div>
        </div>
    )
}