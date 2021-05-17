<template>
  <div class="flex flex-col -space-y-8">
    <div
      class="flex flex-col flex-1 items-center justify-center min-h-screen py-16"
      style="min-height: calc(50vh - 3rem)"
    >
      <!-- <div class="font-marker text-9xl select-none">Archive</div> -->
      <div
        class="flex sticky top-16 w-full max-w-lg mx-auto bg-white rounded-full shadow-md select-none"
      >
        <h1 class="flex items-center justify-between p-4">
          <nuxt-link
            aria-label="Sete Três"
            to="/"
            class="flex items-center justify-center w-16 h-16 rounded-full ring-inset focus:outline-none focus:ring focus:ring-opacity-100 focus:ring-gray-900 hover:bg-gray-100"
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
          </nuxt-link>
        </h1>
        <div
          class="flex flex-1 items-center justify-start bg-gray-100 text-gray-400 rounded-full my-4 mr-4 px-8 leading-tight"
        >
          <div id="quote"></div>
        </div>
        <span
          class="self-center rounded-full text-2xl font-marker py-1 ml-2 mr-8 text-gray-700 select-none"
        >
          Archive
        </span>
      </div>
    </div>
    <div class="flex flex-col flex-1 min-h-screen">
      <div
        class="flex flex-col flex-1 bg-white rounded-3xl shadow-md m-8 min-h-full overflow-hidden"
      >
        <div class="flex items-center justify-center flex-1 bg-pattern p-16">
          <div
            class="rounded-3xl shadow-md bg-white dark:bg-gray-900 max-w-7xl mx-auto overflow-hidden"
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
        <div class="px-8 border-t w-full">
          <div class="flex justify-between max-w-7xl mx-auto overflow-hidden">
            <div class="py-8">
              <h3 class="font-marker text-gray-500 text-2xl px-8">
                version 12
              </h3>
            </div>
            <div class="flex flex-1 border-l p-8">
              <div class="flex-1">ddd</div>
              <div>View</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 min-h-screen">
      <div
        class="flex flex-col flex-1 bg-white rounded-3xl shadow-md m-8 min-h-full overflow-hidden"
      >
        <div class="items-center justify-center flex-1 bg-pattern p-16">
          <div
            class="rounded-3xl shadow-md bg-white dark:bg-gray-900 max-w-7xl mx-auto overflow-hidden"
          >
            <div class="border-b border-b border-gray-200 dark:border-gray-800">
              <div class="flex space-x-2 py-6 px-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div class="p-0">
              <img src="~/assets/images/v12.png" />
            </div>
          </div>
        </div>
        <div class="px-8 py-8 border-t w-full">v12</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
