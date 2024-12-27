import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer class=" rounded-lg m-4 dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white'
                        }}
                    >
                        <a
                            href="https://www.linkedin.com/in/giulia-bangrazi/"
                            target="_blank"
                            rel="noreferrer"
                            className="mr-2"
                        >
                            <FaLinkedin style={{ fontSize: '18px' }} />
                        </a>
                        <a
                            href="https://github.com/giulia9754"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub style={{ fontSize: '18px' }} />
                        </a>
                    </span>
                    <span class="text-xs italic text-gray-500 sm:text-center dark:text-gray-400">
                        ©{currentYear} All Rights Reserved
                    </span>
                    {/* <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul> */}
                </div>
            </footer>
        </div>
    );
}
export default Footer; //serve a renderla visibile a tutti gli altri componenti
