<script lang="ts">
  export let type: 'button' | 'submit' = 'button'
  export let label: string
</script>

<button
  {type}
  aria-label={label}
  on:click
  class="flex flex-col justify-center items-center rounded-full bg-primary-900 w-12 h-12"
>
  <slot />
</button>
