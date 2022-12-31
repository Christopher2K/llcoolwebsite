<script lang="ts">
  let className: string
  export { className as class }
</script>

<div
  class="w-full flex flex-col justify-start items-start sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 {className}"
>
  <slot />
</div>
