<script lang="ts">
	import { navItems } from "./navItems.ts";
	
	let navOpen = false;
	let subNavOpenVal = '';
	let subNavOpen = false;

	function mdThreshold(){
		return window.innerWidth >= 768;
	}

	function handleResize(){
		navOpen = mdThreshold();
		resetSubNav();
	}

	function toggleNav(){
		navOpen = !navOpen;
		resetSubNav();
	}

	function resetNavEligible(){
		return !mdThreshold();
	}

	function resetNav(){
		if(resetNavEligible()){
			navOpen = false;
			resetSubNav();
			handleResize();
		}
	}

	function resetSubNav(){
		subNavOpenVal = '';
		subNavOpen = false;
	}

	handleResize();

	function clickOutside(node: HTMLElement): { destroy: () => void } {
		const handleClick = (event: MouseEvent): void => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
				node.dispatchEvent(
					new CustomEvent('click_outside', { detail: node })
				);
			}
		}
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		}
	}
</script>
<svelte:window on:resize={handleResize} />

<div class="flex flex-end items-center" use:clickOutside on:click_outside={resetNav}>
	<nav class="fixed md:relative right-[30px] md:right-0 top-[80px] md:top-0 w-[200px] md:w-[auto] rounded-[15px] bg-white dark:bg-gray-overlay shadow-[0px_0px_50px_rgba(0,0,0,0.1)] dark:shadow-[0px_10px_60px_rgba(0,0,0,0.8)] md:shadow-none dark:md:shadow-none block {navOpen? 'block animate-menuAppear md:animate-none':'hidden'} md:flex flex-[auto] justify-end items-center md:mr-[10px] md:gap-[10px]">
	{#each navItems as item}
		{#if item.sublinks.length > 0}
		<button class="block w-full relative border-t border-light-gray dark:border-dark-gray border-solid md:border-none first:border-0"
			on:mouseleave={() => {
				if (mdThreshold()) subNavOpenVal = '';
			}}
			on:mouseover={() => {
				if (mdThreshold()) subNavOpenVal = item.title;
			}}
			on:click={() => {
				if(!subNavOpen){
					subNavOpenVal = item.title;		
				}else{
					subNavOpenVal = '';
				}
				subNavOpen = !subNavOpen;
			}}
			on:focus={() => {}}
		>
			
			<div class="relative">
				<a href={item.url} on:click={resetNav} class="group relative z-10 flex items-center px-[20px] md:px-[15px] py-[15px] text-left border-t border-light-gray dark:border-dark-gray border-solid md:border-none first:border-0 text-sm font-medium text-black dark:text-white hover:text-pink md:hover:rounded-[10px]">{item.title} <span class="block w-[20px] h-[20px] bg-[url('./assets/arrows-down.svg')] bg-left dark:bg-center group-hover:bg-right"></span></a>
				<div class="absolute z-20 top-0 left-0 right-0 bottom-0 md:hidden"></div>
			</div>
			<div class="{subNavOpenVal == item.title? 'block' : 'hidden'} relative md:absolute md:top-[50px] right-0 md:w-[200px] md:rounded-[15px] md:bg-white md:dark:bg-gray-overlay md:shadow-[0px_0px_50px_rgba(0,0,0,0.1)] md:dark:shadow-[0px_10px_60px_rgba(0,0,0,0.8)] pb-[15px] md:pb-0">
				{#each item.sublinks as subitem}
					<a href="{item.url}{subitem.url}" on:click={resetNav} class="block px-[30px] py-[8px] md:px-[18px] md:py-[15px] text-xs leading-tight font-medium text-p-light dark:text-p-dark hover:text-pink text-left md:border-t md:border-light-gray md:dark:border-dark-gray md:first:border-0">{subitem.title}</a>
				{/each}
				<a href={item.url} on:click={resetNav} class="block px-[30px] py-[8px] md:px-[18px] md:py-[15px] text-xs leading-tight font-medium text-p-light dark:text-p-dark hover:text-pink text-left md:border-t md:border-light-gray md:dark:border-dark-gray md:first:border-0 md:hidden">{item.title}</a>
			</div>
		</button>
		{:else}
		<a href={item.url} on:click={resetNav} class="group block px-[20px] md:px-[15px] py-[15px] text-left border-t border-light-gray dark:border-dark-gray border-solid md:border-none first:border-0 text-sm font-medium text-black dark:text-white hover:text-pink md:hover:rounded-[10px]">{item.title}</a>
		{/if}
	{/each}
	</nav>
	<button on:click={toggleNav} class="flex-none w-[40px] h-[40px] rounded-[10px] mr-[15px] justify-center items-center border border-solid border-light-gray dark:border-dark-gray flex md:hidden" aria-label="Hamburger"><div class="w-[14px] h-[15px] bg-[url('./assets/hamburger.svg')] bg-left-top dark:bg-right-top"></div></button>
</div>