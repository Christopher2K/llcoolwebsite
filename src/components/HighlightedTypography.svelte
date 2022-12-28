<span class="inline">
  <slot />
</span>

<style>
  span {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      theme('colors.secondary.50') 60%
    );
  }

  :global(html.dark) span {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      theme('colors.primary.900') 60%
    );
  }
</style>
