import React from 'react'
import Head from 'next/head'
import Base from '../layouts/base'
import Axios from 'axios'
import Link from 'next/link'
import Movie from '../components/movie'
const Home = (props) => {

    const renderPagination = () => {
        const beforePag = props.pagina > 1 ? <Link href={`/?pagina=${props.pagina - 1}`}><a>Anterior</a></Link> : null;
        return(
            <div className="control">
                {beforePag}
                <Link href={`/?pagina=${props.pagina + 1}`}><a>Siguiente</a></Link>
                <style jsx>{`
                    .control{
                        text-align: center;
                    }
                    .control a {
                        padding: 0 10px;
                    }
                `}</style>
            </div>
    )}


    return(
        <Base>
            <Head>
                <title>App Movie</title>
            </Head>
            <div>
                <div className="movies">
                    {props.movies.map((p, index)=><Movie key={index} {...p}/>)}
                    <style jsx>{`
                        .movies {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                        }
                    `}</style>
                </div>
                
                {renderPagination()}
            </div>
        </Base>
    )
}

Home.getInitialProps = async (ctx) => {
    console.log(ctx)
    const pagina = ctx.query.pagina ? Number(ctx.query.pagina) : 1;
    const resp = await Axios.get(`https://www.omdbapi.com/?apiKey=8787721f&s=batman&page=${pagina}`)
    const movies = resp.data.Search
    return {
        movies,
        pagina
    }
}

export default Home;