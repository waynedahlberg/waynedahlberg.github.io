    import Link from 'next/link'
    import Head from 'next/head'
    import avatar from '@/img/about-banner.jpg'

    export default function About() {
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
                        About me
                    </h1>
                </div>
                
                <div class="text-lg leading-7 pt-8">
                    <p className="text-base font-semibold leading-7 text-gray-500">
                        Hello there&nbsp; 👋
                    </p>

                    <p class="text-gray-500 pb-4 pt-4">Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

                    <p class="text-gray-500 pb-4">Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.</p>

                    <p class="text-gray-500 pb-8">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                </div>

                <div class="space-y-8">
                    <div class="relative pb-2/3">
                        <img class="absolute object-cover h-full w-full shadow-lg rounded-lg" src={avatar} alt="" />
                    </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                        <h4>Wayne Dahlberg</h4>
                        <p class="text-gray-500">Sr. Product Designer at <a href="https://chatbooks.com" className="text-teal-400 font-semibold hover:underline">Chatbooks&nbsp;↗</a>
                        </p>
                </div>
            </div>
        </div>
    )
}

























