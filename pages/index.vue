<template>
  <main class="pb-20">
    <section class="bg-image pt-24 pb-16 sm:pb-10 bg-noise z-0">
      <div class="mx-auto max-w-4xl">
        <HeroText />
      </div>
    </section>

    <PostTeaserList />
    <QuoteList />
    <VideoTeaserList />
    <BookTeaserList />
    <ExternalLinksList />
  </main>
</template>

<style scoped>
.bg-image {
  position: relative;
}

.bg-image:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-image: url('https://assets.digitalocean.com/labs/images/community_bg.png');
  /* background-image: url('./assets/fairdentity_banner.png'); */
  /* background-image: url('https://dirtydishes-upload.s3.eu-central-1.amazonaws.com/uploads/fairdentity_banner_first_try_b38856e4e9.jpg'); */
  background-repeat: no-repeat;
  background-position: 0% 0;
  background-size: cover;
  z-index: -1 !important;
}
</style>