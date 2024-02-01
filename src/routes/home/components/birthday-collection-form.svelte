<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { get } from 'svelte/store';
	import BirthDayCollectionService from '../../../services/birthday-collection.service';
	import { userWritable } from '../../../stores/user.store';
	import { loadFormData } from '../../../utils/form.utils';

    export let onSubmit: Function;
    
    const user = get(userWritable);
    const birthdayCollectionService = new BirthDayCollectionService()?.getConfigByUser(user);

    const createCollection = async (e) => {
        const data = loadFormData(e.target);
        birthdayCollectionService?.post(data, {});
        onSubmit();
    }
    
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({variant: 'ghost'})}>Nueva colección de cumpleañeros</Dialog.Trigger>

	<Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Title>Nueva colección de cumpleañeros🎂</Dialog.Title>
		<form on:submit|preventDefault={createCollection} class="w-100 flex flex-col items-csenter justify-space-around gap-3">
			<Input name="name" type="text" placeholder="Nombre" />
            
            <Dialog.Footer>
                <Button type="submit">Save changes</Button>
            </Dialog.Footer>
        </form>
	</Dialog.Content>
</Dialog.Root>
