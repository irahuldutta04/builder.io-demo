import * as React from "react";

const InputField = ({ label, placeholder }) => (
  <div className="input-field">
    <label className="visually-hidden">{label}</label>
    <input type="text" placeholder={placeholder} aria-label={placeholder} />
  </div>
);

const ContactField = ({ label, placeholder }) => (
  <div className="contact-field">
    <label className="visually-hidden">{label}</label>
    <input type="tel" placeholder={placeholder} aria-label={placeholder} />
  </div>
);

const fields = [
  { label: "Enter First Name", placeholder: "Enter First Name" },
  { label: "Enter Last Name", placeholder: "Enter Last Name" },
];

const contactFields = [
  { label: "Enter Email Id", placeholder: "Enter Email Id" },
  { label: "Enter Residential Contact No.", placeholder: "Enter Residential Contact No." },
  { label: "Enter Office Contact No.", placeholder: "Enter Office Contact No." },
  { label: "Enter Mobile No.", placeholder: "Enter Mobile No." },
];

function Form() {
  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 21px 16px 0;
          width: 100%;
        }
        
        .section-title {
          color: #3a1212;
          font: 600 14px Manrope, sans-serif;
        }
        
        .input-fields {
          display: flex;
          gap: 16px;
          margin-top: 20px;
        }
        
        .input-field {
          border: 1px solid rgba(58, 18, 18, 1);
          border-radius: 8px;
          background-color: #fff;
          padding: 20px 16px;
          font: 600 12px Manrope, sans-serif;
          color: #3a1212;
        }
        
        .occupation-field {
          border: 1px solid rgba(58, 18, 18, 1);
          border-radius: 8px;
          background-color: #fff;
          margin-top: 16px;
          padding: 18px 16px;
          font: 600 12px Manrope, sans-serif;
          color: #3a1212;
        }
        
        .organization-field {
          border: 1px solid rgba(58, 18, 18, 1);
          border-radius: 8px;
          background-color: #fff;
          margin-top: 16px;
          padding: 18px 16px;
          font: 600 12px Manrope, sans-serif;
          color: #3a1212;
        }
        
        .contact-fields {
          margin-top: 20px;
        }
        
        .contact-field {
          border: 1px solid rgba(58, 18, 18, 1);
          border-radius: 8px;
          background-color: #fff;
          margin-top: 16px;
          padding: 20px 16px;
          font: 600 12px Manrope, sans-serif;
          color: #3a1212;
        }
        
        .address-fields {
          margin-top: 20px;
        }
        
        .address-field {
          border: 1px solid rgba(58, 18, 18, 1);
          border-radius: 8px;
          background-color: #fff;
          margin-top: 16px;
          padding: 20px 16px;
          font: 600 12px Manrope, sans-serif;
          color: #3a1212;
        }
        
        .city-state-fields {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }
        
        .city-field,
        .state-field {
          border: 1px solid rgba(58, 18, 18, 1);
          border-radius: 8px;
          background-color: #fff;
          padding: 18px 16px;
          font: 600 12px Manrope, sans-serif;
          color: #3a1212;
        }
        
        .pincode-field {
          border: 1px solid rgba(58, 18, 18, 1);
          border-radius: 8px;
          background-color: #fff;
          margin-top: 16px;
          padding: 20px 16px;
          font: 600 12px Manrope, sans-serif;
          color: #3a1212;
        }
        
        .other-info-field {
          border: 1px solid rgba(58, 18, 18, 1);
          border-radius: 8px;
          background-color: #fff;
          margin-top: 20px;
          height: 114px;
        }
        
        .add-user-button {
          border-radius: 8px;
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.16);
          background-color: #3a1212;
          margin-top: 42px;
          padding: 19px 60px;
          font: 400 14px Manrope, sans-serif;
          color: #fff;
          text-align: center;
          cursor: pointer;
        }
        
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
      
      <div className="container">
        <h2 className="section-title">Personal Information</h2>
        
        <div className="input-fields">
          {fields.map((field, index) => (
            <InputField key={index} label={field.label} placeholder={field.placeholder} />
          ))}
        </div>
        
        <div className="occupation-field">
          <label className="visually-hidden">Enter Occupation</label>
          <input type="text" placeholder="Enter Occupation" aria-label="Enter Occupation" />
        </div>
        
        <div className="organization-field">
          <label className="visually-hidden">Enter Name of the organization</label>
          <input type="text" placeholder="Enter Name of the organization" aria-label="Enter Name of the organization" />
        </div>
        
        <h2 className="section-title">Contact Information</h2>
        
        <div className="contact-fields">
          {contactFields.map((field, index) => (
            <ContactField key={index} label={field.label} placeholder={field.placeholder} />
          ))}
        </div>
        
        <h2 className="section-title">Office Address Information</h2>
        
        <div className="address-fields">
          <div className="address-field">
            <label className="visually-hidden">Street Address</label>
            <input type="text" placeholder="Street Address" aria-label="Street Address" />
          </div>
          
          <div className="address-field">
            <label className="visually-hidden">Street Address</label>
            <input type="text" placeholder="Street Address" aria-label="Street Address" />
          </div>
          
          <div className="city-state-fields">
            <div className="city-field">
              <label className="visually-hidden">City</label>
              <input type="text" placeholder="City" aria-label="City" />
            </div>
            
            <div className="state-field">
              <label className="visually-hidden">State</label>
              <input type="text" placeholder="State" aria-label="State" />
            </div>
          </div>
          
          <div className="pincode-field">
            <label className="visually-hidden">Pin Code</label>
            <input type="text" placeholder="Pin Code" aria-label="Pin Code" />
          </div>
        </div>
        
        <h2 className="section-title">Other Information</h2>
        
        <div className="other-info-field"></div>
        
        <div className="add-user-button">Add User</div>
      </div>
    </>
  );
}

export default Form;