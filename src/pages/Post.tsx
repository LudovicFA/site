import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useI18nMode } from '../context/I18nModeContext';
import { posts } from '../data/blog.index';
import { BlogIndex } from '../types/BlogIndex';

const Post = () => {
  const { slug } = useParams();
  const {lang} = useI18nMode()
  const [content, setContent] = useState('');
  const post = posts.find((item:BlogIndex) => item.slug === slug);

  useEffect(() => {
    const file = (lang === 'FR') ? post?.file_fr : post?.file_en;

    if (file) {
      fetch(`/blog/${file}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [post,lang]);



  return (
    <section className='max-container'>
      {post && (
        <>
          <h1 className='head-text'>{lang === 'FR' ? post?.title_fr : post?.title_en}</h1>
          <div className=" pt-4">
            {
                post.tags.map((tag, index) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" key={index}>#{tag}</span>

                ))
            }
          </div>
          <div className='markdown-container mt-6 mb-12' key={lang === 'FR' ? post?.title_fr : post?.title_en}>
            <Markdown
              children={content}
              components={{
                code(props) {
                  const {children, className, ...rest} = props
                  const match = /language-(\w+)/.exec(className || '')

                  return match ? (

                    <SyntaxHighlighter
                      PreTag="div"
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      style={a11yDark}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
                }
              }}
            />
          </div>
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
            <p><span className="font-bold">Author : </span>{post.author}</p>
            <p><span className="font-bold">Update : </span>{post.date}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Post;
