<script lang="ts">
	import { navItems } from "./navItems.ts";
</script>

<h1 class="text-3xl md:text-6xl leading-[1] font-black text-black dark:text-white py-[10px] md:py-[20px] px-[20px]">Services <span class="inline-block animate-wiggle">⚙️</span></h1>
<p class="px-[20px] py-[0] leading-snug text-p-light dark:text-p-dark">A list of our services</p>

{#each navItems as item}
	{#if item.sublinks.length > 0}
		<div class="flex align-center gap-[15px] mt-[20px] justify-center flex-wrap">
		{#each item.sublinks as subitem}
			<a href="{item.url}{subitem.url}" class="block px-[18px] py-[12px] text-xs leading-tight font-medium text-p-light dark:text-p-dark hover:text-pink text-left border border-light-gray dark:border-dark-gray rounded-[10px]">{subitem.title}</a>
		{/each}
		</div>
	{/if}
{/each}
