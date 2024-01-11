const Twitch = () => {
  return (
    <div className="w-full lg:w-1/2 mb-8 lg:flex-row flex-col lg:text-left">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <img className="w-full" src="/twitch_clone.png" alt="Jotion Preview" />
        <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">Twitch Clone</div>
        <p className="text-gray-700 text-base">
           Clone de Twitch permettant de faire des live via LiveKit. Un système de follower est mis en place avec la possibilité de bloquer via l'admisnistration du diffuseur.
           <br />
           Un système chat est développer via des sockets. Le tchat peut être activé ou non, ouvert à tous ou bien réservé aux follower, avec ou sans delay. 
           <br />
           L'authentification est mise en place grace à Clerk.  
        </p>
        <hr className="my-4"/>
        <div className="font-semibold mb-2">Features</div>
        <ul className="pl-6">           
            <li>📡 Streaming utilisant le protocole RTMP / WHIP </li>
            <li>🔗 Connection entre l'application Next.JS et OBS</li>
            <li>🔐 Authentification </li>
            <li>📸 Upload de miniature</li>
            <li>💬 Tchat temp réél avec les sockets </li>
            <li>👥 Système de followers </li>
            <li>🚫 Système de blocage </li>
            <li>🎛️ Dashboard Streamer / Createur  </li>
            <li>📴 Activation / Désactivation du tchat </li>
            <li>🏠 Page d'accueil stream recommandé, tri par live en cours</li>
            <li>📄 SSR (Server-Side Rendering) </li>
            <li>🗃️ MySQL</li>
            <li>...</li>
        </ul>
        <hr className="my-4"/>
        <div className="font-semibold">Liens</div>
            <div className="flex items-center justify-evenly">
                  
            <div className="flex items-center justify-center">
                <img src="/github.svg" className="h-4 w-4"/>
                <a  className="pl-3 hover:text-blue-500" target='_blank' href="https://github.com/LudovicFA/video-twitch">Github</a>
            </div>         
            </div>
        </div>
        <hr className="my-4"/>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NextJS 14</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind CSS</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Prisma</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mysql</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#LiveKit</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Clerk</span>
        </div>
    </div>
  </div>
  )
}

export default Twitch