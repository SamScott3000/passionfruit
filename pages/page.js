import { createClient } from '../prismicio'

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID("blog-post", "page")


  return {
    props: { page },
  }
}

export default function Homepage({ page }) {
  return <div className='h-36 w-36 bg-red-500 text-black'>{page.uid}</div>
}