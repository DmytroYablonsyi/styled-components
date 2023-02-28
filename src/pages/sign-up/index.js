import React, { useState } from 'react';
import LocalStorageService from '../../services/localSorageService';
import FormContainer from '../../components/shared/formContainer';
import InputComponent from '../../components/input';
import ButtonComponent from '../../components/button'
import { Name } from './styled';
import { Navs } from '../../components/navigation';
import { Main } from './styled';
import CheckBox from '../../components/checkBox';

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSignUp = () =>{
      // validation
      const service = new LocalStorageService()
      const userData = {firstName, lastName, email, password}
      service.setUser(userData)
    }
    
    return (
      <FormContainer title="Sign up">
        <Main>
            {/* {one div for blocks below} */}
          <Name>
            <InputComponent
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="First Name"
              placeholder="First Name*"
            />
            <InputComponent
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="Last Name"
              placeholder="Last Name*"
            />
          </Name>
          <InputComponent
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email*"
          />
          <InputComponent
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password*"
          />
          <CheckBox text={"I want to receive inspiration, marketing, promotions, and updates via e-mail"}/>
          <ButtonComponent onSubmit={onSignUp} text={"Sign up"}/>
        <Navs 
              link={'/sign-in'}
              text={"Already have an account? Sign in"}
                />
        </Main>
      </FormContainer>
    );
}

export default SignUp;