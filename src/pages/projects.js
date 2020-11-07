import Link from 'next/link'
import Head from 'next/head'
import avatar from '@/img/waynedahlberg.jpg'
import radarEye from '@/img/projects/radar-eye.jpg'
import soldering from '@/img/projects/soldering.jpg'
import statusbar from '@/img/projects/statusBar.jpg'

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
                <p className="text-base font-regular leading-7 text-gray-400 tracking-wide">
                    DESIGN, CODE, ELECTRONICS
                </p>
            </div>

            <div className="relative pt-0 pb-20 px-4 sm:px-6 lg:pt-0 lg:pb-28 lg:px-8">
            
            <div className="relative max-w-7xl mx-auto">
                
                <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={radarEye} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                        <a href="#" className="hover:underline">
                            3D Printing
                        </a>
                        </p>
                        <a href="#" className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            R2-D2 Radar Eye
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius.
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
                            Mar 16, 2020
                            </time>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={soldering} alt="" />
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
                            Basic Soldering 101
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus.
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
                            Mar 16, 2020
                            </time>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={statusbar} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                        <a href="#" className="hover:underline"> Design Systems</a>
                        </p>
                        <a href="#" className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            Building a Custom Status Bar with Figma Variants
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni.
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
                            Mar 16, 2020
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