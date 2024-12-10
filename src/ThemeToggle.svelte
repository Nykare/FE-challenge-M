<script lang="ts">
	let darkMode = false;
	function toggleDarkMode(){
		darkMode = !darkMode;
		if(darkMode) localStorage.theme = 'dark'; else localStorage.theme = 'light';
		document.documentElement.classList.toggle('dark');
		
	}
	if( localStorage.theme=='dark'){
		darkMode = true;
		document.documentElement.classList.add('dark');
	}
</script>
<button class="fixed z-40 bottom-[15px] right-[15px] bg-white dark:bg-gray-overlay shadow-[0px_10px_40px_rgba(0,0,0,0.06)] dark:shadow-none rounded-[40px] w-[80px] p-[5px]" on:click={toggleDarkMode} aria-label="Toggle">
	<div class="w-[40px] h-[40px] rounded-[40px] bg-white dark:bg-gray-overlay border border-light-gray dark:border-dark-gray transition-margin linear ml-[0px] dark:ml-[30px]"><div class="bg-[url('./assets/theme-toggle.svg')] w-[40px] h-[40px] bg-left-top dark:bg-right-top"></div></div>
</button>
