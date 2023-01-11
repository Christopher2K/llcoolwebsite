<script lang="ts">
  import Typography from './Typography.svelte'

  export let label: string
  export let link: { href: string } | undefined = undefined
  export let fullWidth: boolean = false

  $: tag = Boolean(link) ? 'a' : 'button'
</script>

<svelte:element
  this={tag}
  class="element relative p-5 bg-primary-900 dark:bg-secondary-900 w-full rounded-full flex flex-row justify-start items-center"
  class:w-fit={!fullWidth}
  class:w-full={fullWidth}
  aria-label={label}
  href={link?.href}
  on:click
>
  <Typography variant="body" disableColorClasses class="text-light text-center w-full"
    >{label}</Typography
  >
</svelte:element>

<style lang="postcss">
  .element:hover::after,
  .element:active::after {
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;

    background: transparent;
    border: 3px solid theme('colors.primary.500');
    border-radius: theme('borderRadius.full');
  }

  :global(html.dark) .element:hover::after,
  :global(html.dark) .element:active::after {
    border-color: theme('colors.secondary.500');
  }
</style>
