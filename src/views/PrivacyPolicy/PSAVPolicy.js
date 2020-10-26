import React from 'react';
import { Link } from 'react-router-dom';
// import sections
import Hero from '../../components/sections/Hero';
import GenericSection from '../../components/sections/GenericSection';
import FeaturesTiles from '../../components/sections/FeaturesTiles';
import FeaturesSplit from '../../components/sections/FeaturesSplit';
import Testimonial from '../../components/sections/Testimonial';
import Cta from '../../components/sections/Cta';

const PSAVPolicy = () => {

const psavPolicy = "We steal your data";

  return (
    <>
      <GenericSection children={
            <div>
                <h2>Product Specific Age Verifier Privacy Policy</h2>
                <p>“Product Specific Age Verifier” provides “a customizable age verification popup” to
                  merchants who use Shopify to power their stores. This Privacy Policy describes
                  how personal information is collected, used, and shared when you install or use the
                  App in connection with your Shopify-supported store.</p>
                <h3>Personal Information the App Collects</h3>
                <p>When you install the App, we are automatically able to access certain types of information from
                  your Shopify account: <br/><br/>
                  Read Products – Read access to the products in the merchants’ store <br/>
                  Read Script Tags – Read access to the script tags of the merchants’ store <br/>
                  Write Script Tags – Write access (ability to create) script tags for the merchants’ store <br/>
                  (Script Tags are used to push interface changes to the merchants store front) <br/><br/>
                  Information about individuals age answer to the popup is stored in the users browser cookie.
                  “Cookies” are data files that are placed on your device or computer and often include an anonymous
                  unique identifier. For more information about cookies, and how to disable cookies,
                  visit http://www.allaboutcookies.org. “Log files” track actions occurring on the Site, and collect
                  data including your IP address, browser type, Internet service provider, referring/exit pages, and
                  date/time stamps. “Web beacons,” “tags,” and “pixels” are electronic files used to record information
                  about how you browse the Site.</p>
                <h3>How Do We Use Your Personal Information?</h3>
                <p>We use the personal information we collect from you and your customers in order to provide the Service
                  and to operate the App. </p>
                <h3>Sharing Your Personal Information</h3>
                <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations,
                  to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise
                  protect our rights. <br/><br/>

                  Your Rights If you are a European resident, you have the right to access personal information we hold about
                  you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise
                  this right, please contact us through the contact information below. <br/><br/>

                  Additionally, if you are a European resident we note that we are processing your information in order to fulfill
                  contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our
                  legitimate business interests listed above. Additionally, please note that your information will be transferred
                  outside of Europe, including to Canada and the United States. <br/>
                </p>
                <h3>Changes</h3>
                <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices
                  or for other operational, legal or regulatory reasons.</p>
                <h3>Contact Us</h3>
                <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint,
                  please contact us by e-mail at enchantecom@hotmail.com.</p>
            </div>

        }/>
    </>
  );
}

export default PSAVPolicy;