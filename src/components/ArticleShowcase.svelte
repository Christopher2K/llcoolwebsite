<script lang="ts">
  import Button from './Button.svelte'
  import Typography from './Typography.svelte'
</script>

<article class="bg-neutral-50 p-4 rounded-xl">
  <div class="flex flex-col justify-start items-start gap-1 mb-6">
    <Typography tag="h2" variant="subheading1"
      >Some catchy title about this article</Typography
    >
    <Typography tag="p" class="text-neutral-700">November 4th, 2022</Typography>
  </div>

  <img class="rounded-lg mb-6" src="https://picsum.photos/1080/1920" alt="Test" />

  <Typography class="mb-10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
    dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
    sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
    velit, sit amet feugiat lectus.
  </Typography>

  <Button label="Read the full article" fullWidth />
</article>
