export default ({ Title, Poster}) =>{
    return (
        <div className="movie">
            <div className="poster"></div>
            <div className="title">{Title}</div>
            <style jsx>{`
                .movie{
                    height: 300px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    margin: 10px;
                }
                .poster{
                    flex: 1;
                    background-image: url(${Poster});
                    background-size: cover;
                    background-color: black;
                }
                .title{
                    text-aling: center;
                    width: 100%;
                    opacity: 0.9;
                    background: black;
                    color: white;
                    font-size: 17px;
                }
            `}</style>
        </div>
    )
}