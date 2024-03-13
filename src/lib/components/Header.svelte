<script>
  export let invertedColors = false;
  import logo from '$lib/assets/logo.svg';
  import logoDark from '$lib/assets/logo-dark.svg';
</script>

<div class="px-2 md:px-5 navbar bg-base-100">
  <div class="navbar-start">
    <a href="/">
      {#if !invertedColors}
        <img src={logo} alt="FiveLoved" class="w-40" />
      {:else}
        <img src={logoDark} alt="FiveLoved" class="w-40" />
      {/if}
    </a>
  </div>
  <div class="navbar-end">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <ul
        class="menu right-1 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
        <li><a href="/signin">Sign In</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
    <div class="hidden gap-3 sm:flex">
      <a href="/signin" class="btn btn-primary text-lg">Sign In</a>
      <a href="/register" class="btn btn-secondary text-lg">Register</a>
    </div>
  </div>
</div>
