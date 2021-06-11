<template>
  <div class="flex flex-col">
    <div class="flex flex-col flex-1 min-h-screen items-center justify-center">
      <header
        class="
          flex
          sticky
          top-0
          w-full
          py-16
          max-w-3xl
          mx-auto
          z-20
          select-none
        "
      >
        <div class="flex flex-1 bg-white rounded-full shadow-md">
          <h1 class="flex items-center justify-between p-4">
            <a
              aria-label="Sete Três"
              href="https://setetres.st"
              class="
                flex
                items-center
                justify-center
                w-16
                h-16
                rounded-full
                ring-inset
                focus:outline-none
                focus:ring
                focus:ring-opacity-100
                focus:ring-gray-900
                hover:bg-gray-100
                select-none
              "
            >
              <svg
                class="w-8 h-8"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path
                  class="fill-current text-gray-900"
                  d="M2 13h2v2H2zM2 9h2v2H2zM2 5h2v2H2zM6 13h2v2H6zM6 9h2v2H6zM6 5h2v2H6zM12 13h2v2h-2zM12 9h2v2h-2zM12 5h2v2h-2zM2 1h2v2H2z"
                  fill="#2563eb"
                />
              </svg>
            </a>
          </h1>
          <div
            class="
              flex flex-1
              items-center
              justify-start
              bg-gray-100
              font-semibold
              text-gray-600
              leading-tight
              rounded-full
              my-4
              mr-4
              px-8
            "
          >
            <div id="quote"></div>
          </div>
          <span
            class="
              self-center
              rounded-full
              text-2xl
              font-marker
              ml-2
              mr-8
              text-gray-700
              select-none
            "
          >
            Archive
          </span>
        </div>
      </header>
      <svg
        viewBox="0 0 558.6 252.2"
        class="sttrs-svg -mt-8 absolute z-10 max-w-5xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="stroke-current text-purple-400"
          d="M29.1,187.4 c0,0,20-14.6,29.2-56.9c5.4-24.9-23.5-31.2-10.5-8.9c7.5,12.8,67,48.9,54.9,86.2C89.3,249,10.8,254,10,218.7 c-0.6-28,83.3,39.9,131.1-6.1c32-30.9,87-263.3,57.4-181.5c-9.2,25.5-60,201.3-25.8,197.7C225.2,223.2,288-56.8,258.5,25 c-9.2,25.5-61.8,201.5-29.2,198c26.8-2.8,64.7-103.2,74.2-125c9.5-21.8-23.5-6.8-12.9,3.7s48.2,7.2,65.8-2.9c1.8-1,3.5,0.9,2.3,2.6 c-32.4,46.5-53.2,92.7-33.7,100.6c37.6,15.2,94-69.6,106.8-109.8c12.8-40.2-20.6-22.4-7.6-0.2c7.5,12.8,64.1,40.2,52,77.4 c-13.4,41.3-82.1,41.2-72.8,10.2c8.3-27.7,89.1,62.2,145.2-34.8"
        />
        <line
          class="stroke-current text-purple-400"
          x1="128.1"
          y1="71.4"
          x2="413.8"
          y2="26.4"
        />
      </svg>
      <div
        class="
          setetres setetres--loading
          grid grid-cols-8
          gap-12
          top-16
          right-16
          bottom-16
          left-16
        "
      >
        <div class="setetres__letter setetres__letter--s">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--e">
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--t">
          <div />
        </div>
        <div class="setetres__letter setetres__letter--e">
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--t">
          <div />
        </div>
        <div class="setetres__letter setetres__letter--r">
          <div />
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--e">
          <div />
          <div />
        </div>
        <div class="setetres__letter setetres__letter--s">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 12
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2020
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v12.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v12.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 11
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2019
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v11.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v11.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 10
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2018
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v10.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v10.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 9
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2017
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v9.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v9.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 8
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2016
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v8.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v8.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 7
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2015
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v7.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v7.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 6
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2014
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v6.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v6.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 5
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2013
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v5.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v5.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 4
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2012
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v4.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v4.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 3
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2011
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v3.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v3.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 2
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2010
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://v2.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v2.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 1997
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2009
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://1997.setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v1997.png" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex">
        <div class="px-16 w-1/3">
          <div class="sticky py-16 top-0">
            <div class="bg-white rounded-full shadow-md">
              <div class="flex justify-between">
                <h3
                  class="
                    self-center
                    rounded-full
                    text-2xl
                    font-marker
                    mx-8
                    text-gray-700
                    select-none
                  "
                >
                  version 1
                </h3>
                <div class="flex flex-1 border-l">
                  <div class="flex flex-1 items-center px-8 font-semibold">
                    2008
                  </div>
                  <div>
                    <a
                      aria-label="Sete Três"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://setetres.st"
                      class="
                        flex
                        items-center
                        justify-center
                        px-8
                        h-16
                        m-4
                        font-semibold
                        rounded-full
                        ring-inset
                        focus:outline-none
                        focus:ring
                        focus:ring-opacity-100
                        focus:ring-gray-900
                        hover:bg-gray-100
                        select-none
                      "
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center p-16">
          <div
            class="
              rounded-3xl
              shadow-md
              bg-white
              dark:bg-gray-900
              mx-auto
              overflow-hidden
            "
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div><img src="~/assets/images/v1.png" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    setTimeout(function () {
      next()
    }, 500)
  },

  head() {
    return {
      title: 'Sete Três — Archive',
    }
  },

  mounted() {
    this.$nextTick(() => {
      const setetres = document.querySelector('.setetres')

      setTimeout(function () {
        setetres.classList.remove('setetres--loading')
      }, 100)

      setTimeout(function () {
        setetres.classList.add('setetres--loaded')
      }, 3000)

      const quotes = [
        {
          text: 'Abstraction is a type of decadence.',
        },
        {
          text: 'Believing in rebirth is the same as admitting defeat.',
        },
        {
          text: 'A lot of professionals are crackpots.',
        },
        {
          text: 'All things are delicately interconnected.',
        },
        {
          text: 'Boredom makes you do crazy things.',
        },
        {
          text: 'Repetition is the best way to learn.',
        },
        {
          text: 'Symbols are more meaninful than things themselves.',
        },
        {
          text: 'Technology will make or break us.',
        },
        {
          text: 'You are the past, present and future.',
        },
        {
          text: 'Expressing anger is necessary.',
        },
      ]

      const quote = quotes[Math.floor(Math.random() * quotes.length)]

      document.getElementById('quote').innerHTML = quote.text
    })
  },
}
</script>
