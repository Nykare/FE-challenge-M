export let navItems = [
{ title: 'Home', url: '/', sublinks: [] },
{ title: 'About', url: '#/about', sublinks: [] },
{ title: 'Services', url: '#/services', sublinks: [
		{ title: 'Design', url: '/design' },
		{ title: 'Software development', url: '/software-development' },
		{ title: 'Content writing', url: '/content-writing' }
	] },
{ title: 'Contact', url: '#/contact', sublinks: [] }
];