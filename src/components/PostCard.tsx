import { useI18nMode } from '../context/I18nModeContext'
import { BlogIndex } from '../types/BlogIndex'

type PostCardProps = {
    post: BlogIndex
}

const PostCard = ({post}: PostCardProps) => {

  const {lang} = useI18nMode()


  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg scale-100 hover:scale-105 ease-in duration-100">
      <img className="w-full" src={`/blog/images/${post.image}`} alt={lang === 'FR' ? post.title_fr : post.title_en} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{lang ==='FR' ? post.title_fr : post.title_en}</div>
        <p className="text-gray-700 text-base">
            {lang == 'FR' ? post.subtitle_fr : post.subtitle_en}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {
            post.tags.map((tag, index) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>#{tag}</span>

            ))
        }
      </div>
    </div>
  )
}

export default PostCard