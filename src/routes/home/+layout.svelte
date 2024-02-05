<script>
	import { onMount } from 'svelte';
	import Menu from '../../components/menu.svelte';
	import BirthdayCollectionForm from './components/birthday-collection-form.svelte';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';
	import { userWritable } from '../../stores/user.store';

	const user = get(userWritable);

	onMount(() => {
		if (!user?.token) {
			goto('/');
		}
	});
</script>

<slot />
