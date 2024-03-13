<script>
  import Header from '$lib/components/Header.svelte';
  import Search from '$lib/components/Search.svelte';
  import cookSVG from '$lib/assets/cook.svg';
  import chairSVG from '$lib/assets/chair.svg';
  import shoesSVG from '$lib/assets/shoes.svg';
  import desktopSVG from '$lib/assets/desktop.svg';
  import bookSVG from '$lib/assets/book.svg';
  import chipSVG from '$lib/assets/chip.svg';
  import searchSVG from '$lib/assets/search.svg';
  import potionSVG from '$lib/assets/potion.svg';
</script>

<Header />
<section class="flex flex-col xl:flex-row bg-orange-100">
  <div
    class="bg-primary flex flex-col items-center min-w-[50%] rounded-b-xl xl:rounded-r-xl px-5 py-32 md:py-44 lg:py-60 xl:py-80 gap-10">
    <h1 class="text-orange-100 text-3xl md:text-4xl lg:text-6xl font-display">
      Share and Find loved products
    </h1>
    <div class="max-w-xl w-full">
      <Search />
    </div>
  </div>
  <div class="flex-1 flex flex-col justify-center py-10">
    <h2 class="font-display text-2xl lg:text-4xl mb-4 text-center">
      A common situation
    </h2>
    <div
      class="flex flex-col gap-5 text-xl lg:text-2xl text-justify px-10 md:px-20">
      <p>
        You are looking for a new product, you find it, it has a +4.5 rating,
        have watched some videos, and seen it promoted on social media. However,
        when it arrived, your expectations were frustrated.
      </p>
      <p>
        There are numerous inaccurate
        <span class="underline decoration-4 decoration-violet-400 font-bold">
          short-term product reviews
        </span>
        available on the internet.
      </p>
      <p>
        The enthusiastic reviews from customers and heavy marketing on social
        media can sometimes make the quality of the product seem mysterious.
      </p>
      <p>
        To resolve those problems, meet <span
          class="font-bold text-primary underline">FiveLoved</span
        >.
      </p>

      <p>
        Your first <span
          class="underline decoration-4 decoration-emerald-400 font-bold"
          >long-term product recommendation list</span>
        , based on products that you have used for a long time, love, and would endorse
        purchasing.
      </p>
    </div>
  </div>
</section>
<section class="flex flex-col items-center py-10 xl:py-24 bg-base-100">
  <h2 class="font-display text-3xl lg:text-5xl">
    It's super simple how it works
  </h2>
  <div class="mt-10 w-full lg:w-4/5 xl:w-2/3">
    <h3 class="text-2xl divider px-4">Step 1</h3>
    <div class="flex flex-col gap-3 items-center mt-8">
      <p class="font-bold text-xl">Create your account</p>
      <p class="text-lg">It's free</p>
      <a href="/register" class="btn btn-secondary text-lg w-72">Register</a>
    </div>
  </div>
  <div class="mt-10 w-full lg:w-4/5 xl:w-2/3">
    <h3 class="text-2xl divider px-4">Step 2</h3>
    <div class="flex flex-col gap-3 items-center mt-8">
      <p class="font-bold text-xl">Set your 5 recommended products</p>
      <div class="overflow-x-auto mt-4 w-full sm:w-11/12 xl:w-4/5">
        <table class="table">
          <!-- head -->
          <thead class="text-lg">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Review</th>
              <th>Used since</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody class="text-lg">
            <!-- row 1 -->
            <tr class="bg-base-200">
              <th>1</th>
              <td>Kindle Paperwhite</td>
              <td>This little thing changed my life.</td>
              <td>9 years</td>
              <td>
                <a href="https://amazon.com/dp/B08KTZ8249" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 text-primary">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </a>
              </td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>2</th>
              <td>Sennheiser HD558</td>
              <td
                >The time I used talked by itself. Just amazing like all
                Sennheiser products.</td>
              <td>12 years</td>
              <td>
                <a
                  href="https://www.google.com/search?q=sennheiser+hd558"
                  target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 text-primary">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </a>
              </td>
            </tr>
            <!-- row 3 -->
            <tr class="bg-base-200">
              <th>3</th>
              <td>PlayStation consoles</td>
              <td
                >I enjoyed the time I spent with those consoles so much. My
                first PlayStation still works like new to this day..</td>
              <td>18 years</td>
              <td>
                <a href="https://playstation.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 text-primary">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </a>
              </td>
            </tr>
            <!-- row 4 -->
            <tr>
              <th>4</th>
              <td>Philips OneBlade</td>
              <td
                >Just works, in everything 🤭. Extremely easy to wash and
                replace the blade.</td>
              <td>6 years</td>
              <td>
                <a
                  href="https://www.usa.philips.com/c-m-pe/oneblade-trim-edge-and-shave"
                  target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 text-primary">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </a>
              </td>
            </tr>
            <!-- row 5 -->
            <tr class="bg-base-200">
              <th>5</th>
              <td>New Balance 373 shoes</td>
              <td>I love this shoes. I have had 3</td>
              <td>10 years</td>
              <td>
                <a href="https://amazon.com/dp/B08KTZ8249" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 text-primary">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-500">It is not necessary to set all five items.</p>
    </div>
  </div>
  <div class="mt-10 w-full lg:w-4/5 xl:w-2/3">
    <h3 class="text-2xl divider px-4">Step 3</h3>
    <div class="flex flex-col gap-3 items-center">
      <p class="mt-4 text-xl text-center">
        Share your profile and invite your friends to create their own lists.
      </p>
      <a href="/mattrandel" class="link link-primary text-xl font-bold"
        >https://fiveloved.com/mattrandel</a>
      <p class="mt-4 text-xl text-center">
        Find loved products recommended by others.
      </p>
      <a href="/search" class="link link-primary text-xl font-bold"
        >https://fiveloved.com/search</a>
    </div>
  </div>
</section>
<section class="flex flex-col py-10 xl:py-20 items-center bg-base-200">
  <h2 class="text-3xl lg:text-5xl font-display text-center">
    Want to share more than 5 products, be a
    <span class="text-primary">FiveLoved+</span>
  </h2>
  <p class="text-xl mt-4 text-center px-2">
    For a <strong>lifetime plan</strong>, pay only a symbolic value of
    <strong>$5 USD</strong>, get all the perks bellow.
  </p>
  <p class="mt-2 text-gray-700">
    With your contribution, we will always be ad free.
  </p>
  <div
    class="mt-12 text-center grid sm:grid-cols-2 gap-x-12 md:gap-x-24 xl:gap-x-36 gap-y-10 md:gap-y-24">
    <div class="flex flex-col items-center">
      <div
        class="flex items-baseline justify-evenly gap-4 p-5 rounded-full bg-blue-200 w-72">
        <img src={cookSVG} width="48" alt="cook" />
        <img src={chairSVG} width="48" alt="chair" />
        <img src={shoesSVG} width="48" alt="shoes" />
      </div>

      <p class="text-2xl font-bold mt-2">Department lists</p>
      <p class="text-lg">Kitchen, office, home goods, outfit ...</p>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="flex items-baseline justify-evenly gap-4 p-5 rounded-full bg-blue-200 w-72">
        <img src={desktopSVG} width="48" alt="desktop" />
        <img src={bookSVG} width="48" alt="book" />
        <img src={chipSVG} width="48" alt="chip" />
      </div>
      <p class="text-2xl font-bold mt-2">Community driven lists</p>
      <p class="text-lg">Softwares, AI tools, books, tech ...</p>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="flex items-baseline justify-evenly gap-4 p-5 rounded-full bg-blue-200 w-72">
        <img src={searchSVG} width="48" alt="search" />
      </div>
      <p class="text-2xl font-bold mt-2">Full search</p>
      <p class="text-lg">The search works for all lists available.</p>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="flex items-baseline justify-evenly gap-4 p-5 rounded-full bg-blue-200 w-72">
        <img src={potionSVG} width="48" alt="potion" />
      </div>
      <p class="text-2xl font-bold mt-2">Custom lists</p>
      <p class="text-lg">Make yourself two lists.</p>
    </div>
  </div>
  <a href="/stripe" class="btn btn-secondary w-80 text-xl mt-10 md:mt-20"
    >Order a FiveLoved+</a>
</section>
