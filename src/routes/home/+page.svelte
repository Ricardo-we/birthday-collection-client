<script lang="ts">
	import { get } from 'svelte/store';
	import BirthDayCollectionService from '../../services/birthday-collection.service';
	import { userWritable } from '../../stores/user.store';
	import * as Card from '$lib/components/ui/card';
	import Menu from '../../components/menu.svelte';
	import BirthdayCollectionForm from './components/birthday-collection-form.svelte';
	import { goto } from '$app/navigation';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Icons from 'flowbite-svelte-icons';
	import Tooltip from '../../components/tooltip.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import type { BirthdayCollection } from '../../types/Birthday';

	const user = get(userWritable);
	const birthdayCollectionService = new BirthDayCollectionService()?.getConfigByUser(user);
	let birthdayCollectionsPromise = birthdayCollectionService?.find({});
	let selectedBirthday: null | BirthdayCollection = null;
	let formOpen: boolean = false;

	const getBirthdays = () => {
		birthdayCollectionsPromise = birthdayCollectionService?.find({});
	};

	const updateBirthday = (data: any) => {
		birthdayCollectionService?.update(data, { routeParams: `/${selectedBirthday?.id}` });
		getBirthdays();
	};

	const createCollection = async (data: any) => {
		birthdayCollectionService?.post(data, {});
		getBirthdays();
	};
</script>

<Menu>
	<Button
		on:click={() => {
			selectedBirthday = null;
			formOpen = true;
		}}
		variant="ghost"
	>
		Nueva colección de cumpleañeros
	</Button>
	<Dialog.Root open={formOpen} onOpenChange={() => (formOpen = !formOpen)}>
		<BirthdayCollectionForm
			defaultValues={selectedBirthday}
			onSubmit={selectedBirthday !== null ? updateBirthday : createCollection}
		/>
	</Dialog.Root>
</Menu>

<main>
	{#await birthdayCollectionsPromise then birthdayCollections}
		<div class="flex flex-row items-center justify-center flex-wrap gap-5 mt-5">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			{#each birthdayCollections as collection}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<Card.Card class="w-80 flex flex-col items-center justify-evenly bg-white rounded-lg p-5">
					<Card.Header class="text-2xl text-center break-words">
						{collection.name}
					</Card.Header>

					<Card.Footer class="gap-3">
						<Tooltip content="Eliminar" let:builder>
							<Button
								on:click={(e) => {
									selectedBirthday = collection;
								}}
								variant="destructive"
								size="icon"
								builders={[builder]}
							>
								<svg
									class="w-6 h-6 text-white dark:text-grey-700"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fill-rule="evenodd"
										d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
										clip-rule="evenodd"
									/>
								</svg>
							</Button>
						</Tooltip>
						<Tooltip content="Ver Colección" let:builder>
							<Button
								on:click={() => {
									goto(`/collection-detail/${collection.code}`);
								}}
								variant="outline"
								size="icon"
								builders={[builder]}
							>
								<svg
									class="w-6 h-6 text-gray-800 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										stroke-width="2"
										d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
									/>
									<path
										stroke="currentColor"
										stroke-width="2"
										d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									/>
								</svg>
							</Button>
						</Tooltip>
						<Tooltip content="Editar Colección" let:builder>
							<Button
								on:click={(e) => {
									selectedBirthday = collection;
									formOpen = true;
								}}
								variant="default"
								size="icon"
								builders={[builder]}
							>
								<svg
									class="w-6 h-6 text-white dark:text-grey-700"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fill-rule="evenodd"
										d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
										clip-rule="evenodd"
									/>
									<path
										fill-rule="evenodd"
										d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
										clip-rule="evenodd"
									/>
								</svg>
							</Button>
						</Tooltip>
					</Card.Footer>
				</Card.Card>
			{/each}
		</div>
	{/await}
</main>

<style>
</style>
