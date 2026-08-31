import { useState } from "react";
import Rail, { Menu } from "@/components/Rail";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "@/styles/main.scss";

export default function Privacy() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Rail open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="site">
        <main className="legal-page" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <section className="section">
            <div className="container" style={{ maxWidth: "800px" }}>
                <div
                  className="legal-content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                    lineHeight: "1.7",
                    color: "var(--color-ink)",
                    fontSize: "1.05rem",
                    animation: "fadeIn 0.6s ease-out forwards"
                  }}
                >
                  <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    Privacy Policy
                  </h1>
                  <p style={{ color: "var(--color-ink-soft)", marginBottom: "2rem" }}>
                    Last updated: August 24, 2026
                  </p>

                  <p>
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                  </p>
                  <p>
                    We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
                  </p>

                  <h2 style={{ fontSize: "2rem", marginTop: "2rem", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    Interpretation and Definitions
                  </h2>
                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Interpretation
                  </h3>
                  <p>
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>

                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Definitions
                  </h3>
                  <p>For the purposes of this Privacy Policy:</p>
                  <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem", listStyleType: "disc" }}>
                    <li>
                      <strong>Account</strong> means a unique account created for You to access Our Service or parts of Our Service.
                    </li>
                    <li>
                      <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </li>
                    <li>
                      <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to ContekXtra Technologies (Pvt) Ltd, 535 Mission Street, San Francisco, CA 94105, USA and Level 4, Orion City, Dr Danister de Silva Mawatha, Colombo 09, Sri Lanka.
                    </li>
                    <li>
                      <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.
                    </li>
                    <li>
                      <strong>Country/State</strong> refers to: Sri Lanka.
                    </li>
                    <li>
                      <strong>Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.
                    </li>
                    <li>
                      <strong>Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual. We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.
                    </li>
                    <li>
                      <strong>Service</strong> refers to the Website.
                    </li>
                    <li>
                      <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                    </li>
                    <li>
                      <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </li>
                    <li>
                      <strong>User</strong> means any individual who accesses or uses the Service.
                    </li>
                    <li>
                      <strong>Website</strong> refers to contekxtra, accessible from{" "}
                      <a href="https://contekxtra.com/" rel="external nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>
                        https://contekxtra.com/
                      </a>.
                    </li>
                    <li>
                      <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </li>
                  </ul>

                  <h2 style={{ fontSize: "2rem", marginTop: "2rem", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    Collecting and Using Your Personal Information
                  </h2>
                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Types of Data Collected
                  </h3>
                  
                  <h4 style={{ fontSize: "1.25rem", marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Personal Data</h4>
                  <p>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem", listStyleType: "disc" }}>
                    <li>Email address</li>
                    <li>First name and last name</li>
                  </ul>

                  <h4 style={{ fontSize: "1.25rem", marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Usage Data</h4>
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>
                    Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
                  </p>

                  <h4 style={{ fontSize: "1.25rem", marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Tracking Technologies and Cookies</h4>
                  <p>
                    We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
                  </p>
                  <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem", listStyleType: "disc" }}>
                    <li>
                      <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.
                    </li>
                    <li>
                      <strong>Web Beacons.</strong> Certain sections of Our Service may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                    </li>
                  </ul>
                  <p>
                    Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                  </p>
                  
                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Use of Your Personal Data
                  </h3>
                  <p>The Company may use Personal Data for the following purposes:</p>
                  <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem", listStyleType: "disc" }}>
                    <li><strong>To provide and maintain Our Service</strong>, including to monitor the usage of Our Service.</li>
                    <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                    <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                    <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                    <li><strong>To provide You</strong> with news, special offers, and general information about other goods, services and events which We offer that are similar to those that You have already purchased or inquired about.</li>
                    <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                    <li><strong>For business transfers:</strong> We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.</li>
                    <li><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of Our promotional campaigns, and evaluating and improving Our Service, products, services, marketing and Your experience.</li>
                  </ul>

                  <p>We may share Your Personal Data in the following situations:</p>
                  <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem", listStyleType: "disc" }}>
                    <li><strong>With Service Providers:</strong> We may share Your Personal Data with Service Providers to monitor and analyze the use of Our Service, and to contact You.</li>
                    <li><strong>For business transfers:</strong> We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                    <li><strong>With Affiliates:</strong> We may share Your Personal Data with Our affiliates.</li>
                    <li><strong>With other users:</strong> If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside the Service.</li>
                    <li><strong>With Your consent</strong>: We may disclose Your Personal Data for any other purpose with Your consent.</li>
                  </ul>
                  
                  <h4 style={{ fontSize: "1.25rem", marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Text Messages Privacy Notice</h4>
                  <p>
                    You have the option to receive text (SMS) messages from Us. If You opt in to text messages, We will send You updates, notifications, and other communications as described below.
                  </p>
                  <p>
                    No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. The phone numbers and consent records We collect for texting are never shared with anyone for any purpose, except the Service Providers that technically have to handle them to deliver the texts.
                  </p>
                  <p>
                    Reply STOP to opt-out. Reply HELP for support. Message &amp; data rates may apply. Messaging frequency may vary. Carriers are not liable for delayed or undelivered messages.
                  </p>
                  
                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Retention of Your Personal Data
                  </h3>
                  <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with Our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce Our legal agreements and policies.
                  </p>
                  <p>
                    Usage Data is retained in accordance with the retention periods described above, and may be retained longer only where necessary for security, fraud prevention, or legal compliance.
                  </p>

                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Transfer of Your Personal Data
                  </h3>
                  <p>
                    Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. This means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction.
                  </p>

                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Delete Your Personal Data
                  </h3>
                  <p>
                    You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
                  </p>
                  <p>
                    Our Service may give You the ability to delete certain information about You from within the Service.
                  </p>
                  
                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Disclosure of Your Personal Data
                  </h3>
                  <h4 style={{ fontSize: "1.25rem", marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Business Transactions</h4>
                  <p>
                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                  </p>
                  
                  <h4 style={{ fontSize: "1.25rem", marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Law Enforcement</h4>
                  <p>
                    Under certain circumstances, the Company may disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                  </p>
                  
                  <h4 style={{ fontSize: "1.25rem", marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>Other Legal Requirements</h4>
                  <p>
                    The Company may disclose Your Personal Data in the good-faith belief that such action is necessary to:
                  </p>
                  <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem", listStyleType: "disc" }}>
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                  </ul>
                  
                  <h3 style={{ fontSize: "1.5rem", marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                    Security of Your Personal Data
                  </h3>
                  <p>
                    The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
                  </p>

                  <h2 style={{ fontSize: "2rem", marginTop: "2rem", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    Children's and Minors' Privacy
                  </h2>
                  <p>
                    The Service is not directed to, and We do not knowingly collect Personal Information from, anyone under the age of 16.
                  </p>

                  <h2 style={{ fontSize: "2rem", marginTop: "2rem", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    Links to Other Websites
                  </h2>
                  <p>
                    Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                  </p>

                  <h2 style={{ fontSize: "2rem", marginTop: "2rem", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    Changes to this Privacy Policy
                  </h2>
                  <p>
                    We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                  </p>

                  <h2 style={{ fontSize: "2rem", marginTop: "2rem", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                    Contact Us
                  </h2>
                  <p>If You have any questions about this Privacy Policy, You can contact Us:</p>
                  <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem", listStyleType: "disc" }}>
                    <li>By email: info@contekxtra.com</li>
                    <li>
                      By visiting this page on Our Website:{" "}
                      <a href="https://contekxtra.com" rel="external nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>
                        https://contekxtra.com
                      </a>
                    </li>
                    <li>By phone (USA): +1 415 555 2147</li>
                    <li>By phone (Sri Lanka): +94 11 245 7812</li>
                    <li>By mail (USA Office): 535 Mission Street, San Francisco, CA 94105, USA</li>
                    <li>By mail (Sri Lanka Office): Level 4, Orion City, Dr Danister de Silva Mawatha, Colombo 09, Sri Lanka</li>
                  </ul>
                </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
