import React from 'react'

type Props = {}

const Timeline2 = (props: Props) => {
  return (
    <div className="py-8 md:py-16">
      <div className="relative max-w-[700px] mx-auto pl-3">
        <div className="absolute top-0 left-3 h-full border-2 border-main-mid dark:border-alter-light border-solid rounded-full">
          <div className="absolute -top-2.5 -left-2.5 flex gap-3">
            <div className="size-5 bg-main dark:bg-alter rounded-full border-4 border-main-dark dark:border-alter-light border-solid"></div>
            <div className="text-alter/60 dark:text-main text-sm font-semibold">
              2024
            </div>
          </div>
          <div className="absolute -bottom-2.5 -left-2.5 flex gap-3">
            <div className="size-5 bg-main dark:bg-alter rounded-full border-4 border-main-dark dark:border-alter-light border-solid"></div>
            <div className="text-alter/60 dark:text-main text-sm font-semibold">
              2019
            </div>
          </div>
        </div>
        <div className="py-16 space-y-16">
          <div
            className="relative w-full pl-8"
            style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
          >
            <div className="flex items-center absolute top-3 -left-[3.5px] -translate-y-1/2">
              <div className="size-3 bg-main dark:bg-alter rounded-full border-2 border-main-dark dark:border-alter-light border-solid z-10"></div>
              <div className="w-5 border-2 border-main-mid dark:border-alter-light border-solid rounded-r-full -ml-1"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-alter dark:text-main">
                Fullstack Developer
              </h1>
              <h4 className="text-base md:text-lg text-alter-light/70 dark:text-main-light/60">
                Crossnetics (Jun 2024 - Sep 2024)
              </h4>
              <ol className="list-disc ml-5 mt-3 text-sm md:text-base text-alter-light/70 dark:text-main-light/60">
                <li>
                  Developed a marketing product with web3 support (NestJS,
                  MySQL, Redis, ElasticSearch, NextJS)
                </li>
                <li>
                  Created and integrated new modules, optimized existing
                  solutions
                </li>
                <li>
                  Refactored database operations to simplify the interaction for
                  new developers
                </li>
              </ol>
            </div>
          </div>
          <div
            className="relative w-full pl-8"
            style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
          >
            <div className="flex items-center absolute top-3 -left-[3.5px] -translate-y-1/2">
              <div className="size-3 bg-main dark:bg-alter rounded-full border-2 border-main-dark dark:border-alter-light border-solid z-10"></div>
              <div className="w-5 border-2 border-main-mid dark:border-alter-light border-solid rounded-r-full -ml-1"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-alter dark:text-main">
                Fullstack Developer
              </h1>
              <h4 className="text-base md:text-lg text-alter-light/70 dark:text-main-light/60">
                Oculeus (Oct 2022 - Apr 2024)
              </h4>
              <ol className="list-disc ml-5 mt-3 text-sm md:text-base text-alter-light/70 dark:text-main-light/60">
                <li>
                  Developed a CRM system for the telecom, banking, and crypto
                  sectors (NodeJS, ExpressJS, PostgreSQL, ReactJS)
                </li>
                <li>
                  Redesigned the CRM chat, improved performance, and added
                  Telegram notifications
                </li>
              </ol>
            </div>
          </div>
          <div
            className="relative w-full pl-8"
            style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
          >
            <div className="flex items-center absolute top-3 -left-[3.5px] -translate-y-1/2">
              <div className="size-3 bg-main dark:bg-alter rounded-full border-2 border-main-dark dark:border-alter-light border-solid z-10"></div>
              <div className="w-5 border-2 border-main-mid dark:border-alter-light border-solid rounded-r-full -ml-1"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-alter dark:text-main">
                Frontend Developer
              </h1>
              <h4 className="text-base md:text-lg text-alter-light/70 dark:text-main-light/60">
                Imentali (May 2022 - Oct 2022)
              </h4>
              <ol className="list-disc ml-5 mt-3 text-sm md:text-base text-alter-light/70 dark:text-main-light/60">
                <li>
                  Developed a tax exemption certificate generation and
                  management system (ReactJS, MaterialUI)
                </li>
                <li>Fully migrated the project from pure JS to ReactJS</li>
              </ol>
            </div>
          </div>
          <div
            className="relative w-full pl-8"
            style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
          >
            <div className="flex items-center absolute top-3 -left-[3.5px] -translate-y-1/2">
              <div className="size-3 bg-main dark:bg-alter rounded-full border-2 border-main-dark dark:border-alter-light border-solid z-10"></div>
              <div className="w-5 border-2 border-main-mid dark:border-alter-light border-solid rounded-r-full -ml-1"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-alter dark:text-main">
                Fullstack Developer
              </h1>
              <h4 className="text-base md:text-lg text-alter-light/70 dark:text-main-light/60">
                Freelance (May 2021 - Apr 2022)
              </h4>
              <ol className="list-disc ml-5 mt-3 text-sm md:text-base text-alter-light/70 dark:text-main-light/60">
                <li>
                  Development of telegram bots (Laravel, NuxtJS, Redis, MySQL,
                  Supervisor, Nginx)
                </li>
                <li>Created trading scripts in Python</li>
                <li>
                  Deployed blockchain networks and built APIs for bots (NodeJS,
                  ExpressJS, Web3, Rest, geth)
                </li>
              </ol>
            </div>
          </div>
          <div
            className="relative w-full pl-8"
            style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
          >
            <div className="flex items-center absolute top-3 -left-[3.5px] -translate-y-1/2">
              <div className="size-3 bg-main dark:bg-alter rounded-full border-2 border-main-dark dark:border-alter-light border-solid z-10"></div>
              <div className="w-5 border-2 border-main-mid dark:border-alter-light border-solid rounded-r-full -ml-1"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-alter dark:text-main">
                Fullstack Developer
              </h1>
              <h4 className="text-base md:text-lg text-alter-light/70 dark:text-main-light/60">
                Ilab (Nov 2020 - Apr 2021)
              </h4>
              <ol className="list-disc ml-5 mt-3 text-sm md:text-base text-alter-light/70 dark:text-main-light/60">
                <li>
                  Developed software for electric vehicle charging stations
                  (Codeigniter)
                </li>
              </ol>
            </div>
          </div>
          <div
            className="relative w-full pl-8"
            style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
          >
            <div className="flex items-center absolute top-3 -left-[3.5px] -translate-y-1/2">
              <div className="size-3 bg-main dark:bg-alter rounded-full border-2 border-main-dark dark:border-alter-light border-solid z-10"></div>
              <div className="w-5 border-2 border-main-mid dark:border-alter-light border-solid rounded-r-full -ml-1"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-alter dark:text-main">
                Fullstack Developer
              </h1>
              <h4 className="text-base md:text-lg text-alter-light/70 dark:text-main-light/60">
                Cyber Whale (Jun 2020 - Oct 2020)
              </h4>
              <ol className="list-disc ml-5 mt-3 text-sm md:text-base text-alter-light/70 dark:text-main-light/60">
                <li>
                  Developed a platform for streaming video and audio
                  (Codeigniter)
                </li>
              </ol>
            </div>
          </div>
          <div
            className="relative w-full pl-8"
            style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
          >
            <div className="flex items-center absolute top-3 -left-[3.5px] -translate-y-1/2">
              <div className="size-3 bg-main dark:bg-alter rounded-full border-2 border-main-dark dark:border-alter-light border-solid z-10"></div>
              <div className="w-5 border-2 border-main-mid dark:border-alter-light border-solid rounded-r-full -ml-1"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-alter dark:text-main">
                Fullstack Developer
              </h1>
              <h4 className="text-base md:text-lg text-alter-light/70 dark:text-main-light/60">
                Unifun International (Apr 2019 - Apr 2020)
              </h4>
              <ol className="list-disc ml-5 mt-3 text-sm md:text-base text-alter-light/70 dark:text-main-light/60">
                <li>Developed a classified ads board (Laravel)</li>
                <li>Built an employee management system (ReactJS)</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline2