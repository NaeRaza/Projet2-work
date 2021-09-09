import React from 'react'
import './home.css'
import * as AiIcon from 'react-icons/ai'

function Home() {
    return (
        <div className="home">
            <main className="container">
                <h1>L'art de défendre</h1>
                <p>Système de sécurité professionnel qui laisse les problèmes dans les coulisses</p>
                <button className="btn"> <AiIcon.AiOutlineCaretRight className="btn-img"/>  Regarder le film</button>
            </main>
        </div>
    )
}

export default Home
