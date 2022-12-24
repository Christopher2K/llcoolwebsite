<script lang="ts">
  import { Twitch, Twitter, Github, Linkedin } from 'lucide-svelte'

  const SOCIALS = [
    { name: 'Twitch', href: 'https://twitch.tv/LLCoolChris_', component: Twitch },
    { name: 'Twitter', href: 'https://twitter.com/LLCoolChris_', component: Twitter },
    { name: 'Github', href: 'https://github.com/Christopher2k', component: Github },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/christopherkatoyi/',
      component: Linkedin,
    },
  ]
</script>

<section>
  <ul class="flex flex-row justify-start items-center gap-4">
    {#each SOCIALS as social}
      <li>
        <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}>
          <svelte:component this={social.component} class="h-6 w-6" aria-hidden="true" />
        </a>
      </li>
    {/each}
  </ul>
</section>
