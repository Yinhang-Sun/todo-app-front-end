import { Formik, Form, Field, ErrorMessage} from "formik"
import { useEffect, useState } from "react"
import { useParams, useNavigate} from "react-router-dom"
import { retrieveTodoApi, updateTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"

export default function TodoComponent() {
    const {id} = useParams()

    const [description, setDescription] = useState('')

    const [targetDate, setTargetDate] = useState('')

    const authContext = useAuth() 

    const navigate = useNavigate()

    const username = authContext.username

    useEffect(
        () => retrieveTodos(), 
        [id]
    ) 

    function retrieveTodos() {
        retrieveTodoApi(username, id)
        .then(response => {
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
        })
        .catch(error => console.log(error))
    }

    function onSubmit(values) {
        console.log(values)
        const todo = {
            id: id, 
            username: username, 
            description: values.description, 
            targetDate: values.targetDate, 
            done: false
        }
        console.log(todo)

        updateTodoApi(username, id, todo) 
        .then(response => {
            navigate('/todos')
        })
        .catch(error => console.log(error))
    }

    function validate (values) {
        let errors = {
            // description: 'Enter a valid description',
            // targetDate: 'Enter a valid target date'
        }

        if(values.description.length < 5) {
            errors.description = 'Enter at least 5 characters'
        }

        if(values.targetDate == null) {
            errors.targetDate = 'Enter a target date'
        }

        console.log(values)
        return errors
    }

    return (
        <div className="container">
            <h1>Enter Todo Details </h1>
            <div>
                <Formik initialValues={ {description, targetDate} }
                    enableReinitialize = {true}
                    onSubmit = {onSubmit}
                    validate = {validate}
                    validateOnChange = {false} 
                    validateOnBlur = {false} 
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage 
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <lable>Description</lable>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <lable>Target Date</lable>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>


            </div>
        </div>
    ) 
}