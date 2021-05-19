<template>
  <div class="flex flex-col justify-center">
    <h2 class="text-center text-2xl">Blog</h2>
    <hr />
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
    <div class="text-center">
      <button
        class="bg-green-500 py-2 px-4 mt-2 rounded text-white hover:bg-green-700 duration-700"
        @click="blogList"
      >
        All Blog list
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    blogList() {
      this.$router.push({
        path: "/blog",
      });
    },
  },
};
</script>