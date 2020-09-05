exports.getLogin = (req, res, next) => {
    const isLoggedIn = req
    .get('Cookie')
    .split('=')[0] === 'true';

    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.isLoggedIn
    });
    console.log(isLoggedIn)
  };
  
  exports.postLogin = (req, res, next) => {
    res.setHeader('Set-Cookie', 'loggedIn=true');
    res.redirect('/products');
  };
  