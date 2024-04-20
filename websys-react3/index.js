//alert("Hi")

const MyName = function(props)
{
    return(
        <div>
            <h1>{props.fullName}</h1>
        </div>
    )
}

const MyBooks = function(props)
{
    return(
        <div>
            <h1>{props.books}</h1>
            <h2>{props.biology}</h2>
            <img src = "https://books.google.com/books/about/The_Selfish_Gene.html?id=EJeHTt8hW7UC&source=kp_cover" class = "card">{props.image}</img>
            <p>{props.title}</p>
            <i>{props.author}</i>
            <p>{props.date}</p>
        </div>
    )
}

reactDOM.render(
    <>
    <MyName fullName="Jexter Reigner Datu"/>
    <MyBooks books="Biology Books"/>
    <MyBooks biology="The Selfish Gene"/>
    <MyBooks image = "" />
    <MyBooks title="The Selfish Gene: 40th Anniversary Edition"/>
    <MyBooks author="Richard Dawkins"/>
    <MyBooks date="2016"/>
    </>,

    document.getElementById('root')
)
