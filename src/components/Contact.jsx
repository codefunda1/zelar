import { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Banner from '../components/Banner';

const JobsSection = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Contact = () => {
  const form = useRef();
  const notifysuccess = () => toast.success('Send Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const notifyfailed = () => toast.error('Failed ! Try Again', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v57pmhm",
        "template_x8ohszs",
        form.current,
        "hCPhvgNyx-KPRr94x"
      )
      .then(
        (result) => {
          notifysuccess()
        },
        (error) => {
          notifyfailed()
        }
      );
      e.target.reset()
  };

  return (
    <>
      {/* <Banner title='Jobs' /> */}
      <JobsSection>
        <div class="container border mt-3">
          <div class="row">
            <div class="col-md-6 p-5" style={{ backgroundColor: "#eaeaea" }}>
              <h1>Join Us</h1>
              <h4>Keep In Touch.</h4>
            </div>
            <div class="col-md-6 border-left py-3">
              <h1>Contact form</h1>
              <form ref={form} onSubmit={sendEmail}>
                <div class="form-group m-2">
                  <h5 for="name">Name</h5>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Enter name"
                    required
                  />
                </div>

                <div class="form-group m-2">
                  <h5 for="email">Email</h5>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="user_email"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div class="form-group m-2">
                  <h5 for="number">Number</h5>
                  <input
                    type="number"
                    class="form-control"
                    id="number"
                    name="user_number"
                    placeholder="Enter Your Number"
                    required
                  />
                </div>

                <div class="form-group m-2">
                  <h5 for="message">Message</h5>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    name="message"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-primary m-4">
                  Submit
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </JobsSection>
    </>
  );
};

export default Contact;
