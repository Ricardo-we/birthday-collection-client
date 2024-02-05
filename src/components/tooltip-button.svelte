<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { buttonVariants, type Props, type Events } from "$lib/components/ui/button";

	type $$Props = Props;
	type $$Events = Events;

    export let content: string;
	export let variant: any = "default";
	export let size: any = "default";
</script>

<Tooltip.Root>
	<Tooltip.Trigger asChild let:builder>
		<Button builders={[builder]}  {...$$restProps}>
			<slot	/>
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>{content}</p>
	</Tooltip.Content>
</Tooltip.Root>
