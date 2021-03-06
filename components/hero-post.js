import Avatar from '../components/avatar'
import Link from 'next/link'
import { ChunkFieldValue, Chunk } from 'editmode-react'
import cn from 'classnames'

export default function HeroPost({slug, coverImage, title, date, excerpt, authorAvatar, authorName}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage}
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            {date}
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={authorName} picture={authorAvatar} />
        </div>
      </div>
    </section>
  )
}
