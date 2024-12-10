<script lang="ts">
  import NavMenu from './NavMenu.svelte';
  import ThemeToggle from './ThemeToggle.svelte';

  import Router from 'svelte-spa-router';

  import Home from './Home.svelte';
  import About from './About.svelte';
  import Contact from './Contact.svelte';
  import Services from './Services.svelte';
  import ServiceDesign from './ServiceDesign.svelte';
  import ServiceSoftwareDevelopment from './ServiceSoftwareDevelopment.svelte';
  import ServiceContentWriting from './ServiceContentWriting.svelte';

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.theme!='light'){
    localStorage.theme = 'dark';
  }

</script>

<header class="fixed z-50 flex justify-between items-center rounded-[15px] top-[15px] left-[15px] right-[15px] inset-x-5 shadow-[0px_10px_40px_rgba(0,0,0,0.06)] dark:shadow-none bg-white dark:bg-gray-overlay">
  <a href="/" class="flex-none p-[15px]" title="Home" aria-label="Home"><div class="w-[150px] h-[42px] bg-[url('./assets/mobik-logo.png')] dark:bg-[url('./assets/mobik-logo-white.png')] bg-cover"></div></a>
  <NavMenu />
</header>

<Router routes={{
	'/': Home,
	'/about': About,
	'/services': Services,
  '/services/design': ServiceDesign,
  '/services/software-development': ServiceSoftwareDevelopment,
  '/services/content-writing': ServiceContentWriting,
  '/contact': Contact
}} />

<ThemeToggle />
