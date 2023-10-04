import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore'

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        console.log(formData)
        addDoc(collection(db, 'emails'), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: Timestamp.now(),
        })
        dispatch(closeSendMessage())
    }

    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <IconButton onClick={() => dispatch(closeSendMessage())}><CloseIcon className='sendMail__close' /></IconButton>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' placeholder='To' type="email" {...register("to", { required: true })} />
                {errors.to && <p className='sendMail__error'>To is required</p>}

                <input name='subject' placeholder='Subject' type="text" {...register("subject", { required: true })} />
                {errors.subject && <p className='sendMail__error'>Subject is required</p>}

                <input name='message' placeholder='Message' type="text" className='sendMail__message' {...register("message", { required: true })}
                />
                {errors.message && <p className='sendMail__error'>Message is required</p>}

                <div className="sendMail__options">
                    <Button className='sendMail__send' variant='contained' color='primary' type='submit'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail