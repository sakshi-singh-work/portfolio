import React, { useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "emailjs-com";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Toast } from "../components/Toast/Toast";
import Lottie from "lottie-react";
import ContactImg from "../json/Contact.json";
import { WhatsAppButton } from "../components/Whatsapp/WhatsappButton";

interface ContactFormProps {
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  contact: string;
}

const Contact = ({ onSubmit }: ContactFormProps) => {
  const [formErrors, setFormErrors] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    contact: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formVisible, setFormVisible] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateForm(name, value),
    }));
  };

  const validateForm = (name: string, value: string) => {
    if (name === "name" && value.trim() === "") {
      return "Please enter your name!";
    }
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return "Please enter alphabets only!";
    }
    if (name === "email" && value.trim() === "") {
      return "Please enter your email!";
    }

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      return "Please enter a valid email!";
    }

    if (name === "message" && value.trim() === "") {
      return "Please enter a message!";
    }

    return "";
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_hil3nzk",
        "template_lwa14ab",
        document.getElementById("contact-form") as HTMLFormElement,
        "pEYSUItZye8jiX-5i"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setFormData({
            name: "",
            email: "",
            message: "",
            contact: "",
          });
          setFormVisible(true);
          setTimeout(() => {
            setFormVisible(false);
          }, 3000);

          console.log("Email sent successfully!", result.text);
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Error sending email:", error.text);
        }
      );

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleBtnDisable = () => {
    return (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    );
  };

  return (
    <>
      {formVisible ? (
        <Toast />
      ) : (
        <>
          <div className={styles.contactContainer}>
            <div className={styles.contactImage}>
              <Lottie animationData={ContactImg} />
            </div>

            <div className={styles.formLayout}>
              {formVisible ? (
                <Toast />
              ) : (
                <div className={styles.formContainer}>
                  <form className={styles.formData} id="contact-form">
                    <label>
                      What is Your Name<span>*</span>:
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {formErrors.name && (
                        <div className={styles.error}>{formErrors.name}</div>
                      )}
                    </label>
                    <label>
                      Your Email Address<span>*</span>:
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <div className={styles.error}>{formErrors.email}</div>
                      )}
                    </label>
                    <label>
                      Your Contact No:
                      <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      {formErrors.contact && (
                        <div className={styles.error}>{formErrors.contact}</div>
                      )}
                    </label>
                    <label>
                      How can I Help you?<span>*</span>:
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={2000}
                      />
                      {formErrors.message && (
                        <div className={styles.error}>{formErrors.message}</div>
                      )}
                    </label>

                    <button
                      className={
                        handleBtnDisable()
                          ? styles.buttonFormDisable
                          : styles.buttonForm
                      }
                      type="button"
                      onClick={handleButtonClick}
                      disabled={handleBtnDisable()}
                    >
                      Send
                    </button>
                    <WhatsAppButton />
                    <SocialMedia />
                  </form>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
