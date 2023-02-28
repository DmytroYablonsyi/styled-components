import React,{useEffect, useState} from 'react';
import LocalStorageService from '../../services/localSorageService';
import FormContainer from '../../components/shared/formContainer';
import InputComponent from '../../components/input';
import ButtonComponent from '../../components/button';
import { Navs } from '../../components/navigation';
import { Main } from './styled';
import CheckBox from '../../components/checkBox';

const SignIn = () => {
    const storage = new LocalStorageService();
    const rememberMe = storage.getRememberMe()
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rememberMeState, setRememberMeState] = useState(false)

    useEffect(() => {
        const user = storage.getUser()
        if(rememberMeState && user){
            setPassword(user.password);
            setEmail(user.email)
        }
    },[rememberMeState])

    useEffect(() => {
        setRememberMeState(storage.getRememberMe())
    },[])

    const onRememberMeChange = (e) => {
        storage.setRememberMe(!rememberMeState)
        setRememberMeState(!rememberMeState)
    }

    return (
        <FormContainer  title="Sign in">
            <Main>
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
                <CheckBox value={rememberMeState} handler={onRememberMeChange} text={"Remember me"}/>
                <ButtonComponent text={"Sign In"}/>
                <Navs 
                    link={'/'}
                    text={"Don't have an account? Sign Up"}
                />
            </Main>
        </FormContainer>
    )
}

export default SignIn;