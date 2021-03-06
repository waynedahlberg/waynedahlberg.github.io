import Link from 'next/link'
import Head from 'next/head'
import avatar from '@/img/waynedahlberg.jpg'
import blank from '@/img/project-blank.jpg'
import r2d2 from '@/img/project-r2d2.jpg'
import modernui from '@/img/project-modern-ui.jpg'
import verses from '@/img/project-verses.jpg'

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
            <h1 className="text-xl leading-9 font-bold text-gray-900 tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
                    Projects
                </h1>
                <p className="text-base font-regular leading-7 text-gray-400 tracking-wide">
                </p>
            </div>

            <div className="relative pt-0 pb-20 px-4 sm:px-6 lg:pt-0 lg:pb-28 lg:px-8">
            
            <div className="relative max-w-7xl mx-auto">
                
                <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
                
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={verses} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                        <a href="#" className="hover:underline">
                            App Development
                        </a>
                        </p>
                        <a href="#" className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            SwiftUI &amp; Combine
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            Adventures, successes and failures learning the new frameworks from Apple.
                        </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                        <a href="#">
                            <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
                        </a>
                        </div>
                        <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                            Wayne
                            </a>
                        </p>
                        <div className="flex text-sm leading-5 text-gray-500">
                            <time datetime="2020-03-16">
                            Coming soon
                            </time>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={modernui} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                        <a href="#" className="hover:underline"> Design</a>
                        </p>
                        <a href="#" className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            Figma Design Systems
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            Thoughts and experiments building design systems, components, variants and more in Figma.
                        </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                        <a href="#">
                            <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
                        </a>
                        </div>
                        <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                            Wayne
                            </a>
                        </p>
                        <div className="flex text-sm leading-5 text-gray-500">
                            <time datetime="2020-03-16">
                            Coming soon
                            </time>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={r2d2} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                        <a href="#" className="hover:underline">
                            Electronics
                        </a>
                        </p>
                        <a href="#" className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            R2-D2
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            A journey to build a full-size, aluminum replica of the galaxy's favorite droid. Bleep bloop.
                        </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                        <a href="#">
                            <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
                        </a>
                        </div>
                        <div className="ml-3">
                        <p className="text-sm leading-5 font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                            Wayne
                            </a>
                        </p>
                        <div className="flex text-sm leading-5 text-gray-500">
                            <time datetime="2020-03-16">
                            Coming soon
                            </time>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}