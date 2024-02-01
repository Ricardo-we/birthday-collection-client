<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { loadFormData } from '../../../utils/form.utils';

    const createCollection = (e) => {
        const data = loadFormData(e.target);
        console.log(data);
    }
    
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({variant: 'ghost'})}>Nueva colección de cumpleañeros</Dialog.Trigger>

	<Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Title>Nueva colección de cumpleañeros🎂</Dialog.Title>
		<form on:submit|preventDefault={createCollection} class="w-80 flex flex-col items-csenter justify-space-around gap-3">
			<Input name="name" type="email" placeholder="Nombre" />
		</form>

		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
