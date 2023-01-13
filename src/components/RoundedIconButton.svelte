<script lang="ts">
  export let type: 'button' | 'submit' = 'button'
  export let label: string
  export let id: string | undefined = undefined
  let className: string = ''
  export { className as class }
</script>

<button
  {type}
  {id}
  aria-label={label}
  on:click
  class="flex flex-col justify-center items-center rounded-full bg-primary-900 dark:bg-secondary-900 w-12 h-12 {className}"
>
  <slot />
</button>
