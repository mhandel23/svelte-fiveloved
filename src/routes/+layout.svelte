<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <title>FiveLoved</title>
  <meta name="description" content="Find products that people love." />
</svelte:head>

<main>
  <slot />
  <footer class="bg-blue-700 text-white p-10 flex justify-center">
    <div
      class="flex flex-col md:flex-row gap-4 md:gap-8 xl:w-3/5 justify-between">
      <p>© 2024 - FiveLoved. All rights reserved</p>
      <div class="flex gap-3">
        <a class="hover:text-orange-500 link" href="/privacy">Privacy Policy</a>
        <span>|</span>
        <a class="hover:text-orange-500 link" href="/terms">Terms of Service</a>
      </div>
      <p>Roosevelt St. New Castle, PA.</p>
    </div>
  </footer>
</main>
