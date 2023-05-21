import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from "../config/firebase_config";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

const UserContext  = createContext();

export const FireContextProvider = ({children}) => {

    const [user,setUser] = useState({})
    const [lists,setLists] = useState([])
    const contactCollectionRef = collection(db,'contacts');
 
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const getContacts = async() => {
        try{
            const data = await getDocs(contactCollectionRef)
            const filterData = data.docs.map( (doc) => ({
                ...doc.data(),
                id : doc.id
            }))
            setLists(filterData)
        } catch(err){
            console.log(err.message)
        }
    }

    const createContact = async(name,mail,date) => {
        try{
            await addDoc(contactCollectionRef,{
                name,
                mail,
                date,
                userId : user.uid
            });
            getContacts();
        } catch(err){
            console.log(err.message)
        }
    }

    const delContact = async(id) => {
        try{
            const contactDoc = doc(db,'contacts',id);
            await deleteDoc(contactDoc);
            getContacts();
        } catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        const unscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
        });
        return () => {
            return unscribe()
        }
    },[])

    const data = {signUp,signIn,logOut,getContacts,createContact,delContact,user,lists};

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )

}

export const UserAuth = () => useContext(UserContext); 