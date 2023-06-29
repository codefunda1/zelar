import React, { Component } from "react";
import "./global.css";
import PDF from "./PDF";
import Signature from "./Signature";

class Jobs extends Component {
  state = {
    // general-data
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    dob: "",
    address_general_data: "",
    postcode: "",
    ntk_name: "",
    ntk_number: "",
    ntk_relation: "",
    preferred_work_location: "",

    // eligible-to-work
    eligible_to_work_1: "",
    eligible_to_work_2: "",

    // Health-issues-disabilities
    Health_issues_disabilities: "",
    Health_issues_disabilities_1: "",
    Health_issues_disabilities_2: "",

    // criminal-conviction
    criminal_conviction_1: "",
    criminal_conviction_2: "",
    criminal_conviction_text: "",
    // references
    references_name: "",
    references_position: "",
    references_fromdate: "",
    references_todate: "",
    references_duties: "",
    references_contact_name: "",
    references_contact_number: "",
    references_mail: "",

    // social-media-policy
    // DSP
    // accurate-1
    // drug-alcohol-policy
    // DVLA
    // nondiscloser
    // stop-search
    // medical-fitness
    medical_fitness: "",
    // code-of-conduct-policy
    // Disclaimer

    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  submitPost = (e) => {
    if (!this.state.email) {
      alert("email field is required");
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };
  render() {
    return (
      <>
        {!this.state.postSubmitted ? (
          <div>
            <hr className="mb-5" />
            <h1 className="pt-5 text-center">Application form</h1>

            {/* general-data */}
            <div className="container">
              <div className="general-data">
                <h2>General Data</h2>
                <div className="row">
                  <div className="col-5">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        First name
                      </span>
                      <input
                        onChange={this.onChange("firstname")}
                        type="text"
                        class="form-control"
                        placeholder="Enter First Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Last Name
                      </span>
                      <input
                        onChange={this.onChange("lastname")}
                        type="text"
                        class="form-control"
                        placeholder="Enter Last Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Email ID
                      </span>
                      <input
                        onChange={this.onChange("email")}
                        type="email"
                        class="form-control"
                        placeholder="Enter Email ID"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Phone Number
                      </span>
                      <input
                        type="number"
                        onChange={this.onChange("phone_number")}
                        class="form-control"
                        placeholder="Enter Phone Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Date Of Birth
                      </span>
                      <input
                        type="date"
                        onChange={this.onChange("dob")}
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Address
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("address_general_data")}
                        class="form-control"
                        placeholder="Enter Your Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Post Code
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("postcode")}
                        class="form-control"
                        placeholder="Enter Post Code"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Next To Kin Name
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("ntk_name")}
                        class="form-control"
                        placeholder="Enter Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Next To Kin Number
                      </span>
                      <input
                        type="number"
                        onChange={this.onChange("ntk_number")}
                        class="form-control"
                        placeholder="Enter Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Relationship
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("ntk_relation")}
                        class="form-control"
                        placeholder="Enter Relationship"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        preferred work location
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("preferred_work_location")}
                        class="form-control"
                        placeholder="Enter preferred work location"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      Zelar Groups is Committed to a policy of Equal
                      Opportunities for all work seekers and shall always adhere
                      to such a policy and will review on an on-going basis all
                      aspects of Recruitment to avoid unlawful or undesirable
                      discrimination. We will treat everyone equally
                      irrespective of sex, race, colour, race, nationality,
                      ethnic or national origin, religion or belief, political
                      beliefs or members or non-members or a trade union and we
                      place an obligation upon all staff to respect and act in
                      accordance with the policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* eligible-to-work */}
            <div className="container">
              <div className="eligible-to-work">
                <h2>Eligible to work</h2>
                <div className="row">
                  <div className="col-5">
                    <h5 for="eligible-to-work">
                      Do you have immigration permission to work in UK ?
                    </h5>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("eligible_to_work_1")}
                        type="radio"
                        name="eligible-to-work-1"
                        id="eligible-to-work-1"
                        value="yes"
                      />
                      <label class="form-check-label" for="eligible-to-work-1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("eligible_to_work_1")}
                        value="no"
                        type="radio"
                        name="eligible-to-work-1"
                        id="eligible-to-work-2"
                      />
                      <label class="form-check-label" for="eligible-to-work-2">
                        No
                      </label>
                    </div>
                    <h5 for="eligible-to-work">
                      If you are a member of the EU and need to apply for EU
                      Settlement has this been done?
                    </h5>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("eligible_to_work_2")}
                        type="radio"
                        name="eligible-to-work-2"
                        id="eligible-to-work-1"
                        value="yes"
                        checked
                      />
                      <label class="form-check-label" for="eligible-to-work-1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("eligible_to_work_2")}
                        type="radio"
                        value="no"
                        name="eligible-to-work-2"
                        id="eligible-to-work-2"
                      />
                      <label class="form-check-label" for="eligible-to-work-2">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      In line with UKBA guidance on the prevention of illegal
                      working we will need to verify and take a copy of original
                      ID Documentation as evidence of your right to work in the
                      UK if you are to be engaged by Zelar Groups Ltd for
                      temporary work. The following questions on health and
                      disability are asked in order to find out your needs in
                      terms of reasonable adjustments to access our recruitment
                      service and to find out your needs in order to perform the
                      job or sought.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* Health-issues-disabilities */}
            <div className="container">
              <div className="Health-issues-disabilities">
                <h2>Health issues & Disabilities</h2>
                <div className="row">
                  <div className="col-5">
                    <h5 for="Health-issues-disabilities">
                      Do you have any health issues or a relevant Disability
                      which may make it difficult for you to carry out functions
                      which are essential for the role you seek?
                    </h5>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("Health_issues_disabilities")}
                        type="radio"
                        name="Health-issues-disabilities"
                        id="Health-issues-disabilities-1"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="Health-issues-disabilities-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("Health_issues_disabilities")}
                        type="radio"
                        name="Health-issues-disabilities"
                        id="Health-issues-disabilities-2"
                      />
                      <label
                        class="form-check-label"
                        for="Health-issues-disabilities-2"
                      >
                        No
                      </label>
                    </div>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        onChange={this.onChange("Health_issues_disabilities_1")}
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea">
                        If yes, please provide details below.
                      </label>
                    </div>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        onChange={this.onChange("Health_issues_disabilities_2")}
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea">
                        If any adjustments are required, please provide details
                        below.
                      </label>
                    </div>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      If you have a disability, what are your needs in terms of
                      reasonable adjustments to access this recruitment service
                      and to attend interviews, or aptitude tests
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* criminal-conviction */}
            <div className="container">
              <div className="criminal-conviction">
                <h2>Criminal Conviction</h2>
                <div className="row">
                  <div className="col-5">
                    <h5 for="criminal-conviction">
                      Do you have any unspent criminal convictions?
                    </h5>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("criminal_conviction_1")}
                        type="radio"
                        name="criminal-conviction"
                        id="criminal-conviction1"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("criminal_conviction_1")}
                        type="radio"
                        name="criminal-conviction"
                        id="criminal-conviction2"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        No
                      </label>
                    </div>
                    <p>
                      If you consent to provide the information requested,
                      please give it below. I give consent / I do not give
                      consent
                    </p>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("criminal_conviction_2")}
                        type="radio"
                        name="criminal-conviction-consent"
                        id="criminal-conviction-consent1"
                        checked
                      />
                      <label
                        class="form-check-label"
                        for="criminal-conviction-consent1"
                      >
                        Yes, I give consent
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("criminal_conviction_2")}
                        type="radio"
                        name="criminal-conviction-consent"
                        id="criminal-conviction-consent2"
                      />
                      <label
                        class="form-check-label"
                        for="criminal-conviction-consent2"
                      >
                        No, I do not give consent
                      </label>
                    </div>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        onChange={this.onChange("criminal_conviction_text")}
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea">
                        If yes, please provide details below.
                      </label>
                    </div>
                    <p>Please complete this section to show your consent</p>

                    <Signature />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      Certain types of employment and professions are exempt
                      from the rehabilitation of offenders Act 1974 and in those
                      cases particularly where the employment is sought in
                      relation to positions involving working with Children or
                      vulnerable adults, details for all criminal convictions
                      must be given. The information given will be treated in
                      the strictest of confidence and only taken into account,
                      where, in the reasonable opinion of Zelar Groups Ltd the
                      offence is relevant to the post to which you are applying.
                      During this application process we will be asking for your
                      authorisation to request a Scottish disclosure criminal
                      background check will give details of any unspent
                      convictions and should these come to light at a later
                      date, we may be required to exclude you from taking
                      further part in the process.
                    </p>
                    <h5>GDPR Consent Form </h5>
                    <p>
                      This form asks for your consent to allow us to use your
                      personal data for the reasons stated below. You should
                      only sign it if you want to give us your consent.
                    </p>
                    <h5>Who are we? </h5>
                    <p>
                      The name of the organization asking you for consent to use
                      your information is: Zelar Groups Ltd, client of{" "}
                      <mark>AMZLand Accurate background check.</mark>
                    </p>
                    <h5>
                      We would like to use the following information about you:{" "}
                    </h5>
                    <ul>
                      <li>Passport/National ID </li>
                      <li>National Insurance Number</li>
                      <li>Driving License </li>
                      <li>Proof of Address </li>
                    </ul>
                    <h5>Why would we like to use your information? </h5>
                    <p>
                      To apply for Background check trough{" "}
                      <mark>“Accurate”</mark>
                    </p>
                    <h5>What will we do with your information?</h5>
                    <p>
                      Keep it on our safe data base for 7 years and one day with
                      no access
                    </p>
                    <h5>How to withdraw your consent ?</h5>
                    <p>
                      You can withdraw the consent you are giving on this form
                      at any time. You can do this by emailing{" "}
                      <mark>issues@zelargroup.co.uk.</mark>
                      Please provide the following information:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* references */}
            <div className="container">
              <div className="references">
                <h2>References</h2>
                <div className="row">
                  <div className="col-5">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Name of the company
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("references_name")}
                        class="form-control"
                        placeholder="Enter Company Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Position Held
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("references_position")}
                        class="form-control"
                        placeholder="Enter Position"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        From Date
                      </span>
                      <input
                        type="date"
                        onChange={this.onChange("references_fromdate")}
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        To Date
                      </span>
                      <input
                        type="date"
                        onChange={this.onChange("references_todate")}
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Duties
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("references_duties")}
                        class="form-control"
                        placeholder="Enter Duties"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Contact Name
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("references_contact_name")}
                        class="form-control"
                        placeholder="Enter Name   "
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Contact Number
                      </span>
                      <input
                        type="number"
                        onChange={this.onChange("references_contact_number")}
                        class="form-control"
                        placeholder="Enter Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Contact Email ID
                      </span>
                      <input
                        type="text"
                        onChange={this.onChange("references_mail")}
                        class="form-control"
                        placeholder="Enter Email ID"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      Please provide details below of your most recent
                      employment so that we can obtain a reference on your
                      behalf. Please ensure the information is as accurate as
                      possible so there is no delay to your referencing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* social-media-policy */}
            <div className="container">
              <div className="social-media-policy">
                <h2>Social Media Policy</h2>
                <div className="row">
                  <div className="col-5">
                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      Please note that photographs and video footage may be
                      taken whilst you are providing services for us. These will
                      be used by Zelar Group for marketing and publicity in our
                      publications, on our website and in social media channels.
                      Please contact the recruitment team via email at{" "}
                      <mark>recruitment@zelargroup.co.uk</mark> if you have any
                      concerns or if you wish to be exempted from this activity
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* DSP */}
            <div className="container">
              <div className="DSP">
                <h2>DSP</h2>
                <div className="row">
                  <div className="col-5">
                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <h5>Already Onboarded with Another DSP</h5>
                    <p>
                      If you have worked with another supplier for Amazon and
                      still have an active account with them, you need to
                      request to be offboarded by them. Please request this as
                      soon as you can to speed up the recruitment process
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* accurate-1 */}
            <div className="container">
              <div className="accurate-1">
                <div className="row">
                  <div className="col-5">
                    <h2>
                      Accurate Background Basic Disclosure Check Criminal Record
                      Disclosure Form{" "}
                    </h2>
                    <h3>personal details</h3>
                    <div class="input-group mb-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Title</option>
                        <option value="1">Mr</option>
                        <option value="2">Mrs</option>
                        <option value="3">Miss</option>
                      </select>
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Surname
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Surname Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Forename(s)
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Forename"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Mother’s First Name at Birth
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Mother’s Surname at Birth
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Maiden/ Family Name if married
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Other Name If Applicable
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <h5 for="accurate-1">Gender</h5>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="accurate-1"
                        id="accurate-male"
                      />
                      <label class="form-check-label" for="accurate-male">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="accurate-1"
                        id="accurate-female"
                      />
                      <label class="form-check-label" for="accurate-female">
                        Female
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="accurate-1"
                        id="accurate-other"
                      />
                      <label class="form-check-label" for="accurate-other">
                        Other
                      </label>
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Date Of Birth
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Town of Birth
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Town Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        City of Birth
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter City Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Nationality
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Nationality"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <h3>Identification Numbers (Copy Of ID Required)</h3>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Passport Number
                      </span>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Passport Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Date of issue
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country of Issue
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Country Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        National Insurance Number
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter NI Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Driving Licence Number
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Driving Licence Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country of Issue
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Country Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <h3>
                      Address History (Please provide 7 years history) even if
                      this was outside the UK
                    </h3>
                    <h5>Current Address</h5>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Date Moved In
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Number and Street
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Town / City
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country / District
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Post Code
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* End of Current address */}

                    {/* previous address 1*/}
                    <h5>Previous Address 1</h5>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        In Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <span class="input-group-text" id="basic-addon1">
                        Out Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Number and Street
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Town / City
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country / District
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Post Code
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* End previous address 1*/}

                    {/* previous address 2*/}
                    <h5>Previous Address 2</h5>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        In Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <span class="input-group-text" id="basic-addon1">
                        Out Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Number and Street
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Town / City
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country / District
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Post Code
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* End previous address 2*/}

                    {/* previous address 3*/}
                    <h5>Previous Address 3</h5>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        In Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <span class="input-group-text" id="basic-addon1">
                        Out Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Number and Street
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Town / City
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country / District
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Post Code
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* End previous address 3*/}

                    {/* previous address 4*/}
                    <h5>Previous Address 4</h5>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        In Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <span class="input-group-text" id="basic-addon1">
                        Out Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Number and Street
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Town / City
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country / District
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Post Code
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* End previous address 4*/}

                    {/* previous address 5*/}
                    <h5>Previous Address 5</h5>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        DIn Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <span class="input-group-text" id="basic-addon1">
                        Out Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Number and Street
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Town / City
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country / District
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Post Code
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* End previous address 5*/}

                    {/* previous address 6*/}
                    <h5>Previous Address 6</h5>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        In Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <span class="input-group-text" id="basic-addon1">
                        Out Date
                      </span>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="DD/MM/YYYY"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Number and Street
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Town / City
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country / District
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Post Code
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">
                        Country
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Details"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* End previous address 6*/}

                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <h2>Accurate Background Basic Disclosure Check</h2>
                    <h5>Release Disclosure & Consent </h5>

                    <p>
                      In connection with your application for services and
                      potential engagement with Zelar Group Ltd, Accurate
                      Background has been engaged to conduct background
                      screening on the Company’s behalf.
                    </p>
                    <p>
                      {" "}
                      By submitting your information and signing you knowingly
                      and voluntarily consent to the background checking
                      process. You acknowledge that you have been notified by
                      the Company about the process, including what information
                      may be collected about you, the purposes for which the
                      information collected may be used, the fact that third
                      parties may have access to that information, the fact that
                      such information may be transferred outside of your
                      country to countries that may have different laws
                      protecting personally identifiable data, and the process
                      by which you may access the data collected for the purpose
                      of correction or deletion of erroneous data.
                    </p>
                    <p>
                      Such screening services may include, but are not limited
                      to, criminal and civil record checking, education,
                      qualification and employment history verification, and
                      professional licence verification. The nature and scope of
                      the screening will be determined by the Company and might
                      not include all possible checks. All screening will be
                      conducted within the limits of applicable law.{" "}
                    </p>
                    <p>
                      Accurate Background and any agents acting on its behalf
                      will conduct the background checking process described
                      above. Information collected about you during the
                      background check process by Accurate Background and any
                      agents acting on its behalf will be provided to the
                      Company and will not be used for a purpose other than
                      determined by the Company. Accurate Background may also
                      need to disclose personally identifiable information about
                      you to third parties such as governmental agencies,
                      educational institutions, previous employers and research
                      partners in order to verify the information you have
                      provided. Accurate Background adheres to the principles
                      and complies with the requirements of Directive95/46/EC of
                      the European Commission. For more information about
                      Accurate Background’s data protection and privacy
                      policies, please visit the website at{" "}
                      <a href="https://www.accurate.com/">
                        www.accuratebackground.com
                      </a>
                    </p>
                    <p>
                      By submitting your information and signing, you hereby
                      authorize Accurate Background, and any agents, to verify
                      information related to your criminal and civil records,
                      education, qualification and employment history
                      verification, and personal licence verification. All
                      screening will be conducted to the extent applicable law
                      allows. You understand that Accurate Background , and any
                      agents will undertake reasonable steps to protect, secure
                      and keep confidential the information about you that is
                      collected and you understand, and agree, that it will be
                      disclosed to the Company, or its affiliates for purposes
                      defined by the Company. You understand and agree that’s as
                      part of this process your personal identifiable
                      information, including sensitive data, may be transferred
                      outside of the country in which it was collected,
                      including to a country that may have different laws
                      protecting personally identifiable data. You expressly
                      agree to the transfer of your personally identifiable
                      information from the country in which it was collected to:
                      Accurate Background, the agents acting on its behalf, and
                      the company and its affiliates, wherever located.{" "}
                    </p>
                    <p>
                      The Disclosure and Barring Service will refer the details
                      provided on this application for to government and law
                      enforcement bodies in accordance with any relevant
                      legislation. The details provided to these bodies will be
                      used for identifying possible matches to records held by
                      them. Where such a match is established, data may be
                      released to the DBS for inclusion on any certificate
                      issued. The details provided on this form may be used to
                      update records held by the bodies specified above. The
                      details provided on the application form may be used to
                      verify your identity for authentication purposes. The DBS
                      may use any information provided by the DBS on a
                      certificate or otherwise held by the DBS to inform any of
                      its barring decisions made under its powers within the
                      Safeguarding Vulnerable Groups Act 2006. Guidance and
                      criteria on the filtering of these cautions and
                      convictions can be found at{" "}
                      <a href="https://www.gov.uk/">www.gov.uk</a>
                    </p>
                    <p>
                      I confirm that I understand that it is a requirement of
                      the DBS (formally CRB)’s Code of Practice that all
                      Registered Bodies must treat Disclosure applicants who
                      have a criminal record fairly and do not discriminate
                      because of a conviction or other information revealed. It
                      also obliges Registered Bodies to have a written policy on
                      the recruitment of ex-offenders; a copy of which can be
                      given to Disclosure applicants at the outset of the
                      recruitment process. I confirm that I have been made aware
                      and have been given copies or have access to the
                      DISCLOSURE SERVICES Policy on Recruitment of Ex-offenders,
                      Equal Opportunities Policies, and the DBS (formerly CRB)
                      Code Of Practice April 2009 at the outset of my
                      recruitment. I confirm my understanding that my Disclosure
                      information is only used for the specific purpose for
                      which it was requested and for which my full consent has
                      been given. I confirm that the information that I have
                      provided in support of this application is complete and
                      true and understand that knowingly to make a false
                      statement for this purpose is a criminal offence.
                    </p>
                    <p>
                      This post is not exempt from the Rehabilitation of
                      Offenders Act 1974. We only ask applicants to disclose
                      convictions which are not yet spent under the
                      Rehabilitation of Offenders Act 1974. If you are unsure
                      whether your conviction is ‘spent’, or whether you need to
                      disclose it when applying to a specific job, please
                      contact the Narco Advice Service on 03001231999 or email
                      helpline@narco.org.uk
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* drug-alcohol-policy */}
            <div className="container">
              <div className="drug-alcohol-policy">
                <h2>Drug & Alcohol Policy</h2>
                <div className="row">
                  <div className="col-5">
                    <p>
                      By signing below, I am confirming that I understand Zelar
                      Group Ltd Drug & Alcohol Policy{" "}
                    </p>
                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      Zelar Group have a zero tolerance on the miss use of drugs
                      and/ or alcohol and you will be subjected to a drug and
                      alcohol test when you start working with Zelar Group Ltd.
                      Random drug and alcohol tests are also carried whilst you
                      are working with us.{" "}
                    </p>
                    <p>
                      If you test positive for a non-prescribed drug and/ or
                      blow a positive alcohol test you will be released from
                      working with Zelar Group Ltd.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* DVLA */}
            <div className="container">
              <div className="DVLA">
                <h2>Driving Offince - DVLA Screening</h2>
                <div className="row">
                  <div className="col-5">
                    <p>
                      If I hold a UK Licence, I agree that I am subject to a
                      monthly DVLA Licence check to confirm I have not received
                      any new endorsements{" "}
                    </p>
                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      As prescribed by our client all drivers are allowed no
                      more than 6 points on their licence in order to carry out
                      work on their behalf. Our client does not accept any of
                      the following offences on drivers licence regardless of
                      the number of points the offence may carry,{" "}
                    </p>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Offence Type</th>
                          <th scope="col">Offence Codes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Accident Offences </td>
                          <td>AC10, AC20, AC30 </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Disqualified Driver Offences</td>
                          <td>BA10, BA20, BA30, BA40, BA60 </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Careless Driving Offences </td>
                          <td>CD40, CD50, CD60, CD70, CD80, CD90 </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Dangerous Driving </td>
                          <td>
                            DD10, DD20, DD30, DD40, DD50, DD60, DD70, DD80, DD90{" "}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Drink and Drug Offences </td>
                          <td>
                            DR10, DR20, DR30, DR31, DR40, DR50, DR60, DR61,
                            DR70, DR80, DR90, DG10, DG40, DG60, DG70, DG80, DG90{" "}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>Insurance Offences </td>
                          <td>IN10 </td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          <td>Licensing Offences </td>
                          <td>LC30, LC40, LC50 </td>
                        </tr>
                        <tr>
                          <th scope="row">8</th>
                          <td>Miscellaneous Offences </td>
                          <td>MS40, MS50, MS60, MS70, MS80, MS90 </td>
                        </tr>
                        <tr>
                          <th scope="row">9</th>
                          <td>Theft of Unauthorised taking offences </td>
                          <td>UT10, UT20, UT30, UT40, UT50 </td>
                        </tr>
                        <tr>
                          <th scope="row">10</th>
                          <td>Disqualified Driver Offences </td>
                          <td>NE99, TT99, XX99 </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      If I hold an EU or NON-EU Driving Licence, I confirm that
                      I do not have any of the above offences on my licence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* nondiscloser */}
            <div className="container">
              <div className="nondiscloser">
                <h2>Non-Discloser and Data Protection</h2>

                <div className="row">
                  <div className="col-5">
                    <h5>
                      Non-Disclosure and Data Protection Agreements for
                      Contractors{" "}
                    </h5>
                    <p>
                      During the course of your work time at Amazon you will be
                      invited to visit out premises, where you may receive
                      information relating to Amazon that is not known to the
                      general public and is confidential and important to us. We
                      call this our 'confidential information'
                    </p>
                    <h5>This is a legal agreement</h5>
                    <p>
                      If a provision of this agreement is held invalid any
                      applicable law, such invalidity will not affect any other
                      provision of this agreement that can be given effect
                      without the invalid provision. Further, all terms and
                      conditions of this agreement will be deemed enforceable to
                      the fullest extent permissible under applicable law, and,
                      when necessary, the court is requested to reform any and
                      all terms and conditions to give them such effect.
                      Amazon.co.uk is relying upon your promise to comply
                      strictly with this agreement. Any violation of this
                      agreement may cause substantial and irreparable harm to
                      Amazon.co.uk. According, without limiting any other
                      available remedies, this agreement is specifically
                      enforceable by Amazon.co.uk Any failure by Amazon.co.uk to
                      enforce your strict performance of any provision of this
                      agreement will not constitute a waiver of Amazon.co.uk's
                      rights subsequently enforce such provisions or any other
                      provision of this agreement I understand and agree to
                      abide by the promise I make in this agreement to protect
                      Amazon's confidential information. I agree that my
                      promises also apply for the benefit of other Amazon
                      companies
                    </p>
                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <h5>
                      Our Confidential Information includes, Among other things:{" "}
                    </h5>
                    <ul>
                      <li>The way that we work </li>
                      <li>The layout of our premises </li>
                      <li>
                        The technology that we use including computers and
                        machinery{" "}
                      </li>
                      <li>
                        The goods that we stock and how they are stored - The
                        people we work and interact with{" "}
                      </li>
                      <li>
                        The people and companies who deliver to us and collect
                        from us{" "}
                      </li>
                      <li>
                        Any details about our customers, including their names,
                        addresses and what they buy{" "}
                      </li>
                      <li>Anything to do with finance </li>
                      <li>
                        Anything to do with advertising or marketing plans{" "}
                      </li>
                      <li>Anything that you hear </li>
                    </ul>
                    <p>
                      Our confidential information is very important to our
                      business. It is vital to us that it does not become known
                      to other companies. We will take all legal stops necessary
                      to protect our confidential information You must agree to
                      the following commitments:{" "}
                    </p>
                    <ul>
                      <li>
                        You will NOT disclose our confidential information to
                        anyone or any company{" "}
                      </li>
                      <li>
                        You will use our confidential information ONLY to make
                        up your mind about working with us{" "}
                      </li>
                      <li>
                        You will notify us IMMEDIATLEY if you discover that our
                        confidential information has been disclosed, however it
                        happens{" "}
                      </li>
                      <li>
                        All our confidential information will remain our
                        property{" "}
                      </li>
                      <li>
                        You will not trade stocks or shares based on our
                        confidential information{" "}
                      </li>
                      <li>
                        {" "}
                        You will return any materials containing our
                        confidential information to us if we ask you to{" "}
                      </li>
                      <li>
                        You also agree that you will not disclose information to
                        us that is confidential to you or anybody else{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* stop-search */}
            <div className="container">
              <div className="stop-serch">
                <h2>Stop and Search Policy</h2>
                <div className="row">
                  <div className="col-5">
                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <h5>
                      Please read the following carefully and sign at the end to
                      confirm that you understand and agree.
                    </h5>
                    <p>
                      This policy applies to all employees and anyone working at
                      / or visiting Amazon' s sites{" "}
                    </p>
                    <p>
                      Amazon reserves the right to search you and /or any of
                      your property on its premises (This includes Amazon's Car
                      Parks) and you agree that Amazon search you/and or your
                      property:{" "}
                    </p>
                    <ul>
                      <li>
                        At any time, if Amazon honestly and reasonable believes
                        or suspects that you may be in possession of, or have
                        destroyed, tempered with, concealed or handled stolen
                        goods or has evidence of any theft or attempted theft;
                        or{" "}
                      </li>
                      <li>
                        If it reasonably believes or suspects that you may have
                        drugs and or alcohol and/or other inappropriate items in
                        the workplace; or{" "}
                      </li>
                      <li>As part of its random searching policy; or </li>
                      <li>when you enter or leave Amazon's premises </li>
                    </ul>
                    <p>
                      Issued badges must be worn and displayed at all times
                      onsite.{" "}
                    </p>
                    <p>
                      Failure to comply with this may result in restricting your
                      access to Amazon's building.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* medical-fitness */}
            <div className="container">
              <div className="medical-fitness">
                <h2>Medical Fitness Declaration</h2>
                <div className="row">
                  <div className="col-5">
                    <p>
                      Please confirm your fitness to provide services listed
                      below by ticking each section and signing and dating the
                      bottom of the form.{" "}
                    </p>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("medical_fitness")}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        I'm physically fit and able to fulfil the demands of
                        Multi Drop Driver{" "}
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("medical_fitness")}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        I’m not taking any medication that will hinder my
                        ability to drive or manipulate consignments in a safe
                        manner{" "}
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("medical_fitness")}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        I will comply with all manual handling guidelines and
                        not place myself in danger by using unsafe working
                        practices{" "}
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("medical_fitness")}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        I have no mental or physical conditions that have not
                        been reported to the DVLA which could affect my ability
                        to drive safely{" "}
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onChange={this.onChange("medical_fitness")}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        I will inform Zelar Group Ltd if my ability to safely
                        drive or handle consignments changes in the future{" "}
                      </label>
                    </div>

                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <p>
                      All Couriers wishing to provide services must be medically
                      fit enough to undertake the role as a multi-drop courier.
                      The core role involves a significant amount of driving and
                      the safe manual handling, manipulation, sorting and
                      delivery of large numbers of consignments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* code-of-conduct-policy */}
            <div className="container">
              <div className="code-of-conduct-policy">
                <h2>Code of Conduct Policy </h2>
                <div className="row">
                  <div className="col-5">
                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6">
                    <h5>Introduction</h5>
                    <p>
                      This business commits to encouraging a productive,
                      supportive, safe, and profitable work environment where
                      everybody has the opportunity to be treated equally and
                      work in a professional manner.{" "}
                    </p>
                    <p>
                      This code of conduction outlines the expected standards
                      for everyone to follow. As a subcontractor you are
                      expected to read, understand, and always follow the
                      expected standards. Failure to follow these guidelines can
                      mean you could be subject to Non-Use of services / Removal
                      from Contract.
                    </p>
                    <h5>Aim</h5>
                    <p>
                      Zelar Group Ltd is committed to providing a positive work
                      environment and an expectation that all our
                      sub-contractors and employees will represent our company
                      with integrity.
                    </p>
                    <h5>Policy</h5>
                    <p>
                      Zelar Group sub-contractors will represent our company
                      with integrity and professionalism in all interactions
                      with our clients, customers, and any other sub-contractor/
                      employee as well. Zelar Group will ensure the uniform
                      implementation of this code of conduct policy to foster an
                      ideal of fairness and community. Zelar Group will follow
                      all laws and honour our agreements in an ethical manner.
                    </p>
                    <h5>Removal Action</h5>
                    <p>
                      Any person who is found to break the code of conduct will
                      be subject to non-use of services/ removal from contact
                      which could include with immediate effect. All
                      sub-contractors are required to participate in code of
                      conduct training and this training will include
                      information about appropriate behaviour in the workplace.{" "}
                    </p>
                    <h5>Retaliation</h5>
                    <p>
                      Zelar Group prohibits anyone from retaliation against
                      sub-contractors because they have filed a code of conduct
                      policy complaint or have co-operated in any way in the
                      investigation of a complaint.{" "}
                    </p>
                    <h5>Accountabilities</h5>
                    <p>
                      The following table identifies accountabilities for the
                      relevant parties:{" "}
                    </p>
                    <table class="table table-striped-columns">
                      <thead>
                        <tr>
                          <th scope="col">Personnel</th>
                          <th scope="col">Responsibilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Sub-contractors </td>
                          <td>
                            <ul>
                              <li>Follow Code of Conduct Policy. </li>
                              <li>
                                Report all code of conduct issues immediately.{" "}
                              </li>
                              <li>
                                Use sound Judgement when completing tasks and/
                                or making decisions.
                              </li>
                              <li>
                                Cooperate with co-workers on code of conduct
                                issues.
                              </li>
                              <li>
                                Protect company assets including intellectual
                                property and company reputation.
                              </li>
                              <li>
                                Ensure that the use of company equipment and the
                                facilities is limited to company tasks.
                              </li>
                              <li>Avoid conflicts of interest. </li>
                              <li> Maintain confidentiality as required. </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Points of Contact</td>
                          <td>
                            <ul>
                              <li>
                                Ensure this code of conduct policy is put into
                                practice on a day-to-day basis.
                              </li>
                              <li>
                                Work to foster the concept of integrity and
                                professionalism.
                              </li>
                              <li>
                                Be proactive in taking uniform action for any
                                code of conduct violations.
                              </li>
                              <li>
                                Instruct sub-contractors regarding code of
                                conduct policy and specific issues.
                              </li>
                              <li>
                                Ensure sub-contractors have received the
                                appropriate information.
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Business Owners</td>
                          <td>
                            <ul>
                              <li>
                                Ensure overall implementation and maintenance of
                                the code of conduct policy.
                              </li>
                              <li>
                                Ensure that any regulatory changes are
                                incorporated into the company’s policy as
                                required.
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      The following points are deemed as a breach of the code of
                      conduct for all sub-contractors, and employees:{" "}
                    </p>
                    <ul>
                      <li>
                        Destroying property belonging to fellow sub-contractors
                        or the company{" "}
                      </li>
                      <li>
                        Stealing property belonging to fellow sub-contractors or
                        the company{" "}
                      </li>
                      <li>Skylarking </li>
                      <li>
                        As a subcontractor you are expected to act in a mature
                        and respectable manner.{" "}
                      </li>
                      <li>
                        Fighting or engaging in horseplay or disorderly
                        behaviour.{" "}
                      </li>
                      <li>
                        Offensive language on platforms such as communication
                        groups, e-mails, or face-to-face.{" "}
                      </li>
                      <li>
                        Individual views regarding politics, religion and sexual
                        orientation needs to not be expressed on open forums
                        used to communicate with in Zelar Group- including
                        driver groups, e-mails, and drivers’ meetings.{" "}
                      </li>
                      <li>Failing to obey reasonable instructions </li>
                    </ul>
                    <p>
                      As a sub-contractor you are expected to listen to Zelar
                      Group instructions. The following behaviour is not
                      acceptable:{" "}
                    </p>
                    <ul>
                      <li>
                        Refusing to follow or failing to carry out reasonable
                        instruction of the task being paid for.{" "}
                      </li>
                      <li>To use of alcohol and/ or drugs. </li>
                      <li>Coming to work under the influence of alcohol. </li>
                      <li>Coming to work under the influence of any drug. </li>
                      <li>
                        Bringing alcoholic beverages onto the company,
                        customers’, or clients’ property unless as part of the
                        delivery or returns process{" "}
                      </li>
                      <li>
                        Bringing drugs onto the company, customers’, or clients’
                        property{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* Disclaimer */}
            <div className="container">
              <div className="disclaimer">
                <h2>Disclaimer</h2>
                <div className="row">
                  <div className="col-5">
                    <p>
                      I have read, understand and agree to follow this Code of
                      Conduct at all times when carrying out services on behalf
                      of Zelar Group Ltd:{" "}
                    </p>
                    <h5>signature</h5>
                  </div>

                  <div className="col-1"></div>
                  <div className="col-6"></div>
                </div>
              </div>
            </div>

            {/* submit button */}
            <div class="form-group row">
              <div class="col-sm-10">
                <button
                  onClick={this.submitPost}
                  type="submit"
                  class="btn btn-primary"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        ) : (
          // pdf
          <PDF
            //   general data
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            phone_number={this.state.phone_number}
            dob={this.state.dob}
            address_general_data={this.state.address_general_data}
            postcode={this.state.postcode}
            ntk_name={this.state.ntk_name}
            ntk_number={this.state.ntk_number}
            ntk_relation={this.state.ntk_relation}
            preferred_work_location={this.state.preferred_work_location}
            // eligible-to-work
            eligible_to_work_1={this.state.eligible_to_work_1}
            eligible_to_work_2={this.state.eligible_to_work_2}
            // Health-issues-disabilities
            Health_issues_disabilities={this.state.Health_issues_disabilities}
            Health_issues_disabilities_1={
              this.state.Health_issues_disabilities_1
            }
            Health_issues_disabilities_2={
              this.state.Health_issues_disabilities_2
            }
            // criminal-conviction
            criminal_conviction_1={this.state.criminal_conviction_1}
            criminal_conviction_2={this.state.criminal_conviction_2}
            criminal_conviction_text={this.state.criminal_conviction_text}

            // references
            references_name={this.state.references_name}
            references_position={this.state.references_position}
            references_fromdate={this.state.references_fromdate}
            references_todate={this.state.references_todate}
            references_duties={this.state.references_duties}
            references_contact_name={this.state.references_contact_name}
            references_contact_number={this.state.references_contact_number}
            references_mail={this.state.references_mail}
            // social-media-policy
            // DSP
            // accurate-1
            // drug-alcohol-policy
            // DVLA
            // nondiscloser
            // stop-search
            // medical-fitness
            medical_fitness={this.state.medical_fitness}
            // code-of-conduct-policy
            // Disclaimer
          />
        )}
      </>
    );
  }
}

export default Jobs;
