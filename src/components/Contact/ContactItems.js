import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const ContactItems = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="yourEmail@email.com"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="8"
              className={styles.formControl}
              placeholder="Please leave us a message here."
            />
          </div>
          <div>
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
