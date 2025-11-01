import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'

export type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=> void// need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
    if (name.length === 0) {
        setError('Please enter name')
        return
    }
    addUserCallback(name)
    setName("")
    setError(null)

}

export const pureOnBlur = (name: any, setError: any ) => {
    if (name.length === 0) {
        setError('Please enter name')
    }// если имя пустое - показать ошибку




}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (name: string) => void, ) => {



    if (e.key === "Enter" ) {
        addUser(e.currentTarget.value)


    }
        // addUser(e.currentTarget.value)
        // console.log("asdasdewrwerwer")

    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

///sdfsdfsdf
// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов

    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null >(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError(null)
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)

    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length - 1].name : ""// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
