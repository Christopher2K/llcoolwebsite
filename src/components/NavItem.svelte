<script lang="ts">
  import Typography from './Typography.svelte'

  export let currentPath: string
  export let label: string
  export let href: string
  export let absolute: boolean = false
  export let hideTextOnTablet = false

  $: withIcon = $$slots.icon
  $: active = absolute ? currentPath === href : currentPath.startsWith(href)
</script>

<a
  class="relative px-6 py-3 bg-primary-900 dark:bg-secondary-900 w-full rounded-lg flex flex-row justify-start items-center gap-3"
  class:active
  class:md:max-lg:px-0={hideTextOnTablet}
  class:md:max-lg:justify-center={hideTextOnTablet}
  aria-label={label}
  {href}
>
  {#if withIcon}
    <span class="icon-container block w-6 h-6" aria-hidden="true">
      <slot name="icon" />
    </span>
  {/if}
  <span class="block" class:md:max-lg:hidden={hideTextOnTablet}>
    <Typography variant="body" disableColorClasses class="text-light">{label}</Typography>
  </span>
</a>

<style lang="postcss">
  a:hover::after,
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

  :global(html.dark) {
    a:hover::after,
    a.active::after {
      border-color: theme('colors.secondary.500');
    }
  }

  .icon-container :global(svg) {
    width: 100%;
    height: 100%;
    color: theme('colors.neutral.50');
  }
</style>
