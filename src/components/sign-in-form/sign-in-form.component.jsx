import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword  
 } from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss';
const defaultFormFields = {
    email: '',
    password: '',
    };

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user);
        } catch (error) {
            switch(error.code) {
                case 'auth/invalid-email':
                    alert("The email address is badly formatted. Please try again.")
                    break;
                case 'auth/user-disabled':
                    alert("The user account has been disabled by an administrator. Please try again.")
                    break;
                case 'auth/user-not-found':
                    alert("No user found with that email. Please try again.")
                    break;
                case 'auth/wrong-password':
                    alert("Wrong password. Please try again.")
                    break;
                default:
                    console.log("error in handleSubmit:", error)
            }
            
        }
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm