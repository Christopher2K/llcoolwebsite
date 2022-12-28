<script lang="ts">
  export let type: 'button' | 'submit' = 'button'
  export let label: string
  let className: string = ''
  export { className as class }
</script>

<button
  {type}
  aria-label={label}
  on:click
  class="flex flex-col justify-center items-center rounded-full bg-primary-900 dark:bg-secondary-900 w-12 h-12 {className}"
>
  <slot />
</button>
