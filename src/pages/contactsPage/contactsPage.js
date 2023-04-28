import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { ContactForm } from "components/Form/Form";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchContacts } from "redux/contacts/contatsOperations";

const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    return (
        <>
            <div>
                <h1>Contacts</h1>
            </div>
            <div>
                <section>
                    <h2>Phonebook</h2>
                    <ContactForm/>
                </section>
                <section>
                    <h2>Find contact</h2>
                    <Filter />
                    <ContactList/>
                </section>
            </div>
        </>
    )
}

export default ContactsPage