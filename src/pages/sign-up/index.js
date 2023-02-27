import React, { useState } from 'react';
import FormContainer from '../../components/shared/formContainer';
import InputComponent from '../../components/input';

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
      <FormContainer title="Sign up">
        <div>
            {/* {one div for blocks below} */}
          <div>
            <InputComponent
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="First Name"
              placeholder="First Name"
            />
            <InputComponent
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="Last Name"
              placeholder="Last Name"
            />
          </div>
          <InputComponent
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <InputComponent
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </div>
      </FormContainer>
    );
}

export default SignUp;