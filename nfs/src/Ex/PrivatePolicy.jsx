import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

const PrivatePolicy = () => {
    
    return (
        <>
            {/*--------------------    NavBar   --------------------- */}
            <Navbar />
            {/* -------------------- Main Section ------------------- */}
            <div class="p_p__container">
                <h1 id="ln">Privacy & Policy</h1>
                <br />
                <section>
                    <h4>Information We Collect:</h4>
                    <p>
                        - Personal Information: When you visit our website, we may collect personal information such as your name, email
                        address, and any other information voluntarily provided by you through contact forms or subscriptions.
                    </p>
                    <p>
                        - Usage Information: We gather non-personal information about your interactions with our website, including your IP
                        address, browser type, and pages visited. This information helps us analyze trends and enhance user experience.
                    </p>
                </section>
                <section>
                    <h4>Use of Information:</h4>
                    <p>
                        - Personalization: We may use your personal information to personalize your experience on our website and provide
                        tailored content.
                    </p>
                    <p>
                        - Communication: With your consent, we may use your contact information to send you updates, newsletters, or respond
                        to inquiries.
                    </p>
                    <p>
                        - Analytics: Non-personal information collected is used for analytical purposes to improve our website's
                        functionality and performance.
                    </p>
                </section>
                <section>
                    <h4>Data Security:</h4>
                    <p>
                        - We employ industry-standard security measures to protect your personal information from unauthorized access,
                        alteration, or disclosure.
                    </p>
                    <p>
                        - However, please note that no method of transmission over the internet or electronic storage is completely secure,
                        and we cannot guarantee absolute security.
                    </p>
                </section>
                <section>
                    <h4>Third-Party Links:</h4>
                    <p>
                        - Our website may contain links to third-party websites for additional information or resources. We are not
                        responsible for the privacy practices or content of these third-party sites.
                    </p>
                </section>
                <section>
                    <h4>Cookie Policy:</h4>
                    <p>
                        - We use cookies to enhance your browsing experience and track website usage. You may choose to disable cookies
                        through your browser settings, although this may affect certain functionalities of our website.
                    </p>
                </section>
                <section>
                    <h4>Children's Privacy:</h4>
                    <p>
                        - Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information
                        from children. If you believe that we have inadvertently collected information from a child, please contact us to
                        promptly remove the data.
                    </p>
                </section>
                <section>
                    <h4>Updates to Privacy Policy:</h4>
                    <p>
                        - We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this
                        page, and your continued use of our website constitutes acceptance of the updated policy.
                    </p>
                </section>
                <section>
                    <p id="ln">
                        <strong>
                            Ridham Patel
                            <br />
                            Founder & Owner, NFS Car Review and Information System
                        </strong>
                        <br />
                        <Footer />
                    </p>
                </section>
            </div>
        </>
    );
};

export default PrivatePolicy;
