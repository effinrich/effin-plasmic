import { initPlasmicLoader } from '@plasmicapp/loader-nextjs'
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'veLEhZEbNdx4Wx5Pkd8v3H', // ID of a project you are using
      token:
        'oNorAgbkUMADawvj5ytJTqbpMB8iRcnjYUZOa0LHrwq3U17BVin5zHWyi6P9OnArZW9Zc2e9VXCbvkKkCfTYOw' // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true
})
