import React from 'react'

const Jotion = () => {
  return (
    <div className="w-full lg:w-1/2 mb-8 lg:flex-row flex-col lg:text-left">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img className="w-full" src="/jotion.png" alt="Jotion Preview" />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">Jotion (Notion clone)</div>
                <p className="text-gray-700 text-base">
                    Jotion est un clone de notion développé en NextJS 14  avec la possibilité d'avoir plusieurs sous-page, des images de couvertures, attribuer un icone à la page.
                    <br/>
                    Un système d'inscription et d'authentification Github à été mis en place. 
                </p>
                <hr className="my-4"/>
                <div className="font-semibold mb-2">Features</div>
                <ul className="pl-6">
                    <li>Real-time database  🔗</li>
                    <li>Notion-style editor 📝</li>
                    <li>Light and Dark mode 🌓</li>
                    <li>Infinite children documents 🌲</li>
                    <li>Trash can & soft delete 🗑️</li>
                    <li>Authentication 🔐 </li>
                    <li>File upload</li>
                    <li>...</li>
                </ul>
                <hr className="my-4"/>
                <div className="font-semibold">Liens</div>
                    <div className="flex items-center justify-evenly">
                        <div className="flex items-center justify-center">
                            <img src="/link.svg" className="h-4 w-4"/>
                            <a className="pl-3 hover:text-blue-500" href="https://lfa-note-app.vercel.app/">Demo</a>
                        </div>         
                        <div className="flex items-center justify-center">
                            <img src="/github.svg" className="h-4 w-4"/>
                            <a  className="pl-3 hover:text-blue-500" href="https://github.com/LudovicFA/notion-clone">Github</a>
                        </div>         
                    </div>
            </div>
            <hr className="my-4"/>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NextJS 14</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind CSS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Convex</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Clerk</span>
            </div>
        </div>
    </div>
  )
}

export default Jotion