import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const ContactItems = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form 
         action="https://formspree.io/mvorwnwo"
         method="POST"
        className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="First Name"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Last Name"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="yourEmail@email.com"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <textarea
              name="message"
              id="message"
              rows="8"
              className={styles.formControl}
              placeholder="Please leave us a message here."
              required
            />
          </div>
          <div className={styles.submitContainer}>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
export default ContactItems
