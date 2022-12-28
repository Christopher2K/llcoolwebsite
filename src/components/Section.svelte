<script lang="ts">
  import Typography from './Typography.svelte'
  import HighlightedTypography from './HighlightedTypography.svelte'

  export let title: string
</script>

<section class="mb-28">
  <Typography variant="heading1" tag="h2" class="mb-10">
    <HighlightedTypography>{title}</HighlightedTypography>
  </Typography>
  <slot />
</section>
