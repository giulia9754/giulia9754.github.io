import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import ReactGA from 'react-ga4';

export default function App() {
    ReactGA.send({
        hitType: 'pageview',
        page: '/',
        title: 'Homepage'
    });

    const links = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/giulia-bangrazi/',
            icon: <FaLinkedin />
        },
        {
            name: 'GitHub',
            href: 'https://github.com/giulia9754',
            icon: <FaGithub />
        }
    ];
    const stats = [
        { name: '', value: '' },
        { name: '', value: '' }
    ];
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-[80vh]">
            {/* <img
                alt=""
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&blend-mode=multiply"
                className="absolute inset-0 -z-10 size-full object-cover filter brightness-50"
            /> */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 -z-10 size-full object-cover filter brightness-50"
            >
                <source src="background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        Hello, I'm Giulia
                    </h2>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                        Full Stack Developer - Data Analyst - Architect
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center text-lg hover:scale-110 transition-transform duration-200"
                            >
                                {link.icon}
                                <span className="ml-2">{link.name}</span>
                                <span aria-hidden="true" className="ml-2">
                                    &rarr;
                                </span>
                            </a>
                        ))}
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.name}
                                className="flex flex-col-reverse gap-1"
                            >
                                <dt className="text-base/7 text-gray-300">
                                    {stat.name}
                                </dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
