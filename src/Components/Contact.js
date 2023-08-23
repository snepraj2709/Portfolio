const Contact = ({ data }) => {
  if (data) {
    var contactName = data.name;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="columns header-col">
          <h1>Get In Touch</h1>
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Email and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              <span>
                <b>Email: </b>
                {contactEmail}
              </span>
              <br />
              <br />

              <span>
                <b>Phone: </b>
                {phone}
              </span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
