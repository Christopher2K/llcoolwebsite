<script lang="ts">
  export let src: string
  export let alt: string
  let className: string = ''
  export { className as class }
</script>

<img class={className} {src} {alt} />
