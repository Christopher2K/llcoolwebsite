<script lang="ts">
  import Button from './Button.svelte'
  import Typography from './Typography.svelte'
</script>

<article
  class="bg-neutral-50 p-4 rounded-xl md:flex md:flex-row md:justify-start md:items-start md:gap-6"
>
  <img
    class="rounded-lg hidden md:block max-w-[40%] flex-shrink-0"
    src="https://picsum.photos/1080/1920"
    alt="Test"
  />

  <div class="md:flex-1">
    <div class="flex flex-col justify-start items-start gap-1 mb-6">
      <Typography tag="h2" disableColorClasses variant="subheading1" class="text-dark"
        >Some catchy title about this article</Typography
      >
      <Typography tag="p" disableColorClasses class="text-neutral-700"
        >November 4th, 2022</Typography
      >
    </div>

    <img
      class="rounded-lg mb-6 md:hidden"
      src="https://picsum.photos/1080/1920"
      alt="Test"
    />

    <Typography disableColorClasses class="mb-10 text-dark">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
      dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
      sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
      velit, sit amet feugiat lectus.
    </Typography>

    <Button label="Read the full article" fullWidth class="md:w-fit" />
  </div>
</article>
