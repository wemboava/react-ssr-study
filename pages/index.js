import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

const Home = ({ repositories }) => {
    return (
        <div>
            <Link href='sobre'>Sobre</ Link>
            {
                repositories.map(repo => 
                    <h3 key={repo.id}>{ repo.name }</h3>
                )
            }
        </div>
    )
}

Home.getInitialProps = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat/repos')
        , repositories = await response.json()

    return { repositories }
}

export default Home