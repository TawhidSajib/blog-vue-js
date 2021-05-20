<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Blog</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link
            tag="a"
            to="/"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </router-link>
          <router-link
            tag="a"
            to="/users"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Users
          </router-link>
          <router-link
            tag="a"
            to="/blog"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Blog List
          </router-link>
          <router-link
            tag="a"
            to="/gallery"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Gallery
          </router-link>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
            >Download</a
          >
        </div>
      </div>
    </nav>
    <!-- <h2 class="text-center text-2xl">Blog</h2>
    <hr /> -->
    <p class="text-justify p-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eveniet
      voluptatem harum blanditiis corporis odio ut consequatur? Aut animi minus
      provident distinctio, eligendi enim, molestiae mollitia sunt voluptatibus
      at reiciendis magni voluptatem delectus in? Blanditiis veritatis eligendi
      cumque molestias hic repudiandae libero neque exercitationem illum porro
      iusto veniam temporibus sunt, ullam ad culpa expedita corporis fuga
      consectetur autem quasi impedit vel dignissimos. Consectetur nisi sed
      quidem harum nam rem temporibus, quo soluta perferendis deleniti corporis
      ipsa delectus est placeat blanditiis exercitationem ad neque similique
      voluptas et officiis! Accusantium nemo magnam numquam eius! Esse,
      recusandae nulla! Doloribus, fuga hic natus velit nemo temporibus delectus
      quaerat magni maxime cum officiis accusamus dolor modi nam, odio est
      architecto in corrupti id enim reprehenderit. Inventore accusantium nulla
      ut obcaecati beatae tenetur, corporis, reiciendis quod sit odit
      perferendis dolorum ratione alias sequi iste excepturi itaque veniam
      voluptatum voluptatibus perspiciatis ullam non deserunt? Atque itaque
      inventore magni accusamus quod rem minima. Autem, expedita quos cupiditate
      quo reprehenderit maxime, laborum nobis repellendus impedit consectetur
      aperiam nemo officiis accusamus blanditiis dignissimos. Provident velit
      eius suscipit eum neque? Ipsum mollitia eveniet vero nobis veniam sint
      deserunt neque, id harum explicabo cum maiores officiis dicta
      voluptatibus, molestiae dolorem quod ea.
    </p>
  </div>
</template>
<script>