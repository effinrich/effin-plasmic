import {
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData
} from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '../plasmic-init'

// Statically fetch the data needed to render Plasmic pages or components.
export const getStaticProps = async () => {
  // You can pass in multiple page paths or component names.
  const plasmicData = await PLASMIC.fetchComponentData('/')
  return {
    props: {
      plasmicData
      // ...
    }
  }
}

// Render the page or component from Plasmic.
export default function MyPage({ plasmicData }) {
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component="/" />
    </PlasmicRootProvider>
  )
}
