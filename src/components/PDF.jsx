import React from "react";
import jsPDF from "jspdf";

import "./global.css";

const ref = React.createRef();
const PDF = (props) => {
  const paraOne =
    "Zelar Groups is Committed to a policy of Equal Opportunities.";
  const paraTwo =
    "for all work seekers and shall always adhere to such apolicy.";

  const pdfGenerate = () => {
    var doc = new jsPDF("potrait", "px", "a4", "false");
    // general data
    doc.setFont("Helvertica", "bold");
    doc.text(40, 100, "General Data");
    doc.setFont("Helvertica", "normal");
    doc.text(40, 120, "Firstname:    " + props.firstname);
    doc.text(40, 140, "Last Name:    " + props.lastname);
    doc.text(40, 160, "Phone Number: " + props.phone_number);
    doc.text(40, 180, "Email:        " + props.email);
    doc.text(40, 200, "Date of Birth:" + props.dob);
    doc.text(40, 220, "Address:      " + props.address_general_data);
    doc.text(40, 240, "Post Code:    " + props.postcode);
    doc.text(40, 260, "Next to Kin Name: " + props.ntk_name);
    doc.text(40, 280, "Next to Kin Number:" + props.ntk_number);
    doc.text(40, 300, "Relationship:  " + props.ntk_relation);
    doc.text(
      40,
      320,
      "Preferred Work Location:" + props.preferred_work_location
    );
    // eligible-to-work
    doc.addPage();
    doc.setFont("Helvertica", "bold");
    doc.text(40, 100, "Eligible to Work");
    doc.setFont("Helvertica", "normal");
    doc.text(40, 120, "Do you have immigration permission to work in UK ?");
    doc.text(40, 140, props.eligible_to_work_1);
    doc.text(40,160, "If you are a member of the EU and need to apply for");
    doc.text(40,180, "EU Settlement has this been done?");
    doc.text(40, 200, props.eligible_to_work_2);

    // Health-issues-disabilities
    doc.addPage();
    doc.setFont("Helvertica", "bold");
    doc.text(40, 100, "Health Issues & Disabilities");
    doc.setFont("Helvertica", "normal");
    doc.text(40,120, "Do you have any health issues or a relevant Disability");
    doc.text(40,140, "which may make it difficult for you to carry out functions");
    doc.text(40,160, "which are essential for the role you seek?");
    doc.text(40, 180, props.Health_issues_disabilities);
    doc.text(40, 200, props.Health_issues_disabilities_1);
    doc.text(40, 220, props.Health_issues_disabilities_2);


    // criminal-conviction
    doc.addPage();
    doc.setFont("Helvertica", "bold");
    doc.text(40, 100, "Criminal Conviction");
    doc.setFont("Helvertica", "normal");
    doc.text(40,120, "Do you have any unspent criminal convictions?");
    doc.text(40, 160, props.criminal_conviction_1);
    doc.text(40,140, "If yes, please provide details below.");
    doc.text(40, 180, props.criminal_conviction_2);
    doc.text(40, 200, props.criminal_conviction_text);
    // references
    doc.addPage();
    doc.setFont("Helvertica", "bold");
    doc.text(40, 100, "References");
    doc.setFont("Helvertica", "normal");
    doc.text(40,120, "Name of the company:"+ props.references_name);
    doc.text(40,140, "Position Held:"+ props.references_position);
    doc.text(40,160, "From Date:"+props.references_fromdate);
    doc.text(40, 180,"To Date:"+ props.references_todate);
    doc.text(40, 200,"Duties:"+props.references_duties);
    doc.text(40, 220,"Contact Name:"+props.references_contact_name);
    doc.text(40, 240,"Contact Number:"+props.references_contact_number);
    doc.text(40, 260,"Contact Email ID:"+props.references_mail);

    // social-media-policy
    //      DSP
    //       accurate-1
    //   drug-alcohol-policy
    //   DVLA
    //   nondiscloser
    //    stop-search
    //    medical-fitness
    doc.addPage();
    doc.setFont("Helvertica", "bold");
    doc.text(40, 100, "Medical Fitness");
    doc.setFont("Helvertica", "normal");
    doc.text(40,120,props.medical_fitness);
    
    //    code-of-conduct-policy
    //    Disclaimer

    doc.addPage();

    // doc.setFontSize(10);
    doc.text(200, 50, paraOne);
    doc.text(200, 60, paraTwo);
    doc.save("application.pdf");
  };
  return (
    <>
      <div className="pt-5 pdf-top-space"></div>
      <div className="Post pdf-page" ref={ref}>
        <div className="container">
          {/* general data */}
          <div className="container">
            <div className="general-data">
              <h2>General Data</h2>
              <div className="row">
                <div className="col-5">
                  <h5>Firstname: &emsp;{props.firstname}</h5>
                  <h5>Lastname: &emsp;{props.lastname}</h5>
                  <h5>Phone Number: &emsp;{props.phone_number}</h5>
                  <h5>Email: &emsp;{props.email}</h5>
                  <h5>Date of Birth: &emsp;{props.dob}</h5>
                  <h5>Address: &emsp;{props.address_general_data}</h5>
                  <h5>Post-Code: &emsp;{props.postcode}</h5>
                  <h5>Next To Kin Name: &emsp;{props.ntk_name}</h5>
                  <h5>Next To Kin Number: &emsp;{props.ntk_number}</h5>
                  <h5>Relationship: &emsp;{props.ntk_relation}</h5>
                  <h5>
                    Preferred Work Location: &emsp;
                    {props.preferred_work_location}
                  </h5>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                  <p>
                    Zelar Groups is Committed to a policy of Equal Opportunities
                    for all work seekers and shall always adhere to such a
                    policy and will review on an on-going basis all aspects of
                    Recruitment to avoid unlawful or undesirable discrimination.
                    We will treat everyone equally irrespective of sex, race,
                    colour, race, nationality, ethnic or national origin,
                    religion or belief, political beliefs or members or
                    non-members or a trade union and we place an obligation upon
                    all staff to respect and act in accordance with the policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* eligible-to-work  */}
          <div className="container">
            <div className="general-data">
              <h2>Eligible to Work</h2>

              <div className="row">
                <div className="col-5">
                  <h5>
                    Do you have immigration permission to work in UK ?:{" "}
                    {props.eligible_to_work_1}{" "}
                  </h5>
                  <h5>
                    If you are a member of the EU and need to apply for EU
                    Settlement has this been done?:
                    {props.eligible_to_work_2}{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* Health-issues-disabilities */}
          <div className="container">
            <div className="Health-issues-disabilities">
              <h2>Health Issues & Disabilities</h2>
              <div className="row">
                <div className="col-5">
                  <h5>
                    Do you have any health issues or a relevant Disability
                    which may make it difficult for you to carry out functions
                    which are essential for the role you seek?
                    {props.Health_issues_disabilities}{" "}
                  </h5>
                  <h5>
                  {props.Health_issues_disabilities_1}{" "}
                  </h5>
                  <h5>
                  {props.Health_issues_disabilities_2}{" "}

                  </h5>
                </div>
                <div className="col-1"></div>
                <div className="col-6"></div>
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
                    <h5>Do you have any unspent criminal convictions?</h5>
                    {props.criminal_conviction_1}{" "}
                    <h5>If yes, please provide details below. I give consent / I do not give consent
                    {props.criminal_conviction_2}{" "}
                    </h5>
                    <h5>
                    {props.criminal_conviction_text}{" "}
                    </h5>
                </div>
                <div className="col-1"></div>
                <div className="col-6"></div>
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
              
                  <h5>Name of the company &emsp;{props.references_name}</h5>
                  <h5>Position Held &emsp;{props.references_position}</h5>
                  <h5>From Date &emsp;{props.references_fromdate}</h5>
                  <h5>To Date &emsp;{props.references_todate}</h5>
                  <h5>Duties &emsp;{props.references_duties}</h5>
                  <h5>Contact Name &emsp;{props.references_contact_name}</h5>
                  <h5>Contact Number &emsp;{props.references_contact_number}</h5>
                  <h5>Contact Email ID &emsp;{props.references_mail}</h5>

                </div>
                <div className="col-1"></div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
          {/* social-media-policy */}
          {/* DSP */}
          {/* accurate-1 */}
          {/* drug-alcohol-policy */}
          {/* DVLA */}
          {/* nondiscloser */}
          {/* stop-search */}
          {/* medical-fitness */}
          <div className="container">
            <div className="$$$$$">
              <h2>$$$$$</h2>
              <div className="row">
                <div className="col-5">
          <h5>{props.medical_fitness}</h5>
                </div>
                <div className="col-1"></div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
          {/* code-of-conduct-policy */}
          {/* Disclaimer */}
        </div>
      </div>
      <button onClick={pdfGenerate}>Download PDF</button>
    </>
  );
};

export default PDF;
