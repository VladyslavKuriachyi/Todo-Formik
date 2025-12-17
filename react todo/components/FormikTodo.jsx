import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = (values) => {
    const errors = {};

    if (!values.todo) {
        errors.todo = "Required";
    } else if (values.todo.length < 5) {
        errors.todo = "Must be 5 characters or more";
    }

    return errors;
};

export default function FormikTodo({ onAdd }) {
    return (
        <Formik
            initialValues={{ todo: "" }}
            validate={validate}
            onSubmit={(values, { resetForm }) => {
                onAdd(values.todo);
                resetForm();
            }}
        >
            <Form className="form">
                <Field name="todo" placeholder="Task" />
                <ErrorMessage name="todo" />
                <button className= "btn" type="submit">Add</button>
            </Form>
        </Formik>
    );
}
