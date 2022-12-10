<script lang="ts">
  import Typography from './Typography.svelte'

  export let currentPath: string
  export let label: string
  export let href: string
  export let absolute: boolean = false

  $: withIcon = $$slots.icon
  $: active = absolute ? currentPath === href : currentPath.startsWith(href)
</script>

<a
  class="relative px-6 py-3 bg-primary-900 w-full rounded-lg flex flex-row justify-start items-center gap-3"
  class:active
  {href}
>
  {#if withIcon}
    <span class="block w-6 h-6" aria-hidden="true">
      <slot name="icon" />
    </span>
  {/if}
  <Typography variant="body" class="block text-neutral-50">{label}</Typography>
</a>

<style lang="postcss">
  a:hover::after,
  a:active::after,
  a.active::after {
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;

    background: transparent;
    border: 3px solid theme('colors.primary.500');
    border-radius: theme('borderRadius.xl');
  }

  :global(span svg) {
    width: 100%;
    height: 100%;
    color: theme('colors.neutral.50');
  }
</style>
