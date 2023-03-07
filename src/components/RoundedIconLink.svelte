<script lang="ts">
  import Typography from './Typography.svelte'

  export let label: string
  export let href: string
  let className: string = ''
  export { className as class }
</script>

<a
  {href}
  aria-label={label}
  on:click
  class="inline-flex flex-row gap-6 justify-center items-center rounded-full {className}"
>
  <div
    class="relative rounded-full bg-primary-900 dark:bg-secondary-900 w-12 h-12 flex flex-col justify-center items-center"
  >
    <slot />
  </div>
  <Typography important tag="span">{label}</Typography>
</a>

<style lang="postcss">
  a:hover,
  a.active {
    div::after {
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
  }

  :global(html.dark) {
    a:hover,
    a:active {
      div::after {
        border-color: theme('colors.secondary.500');
      }
    }
  }
</style>
