// src/components/Home.jsx
import React from 'react';
import { Link } from "react-router-dom";


function SignUp() {
  return (
    <div>
      <h1>SignUp page</h1>
      <p>Welcome to the SignUp page.</p>
      <Link to="/SignIn">
      <button>Navigate to login</button>
      </Link>
    </div>
  );
}

export default SignUp;
