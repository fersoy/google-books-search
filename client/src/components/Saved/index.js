
<Jumbotron>
    <h1>Books On My List</h1>
</Jumbotron>
{
    this.state.books.length ? (
        <List>
            {this.state.books.map(book => (
                <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                        <strong>
                            {book.title} by {book.author}
                        </strong>
                    </Link>
                </ListItem>
            ))}
        </List>
    ) : (
            <h3>No Results to Display</h3>
        )
}
