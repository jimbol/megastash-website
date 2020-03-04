// SET UP AUTH
// Import the Authenticator React component
import React, { useState } from 'react';
import { Authenticator } from 'mega-stash/auth';

const App = () => {
  const [authState, setAuthState] = useState();

  return (
    <Authenticator
      onChangeAuthState={setAuthState}
    >
      {(authState === 'SIGNED_IN') ? (<Main />) : null}
    </Authenticator>
  );
};

// Getting user info
import { getUser } from 'mega-stash/auth';

const user = getUser();

// test it
expect(user).toEqual({
  id: 'USER_ID',
  email: 'www@www.www',
  username: 'wwwuser',
  // and other user data...
});

// API
// When you are authenticated you can use API to handle your requests
// API requests are promise-based
import { API } from 'mega-stash/api';

async function () {
  const results = await API.get(`/article/${article_id}`);

  expect(results).toEqual({
    data: {
      articles: [{
        id: article_id,
        // and other article data
      }]
    },
  });
}


// get, put, post, and delete based on permissions you set up
const results = API.post({
  endpoint: `/article`,
  body: {
    name: '10 Ways To Eat a Pineapple',
    articleText: '...'
  },
  // headers: { ... }
});
