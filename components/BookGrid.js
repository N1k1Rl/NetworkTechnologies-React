import React from 'react';
import Grid from '@mui/material/Grid';
import Book from './Book';
import Typography from '@mui/material/Typography';
import './BookGrid.css';

const books = [
    {
        id: 1,
        title: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        yearPublished: 2017,
        availableCopies: 2,
    },
    {
        id: 2,
        title: "Hunger Games",
        author: ' Suzanne Collins',
        yearPublished: 2012,
        availableCopies: 10,
    },
    {
        id: 3,
        title: 'The Seven Deaths of Evelyn Hardcastle',
        author: 'Stuart Turton',
        yearPublished: 2018,
        availableCopies: 1,
    },
    {
        id: 4,
        title: 'Dune',
        author: 'Frank Herbert',
        yearPublished: 1965,
        availableCopies: 0,
    },
];

const BookGrid = () => {
    return (
        <div>
            <div className="list-of-books-text">
                <Typography variant="h5">List of books</Typography>
            </div>
            <Grid container spacing={2}>
                {books.map((book) => (
                    <Grid item key={book.id} xs={2} sm={2} md={2}>
                        <div className="book-container">
                            <Book
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                yearPublished={book.yearPublished}
                                photo={book.photo}
                                availableCopies={book.availableCopies}
                            />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default BookGrid;
