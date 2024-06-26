import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Loans from './pages/Loans';
import LoginForm from './components/LoginForm';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const App = () => (
    <Router>
      <AppBar position="static" style={{ backgroundColor: '#880e4f' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Library
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/books">
            Books
          </Button>
          <Button color="inherit" component={Link} to="/loans">
            Loans
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
);

export default App;
